import * as defs from './definitions';
import axios from 'axios';

const types: any = {
    en: {
        FSA: 'Forward Sortation Area',
        NTS: 'National Topographic System',
        COORD: 'Latitude/Longitude',
        SCALE: 'Scale'
    },
    fr: {
        FSA: "Région De Tri D'Acheminement",
        NTS: 'Système National De Référence Cartographique',
        COORD: 'Latitude/Longitude',
        SCALE: 'Échelle'
    }
};

class Types {
    allTypes: defs.GenericObjectType = {};
    validTypes: defs.GenericObjectType = {};
    filterComplete = false;

    constructor(language: string, url: string) {
        const fetchTypes = axios.get(url).then((res: any) => {
            // Remove the code from the type name.
            res.data.definitions.forEach((type: any) => {
                types[language][type.code] = type.term.split(
                    `${type.code}-`
                )[1];
            });

            Object.keys(types[language]).forEach(typeKey => {
                this.allTypes[typeKey] = (<any>types[language])[typeKey];
                this.validTypes[typeKey] = (<any>types[language])[typeKey];
            });
        });
    }

    // remove any excluded types indicated by config
    filterValidTypes(exclude?: string | string[]): defs.GenericObjectType {
        if (this.filterComplete) {
            return this.validTypes;
        }
        exclude = typeof exclude === 'string' ? [exclude] : exclude;
        if (exclude && exclude.length > 0) {
            for (const key of exclude) {
                delete this.validTypes[key];
            }
        }
        this.filterComplete = true;
        return this.validTypes;
    }
}

export default function (language: string, url: string): defs.Types {
    return new Types(language, url);
}