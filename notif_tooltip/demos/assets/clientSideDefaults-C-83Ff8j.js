import{bW as u,bX as n,bY as i,b1 as a,h as c}from"./main-CxlHa1F_.js";import{t as l}from"./QueryEngineCapabilities-DjYb9CEb.js";import{s as y}from"./capabilities-Y9lFlGVh.js";function $(t){return{renderer:{type:"simple",symbol:t==="esriGeometryPoint"||t==="esriGeometryMultipoint"?u:t==="esriGeometryPolyline"?n:i}}}const d=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let m=1;function b(t,s){if(a("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let r=`this${p(s)} = null;`;for(const e in t)r+=`this${p(e)} = ${JSON.stringify(t[e])};`;const o=new Function(`
      return class AttributesClass$${m++} {
        constructor() {
          ${r};
        }
      }
    `)();return()=>new o}catch{return()=>({[s]:null,...t})}}function p(t){return d.test(t)?`.${t}`:`["${t}"]`}function B(t={}){return[{name:"New Feature",description:"",prototype:{attributes:c(t)}}]}function C(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:l,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:y,editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}export{b as a,B as l,$ as u,C as y};
