const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-BvUQtJEp.js","./main-BvP2mMJi.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./uuid-Cl5lrJ4c.js","./normalizeUtils-CZuR4U2F.js","./normalizeUtilsCommon-DV3peIvO.js","./utils-aU2bE2Ii.js","./utils-C4fiXq06.js","./EditBusLayer-C4d1nRYZ.js","./infoFor3D-_5f2f6Um.js"])))=>i.map(i=>d[i]);
import{_ as $}from"./preload-helper-ExcqyqRp.js";import{q as r,u as o,C as F,f as w,dD as J,aw as O,s as y,bF as j,b1 as N,cE as E,n as f,D as I,J as R,f3 as g,a$ as q,I as v,bq as T,b6 as P}from"./main-BvP2mMJi.js";import"./UniqueValueRenderer-7pnz3M_s.js";import{m as k,u as D}from"./jsonUtils-BuWllb-n.js";import{S as C}from"./MultiOriginJSONSupport-j8bJF5uG.js";import{f as G}from"./Layer-7Fzyz5PT.js";import{p as Z}from"./workers-Cm5C_BYW.js";import{y as Q}from"./clientSideDefaults-BnrrH2jJ.js";import{d as z}from"./FeatureSet-B3dvUSz7.js";import{l as L}from"./BlendLayer-CU3rnIAg.js";import{e as V}from"./CustomParametersMixin-Tu5tqceR.js";import{c as A}from"./FeatureEffectLayer-D4GIJQ2e.js";import{c as U}from"./FeatureReductionLayer-B2fkMa9V.js";import{b as W}from"./OperationalLayer-Bz5FPZnV.js";import{p as B}from"./OrderedLayer-DGF_pJuT.js";import{j as M}from"./PortalLayer-BRQkB3s-.js";import{f as H}from"./RefreshableLayer-CAH2eF5W.js";import{t as K}from"./ScaleRangeLayer-91tnktz1.js";import{l as X}from"./TemporalLayer-EEpz2ked.js";import{T as Y,c as ee,u as te,p as re,d as oe,f as ie,l as se,s as ne,y as ae}from"./commonProperties-C-URc8Zf.js";import{p as le}from"./FeatureTemplate-D8ZhiqQK.js";import{y as pe}from"./Field-Es9rqDok.js";import{s as ue}from"./fieldProperties-DCVcv4RT.js";import{C as de,n as me}from"./labelingInfo-DLID1V1L.js";import{b as d}from"./Query-DWs7GZ6H.js";import{p as he}from"./popupUtils-DXfCcnHN.js";import"./RendererLegendOptions-blMxk9_n.js";import"./diffUtils-nS7AH3FC.js";import"./colorRamps-CVryl1jt.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-CvVSr8p2.js";import"./compilerUtils-DxE-Nek9.js";import"./lengthUtils-DgGrtXXQ.js";import"./styleUtils-CVHCCGhw.js";import"./LRUCache-BKf-51Yq.js";import"./Version-6jGLrZbF.js";import"./FieldsIndex-CSxfwv8F.js";import"./UnknownTimeZone-CQpr54yV.js";import"./OverrideHelper-CD6SbuBa.js";import"./colorUtils-C89tEYeu.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-BsXHYnBt.js";import"./heatmapUtils-CktYA9pX.js";import"./TimeExtent-BPaAkukn.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./jsonUtils-D1JTjzpj.js";import"./parser-DikVt0Fk.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CXjyCzoa.js";import"./FeatureEffect-BGT5lIKe.js";import"./FeatureFilter-Bm9JbIi6.js";import"./fieldType-CEOeHy7Y.js";import"./FeatureReductionSelection-wiMUfwOb.js";import"./featureLayerUtils-D8sFOxEw.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-CKZZLjqZ.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-Cg1MQJQq.js";import"./PortalItem-BydbbX79.js";import"./portalItemUtils-DzhXxNby.js";import"./projection-96b3oHY5.js";import"./projectBuffer-BwKv3h14.js";import"./TimeInfo-BoWA3VjI.js";import"./ElevationInfo-DlyXgK09.js";import"./labelUtils-BoPSLnTj.js";let l=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=J(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>z.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:O.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new y("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],m=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)m.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:m,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:h})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(h)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new y("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await Z("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:s,hasZ:n,geometryType:m,objectIdField:a,url:p,timeInfo:h,customParameters:S}=this.layer,x=this.layer.originOf("spatialReference")==="defaults",_={url:p,customParameters:S,fields:t&&t.map(c=>c.toJSON()),geometryType:E.toJSON(m),hasZ:n,objectIdField:a,timeInfo:h?h.toJSON():null,spatialReference:x?null:s&&s.toJSON()},u=await this._connection.invoke("load",_,{signal:e});for(const c of u.warnings)f.getLogger(this.layer).warn("#load()",`${c.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:c});u.featureErrors.length&&f.getLogger(this.layer).warn("#load()",`Encountered ${u.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:u.featureErrors}),this.sourceJSON=u.layerDefinition,this.capabilities=Q(this.sourceJSON.hasZ,!0)}};r([o()],l.prototype,"capabilities",void 0),r([o()],l.prototype,"type",void 0),r([o({constructOnly:!0})],l.prototype,"layer",void 0),r([o()],l.prototype,"sourceJSON",void 0),l=r([F("esri.layers.graphics.sources.GeoJSONSource")],l);const b=ue();let i=class extends B(V(U(A(L(X(K(H(W(M(C(G))))))))))){constructor(e){super(e),this.attributeTableTemplate=null,this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new l({layer:this}),this.spatialReference=I.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(R).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),q(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await $(()=>import("./editingSupport-BvUQtJEp.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new d,t=this.capabilities?.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(d.from(e)||this.createQuery(),t)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(d.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(d.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(d.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([o(Y)],i.prototype,"attributeTableTemplate",void 0),r([o({readOnly:!0,json:{read:!1,write:!1}})],i.prototype,"capabilities",null),r([o({type:String})],i.prototype,"copyright",void 0),r([o({readOnly:!0})],i.prototype,"createQueryVersion",null),r([o(T("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),r([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),r([o({type:String})],i.prototype,"displayField",void 0),r([o({type:Boolean})],i.prototype,"editingEnabled",void 0),r([o(ee)],i.prototype,"elevationInfo",void 0),r([o({type:[pe],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),r([o(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([o({type:O,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),r([o({type:["point","polygon","polyline","multipoint"],json:{read:{reader:E.read}}})],i.prototype,"geometryType",void 0),r([o({type:Boolean})],i.prototype,"hasZ",void 0),r([o(te)],i.prototype,"id",void 0),r([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([o(re)],i.prototype,"labelsVisible",void 0),r([o({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:me},write:!0}})],i.prototype,"labelingInfo",void 0),r([o(oe)],i.prototype,"legendEnabled",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([o(ie)],i.prototype,"opacity",void 0),r([o({type:["GeoJSON"]})],i.prototype,"operationalLayerType",void 0),r([o(b.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"parsedUrl",null),r([o(se)],i.prototype,"popupEnabled",void 0),r([o({type:P,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({types:k,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:D}}}})],i.prototype,"renderer",null),r([o(ne)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],i.prototype,"source",void 0),r([o({type:I})],i.prototype,"spatialReference",void 0),r([o({type:[le]})],i.prototype,"templates",void 0),r([o()],i.prototype,"title",void 0),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),r([o(ae)],i.prototype,"url",null),i=r([F("esri.layers.GeoJSONLayer")],i);const jt=i;export{jt as default};
