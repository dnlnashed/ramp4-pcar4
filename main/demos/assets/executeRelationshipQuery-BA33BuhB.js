import{f as m}from"./utils-aU2bE2Ii.js";import{U as f,bp as y}from"./main-BvP2mMJi.js";import{t as j}from"./query-BzYLW8Pv.js";import{d as R}from"./FeatureSet-B3dvUSz7.js";import{d as l}from"./RelationshipQuery-CKZZLjqZ.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtils-CZuR4U2F.js";import"./normalizeUtilsCommon-DV3peIvO.js";import"./utils-C4fiXq06.js";import"./pbfQueryUtils-CCOmkrDY.js";import"./pbf-CIq_lw8u.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CngFBI6j.js";import"./projection-96b3oHY5.js";import"./projectBuffer-BwKv3h14.js";import"./Field-Es9rqDok.js";import"./fieldType-CEOeHy7Y.js";import"./Query-DWs7GZ6H.js";import"./TimeExtent-BPaAkukn.js";function b(r,e){const t=r.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!e?.returnCountOnly?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=y(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function F(r,e,t){const n=await p(r,e,t),o=n.data,i=o.geometryType,a=o.spatialReference,s={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:i,spatialReference:a,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)s[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(s[c[u]]=d)}return{...n,data:s}}async function h(r,e,t){const n=await p(r,e,t,{returnCountOnly:!0}),o=n.data,i={};for(const a of o.relatedRecordGroups)a.objectId!=null&&(i[a.objectId]=a.count);return{...n,data:i}}async function p(r,e,t={},n){const o=j({...r.query,f:"json",...n,...b(e,n)});return f(r.path+"/queryRelatedRecords",{...t,query:{...t.query,...o}})}async function U(r,e,t){e=l.from(e);const n=m(r);return F(n,e,t).then(o=>{const i=o.data,a={};return Object.keys(i).forEach(s=>a[s]=R.fromJSON(i[s])),a})}async function $(r,e,t){e=l.from(e);const n=m(r);return h(n,e,{...t}).then(o=>o.data)}export{U as executeRelationshipQuery,$ as executeRelationshipQueryForCount};
