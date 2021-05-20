import { APIScope } from '@/api/internal';
import defaultRenderers from './defaultRenderers.json';
import ArcGIS from 'terraformer-arcgis-parser';
// @ts-ignore
import { csv2geojson, dsv } from 'csv2geojson';
// @ts-ignore
import shp from 'shpjs';

import {
    EsriColour,
    EsriSimpleRenderer,
    EsriSpatialReference
} from '@/geo/esri';

/**
 * Maps GeoJSON geometry types to a set of default renders defined in GlobalStorage.DefaultRenders
 * @property featureTypeToRenderer {Object}
 * @private
 */
const featureTypeToRenderer = {
    Point: 'circlePoint',
    MultiPoint: 'circlePoint',
    LineString: 'solidLine',
    MultiLineString: 'solidLine',
    Polygon: 'outlinedPoly',
    MultiPolygon: 'outlinedPoly'
};

/**
 * Performs in place assignment of integer ids for a GeoJSON FeatureCollection.
 * If at least one feature has an existing id outside the geoJson properties section,
 * the original id value is copied in a newly created property ID_FILE of the properties object
 * and the existing id value is replaced by an autogenerated number.
 * Features without existing id from that same dataset will get a new properties ID_FILE
 * with an empty string as value.
 **************************************
 * If at least one feature has an existing OBJECTID inside the geoJson properties section,
 * the original OBJECTID value is copied in a newly created property OBJECTID_FILE of the properties object
 * and the existing OBJECTID value is replaced by an autogenerated number.
 * Features without existing OBJECTID from that same dataset will get a new properties OBJECTID_FILE
 * with an empty string as value.
 */
function assignIds(geoJson: any): void {
    if (geoJson.type !== 'FeatureCollection') {
        throw new Error('GeoJSON is not in FeatureCollection format');
    }

    let emptyID: boolean = true;
    let emptyObjID: boolean = true;

    // create an 'id' property for every feature, doing autonumber.
    // 0 is not a valid object id
    geoJson.features.forEach((val: any, idx: number) => {
        Object.assign(val.properties, { ID_FILE: '', OBJECTID_FILE: '' });

        // to avoid double ID columns outside properties
        if ('id' in val && typeof val.id !== 'undefined') {
            val.properties.ID_FILE = val.id;
            emptyID = false;
        }

        // to avoid double OBJECTID columns. Useful for both geojson and CSV file.
        if ('OBJECTID' in val.properties) {
            val.properties.OBJECTID_FILE = val.properties.OBJECTID;
            delete val.properties.OBJECTID;
            emptyObjID = false;
        }

        val.id = idx + 1;
    });

    // remove ID_FILE if all empty
    if (emptyID) {
        geoJson.features.forEach(function(val: any) {
            delete val.properties.ID_FILE;
        });
    }

    // remove OBJECTID_FILE if all empty
    if (emptyObjID) {
        geoJson.features.forEach(function(val: any) {
            delete val.properties.OBJECTID_FILE;
        });
    }
}

/**
 * Rename any fields with invalid names. Both parameters are modified in place.
 *
 * @function cleanUpFields
 * @param {Object} geoJson           layer data in geoJson format
 * @param {Object} layerDefinition   layer definition of feature layer not yet created
 */
function cleanUpFields(
    geoJson: any,
    configPackage: __esri.FeatureLayerProperties
) {
    const badField = (name: string) => {
        // basic for now. check for spaces.
        return name.indexOf(' ') > -1;
    };

    configPackage.fields?.forEach(f => {
        if (f.name && badField(f.name)) {
            const oldField: string = f.name;
            let newField: string;
            let underscore: string = '_';
            let badNewName;

            // determine a new field name that is not bad and is unique, then update the field definition
            do {
                newField = oldField.replace(/ /g, underscore);
                badNewName = configPackage.fields?.find(
                    f2 => f2.name === newField
                );
                if (badNewName) {
                    // new field already exists. enhance it
                    underscore += '_';
                }
            } while (badNewName);

            f.alias = oldField;
            f.name = newField;

            // update the geoJson to reflect the field name change.
            geoJson.features.forEach((gf: any) => {
                gf.properties[newField] = gf.properties[oldField];
                delete gf.properties[oldField];
            });
        }
    });
}

export class FileUtils extends APIScope {
    /**
     * Extracts fields from the first feature in the feature collection, does no
     * guesswork on property types and calls everything a string.
     */
    extractGeoJsonFields(geoJson: any) {
        // TODO attempt to strong type input parameter.  GeoJSON.FeatureCollection wants us to pass in other types so avoiding it for now.
        if (geoJson.features.length < 1) {
            throw new Error(
                'GeoJSON field extraction requires at least one feature'
            );
        }

        // TODO investigate if a value can be of numeric type in GeoJSON schema. if so, try to detect, change type to number
        if (geoJson.features[0].properties) {
            return Object.keys(geoJson.features[0].properties).map(function(
                prop
            ) {
                return { name: prop, type: 'string' };
            });
        } else {
            return [];
        }
    }

    /**
     * Extracts fields from csv file does no guesswork on property types and calls everything a string.
     */
    extractCsvFields(csvData: string, delimiter: string = ',') {
        const fields: Array<string> = dsv
            .dsvFormat(delimiter)
            .parseRows(csvData)[0];
        return fields.map(field => {
            return { name: field, type: 'string' };
        });
    }

    // TODO general type cleanup. just trying to make it work for now
    async geoJsonToEsriJson(
        geoJson: any,
        options: any
    ): Promise<__esri.FeatureLayerProperties> {
        let targetSR: any;
        let srcProj = 'EPSG:4326'; // 4326 is the default for GeoJSON with no projection defined
        let layerId: string;
        const configPackage: __esri.FeatureLayerProperties = {
            objectIdField: 'OBJECTID',
            fields: [
                {
                    name: 'OBJECTID',
                    type: 'oid'
                }
            ]
        };

        // ensure our features have ids
        assignIds(geoJson);

        // @ts-ignore
        const value = featureTypeToRenderer[geoJson.features[0].geometry.type];
        // @ts-ignore
        const defRender: any = defaultRenderers[value];

        // attempt to get spatial reference from geoJson
        if (geoJson.crs && geoJson.crs.type === 'name') {
            srcProj = geoJson.crs.properties.name;
        }

        // pluck treats from options parameter
        if (options) {
            if (options.sourceProjection) {
                srcProj = options.sourceProjection;
            }

            if (options.targetSR) {
                targetSR = options.targetSR;
            } else {
                throw new Error(
                    'geoJsonToEsriJson - missing opts.targetSR arguement'
                );
            }

            if (options.layerId) {
                layerId = options.layerId;
            } else {
                layerId = this.$iApi.geo.utils.shared.generateUUID();
            }

            // due to grousyness of esri typescript, we mangle the colour pre-fromJSON
            if (options.colour) {
                defRender.renderer.symbol.color = new EsriColour(
                    options.colour
                ).toRgba();
            }

            // TODO add support for renderer option, or drop the option
        } else {
            throw new Error('geoJsonToEsriJson - missing opts arguement');
        }

        // TODO this code only allows for simple renderers as default. Need to examine how the custom renderer from the config gets applied.
        //      maybe we should be applying that here. Alternately it will be in layer constructor that is overriding that property
        //      (it might happen after layer load.).  Alternatley it could be in ESRI 4 we can set it upfront on regular feature layers.
        configPackage.renderer = EsriSimpleRenderer.fromJSON(
            defRender.renderer
        );
        configPackage.fields = (configPackage.fields || []).concat(
            this.extractGeoJsonFields(geoJson)
        );

        // clean the fields. in particular, CSV files can be loaded with spaces in
        // the field names
        cleanUpFields(geoJson, configPackage);

        const destProj = this.$iApi.geo.utils.proj.normalizeProj(targetSR);

        // change latitude and longitude fields from esriFieldTypeString -> esriFieldTypeDouble if they exist
        if (options) {
            if (options.latfield) {
                const latField = configPackage.fields.find(
                    field => field.name === options.latfield
                );
                if (latField) {
                    latField.type = 'double';
                }
            }
            if (options.lonfield) {
                const longField = configPackage.fields.find(
                    field => field.name === options.lonfield
                );
                if (longField) {
                    longField.type = 'double';
                }
            }
        }

        // look up projection definitions if they don't already exist and we have enough info

        // note we need to use the SR object, not the normalized string, as checkProj cant handle a raw WKT
        //      and this function won't have a raw EPSG code / proj4 string coming from param targetSR.
        //      if this becomes a problem, we can change checkProj to test if the start of a string is `EPSG`, and if not, assume it's wkt.
        //      nicer solution would be find a wkt regex to validate, but lazy search didnt reveal one.

        // TODO if we want/need, we can put an error handler on the promise to deal with incompatible projections.
        //      e.g. maybe we want to catch it and then build a dummy layer set to error state?
        await this.$iApi.geo.utils.proj.checkProjBomber([srcProj, targetSR]);

        // generate a nicely formatted object that that esri feature layer constructor can accept to make a local layer

        // project data and convert to esri json format
        const fancySR = new EsriSpatialReference(targetSR);

        this.$iApi.geo.utils.proj.projectGeoJson(geoJson, srcProj, destProj);

        // terraformer has no support for non-wkid layers. can also do funny things if source is 102100.
        // use 8888 as placehold then adjust below

        // NOTE typescript lies here. it insists esriJson will have .features property, but it infact is the feature array itself
        //      it also claims the .sr param is not valid, though it's in the documentation and the code.  lies!
        const esriJson = <any>ArcGIS.convert(geoJson, <any>{ sr: 8888 });
        configPackage.geometryType = defRender.geometryType;

        // set proper SR on the geometeries
        esriJson.forEach((gr: any) => {
            gr.geometry.spatialReference = fancySR;
            gr.geometry.type = defRender.geometryType;

            // TEMPORARY hunt any complex datatypes and replace with a string
            // TODO figure out how to actually handle arrays or objects as attribute values
            Object.keys(gr.attributes).forEach(attName => {
                if (
                    Array.isArray(gr.attributes[attName]) ||
                    typeof gr.attributes[attName] === 'object'
                ) {
                    gr.attributes[attName] = '[Complex Value Removed]';
                }
            });
        });

        configPackage.source = <any>esriJson; // TODO see if this needs to become esriJson.features
        configPackage.spatialReference = fancySR;
        configPackage.id = layerId;

        return configPackage;
    }

    // TODO make strong types for option parameter
    // converts csv file in string format to geojson object
    // options
    //     - latfield: a string identifying the field containing latitude values ('Lat' by default)
    //     - lonfield: a string identifying the field containing longitude values ('Long' by default)
    //     - delimiter: a string defining the delimiter character of the file (',' by default)
    async csvToGeoJson(csvData: string, opts: any): Promise<any> {
        const csvOpts = {
            // default values
            latfield: 'Lat',
            lonfield: 'Long',
            delimiter: ','
        };

        // user options if
        if (opts) {
            if (opts.latfield) {
                csvOpts.latfield = opts.latfield;
            }

            if (opts.lonfield) {
                csvOpts.lonfield = opts.lonfield;
            }

            if (opts.delimiter) {
                csvOpts.delimiter = opts.delimiter;
            }
        }

        return new Promise((resolve, reject) => {
            csv2geojson(csvData, csvOpts, (err: any, data: any) => {
                if (err) {
                    console.error('csv conversion error');
                    console.error(err);
                    reject(err);
                } else {
                    // data is geojson object

                    // csv2geojson will not include the lat and long in the feature
                    data.features.map((feature: any) => {
                        // add new property Long and Lat before layer is generated
                        feature.properties[csvOpts.lonfield] =
                            feature.geometry.coordinates[0];
                        feature.properties[csvOpts.latfield] =
                            feature.geometry.coordinates[1];
                    });

                    resolve(data);
                }
            });
        });
    }

    /**
     * Converts Shapefile data to geojson.
     * @param {ArrayBuffer} shapeData an ArrayBuffer of the Shapefile in zip format
     * @returns {Promise} a promise resolving with geojson
     */
    async shapefileToGeoJson(shapeData: ArrayBuffer): Promise<any> {
        return shp(shapeData);
    }
}
