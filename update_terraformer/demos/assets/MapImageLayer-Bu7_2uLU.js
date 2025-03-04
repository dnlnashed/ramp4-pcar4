import{J as S,bn as g,bo as d,bp as I,U as f,aw as w,s as b,H as $,q as o,u as a,bq as v,z as O,v as T,br as P,C as E}from"./main-C4ZPumQG.js";import{t as L}from"./loadAll-uCCJvqur.js";import{S as F}from"./MultiOriginJSONSupport-CfimntwA.js";import{i as M}from"./scaleUtils-CryeCzSJ.js";import{f as R}from"./Layer-kJz1RbGs.js";import{i as q}from"./APIKeyMixin-B3kyxw-L.js";import{m as J,f as _,t as j}from"./SublayersOwner-2i6LPI9Y.js";import{l as N}from"./ArcGISService-BF9A-5t6.js";import{l as U}from"./BlendLayer-CLlgDHiw.js";import{e as A}from"./CustomParametersMixin-UFnwW6Tl.js";import{b as V}from"./OperationalLayer-CLG7nePC.js";import{j as k}from"./PortalLayer-CheKnZ-m.js";import{f as z}from"./RefreshableLayer-IYPDMFiM.js";import{t as C}from"./ScaleRangeLayer-BkSMimzn.js";import{l as H}from"./TemporalLayer-BkgJjWIw.js";import{y as Z}from"./commonProperties-Bsvq8RFW.js";import{y as B}from"./ExportImageParameters-Cqpd6XxR.js";import{t as D}from"./imageBitmapUtils-CYl35WEd.js";import{e as x}from"./sublayerUtils-BQJQ5JdY.js";import{t as G}from"./versionUtils-t1JkfAjd.js";import{p as K}from"./TimeExtent-gaoR-i0M.js";import"./preload-helper-ExcqyqRp.js";import"./Version-C4B4w3hN.js";import"./arcgisLayerUrl-BTLOSXmm.js";import"./portalItemUtils-Cw_vHyA7.js";import"./projection-8-uxS4CM.js";import"./projectBuffer-C2AmViVa.js";import"./CollectionFlattener-Bad_hcUG.js";import"./UniqueValueRenderer-GCrSZBIa.js";import"./RendererLegendOptions-DpxhQPdH.js";import"./diffUtils-Dt_n932e.js";import"./colorRamps-G-SpqqoO.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-tNQnoC_j.js";import"./compilerUtils-C-A03NQB.js";import"./lengthUtils-BttfIwGw.js";import"./styleUtils-BoQreDAM.js";import"./jsonUtils-CEKaOymD.js";import"./LRUCache-B-ly6QT3.js";import"./FieldsIndex-jN3YBTwx.js";import"./UnknownTimeZone-Bz_c8bba.js";import"./OverrideHelper-VvCf7RiW.js";import"./colorUtils-Dume6Tlg.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-CLSylvtw.js";import"./heatmapUtils-UHUpWU7e.js";import"./QueryTask-Dgj0TAMC.js";import"./infoFor3D-_5f2f6Um.js";import"./Query-BfP97GzT.js";import"./Field-D4mxNajT.js";import"./fieldType-BGU0IjZn.js";import"./utils-DHaZre0y.js";import"./executeForIds-DpTevbad.js";import"./query-DP_cglAZ.js";import"./normalizeUtils-BMfhrx7f.js";import"./normalizeUtilsCommon-B9uFJkC2.js";import"./utils-BznvvgVb.js";import"./pbfQueryUtils-RJTeXShZ.js";import"./pbf-D2COr_XI.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-C2we2y40.js";import"./executeQueryPBF-CIbiOpTk.js";import"./featureConversionUtils-LdW16brD.js";import"./FeatureSet-DbZxhfoY.js";import"./executeQueryJSON-BWKOC1Ja.js";import"./featureLayerUtils-DlY90VdB.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-BjxHrit8.js";import"./FeatureType-D1-KWoM4.js";import"./FeatureTemplate-NrIeuddv.js";import"./labelingInfo-uVW9LP8y.js";import"./labelUtils-Bv0chLIv.js";import"./LayerFloorInfo-SxFgB2a4.js";import"./Relationship-DzJqS8IK.js";import"./serviceCapabilitiesUtils-D5Q9ZcRy.js";import"./popupUtils-73Vr6LI6.js";import"./jsonUtils-D0Ph3-uP.js";import"./parser-C1xXAJ6X.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CLl-Rp5L.js";import"./PortalItem-DWC4iI6A.js";import"./TimeInfo-CsQvNa60.js";import"./ElevationInfo-m_Ju7IO-.js";import"./floorFilterUtils-DKzVzLpH.js";let r=class extends U(H(C(J(_(N(V(k(F(z(q(A(R)))))))))))){constructor(...t){super(...t),this._exportImageParameters=new B({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},t).catch(S).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(t,e){const n=e.supportedImageFormatTypes;return n&&n.includes("PNG32")?"png32":"png24"}writeSublayers(t,e,n,s){if(!this.loaded||!t)return;const m=t.slice().reverse().flatten(({sublayers:i})=>i&&i.toArray().reverse()).toArray();let p=!1;const l=g(s.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers){if(l===d.PORTAL_ITEM){const i=this.createSublayersForOrigin("service").sublayers;p=x(m,i,d.SERVICE)}else if(l>d.PORTAL_ITEM){const i=this.createSublayersForOrigin("portal-item");p=x(m,i.sublayers,g(i.origin))}}const h=[],c={writeSublayerStructure:p,...s};let y=p||this.hasVisibleLayersForOrigin(l);m.forEach(i=>{const u=i.write({},c);h.push(u),y=y||i.originOf("visible")==="user"}),h.some(i=>Object.keys(i).length>1)&&(e.layers=h),y&&(e.visibleLayers=m.filter(i=>i.visible).map(i=>i.id))}createExportImageParameters(t,e,n,s){const m=s?.pixelRatio||1;t&&this.version>=10&&(t=t.clone().shiftCentralMeridian()),this._exportImageParameters.floors=s?.floors??null,this._exportImageParameters.scale=M({extent:t,width:e})*m;const p=this._exportImageParameters.toJSON(),l=!s?.rotation||this.version<10.3?{}:{rotation:-s.rotation},h=t?.spatialReference,c=I(h);p.dpi*=m;const y={};if(s?.timeExtent){const{start:i,end:u}=s.timeExtent.toJSON();y.time=i&&u&&i===u?""+i:`${i??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:t&&t.xmin+","+t.ymin+","+t.xmax+","+t.ymax,bboxSR:c,imageSR:c,size:e+","+n,...p,...l,...y}}async fetchImage(t,e,n,s){const{data:m}=await this._fetchImage("image",t,e,n,s);return m}async fetchImageBitmap(t,e,n,s){const{data:m,url:p}=await this._fetchImage("blob",t,e,n,s);return D(m,p,s?.signal)}async fetchRecomputedExtents(t={}){const e={...t,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:n}=await f(this.url,e),{extent:s,fullExtent:m,timeExtent:p}=n,l=s||m;return{fullExtent:l&&w.fromJSON(l),timeExtent:p&&K.fromJSON({start:p[0],end:p[1]})}}loadAll(){return L(this,t=>{t(this.allSublayers),t(this.subtables)})}serviceSupportsSpatialReference(t){return G(this,t)}async _fetchImage(t,e,n,s,m){const p={responseType:t,signal:m?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,n,s,m),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(p.query?.dynamicLayers!=null&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:p.query});try{const{data:h}=await f(l,p);return{data:h,url:l}}catch(h){throw $(h)?h:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:h})}}async _fetchService(t){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:e,ssl:n}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:t});n&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e,this.read(e,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(t){return!(t==null||!this.sublayersSourceJSON[t]?.visibleLayers)}};o([a(v("dateFieldsTimeReference"))],r.prototype,"dateFieldsTimeZone",void 0),o([a({type:Boolean})],r.prototype,"datesInUnknownTimezone",void 0),o([a()],r.prototype,"dpi",void 0),o([a()],r.prototype,"gdbVersion",void 0),o([a()],r.prototype,"imageFormat",void 0),o([O("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),o([a({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),o([a({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),o([a()],r.prototype,"imageTransparency",void 0),o([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],r.prototype,"isReference",void 0),o([a({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),o([a({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),o([a({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),o([a(v("preferredTimeReference"))],r.prototype,"preferredTimeZone",void 0),o([a()],r.prototype,"sourceJSON",void 0),o([a({json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),o([T("sublayers",{layers:{type:[j]},visibleLayers:{type:[P]}})],r.prototype,"writeSublayers",null),o([a({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),o([a(Z)],r.prototype,"url",void 0),r=o([E("esri.layers.MapImageLayer")],r);const Mr=r;export{Mr as default};
