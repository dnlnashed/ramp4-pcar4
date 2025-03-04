import{q as o,u as a,C,di as B,df as G,dh as v,dx as F,D as b,V as O,h as w,bZ as T,dy as N,dz as I,dA as M,b3 as z,s as W,a_ as k,bj as A,B as L,z as d,v as V,aw as q,dB as D}from"./main-C4ZPumQG.js";import{S as K}from"./MultiOriginJSONSupport-CfimntwA.js";import{V as h,J as H,_ as U,W as X,K as Z}from"./projection-8-uxS4CM.js";import{R as Q}from"./normalizeUtils-BMfhrx7f.js";import Y from"./FeatureLayer-CcEnnlKL.js";import ee from"./GraphicsLayer-C9H6KIgV.js";import{f as te}from"./Layer-kJz1RbGs.js";import{n as re}from"./objectIdUtils-BmFjqQA3.js";import{l as oe}from"./BlendLayer-CLlgDHiw.js";import{b as ie}from"./OperationalLayer-CLG7nePC.js";import{j as le}from"./PortalLayer-CheKnZ-m.js";import{t as ae}from"./ScaleRangeLayer-BkSMimzn.js";import{y as R}from"./Field-D4mxNajT.js";import"./preload-helper-ExcqyqRp.js";import"./projectBuffer-C2AmViVa.js";import"./normalizeUtilsCommon-B9uFJkC2.js";import"./utils-DHaZre0y.js";import"./utils-BznvvgVb.js";import"./UniqueValueRenderer-GCrSZBIa.js";import"./RendererLegendOptions-DpxhQPdH.js";import"./diffUtils-Dt_n932e.js";import"./colorRamps-G-SpqqoO.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-tNQnoC_j.js";import"./compilerUtils-C-A03NQB.js";import"./lengthUtils-BttfIwGw.js";import"./styleUtils-BoQreDAM.js";import"./jsonUtils-CEKaOymD.js";import"./LRUCache-B-ly6QT3.js";import"./Version-C4B4w3hN.js";import"./FieldsIndex-jN3YBTwx.js";import"./UnknownTimeZone-Bz_c8bba.js";import"./OverrideHelper-VvCf7RiW.js";import"./colorUtils-Dume6Tlg.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-CLSylvtw.js";import"./heatmapUtils-UHUpWU7e.js";import"./commonProperties-Bsvq8RFW.js";import"./ElevationInfo-m_Ju7IO-.js";import"./FeatureLayerBase-Wq9wVnUQ.js";import"./HeightModelInfo-DKrExp5d.js";import"./arcgisLayerUrl-BTLOSXmm.js";import"./featureLayerUtils-DlY90VdB.js";import"./uuid-Cl5lrJ4c.js";import"./Query-BfP97GzT.js";import"./TimeExtent-gaoR-i0M.js";import"./RelationshipQuery-BjxHrit8.js";import"./LayerFloorInfo-SxFgB2a4.js";import"./Relationship-DzJqS8IK.js";import"./serviceCapabilitiesUtils-D5Q9ZcRy.js";import"./workers-_q2D6x6j.js";import"./editsZScale-Yfjfd56d.js";import"./queryZScale-C2we2y40.js";import"./FeatureSet-DbZxhfoY.js";import"./APIKeyMixin-B3kyxw-L.js";import"./ArcGISService-BF9A-5t6.js";import"./CustomParametersMixin-UFnwW6Tl.js";import"./EditBusLayer-BeNdVGtE.js";import"./FeatureEffectLayer-CrGXhAa3.js";import"./FeatureEffect-BeeSbeu3.js";import"./jsonUtils-D0Ph3-uP.js";import"./parser-C1xXAJ6X.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CLl-Rp5L.js";import"./FeatureFilter-9KDJuAuT.js";import"./fieldType-BGU0IjZn.js";import"./FeatureReductionLayer-1SVOC5Iz.js";import"./FeatureReductionSelection-BuIlH-yU.js";import"./labelingInfo-uVW9LP8y.js";import"./labelUtils-Bv0chLIv.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-CiDk86p6.js";import"./OrderByInfo-Cy8Xgaae.js";import"./RefreshableLayer-IYPDMFiM.js";import"./TemporalLayer-BkgJjWIw.js";import"./TimeInfo-CsQvNa60.js";import"./FeatureTemplate-NrIeuddv.js";import"./FeatureType-D1-KWoM4.js";import"./fieldProperties-D-Qrph38.js";import"./versionUtils-t1JkfAjd.js";import"./styleUtils-7pFdc-_2.js";import"./popupUtils-73Vr6LI6.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./GraphicsCollection-DEaTSDfl.js";import"./PortalItem-DWC4iI6A.js";import"./portalItemUtils-Cw_vHyA7.js";function g(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!E(e))}function E({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return J.find(i=>r===i.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===i.identifyingSymbol.type)}function $(){return new q({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new R({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new R({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let m=class extends ee{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){const t=this.layer?.spatialReference,e=this.fullBounds;return t?e==null?h($(),t).geometry:M(e,t):null}get fullBounds(){const t=this.layer?.spatialReference;if(!t)return null;const e=T();return this.graphics.forEach(r=>{const i=r.geometry!=null?h(r.geometry,t).geometry:null;i!=null&&N(e,i.type==="point"?i:i.extent,e)}),I(e,D)?null:e}get sublayers(){return this.graphics}};o([a({readOnly:!0})],m.prototype,"fullExtent",null),o([a({readOnly:!0})],m.prototype,"fullBounds",null),o([a({readOnly:!0})],m.prototype,"sublayers",null),o([a()],m.prototype,"layer",void 0),o([a()],m.prototype,"layerId",void 0),o([a({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=o([C("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const J=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new B().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new G().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new v().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new v().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let l=class extends oe(ae(ie(le(K(te))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=b.WGS84,this.sublayers=new O(J.map(e=>new m({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!g(e)&&r?.origin!=="portal-item"}}}readFeatureCollections(t,e,r){if(!g(e))return null;const i=e.layers.map(p=>{const n=new Y;return n.read(p,r),n});return new O({items:i})}readLegacyfeatureCollectionJSON(t,e){return g(e)?w(e.featureCollection):null}get fullExtent(){const t=this.spatialReference,e=T();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:r})=>r!=null?N(e,r,e):e,e):this.featureCollectionJSON?.layers.some(r=>r.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(r=>{const i=h(r.layerDefinition.extent,t).geometry;i!=null&&N(e,i,e)}),I(e,D)?h($(),t).geometry:M(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?b.fromJSON(e.layers[0].layerDefinition.spatialReference):b.WGS84}readSublayers(t,e,r){if(g(e))return null;const i=[];let p=e.layers.reduce((n,s)=>Math.max(n,s.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:s,featureSet:y}=n,f=s.id??p++,u=E(n);if(u!=null){const c=new m({id:u.id,title:s.name,layerId:f,layer:this,graphics:y.features.map(({geometry:S,symbol:_,attributes:j,popupInfo:P})=>z.fromJSON({attributes:j,geometry:S,symbol:_,popupTemplate:P}))});i.push(c)}}return new O(i)}writeSublayers(t,e,r,i){const{minScale:p,maxScale:n}=this;if(t==null)return;const s=t.some(u=>u.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&i?.messages?.push(new W("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const y=[];let f=this.spatialReference.toJSON();e:for(const u of t)for(const c of u.graphics)if(c.geometry!=null){f=c.geometry.spatialReference.toJSON();break e}for(const u of J){const c=t.find(S=>u.id===S.id);this._writeMapNoteSublayer(y,c,u,p,n,f,i)}k("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=w(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const i of this.sublayers)for(const p of i.graphics)if(p.geometry!=null){const n=p.geometry;t?A(n.spatialReference,t)||(H(n.spatialReference,t)||U()||await X(),p.geometry=Z(n,t)):t=n.spatialReference,e.push(p)}const r=await Q(e.map(i=>i.geometry));e.forEach((i,p)=>i.geometry=r[p])}_findSublayer(t){return this.sublayers==null?null:this.sublayers?.find(e=>e.id===t)??null}_writeMapNoteSublayer(t,e,r,i,p,n,s){const y=[];if(e!=null){for(const f of e.graphics)this._writeMapNote(y,f,r.geometryType,s);this._normalizeObjectIds(y,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:w(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:p,objectIdField:"OBJECTID",fields:[x.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,i){if(e==null)return;const{geometry:p,symbol:n,popupTemplate:s}=e;if(p==null)return;if(p.type!==r)return void i?.messages?.push(new L("map-notes-layer:invalid-geometry-type",`Geometry "${p.type}" cannot be saved in "${r}" layer`,{graphic:e}));if(n==null)return void i?.messages?.push(new L("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e}));const y={attributes:{...e.attributes},geometry:p.toJSON(),symbol:n.toJSON()};s!=null&&(y.popupInfo=s.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let i=re(r,t)+1;const p=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:s}=n;(s[r]==null||p.has(s[r]))&&(s[r]=i++),p.add(s[r])}}};o([a({readOnly:!0})],l.prototype,"capabilities",void 0),o([d(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),o([a({readOnly:!0})],l.prototype,"featureCollections",void 0),o([d(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),o([d(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),o([a({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),o([a({readOnly:!0})],l.prototype,"fullExtent",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),o([a({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),o([a({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),o([d(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),o([a({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),o([d(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),o([a({readOnly:!0})],l.prototype,"multipointLayer",null),o([a({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),o([a({readOnly:!0})],l.prototype,"pointLayer",null),o([a({readOnly:!0})],l.prototype,"polygonLayer",null),o([a({readOnly:!0})],l.prototype,"polylineLayer",null),o([a({type:b})],l.prototype,"spatialReference",void 0),o([d(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),o([d("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),o([V("web-map","sublayers")],l.prototype,"writeSublayers",null),o([a({readOnly:!0})],l.prototype,"textLayer",null),o([a()],l.prototype,"title",void 0),o([a({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=o([C("esri.layers.MapNotesLayer")],l);const Vt=l;export{Vt as default};
