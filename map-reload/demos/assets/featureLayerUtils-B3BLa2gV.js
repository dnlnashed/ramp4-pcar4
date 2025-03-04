const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./editingSupport-DxExiReH.js","./main-9YtP5FE3.js","./preload-helper-ExcqyqRp.js","./main-COXd_nkW.css","./uuid-Cl5lrJ4c.js","./normalizeUtils-g5tKHpSr.js","./normalizeUtilsCommon-B4Aiqv77.js","./utils-xdcGOvUY.js","./utils-O3wIrGaZ.js","./EditBusLayer-DG_1-dHU.js","./infoFor3D-_5f2f6Um.js"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper-ExcqyqRp.js";import{az as O,s,ek as v,ch as P,el as L,em as j,en as E,eo as R,M as m,L as S}from"./main-9YtP5FE3.js";import{e as C}from"./uuid-Cl5lrJ4c.js";import{p as I,a as F}from"./Field-D2AZ6hjx.js";import{b as f}from"./Query-Do27vu5Q.js";import{p as M}from"./jsonUtils-DcJz3OZv.js";import{A as _}from"./UniqueValueRenderer-hmk5dol7.js";import{c as $,d as x}from"./RelationshipQuery-DtZKcx3V.js";async function T(t,e,r){e=e.clone(),t.capabilities.query.supportsMaxRecordCountFactor&&(e.maxRecordCountFactor=q(t));const n=D(t),o=t.capabilities.query.supportsPagination;e.start=0,e.num=n;let a=null;for(;;){const i=await t.source.queryFeaturesJSON(e,r);if(a==null?a=i:a.features=a.features.concat(i.features),a.exceededTransferLimit=i.exceededTransferLimit,!o||!i.exceededTransferLimit)break;e.start+=n}return a}function D(t){return q(t)*G(t)}function G(t){return t.capabilities.query.maxRecordCount||2e3}function q(t){return t.capabilities.query.supportsMaxRecordCountFactor?f.MAX_MAX_RECORD_COUNT_FACTOR:1}const W=new O({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function Y(t,e,r,n){const o=await d(t);if(await w(t,e,n),!o.addAttachment)throw new s(n,"Layer source does not support addAttachment capability");return o.addAttachment(e,r)}function w(t,e,r){const{attributes:n}=e,{objectIdField:o}=t;return t.capabilities?.data?.supportsAttachment?e?n?o&&n[o]?Promise.resolve():Promise.reject(new s(r,`feature is missing the identifying attribute ${o}`)):Promise.reject(new s(r,"'attributes' are required on a feature to query attachments")):Promise.reject(new s(r,"A feature is required to add/delete/update attachments")):Promise.reject(new s(r,"this layer doesn't support attachments"))}async function tt(t,e,r,n,o){const a=await d(t);if(await w(t,e,o),!a.updateAttachment)throw new s(o,"Layer source does not support updateAttachment capability");return a.updateAttachment(e,r,n)}async function et(t,e,r){const{applyEdits:n}=await g(()=>import("./editingSupport-DxExiReH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),o=await t.load();let a=r;return o.type==="feature"&&o.infoFor3D&&e.deleteFeatures!=null&&o.globalIdField!=null&&(a={...a,globalIdToObjectId:await N(o,e.deleteFeatures,o.globalIdField)}),n(o,o.source,e,r)}async function nt(t,e,r){const{uploadAssets:n}=await g(()=>import("./editingSupport-DxExiReH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),o=await t.load();return n(o,o.source,e,r)}async function rt(t,e,r,n){const o=await d(t);if(await w(t,e,n),!o.deleteAttachments)throw new s(n,"Layer source does not support deleteAttachments capability");return o.deleteAttachments(e,r)}async function ot(t,e,r){const n=(await t.load({signal:e?.signal})).source;if(!n.fetchRecomputedExtents)throw new s(r,"Layer source does not support fetchUpdates capability");return n.fetchRecomputedExtents(e)}async function at(t,e,r,n){e=$.from(e),await t.load();const o=t.source,a=t.capabilities;if(!a?.data?.supportsAttachment)throw new s(n,"this layer doesn't support attachments");const{attachmentTypes:i,objectIds:l,globalIds:y,num:u,size:c,start:p,where:b}=e;if(!a?.operations?.supportsQueryAttachments&&(i?.length>0||y?.length>0||c?.length>0||u||p||b))throw new s(n,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(l?.length||y?.length||b))throw new s(n,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);if(!o.queryAttachments)throw new s(n,"Layer source does not support queryAttachments capability",e);return o.queryAttachments(e)}async function st(t,e,r,n){const o=await d(t);if(!o.queryObjectIds)throw new s(n,"Layer source does not support queryObjectIds capability");return o.queryObjectIds(f.from(e)??t.createQuery(),r)}async function it(t,e,r,n){const o=await d(t);if(!o.queryFeatureCount)throw new s(n,"Layer source does not support queryFeatureCount capability");return o.queryFeatureCount(f.from(e)??t.createQuery(),r)}async function ut(t,e,r,n){const o=await d(t);if(!o.queryExtent)throw new s(n,"Layer source does not support queryExtent capability");return o.queryExtent(f.from(e)??t.createQuery(),r)}async function ct(t,e,r,n){const o=await d(t);if(!o.queryRelatedFeatures)throw new s(n,"Layer source does not support queryRelatedFeatures capability");return o.queryRelatedFeatures(x.from(e),r)}async function lt(t,e,r,n){const o=await d(t);if(!o.queryRelatedFeaturesCount)throw new s(n,"Layer source does not support queryRelatedFeaturesCount capability");return o.queryRelatedFeaturesCount(x.from(e),r)}async function pt(t){const e=t.source;if(e?.refresh)try{const{dataChanged:r,updates:n}=await e.refresh();if(n!=null&&(t.sourceJSON={...t.sourceJSON,...n},t.read(n,{origin:"service",url:t.parsedUrl})),r)return!0}catch{}if(t.definitionExpression)try{return(await v(t.definitionExpression,t.fieldsIndex)).hasDateFunctions}catch{}return!1}function dt(t){const e=new f,r=t.capabilities?.data,n=t.capabilities?.query;e.historicMoment=t.historicMoment,e.gdbVersion=t.gdbVersion,e.returnGeometry=!0,n&&(e.compactGeometryEnabled=n.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&t.returnZ!=null&&(e.returnZ=t.returnZ),r.supportsM&&t.returnM!=null&&(e.returnM=t.returnM)),e.outFields=["*"];const{timeOffset:o,timeExtent:a}=t;return e.timeExtent=o!=null&&a!=null?a.offset(-o.value,o.unit):a||null,e.multipatchOption=t.geometryType==="multipatch"?"xyFootprint":null,e}function ft(t){const{globalIdField:e,fields:r}=t;if(e)return e;if(r){for(const n of r)if(n.type==="esriFieldTypeGlobalID")return n.name}}function yt(t){const{objectIdField:e,fields:r}=t;if(e)return e;if(r){for(const n of r)if(n.type==="esriFieldTypeOID")return n.name}}function mt(t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}function ht(t,e){const{subtypes:r,subtypeField:n}=t;if(!e?.attributes||!r?.length||!n)return null;const o=e.attributes[n];return o==null?null:r.find(a=>a.code===o)}function wt(t,e){const{fieldsIndex:r,subtypeField:n}=t,{name:o,type:a}=r.get(e)??{};if(!o)return null;if((n&&r.get(n)?.name)===o&&t.subtypes?.length){const i=t.subtypes.map(l=>new I({code:A(l.code,a),name:l.name}));if(i?.length)return new F({codedValues:i})}return null}function bt(t,e){const{fieldsIndex:r}=t,{name:n,type:o}=r.get(e)??{};if(!n)return null;if(("typeIdField"in t?r.get(t.typeIdField)?.name:null)===n&&"types"in t&&t.types?.length){const a=t.types.map(i=>new I({code:A(i.id,o),name:i.name}));return new F({codedValues:a})}return null}function A(t,e){return e?P({type:e})&&typeof t=="number"?`${t}`:L({type:e})&&typeof t=="string"?Number.parseInt(t,10):t:t}async function d(t){return(await t.load()).source}async function V(t,e){if(!m||m.findCredential(t))return;let r;try{const n=await S(t,e);n&&(r=await m.checkSignInStatus(`${n}/sharing`))}catch{}if(r)try{const n=e!=null?e.signal:null;await m.getCredential(t,{signal:n})}catch{}}async function gt(t,e,r){const n=t.parsedUrl?.path;n&&t.authenticationTriggerEvent===e&&await V(n,r)}function It(t){return!k(t)&&(t.userHasUpdateItemPrivileges||t.editingEnabled)}const h=j({types:E});function Ft(t,e){if(t.defaultSymbol)return t.types?.length?new _({defaultSymbol:h(t.defaultSymbol,t,e),field:t.typeIdField,uniqueValueInfos:t.types.map(r=>({id:r.id,symbol:h(r.symbol,r,e)}))}):new M({symbol:h(t.defaultSymbol,t,e)})}function xt(t){let e=t.sourceJSON?.cacheMaxAge;if(!e)return!1;const r=t.editingInfo?.lastEditDate?.getTime();return r==null||(e*=1e3,Date.now()-r<e)}async function N(t,e,r){if(e==null)return null;const n=[],{objectIdField:o}=t;if(e.forEach(u=>{let c=null;if("attributes"in u){const{attributes:p}=u;c={globalId:p[r],objectId:p[o]!=null&&p[o]!==-1?p[o]:null}}else c={globalId:u.globalId,objectId:u.objectId!=null&&u.objectId!==-1?u.objectId:null};c.globalId!=null&&(c.objectId!=null&&c.objectId!==-1||n.push(c.globalId))}),n.length===0)return null;const a=t.createQuery();a.where=n.map(u=>`${r}='${u}'`).join(" OR "),a.returnGeometry=!1,a.outFields=[o,r],a.cacheHint=!1;const i=await R(T(t,a));if(!i.ok)return null;const l=new Map,y=i.value.features;for(const u of y){const c=u.attributes[r],p=u.attributes[o];c!=null&&p!=null&&p!==-1&&l.set(C(c),p)}return l}function qt(t,e,r){if(!e||!r||!t)return null;const n=r.getAttribute(e);return n==null?null:t.find(o=>{const{id:a}=o;return a!=null&&a.toString()===n.toString()})??null}function k(t){return t.sourceJSON?.isMultiServicesView||J(t)}function J(t){return!!t.sourceJSON?.capabilities?.toLowerCase().split(",").map(e=>e.trim()).includes("map")}function At(t,e,r){const n=e?.queryBins;if(!n)throw new s(r,"Layer source does not support binning");switch(t.binParameters.type){case"auto-interval":if(!n.supportsAutoInterval)throw new s(r,"Layer source does not support auto-interval binning");break;case"date":if(!n.supportsDate)throw new s(r,"Layer source does not support date binning");break;case"fixed-boundaries":if(!n.supportsFixedBoundaries)throw new s(r,"Layer source does not support fixed-boundaries binning");break;case"fixed-interval":if(!n.supportsFixedInterval)throw new s(r,"Layer source does not support fixed-interval binning")}const o=n?.supportedStatistics;if(t.outStatistics&&o){const a=new Map([["count","count"],["sum","sum"],["min","min"],["max","max"],["avg","avg"],["stddev","stddev"],["var","var"],["percentile-continuous","percentileContinuous"],["percentile-discrete","percentileDiscrete"],["centroid-aggregate","centroid"],["convex-hull-aggregate","convexHull"],["envelope-aggregate","envelope"]]);for(const{statisticType:i}of t.outStatistics){const l=a.get(i);if(l&&!o[l])throw new s(r,`Layer source does not support ${i} statistic type`)}}}export{rt as A,xt as B,lt as C,yt as D,ut as E,tt as F,mt as G,Y as I,gt as J,N as K,ct as L,dt as M,st as O,it as P,ht as Q,pt as R,at as S,wt as T,bt as U,ft as V,qt as W,k as X,It as Z,At as _,W as g,et as q,ot as v,nt as x,Ft as z};
