import{I as p,U as c,Z as F,aW as f,bn as d}from"./main-Czl6u6q4.js";import{R as E}from"./normalizeUtils-CK4aYZ3x.js";import{t as x}from"./query-i4fPi-Ah.js";import{t as j}from"./queryZScale-BpCdqTzY.js";const a="Layer does not support extent calculation.";function O(o,n){const r=o.geometry,t=o.toJSON(),e=t;if(r!=null&&(e.geometry=JSON.stringify(r),e.geometryType=f(r),e.inSR=d(r.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(n?.returnCountOnly||n?.returnExtentOnly||n?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=d(t.outSR):r&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const u=t.timeExtent,{start:i,end:s}=u;i==null&&s==null||(e.time=i===s?i:`${i??"null"},${s??"null"}`),delete t.timeExtent}return e}async function g(o,n,r,t){const e=await l(o,n,"json",t);return j(n,r,e.data),e}async function B(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?{data:{objectIds:[]}}:l(o,n,"json",r,{returnIdsOnly:!0})}async function R(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?{data:{count:0,extent:null}}:l(o,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(a);if(e.hasOwnProperty("count"))throw new Error(a);return t})}function S(o,n,r){return n.timeExtent!=null&&n.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):l(o,n,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function l(o,n,r,t={},e={}){const u=typeof o=="string"?p(o):o,i=n.geometry?[n.geometry]:[];return t.responseType="json",E(i,null,t).then(s=>{const y=s?.[0];y!=null&&((n=n.clone()).geometry=y);const m=x({...u.query,f:r,...e,...O(n,e)});return c(F(u.path,"queryTopFeatures"),{...t,query:{...m,...t.query}})})}export{S as c,R as d,B as m,g as p};
