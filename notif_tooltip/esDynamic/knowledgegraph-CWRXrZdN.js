import{b as I,H as B,B as W,cH as b,a0 as H,cI as J}from"./main-C2GI9Q3q.js";import{t as K,N as T}from"./arcadeUtils-CApnVgwn.js";import{i as k,a as p,r as l,d as P,P as w,$ as M,Y as Q,E as S,B as j,z as G,k as N,t as z,g as C,T as E,Z as q,_ as U}from"./languageUtils-D4KMTWV6.js";import{l as V}from"./portalUtils-84Yevqee.js";import{_ as Y,W as Z,K as _}from"./projection-BtMo7Gow.js";import $ from"./PortalItem--ns7p3Ky.js";import{p as L,n as O}from"./project-Cs-lhMW5.js";import{s as X,m as ee,t as re,p as ae,c as te}from"./Relationship-CfB-kBmT.js";let f=null;async function ie(e){const r=B.geometryServiceUrl??"";if(!r){Y()||await Z();for(const a of e)a.container[a.indexer]=_(a.container[a.indexer],W.WGS84);return}const t=e.map(a=>a.container[a.indexer]),n=new L({geometries:t,outSpatialReference:W.WGS84}),s=await O(r,n);for(let a=0;a<s.length;a++){const i=e[a];i.container[i.indexer]=s[a]}}async function D(e,r){const t=new $({portal:e,id:r});return await t.load(),f===null&&(f=await import("./knowledgeGraphService-DAxgjgXY.js").then(n=>n.k)),await f.fetchKnowledgeGraph(t.url)}function R(e,r,t,n,s){if(e===null)return null;if(w(e)||G(e))return e;if(N(e)||N(e))return e.toJSDate();if(z(e))return e.toStorageFormat();if(C(e))return e.toStorageString();if(E(e)){const a={};for(const i of e.keys())a[i]=R(e.field(i),r,t,n,s),a[i]instanceof b&&s.push({container:a,indexer:i});return a}if(S(e)){const a=e.map(i=>R(i,r,t,n,s));for(let i=0;i<a.length;i++)a[i]instanceof b&&s.push({container:a,indexer:i});return a}return q(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&r?H(e):e:void 0}function ne(e,r){if(!e)return e;if(e.spatialReference.isWGS84&&r.spatialReference.isWebMercator)return J(e);if(e.spatialReference.equals(r.spatialReference))return e;throw new p(r,l.WrongSpatialReference,null)}function v(e,r){if(!e)return null;const t={};for(const n in e)t[n]=m(e[n],r);return t}function m(e,r){return e===null?null:S(e)?e.map(t=>m(t,r)):e instanceof ee?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:v(e.properties,r)}:e instanceof re?{graphType:"object",properties:v(e.properties,r)}:e instanceof ae?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:v(e.properties,r)}:e instanceof te?{graphType:"path",path:e.path?e.path.map(t=>m(t,r)):null}:q(e)?ne(e,r):w(e)||G(e)||U(e)?e:null}function oe(e){e.mode==="async"&&(e.functions.knowledgegraphbyportalitem=function(r,t){return e.standardFunctionAsync(r,t,(n,s,a)=>{if(k(a,2,2,r,t),a[0]===null)throw new p(r,l.PortalRequired,t);if(a[0]instanceof K){const d=P(a[1]);let u;return u=r.services?.portal?r.services.portal:I.getDefault(),D(V(a[0],u),d)}if(w(a[0])===!1)throw new p(r,l.InvalidParameter,t);const i=P(a[0]);return D(r.services?.portal??I.getDefault(),i)})},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r,t){return e.standardFunctionAsync(r,t,async(n,s,a)=>{k(a,2,4,r,t);const i=a[0];if(!M(i))throw new p(r,l.InvalidParameter,t);const d=a[1];if(!w(d))throw new p(r,l.InvalidParameter,t);f===null&&(f=await import("./knowledgeGraphService-DAxgjgXY.js").then(o=>o.k));let u=null;const h=Q(a[2],null);if(!(h instanceof T||h===null))throw new p(r,l.InvalidParameter,t);if(h){let o=[];u=R(h,!0,!1,r,o),o=o.filter(c=>!c.container[c.indexer].spatialReference.isWGS84),o.length>0&&await ie(o)}const x=new X({openCypherQuery:d,bindParameters:u});(i?.serviceDefinition?.currentVersion??11.3)>11.2&&(x.outputSpatialReference=r.spatialReference);const F=(await f.executeQueryStreaming(i,x)).resultRowsStream.getReader(),y=[];try{for(;;){const{done:o,value:c}=await F.read();if(o)break;if(S(c))for(const g of c)y.push(m(g,r));else{const g=[];for(const A of c)g.push(m(c[A],r));y.push(g)}}}catch(o){throw o}return T.convertJsonToArcade(y,j(r),!1,!0)})},e.signatures.push({name:"querygraph",min:2,max:4}))}export{oe as registerFunctions};
