import{I as S,U as x,Z as E,bn as d,aW as O}from"./main-jlUEdDH5.js";import{R as g}from"./normalizeUtils-BjTD8LSr.js";import{t as R}from"./pbfQueryUtils-_KEqDz43.js";import{t as F}from"./queryZScale-DG_56-wZ.js";function f(r){const e={};for(const a in r){if(a==="declaredClass")continue;const t=r[a];if(t!=null&&typeof t!="function")if(Array.isArray(t)){e[a]=[];for(let n=0;n<t.length;n++)e[a][n]=f(t[n])}else typeof t=="object"?t.toJSON&&(e[a]=JSON.stringify(t)):e[a]=t}return e}const m="Layer does not support extent calculation.";function b(r,e){if(e&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(e&&r.type==="point")return`${r.x},${r.y}`;const a=r.toJSON();return delete a.spatialReference,JSON.stringify(a)}function j(r,e){const a=r.geometry,t=r.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const n=t;let i,o,l;if(a!=null&&(o=a.spatialReference,l=d(o),n.geometryType=O(a),n.geometry=b(a,r.compactGeometryEnabled),n.inSR=l),t.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?delete n.outFields:t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","),t.outSR?(n.outSR=d(t.outSR),i=r.outSpatialReference):a&&(t.returnGeometry||t.returnCentroid)&&(n.outSR=n.inSR,i=o),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(n.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(n.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(n.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&o!=null&&r.quantizationParameters?.extent!=null&&o.equals(r.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(n.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(n.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(n.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const c=t.timeExtent,{start:u,end:y}=c;u==null&&y==null||(n.time=u===y?u:`${u??"null"},${y??"null"}`),delete t.timeExtent}return r.defaultSpatialReferenceEnabled&&o!=null&&i!=null&&o.equals(i)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function q(r,e,a,t){const n=e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await s(r,e,"json",t);return F(e,a,n.data),n}async function J(r,e,a,t){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:a.createFeatureResult()};const n=await p(r,e,t),i=n;return i.data=R(n.data,a),i}function p(r,e,a){return s(r,e,"pbf",a)}function N(r,e,a){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):s(r,e,"json",a,{returnIdsOnly:!0})}function P(r,e,a){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(r,e,"json",a,{returnIdsOnly:!0,returnCountOnly:!0})}async function w(r,e,a){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const t=await s(r,e,"json",a,{returnExtentOnly:!0,returnCountOnly:!0}),n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(m);if(n.hasOwnProperty("count"))throw new Error(m);return t}async function s(r,e,a,t={},n={}){const i=typeof r=="string"?S(r):r,o=e.geometry?[e.geometry]:[],l=await g(o,null,{signal:t.signal}),c=l?.[0];c!=null&&((e=e.clone()).geometry=c);const u=f({...i.query,f:a,...n,...j(e,n)});return x(E(i.path,z(e,n)?"query3d":"query"),{...t,responseType:a==="pbf"?"array-buffer":"json",query:{...u,...t.query}})}function z(r,e){return r.formatOf3DObjects!=null&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}export{P as S,q as c,p as d,J as f,N as p,f as t,w as x};
