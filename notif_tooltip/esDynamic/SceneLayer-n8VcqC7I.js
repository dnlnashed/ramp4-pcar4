import{k as i,o as s,A as v,v as A,aZ as N,d9 as ee,V as P,bC as R,z as C,u as w,aG as te,az as re,p as ie,U as G,f as se,s as d,Z as ae,a_ as oe,C as ne,f0 as V,n as m,G as le,hL as pe,b1 as de,bv as ue,bf as Q,bm as D,E as ce,f2 as ye,hs as he,b4 as fe}from"./main-C2GI9Q3q.js";import"./UniqueValueRenderer-COQDux02.js";import{u as me}from"./jsonUtils-DiNEbbZp.js";import{S as ge}from"./MultiOriginJSONSupport-BdbDZ2Az.js";import{$ as ve}from"./Mesh-BEkkDKvG.js";import{f as we}from"./Layer-CO9WOggW.js";import{i as be,m as Ie,t as Le}from"./meshSpatialReferenceScaleUtils-DOFjSASH.js";import{i as Fe}from"./APIKeyMixin-DnoPEalu.js";import{l as Se}from"./ArcGISService-Bv493FXz.js";import{e as Te}from"./CustomParametersMixin-FA7MPUJc.js";import{F as _e}from"./EditBusLayer-BJ6u1S4R.js";import{b as Oe}from"./OperationalLayer-C8CR3iJU.js";import{j as xe}from"./PortalLayer-A31GNUBE.js";import{t as Ee}from"./ScaleRangeLayer-B8Np75Jv.js";import{R as je,V as k}from"./SceneService-BoMYUK-_.js";import{f as Ae}from"./TemporalLayer-qFwC9hne.js";import{d as $,l as Pe}from"./TimeInfo-FPYffPSl.js";import{p as z}from"./TimeExtent-BncgvKNQ.js";import{g as K}from"./arcgisLayerUrl-DftahE04.js";import{s as Re}from"./associatedFeatureServiceUtils-BVYvwur3.js";import{t as De}from"./capabilities-Cjn77swe.js";import{c as Ue,p as qe,d as Ne,l as Ce,s as Ge}from"./commonProperties-BIy04FVd.js";import{Z as Ve,K as Qe}from"./featureLayerUtils-CsYgtMXQ.js";import{t as ke,p as $e}from"./FeatureReductionSelection-BkrQI9g7.js";import{s as ze}from"./fieldProperties-CZ-PAjmJ.js";import{Z as Ke}from"./FieldsIndex-Dk-kLbha.js";import{p as J,a as Je,y as Me,m as He}from"./I3SLayerDefinitions-B7RXKW80.js";import{r as We,n as Ze}from"./infoFor3D-DIuYZyyK.js";import{C as Be,n as M}from"./labelingInfo-EwgQaamp.js";import{p as Xe}from"./LayerFloorInfo-BCIYa_W3.js";import{b as Ye}from"./fetchService-rsyNzude.js";import{j as et}from"./persistable-C9PQ4ecR.js";import{J as tt,a as rt}from"./projection-BtMo7Gow.js";import{t as it}from"./styleUtils-0tu0qJ9j.js";import{b as st}from"./Query-BFWga8wv.js";import{$ as H,P as at,w as ot}from"./elevationInfoUtils-D97aLiQo.js";import{p as nt}from"./popupUtils-BrzGMgUP.js";import{V as lt}from"./I3SUtil-CcI89URq.js";import{n as pt,p as dt}from"./popupUtils-mL4SbyZg.js";function W({associatedLayer:e,serviceUpdateTimeStamp:t}){const r=e?.editingInfo?.lastEditDate,o=e?.serverGens,n=r!=null,l=t!=null,p=n&&l&&t.lastUpdate!==r.getTime();return n&&(p||!l&&o?.minServerGen!==o?.serverGen)}const ut=e=>{let t=class extends e{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const r=this.associatedLayer?.timeInfo;if(r==null)return null;const o=r.clone();return N(o,this.fieldsIndex),o}set timeInfo(r){N(r,this.fieldsIndex),this._override("timeInfo",r)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(r){this._override("timeExtent",r)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(r){this._override("timeOffset",r)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(r){this._override("datesInUnknownTimezone",r)}async loadTimeInfoFromService(r){const{serviceTimeInfo:o}=this;if(o==null)return;const{startTimeField:n,endTimeField:l}=o;if(n==null&&l==null||W({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const p=async c=>{let h=null;try{h=(await this.fetchStatistics?.(c,r))?.stats}catch{}if(h==null)return null;const{minTimeStr:I,min:O,maxTimeStr:x,max:E}=h,F=c===n?I??O:x??E;return F!=null?new Date(F):null},[u,y]=await Promise.all([p(n),p(l)]);if(n!=null&&u==null||l!=null&&y==null)return;const f=new z({start:u,end:y});this.setAtOrigin("timeInfo",new $({endField:l,startField:n,fullTimeExtent:f}),"service")}};return i([s({type:$,json:{read:!1,write:!1}})],t.prototype,"timeInfo",null),i([s({type:z,json:{read:!1,write:!1}})],t.prototype,"timeExtent",null),i([s({type:Pe,json:{read:!1,write:!1}})],t.prototype,"timeOffset",null),i([s({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],t.prototype,"datesInUnknownTimezone",null),i([s({type:L,readOnly:!0,json:{read:{source:"timeInfo"}}})],t.prototype,"serviceTimeInfo",void 0),t=i([v("esri.layers.mixins.TemporalSceneLayer")],t),t};let L=class extends A{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};i([s({type:String})],L.prototype,"endTimeField",void 0),i([s({type:String})],L.prototype,"startTimeField",void 0),L=i([v("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],L);let g=class extends A{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};i([s({type:String,json:{read:!0,write:!0}})],g.prototype,"name",void 0),i([s({type:String,json:{read:!0,write:!0}})],g.prototype,"field",void 0),i([s({type:[Number],json:{read:!0,write:!0}})],g.prototype,"currentRangeExtent",void 0),i([s({type:[Number],json:{read:!0,write:!0}})],g.prototype,"fullRangeExtent",void 0),i([s({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],g.prototype,"type",void 0),g=i([v("esri.layers.support.RangeInfo")],g);var T;let U=T=class extends ee(P.ofType(R)){constructor(e){super(e)}clone(){return new T(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map(r=>{if(!t.equals(r.spatialReference)){if(!tt(r.spatialReference,t))return e?.messages?.push(new C("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const n=new R;rt(r,n,t),r=n}const o=r.toJSON(e);return delete o.spatialReference,o}).filter(r=>r!=null):(e?.messages?.push(new C("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(r=>r.toJSON(e)))}static fromJSON(e,t){const r=new T;return e.forEach(o=>r.add(R.fromJSON(o,t))),r}};U=T=i([v("esri.layers.support.PolygonCollection")],U);const _=U;var q;let b=q=class extends A{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new _,this._geometriesSource=null}initialize(){this.addHandles(te(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,re))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=_.fromJSON(e,r):this._geometriesSource={url:ie(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await G(r,{responseType:"json",signal:t?.signal}),l=e.toJSON(),p=n.data.map(u=>({...u,spatialReference:l}));this.geometries=_.fromJSON(p,o),this._geometriesSource=null}clone(){const e=new q({geometries:se(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};i([s({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],b.prototype,"spatialRelationship",void 0),i([s({type:_,nonNullable:!0,json:{write:!0}}),et({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],b.prototype,"geometries",void 0),i([w(["web-scene","portal-item"],"geometries")],b.prototype,"readGeometries",null),b=q=i([v("esri.layers.support.SceneFilter")],b);const ct=b;async function yt({fieldName:e,statisticsInfo:t,errorContext:r,fieldsIndex:o,path:n,customParameters:l,apiKey:p,signal:u}){if(t==null)throw new d(`${r}:no-cached-statistics`,"Cached statistics are not available for this layer");const y=o.get(e);if(y==null)throw new d(`${r}:field-unexisting`,`Field '${e}' does not exist on the layer`);const f=t.find(I=>I.name===y.name);if(f==null)throw new d(`${r}:no-cached-statistics`,"Cached statistics for this attribute are not available");const c=ae(n,f.href),{data:h}=await G(c,{query:{f:"json",...l,token:p},responseType:"json",signal:u});return h}async function ht(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(ft(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function ft(e){const{BlobReader:t,ZipReader:r,BlobWriter:o}=await import("./zipjs-wrapper-DlcHxyCX.js"),n=[];return(await new r(new t(e)).getEntries()).forEach(l=>{if(l.directory||/^__MACOS/i.test(l.filename))return;const p=new o,u=l.getData?.(p).then(y=>new File([y],l.filename));u&&n.push(u)}),Promise.all(n)}const mt=new Set(["3DObject","Point"]),Z=ze();let a=class extends ut(_e(je(Se(Oe(xe(Ee(ge(Te(Fe(oe(we))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new P,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null),this.associatedLayer=ne(this.associatedLayer)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&r.type!=="inherited"?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get attributeTableTemplate(){return this.associatedLayer?.attributeTableTemplate??null}get fieldsIndex(){return new Ke(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:J.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return this.associatedLayer!=null&&Ve(this.associatedLayer)}get geometryType(){return gt[this.profile]||"mesh"}set renderer(e){V(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=e??De;const{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsRollbackOnFailure:n,supportsUploadWithItemId:l,supportsGeometryUpdate:p,supportsReturnServiceEditsInSourceSpatialReference:u},data:{supportsZ:y,supportsM:f,isVersioned:c,supportsAttachment:h},operations:{supportsEditing:I,supportsAdd:O,supportsUpdate:x,supportsDelete:E,supportsQuery:F,supportsQueryAttachments:X,supportsAsyncConvert3D:Y}}=e,S=e.operations.supportsChangeTracking,j=!!this.associatedLayer?.infoFor3D;return{query:t,queryRelated:r,editing:{supportsGlobalId:o,supportsReturnServiceEditsInSourceSpatialReference:u,supportsRollbackOnFailure:n,supportsGeometryUpdate:j&&p,supportsUploadWithItemId:l},data:{supportsAttachment:h,supportsZ:y,supportsM:f,isVersioned:c},operations:{supportsQuery:F,supportsQueryAttachments:X,supportsEditing:I&&S,supportsAdd:j&&O&&S,supportsDelete:j&&E&&S,supportsUpdate:x&&S,supportsAsyncConvert3D:Y}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return r!=null&&B[r]?B[r]:(m.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=e!=null?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(le),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await it(this,{origin:"service"},t),V(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){m.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new st;return this.geometryType==="mesh"?this.associatedLayer?.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r?.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=pe(this.fieldsIndex,await pt(this,dt(this)));return lt(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new de;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(m.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return nt(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(k.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(k.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await import("./editingSupport-BSMGk_ut.js");let o=t;await this.load();const n=this.associatedLayer;if(!n)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");await n.load();const{globalIdField:l}=n,p=!!n.infoFor3D,u=o?.globalIdUsed??!0;if(p&&l==null)throw new d(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(p&&!u)throw new d(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return K(n.url)&&p&&e.deleteFeatures!=null&&l!=null&&(o={...o,globalIdToObjectId:await Qe(n,e.deleteFeatures,l)}),r(this,n.source,e,o)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){t??={};const r=c=>{throw m.getLogger(this).error(".convertMesh()",c.message),c};await this.load(),this.infoFor3D||r(new d("invalid:layer","SceneLayer has no capability for mesh conversion"));const o=await this.extractAndFilterFiles(e),n=o.reduce((c,h)=>We(this.infoFor3D,h)?c+1:c,0);n===0&&r(new be),n>1&&r(new Ie);const l=this.spatialReference,p=t.location??new ue({x:0,y:0,z:0,spatialReference:l}),u=p.spatialReference.isGeographic?"local":"georeferenced",y=ve.createWithExternalSource(p,o,{vertexSpace:u,transform:Le(p.spatialReference),unitConversionDisabled:!0}),[f]=await this.uploadAssets([y],{...t,useAssetOrigin:!t.location});return f}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await ht(e)).filter(r=>Ze(t,r)):e}validateLayer(e){if(e.layerType&&!mt.has(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const p=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=p;break;case"vertex-reference-frame":n=!0,l=!p;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some(n=>n.name===e.name),r=!!this.associatedLayer?.fields?.some(n=>n&&e.name===n.name),o={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=o}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=Q(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===D.SERVICE||l===D.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");this.associatedLayer?.infoFor3D==null||!e||!K(this.associatedLayer?.url)||!W(this)||Q(this).setAtOrigin("fullExtent",e.clone(),D.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:o}=await Re(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),n=await Ye.FeatureLayer();this.associatedLayer=new n({url:t,customParameters:this.customParameters,layerId:r,portalItem:o}),await this.associatedLayer.load()}catch(t){ce(t)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await ye(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;this.profile==="mesh-pyramids"&&H(m.getLogger(this),at("Mesh scene layers","relative-to-scene",e)),H(m.getLogger(this),ot("Scene layers",e))}async fetchStatistics(e,t){return await yt({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};i([s({types:{key:"type",base:ke,typeMap:{selection:$e}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],a.prototype,"featureReduction",void 0),i([s({type:[g],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],a.prototype,"rangeInfos",void 0),i([s({json:{read:!1}})],a.prototype,"associatedLayer",void 0),i([s({type:["show","hide"]})],a.prototype,"listMode",void 0),i([s({type:["ArcGISSceneServiceLayer"]})],a.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),i([s({...Z.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"fields",void 0),i([s()],a.prototype,"types",null),i([s()],a.prototype,"typeIdField",null),i([s()],a.prototype,"templates",null),i([s()],a.prototype,"formTemplate",null),i([s()],a.prototype,"attributeTableTemplate",null),i([s({readOnly:!0,clonable:!1})],a.prototype,"fieldsIndex",null),i([s({type:Xe,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],a.prototype,"floorInfo",void 0),i([s(Z.outFields)],a.prototype,"outFields",void 0),i([s({type:J,readOnly:!0,json:{read:!1}})],a.prototype,"nodePages",void 0),i([w("service","nodePages",["nodePages","pointNodePages"])],a.prototype,"readNodePages",null),i([s({type:[Je],readOnly:!0})],a.prototype,"materialDefinitions",void 0),i([s({type:[Me],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),i([s({type:[He],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),i([s({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),i([s({readOnly:!0})],a.prototype,"statisticsInfo",void 0),i([s({type:P.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],a.prototype,"excludeObjectIds",void 0),i([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),i([s({type:ct,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],a.prototype,"filter",void 0),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([s(Ue)],a.prototype,"elevationInfo",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"effectiveCapabilities",null),i([s({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),i([s({type:String})],a.prototype,"geometryType",null),i([s(qe)],a.prototype,"labelsVisible",void 0),i([s({type:[Be],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:M},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:M},write:!0}})],a.prototype,"labelingInfo",void 0),i([s(Ne)],a.prototype,"legendEnabled",void 0),i([s({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if(typeof e=="number"&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return r!==void 0?he(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],a.prototype,"opacity",void 0),i([s({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"priority",void 0),i([s({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"semantic",void 0),i([s({types:me,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",null),i([s({json:{read:!1}})],a.prototype,"cachedDrawingInfo",void 0),i([w("service","cachedDrawingInfo")],a.prototype,"readCachedDrawingInfo",null),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),i([s({type:Boolean,json:{read:!1}})],a.prototype,"editingEnabled",null),i([s({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"infoFor3D",null),i([s({readOnly:!0,json:{write:!1,read:!1}})],a.prototype,"relationships",null),i([s(Ce)],a.prototype,"popupEnabled",void 0),i([s({type:fe,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),i([s({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),i([s({type:String,json:{read:!1}})],a.prototype,"objectIdField",void 0),i([w("service","objectIdField",["objectIdField","fields"])],a.prototype,"readObjectIdField",null),i([s({type:String,json:{read:!1}})],a.prototype,"globalIdField",void 0),i([w("service","globalIdField",["globalIdField","fields"])],a.prototype,"readGlobalIdField",null),i([s({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),i([s({type:String,json:{read:!1}})],a.prototype,"profile",void 0),i([w("service","profile",["store.profile"])],a.prototype,"readProfile",null),i([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),i([s(Ge)],a.prototype,"screenSizePerspectiveEnabled",void 0),i([s({json:{read:!1,origins:{service:{read:!0}}}})],a.prototype,"serviceItemId",void 0),i([s(Ae)],a.prototype,"useViewTime",null),a=i([v("esri.layers.SceneLayer")],a);const B={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},gt={"mesh-pyramids":"mesh",points:"point"},vt=a;export{vt as default};
