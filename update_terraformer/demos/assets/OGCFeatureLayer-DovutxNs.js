import{q as t,u as o,C as O,f as L,ay as w,D as g,f7 as N,s as R,f3 as b,a$ as z,aw as H,cE as x,b6 as J}from"./main-C4ZPumQG.js";import"./UniqueValueRenderer-GCrSZBIa.js";import{m as U,u as V}from"./jsonUtils-CEKaOymD.js";import{S as Z}from"./MultiOriginJSONSupport-CfimntwA.js";import{f as k}from"./Layer-kJz1RbGs.js";import{R as W,x as F,C as I,P as K,O as X,N as Y,q as ee,v as te,k as re}from"./ogcFeatureUtils-BDtq0v3V.js";import{s as oe}from"./capabilities-Y9lFlGVh.js";import{d as ie}from"./FeatureSet-DbZxhfoY.js";import{i as se}from"./APIKeyMixin-B3kyxw-L.js";import{l as pe}from"./BlendLayer-CLlgDHiw.js";import{e as ne}from"./CustomParametersMixin-UFnwW6Tl.js";import{c as ae}from"./FeatureEffectLayer-CrGXhAa3.js";import{c as le}from"./FeatureReductionLayer-1SVOC5Iz.js";import{b as ue}from"./OperationalLayer-CLG7nePC.js";import{p as de}from"./OrderedLayer-CiDk86p6.js";import{j as ce}from"./PortalLayer-CheKnZ-m.js";import{f as me}from"./RefreshableLayer-IYPDMFiM.js";import{t as ye}from"./ScaleRangeLayer-BkSMimzn.js";import{l as fe}from"./TemporalLayer-BkgJjWIw.js";import{c as he,p as ge,d as ve,l as Se,s as Ce,y as we}from"./commonProperties-Bsvq8RFW.js";import{n as Re}from"./FeatureType-D1-KWoM4.js";import{y as be}from"./Field-D4mxNajT.js";import{s as xe}from"./fieldProperties-D-Qrph38.js";import{C as Fe,n as Ie}from"./labelingInfo-uVW9LP8y.js";import{b as $}from"./Query-BfP97GzT.js";import{p as $e}from"./popupUtils-73Vr6LI6.js";import"./preload-helper-ExcqyqRp.js";import"./RendererLegendOptions-DpxhQPdH.js";import"./diffUtils-Dt_n932e.js";import"./colorRamps-G-SpqqoO.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-tNQnoC_j.js";import"./compilerUtils-C-A03NQB.js";import"./lengthUtils-BttfIwGw.js";import"./styleUtils-BoQreDAM.js";import"./LRUCache-B-ly6QT3.js";import"./Version-C4B4w3hN.js";import"./FieldsIndex-jN3YBTwx.js";import"./UnknownTimeZone-Bz_c8bba.js";import"./OverrideHelper-VvCf7RiW.js";import"./colorUtils-Dume6Tlg.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-CLSylvtw.js";import"./heatmapUtils-UHUpWU7e.js";import"./TimeExtent-gaoR-i0M.js";import"./featureConversionUtils-LdW16brD.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./geojson-BvNV3aQf.js";import"./date-Dw3OHnFv.js";import"./clientSideDefaults-Dh-LjPkO.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./sourceUtils-sxy4JfSj.js";import"./fieldType-BGU0IjZn.js";import"./jsonUtils-D0Ph3-uP.js";import"./parser-C1xXAJ6X.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CLl-Rp5L.js";import"./FeatureEffect-BeeSbeu3.js";import"./FeatureFilter-9KDJuAuT.js";import"./FeatureReductionSelection-BuIlH-yU.js";import"./featureLayerUtils-DlY90VdB.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-BjxHrit8.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-Cy8Xgaae.js";import"./PortalItem-DWC4iI6A.js";import"./portalItemUtils-Cw_vHyA7.js";import"./projection-8-uxS4CM.js";import"./projectBuffer-C2AmViVa.js";import"./TimeInfo-CsQvNa60.js";import"./ElevationInfo-m_Ju7IO-.js";import"./FeatureTemplate-NrIeuddv.js";import"./labelUtils-Bv0chLIv.js";let d=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:i,spatialReference:s,supportedCrs:p},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:i,maxRecordCount:n,queryParameters:{apiKey:l,customParameters:a},spatialReference:s,supportedCrs:p}}queryExtent(e,i={}){return null}queryFeatureCount(e,i={}){return null}queryFeatures(e,i={}){return this.queryFeaturesJSON(e,i).then(s=>ie.fromJSON(s))}queryFeaturesJSON(e,i={}){const s=this.getSource();return this.load(i).then(()=>W(s,e,i))}queryObjectIds(e,i={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,i){const s=new RegExp(`^${w(i)}$`,"i");return e.conformsTo.some(p=>s.test(p))??!1}_getCapabilities(e,i){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:i,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:oe,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const i=e?.components?.parameters;return i?.limit?.schema?.maximum??i?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const i=e.storageCrs??F,s=I(i);return s==null?g.WGS84:new g({wkid:s})}_getSupportedSpatialReferences(e,i){const s="#/crs",p=e.crs??[F],l=p.includes(s)?p.filter(n=>n!==s).concat(i.crs??[]):p,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(n=>!a.test(n))}async _loadOGCServices(e,i){const s=i!=null?i.signal:null,{apiKey:p,collectionId:l,customParameters:a,fields:n,geometryType:D,hasZ:T,objectIdField:j,timeInfo:P,url:q}=e,E={fields:n?.map(u=>u.toJSON()),geometryType:N.toJSON(D),hasZ:T??!1,objectIdField:j,timeInfo:P?.toJSON()},c={apiKey:p,customParameters:a,signal:s},y=await K(q,c),[v,S]=await Promise.all([X(y,c),Y(y,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const m=S.collections.find(({id:u})=>u===l);if(!m)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await ee(y,c):null,C=await te(m,E,c),B=this._getMaxRecordCount(_),A=this._getCapabilities(C.hasZ,B),Q=this._getStorageSpatialReference(m).toJSON(),G=this._getSupportedSpatialReferences(m,S),M=new RegExp(`^${w(re)}`,"i"),f={};for(const u of G){const h=I(u);h!=null&&(f[h]||(f[h]=u.replace(M,"")))}this.featureDefinition={capabilities:A,collection:m,layerDefinition:C,spatialReference:Q,supportedCrs:f}}};t([o()],d.prototype,"featureDefinition",void 0),t([o({constructOnly:!0})],d.prototype,"layer",void 0),t([o()],d.prototype,"type",void 0),d=t([O("esri.layers.graphics.sources.OGCFeatureSource")],d);const Oe=xe();let r=class extends se(ne(le(ae(pe(de(fe(ye(ue(ce(me(Z(k)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}on(e,i){return super.on(e,i)}createPopupTemplate(e){return $e(this,e)}createQuery(){return new $}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,i){let s,p=!1;const l=i?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(p=this.types.some(n=>n.id==a&&(s=n.domains?.[e],s?.type==="inherited"&&(s=this._getLayerDomain(e)),!0))),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,i){return this.load().then(()=>this.source.queryFeatures($.from(e)||this.createQuery(),i)).then(s=>(s?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),s))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),b(this.renderer,this.fieldsIndex),z(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const i of this.fields)if(i.name===e&&i.domain)return i.domain;return null}};t([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],r.prototype,"capabilities",void 0),t([o({type:String,json:{write:!0}})],r.prototype,"collectionId",void 0),t([o({type:String})],r.prototype,"copyright",void 0),t([o({readOnly:!0})],r.prototype,"defaultPopupTemplate",null),t([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],r.prototype,"description",void 0),t([o({type:String})],r.prototype,"displayField",void 0),t([o({type:Number})],r.prototype,"effectiveMaxRecordCount",null),t([o(he)],r.prototype,"elevationInfo",void 0),t([o({type:[be],json:{origins:{service:{name:"layerDefinition.fields"}}}})],r.prototype,"fields",void 0),t([o(Oe.fieldsIndex)],r.prototype,"fieldsIndex",void 0),t([o({readOnly:!0,type:H,json:{origins:{service:{name:"layerDefinition.extent"}}}})],r.prototype,"fullExtent",void 0),t([o({type:x.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:x.read}}}}})],r.prototype,"geometryType",void 0),t([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],r.prototype,"hasZ",void 0),t([o({type:Boolean,readOnly:!0})],r.prototype,"isTable",null),t([o({type:[Fe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],r.prototype,"labelingInfo",void 0),t([o(ge)],r.prototype,"labelsVisible",void 0),t([o(ve)],r.prototype,"legendEnabled",void 0),t([o({type:Number})],r.prototype,"maxRecordCount",void 0),t([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],r.prototype,"objectIdField",void 0),t([o({type:["OGCFeatureLayer"]})],r.prototype,"operationalLayerType",void 0),t([o(Se)],r.prototype,"popupEnabled",void 0),t([o({type:J,json:{name:"popupInfo",write:!0}})],r.prototype,"popupTemplate",void 0),t([o({types:U,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:V,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],r.prototype,"renderer",null),t([o(Ce)],r.prototype,"screenSizePerspectiveEnabled",void 0),t([o({readOnly:!0})],r.prototype,"source",void 0),t([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],r.prototype,"spatialReference",void 0),t([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],r.prototype,"title",void 0),t([o({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),t([o({type:String,readOnly:!0})],r.prototype,"typeIdField",void 0),t([o({type:[Re]})],r.prototype,"types",void 0),t([o(we)],r.prototype,"url",void 0),r=t([O("esri.layers.OGCFeatureLayer")],r);const Yt=r;export{Yt as default};
