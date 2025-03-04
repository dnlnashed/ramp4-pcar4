const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./visualVariableUtils-CvVSr8p2.js","./main-BvP2mMJi.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./compilerUtils-DxE-Nek9.js","./lengthUtils-DgGrtXXQ.js","./sizeVariableUtils-Cmcuvw-4.js"])))=>i.map(i=>d[i]);
import{_ as K}from"./preload-helper-ExcqyqRp.js";import{aY as X,bp as ee,bv as H,q as n,u as p,b4 as te,b5 as re,v as J,aw as Q,D as ie,C as P,A as z,cJ as se,b3 as q,z as oe,f7 as ae,U as ne,aJ as D,aF as le,dD as pe,aI as ue,s as V,V as ye,bT as T,dh as A,aq as ce,bs as he,b1 as de,G as M,hk as fe,bJ as me}from"./main-BvP2mMJi.js";import{H as ge}from"./languageUtils-DaVAQTGe.js";import{i as be,o as we}from"./scaleUtils-BebnHunH.js";import{n as _}from"./floorFilterUtils-DKzVzLpH.js";import{o as L}from"./drapedUtils-BjjRd-B9.js";import{R as ve}from"./normalizeUtils-CZuR4U2F.js";import{f as xe,s as $e,i as Se}from"./utils-aU2bE2Ii.js";import{n as Fe}from"./sublayerUtils-BlUR0qgV.js";import{p as Oe}from"./TimeExtent-BPaAkukn.js";import{n as Re,p as je}from"./popupUtils-B7147ind.js";function Ee(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:a,height:s,historicMoment:d,layerOption:u,mapExtent:l,maxAllowableOffset:y,returnFieldName:c,returnGeometry:m,returnUnformattedValues:x,returnZ:f,spatialReference:S,timeExtent:b,tolerance:g,width:w}=t.toJSON(),{dynamicLayers:O,layerDefs:R,layerIds:N}=Ie(t),B=e?.geometry!=null?e.geometry:null,v={historicMoment:d,geometryPrecision:a,maxAllowableOffset:y,returnFieldName:c,returnGeometry:m,returnUnformattedValues:x,returnZ:f,tolerance:g},j=B?.toJSON()||r;v.imageDisplay=`${w},${s},${i}`,o&&(v.gdbVersion=o),j&&(delete j.spatialReference,v.geometry=JSON.stringify(j),v.geometryType=X(j));const G=S??j?.spatialReference??l?.spatialReference;if(G&&(v.sr=ee(G)),v.time=b?[b.start,b.end].join(","):null,l){const{xmin:Z,ymin:C,xmax:W,ymax:Y}=l;v.mapExtent=`${Z},${C},${W},${Y}`}return R&&(v.layerDefs=R),O&&!R&&(v.dynamicLayers=O),v.layers=u==="popup"?"visible":u,N&&!O&&(v.layers+=`:${N.join(",")}`),v}function Ie(t){const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:a,layerOption:s,gdbVersion:d}=t,u=r?.find(f=>f.layer!=null)?.layer?.serviceSublayers,l=s==="popup",y={},c=be({extent:e,width:o,spatialReference:e?.spatialReference}),m=[],x=f=>{const S=c===0,b=f.minScale===0||c<=f.minScale,g=f.maxScale===0||c>=f.maxScale;if(f.visible&&(S||b&&g))if(f.sublayers)f.sublayers.forEach(x);else{if(a?.includes(f.id)===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r?.forEach(x),r&&!m.length)y.layerIds=[];else{const f=Fe(m,u,d),S=m.map(b=>{const g=_(i,b);return b.toExportImageJSON(g)});if(f)y.dynamicLayers=JSON.stringify(S);else{if(r){let g=m.map(({id:w})=>w);a&&(g=g.filter(w=>a.includes(w))),y.layerIds=g}else a?.length&&(y.layerIds=a);const b=Pe(i,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(y.layerDefs=JSON.stringify(g))}}}return y}function Pe(t,e){const i=!!t?.length,o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const a=_(t,r),s=H(a,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var I;let h=I=class extends z{static from(t){return se(I,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([p({type:Number,json:{write:!0}})],h.prototype,"dpi",void 0),n([p()],h.prototype,"floors",void 0),n([p({type:String,json:{write:!0}})],h.prototype,"gdbVersion",void 0),n([p({types:te,json:{read:re,write:!0}})],h.prototype,"geometry",void 0),n([p({type:Number,json:{write:!0}})],h.prototype,"geometryPrecision",void 0),n([p({type:Number,json:{write:!0}})],h.prototype,"height",void 0),n([p({type:Date})],h.prototype,"historicMoment",void 0),n([J("historicMoment")],h.prototype,"writeHistoricMoment",null),n([p({type:[Number],json:{write:!0}})],h.prototype,"layerIds",void 0),n([p({type:["top","visible","all","popup"],json:{write:!0}})],h.prototype,"layerOption",void 0),n([p({type:Q,json:{write:!0}})],h.prototype,"mapExtent",void 0),n([p({type:Number,json:{write:!0}})],h.prototype,"maxAllowableOffset",void 0),n([p({type:Boolean,json:{write:!0}})],h.prototype,"returnFieldName",void 0),n([p({type:Boolean,json:{write:!0}})],h.prototype,"returnGeometry",void 0),n([p({type:Boolean,json:{write:!0}})],h.prototype,"returnM",void 0),n([p({type:Boolean,json:{write:!0}})],h.prototype,"returnUnformattedValues",void 0),n([p({type:Boolean,json:{write:!0}})],h.prototype,"returnZ",void 0),n([p({type:ie,json:{write:!0}})],h.prototype,"spatialReference",void 0),n([p()],h.prototype,"sublayers",void 0),n([p({type:Oe,json:{write:!0}})],h.prototype,"timeExtent",void 0),n([p({type:Number,json:{write:!0}})],h.prototype,"tolerance",void 0),n([p({type:Number,json:{write:!0}})],h.prototype,"width",void 0),h=I=n([P("esri.rest.support.IdentifyParameters")],h);const k=h;let $=class extends z{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return q.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=ae.toJSON(o.type))}};n([p({type:String,json:{write:!0}})],$.prototype,"displayFieldName",void 0),n([p({type:q})],$.prototype,"feature",void 0),n([oe("feature",["attributes","geometry"])],$.prototype,"readFeature",null),n([J("feature")],$.prototype,"writeFeature",null),n([p({type:Number,json:{write:!0}})],$.prototype,"layerId",void 0),n([p({type:String,json:{write:!0}})],$.prototype,"layerName",void 0),$=n([P("esri.rest.support.IdentifyResult")],$);const _e=$;async function Ne(t,e,i){const o=(e=Ve(e)).geometry?[e.geometry]:[],r=xe(t);return r.path+="/identify",ve(o).then(a=>{const s=Ee(e,{geometry:a?.[0]}),d=$e({...r.query,f:"json",...s}),u=Se(d,i);return ne(r.path,u).then(Ge).then(l=>Te(l,e.sublayers))})}function Ge(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>_e.fromJSON(i)),e}function Ve(t){return t=k.from(t)}function Te(t,e){if(!e?.length)return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}const U=D();let E=null;function Ye(t,e){return e.type==="tile"||e.type==="map-image"}let F=class extends le{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=pe(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ue(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new V("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ae(i.sublayers,o,e);if(!r.length)return[];const a=await Le(i,r);if(!((i.capabilities?.operations?.supportsIdentify??!0)&&i.version>=10.5)&&!a)throw new V("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(t){const e=this.highlightGraphics;if(!t||!e)return U;let i=ge(t)?[t]:ye.isCollection(t)?t.toArray():Array.isArray(t)?t:[];if(i=i?.filter(T),(i?.length??0)===0)return U;for(const o of i){const{sourceLayer:r}=o;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),D(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async s=>{s||=new A;let d=null;const u="visualVariables"in a?a.visualVariables?.find(l=>l.type==="size"):void 0;u&&(E||(E=(await K(async()=>{const{getSize:l}=await import("./visualVariableUtils-CvVSr8p2.js");return{getSize:l}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).getSize),d=E(u,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),d||="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16,i.includes(r)&&(r.symbol=new A({style:"square",size:d,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!o?.length||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const y=l.sourceLayer;ce(s,y,()=>new Map).set(l.getObjectId(),l)}const d=Array.from(s,([l,y])=>{const c=l.createQuery();return c.objectIds=[...y.keys()],c.outFields=[l.objectIdField],c.returnGeometry=!0,c.maxAllowableOffset=a,c.outSpatialReference=i.spatialReference,l.queryFeatures(c)}),u=await Promise.all(d);if(!this.destroyed)for(const{features:l}of u)for(const y of l){const c=y.sourceLayer,m=s.get(c).get(y.getObjectId());m&&o.includes(m)&&(m.geometry=y.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*he(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,o,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:s,scale:d}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const u=Math.min(de("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,f)=>f.renderer?L({renderer:f.renderer,pointerType:i?.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,u),y=we(d,s),c=Math.round(l.width/y),m=new Q({xmin:l.center.x-y*c,ymin:l.center.y-y*c,xmax:l.center.x+y*c,ymax:l.center.y+y*c,spatialReference:l.spatialReference});return new k({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:c,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:a,tolerance:u,width:c})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:s,popupTemplate:d})=>{if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const u=s.createQuery(),l=L({renderer:s.renderer,pointerType:i?.pointerType}),y=this.createFetchPopupFeaturesQueryGeometry(t,l),c=new Set,[m]=await Promise.all([Re(s,d),s.renderer?.collectRequiredFields(c,s.fieldsIndex)]);M(i),fe(c,s.fieldsIndex,m);const x=Array.from(c).sort();u.geometry=y,u.outFields=x,u.timeExtent=r;const f=_(o,s);u.where=H(u.where,f);const S=this._getTargetResolution(y.width/l),b=await Me(d);M(i);const g=s.geometryType==="point"||b&&b.arcadeUtils.hasGeometryOperations(d);g||(u.maxAllowableOffset=S);let{features:w}=await s.queryFeatures(u,i);const O=g?0:S;w=await Ue(s,w,i);for(const R of w)this._featuresResolutions.set(R,O);return w});return(await Promise.allSettled(a)).reduce((s,d)=>d.status==="fulfilled"?[...s,...d.value]:s,[]).filter(T)}};function Ae(t,e,i){const o=[];if(!t)return o;const r=a=>{const s=a.minScale===0||e<=a.minScale,d=a.maxScale===0||e>=a.maxScale;if(a.visible&&s&&d){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const u=je(a,{...i,defaultPopupTemplateEnabled:!1});u!=null&&o.unshift({sublayer:a,popupTemplate:u})}}};return t.map(r),o}function Me(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?me():Promise.resolve()}async function Le(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:i})=>i.load().then(()=>i.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ue(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([p({constructOnly:!0})],F.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([p({constructOnly:!0})],F.prototype,"layerView",void 0),n([p({constructOnly:!0})],F.prototype,"highlightGraphics",void 0),n([p({constructOnly:!0})],F.prototype,"highlightGraphicUpdated",void 0),n([p({constructOnly:!0})],F.prototype,"updatingHandles",void 0),F=n([P("esri.views.layers.support.MapServiceLayerViewHelper")],F);export{F as R,Ye as _};
