const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineBase-8g0RzW7z.js","./_commonjsHelpers-DCkdB7M8.js","./hydrated-Bh1D-EQy.js","./main-C4ZPumQG.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css"])))=>i.map(i=>d[i]);
import{_ as W}from"./preload-helper-ExcqyqRp.js";import{aC as N,bj as j,gN as g,bi as C,fw as D,D as b,s as ln,cj as d,S as K,bx as un,aw as an,bF as cn,aV as fn,bG as pn,gO as hn,G as mn,gP as dn,aT as Q,aS as gn,gQ as wn,ce as F,cO as V,eF as q}from"./main-C4ZPumQG.js";import{n as L,G as _n,E as yn}from"./projectBuffer-C2AmViVa.js";function B(e,t,n,s,i,r){return E[0]=e,E[1]=t,E[2]=n,L(E,s,0,i,r,0)}const E=N();let S=0;class k{static fromGE(t){const n=new k;return n._wkt=t.wkt,n._wkid=t.wkid,n._isInverse=t.isInverse,n}constructor(t){this.uid=S++,t?(this._wkt=t.wkt!=null?t.wkt:null,this._wkid=t.wkid!=null?t.wkid:-1,this._isInverse=t.isInverse!=null&&t.isInverse===!0):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}get wkt(){return this._wkt}set wkt(t){this._wkt=t,this.uid=S++}get wkid(){return this._wkid}set wkid(t){this._wkid=t,this.uid=S++}get isInverse(){return this._isInverse}set isInverse(t){this._isInverse=t,this.uid=S++}getInverse(){const t=new k;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t}}let O=class v{static cacheKey(t,n){return[t.wkid?.toString()??"-1",t.wkt?.toString()??"",t.wkt2?.toString()??"",n.wkid?.toString()??"-1",n.wkt?.toString()??"",n.wkt2?.toString()??""].join()}static fromGE(t){const n=new v;let s="";for(const i of t.steps){const r=k.fromGE(i);n.steps.push(r),s+=r.uid.toString()+","}return n._cachedProjection={},n._gtlistentry=null,n._chain=s,n}constructor(t){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,t?.steps)for(const n of t.steps)n instanceof k?this.steps.push(n):this.steps.push(new k({wkid:n.wkid,wkt:n.wkt,isInverse:n.isInverse}))}getInverse(){const t=new v;t.steps=[];for(let n=this.steps.length-1;n>=0;n--){const s=this.steps[n];t.steps.push(s.getInverse())}return t}getGTListEntry(){let t="";for(const n of this.steps)t+=n.uid.toString()+",";return t!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=t),this._gtlistentry}assignCachedGe(t,n,s){this._cachedProjection[v.cacheKey(t,n)]=s}getCachedGeTransformation(t,n){let s="";for(const r of this.steps)s+=r.uid.toString()+",";s!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=s);const i=this._cachedProjection[v.cacheKey(t,n)];return i===void 0?null:i}};function kn(e,t,n){if(t==null||n==null||n.vcsWkid||j(t,n)||g(t)||g(n))return null;const s=C(t)/C(n);if(s===1)return null;switch(e){case"point":case"esriGeometryPoint":return i=>vn(i,s);case"polyline":case"esriGeometryPolyline":return i=>jn(i,s);case"polygon":case"esriGeometryPolygon":return i=>Rn(i,s);case"multipoint":case"esriGeometryMultipoint":return i=>xn(i,s);case"extent":case"esriGeometryEnvelope":return i=>Pn(i,s);default:return null}}function vn(e,t){e?.z!=null&&(e.z*=t)}function Rn(e,t){if(e)for(const n of e.rings)for(const s of n)s.length>2&&(s[2]*=t)}function jn(e,t){if(e)for(const n of e.paths)for(const s of n)s.length>2&&(s[2]*=t)}function xn(e,t){if(e)for(const n of e.points)n.length>2&&(n[2]*=t)}function Pn(e,t){e&&e.zmin!=null&&e.zmax!=null&&(e.zmin*=t,e.zmax*=t)}let m=null,w=null,R=null,$={};const A=new gn;function G(){return!!m&&wn()}function H(){return!!G()||(Q(A),x(),!1)}function Gn(e,t){return!e||!t||_(e,t)||H()}function In(e,t){return!_(e,t)&&!G()}function x(e){return R==null&&(R=Promise.all([hn(),W(()=>import("./geometryEngineBase-8g0RzW7z.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.g),W(()=>import("./hydrated-Bh1D-EQy.js"),__vite__mapDeps([2,3,4,5]),import.meta.url)])),R.then(([,t,{hydratedAdapter:n}])=>{mn(e),w=n,m=t.default,m._enableProjection(dn),A.notify()})}function J(e,t,n=null,s=null){return Array.isArray(e)?e.length===0?[]:Z(w,e,e[0].spatialReference,t,n,s):Z(w,[e],e.spatialReference,t,n,s)[0]}function Z(e,t,n,s,i=null,r=null){if(n==null||s==null)return t;if(_(n,s,i))return t.map(o=>M(o,n,s));if(i==null&&D(n))return t.map(o=>M(o,n,b.WGS84)).map(o=>P(o,s));if(i==null&&D(s))return t.map(o=>P(o,b.WGS84)).map(o=>M(o,b.WGS84,s));if(i==null){const o=O.cacheKey(n,s);$[o]!==void 0?i=$[o]:((i=X(n,s,void 0))==null&&(i=new O),$[o]=i)}if(m==null||e==null)throw new T;return r!=null?m._project(e,t,n,s,i,r):m._project(e,t,n,s,i)}function zn(e,t){const n=U([e],t);return n.pending!=null?{pending:n.pending,geometry:null}:n.geometries!=null?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function U(e,t){if(!G()){for(const n of e)if(n!=null&&!j(n.spatialReference,t)&&d(n.spatialReference)&&d(t)&&!_(n.spatialReference,t))return Q(A),{pending:x(),geometries:null}}return{pending:null,geometries:e.map(n=>n==null?null:j(n.spatialReference,t)?n:d(n.spatialReference)&&d(t)?P(n,t):null)}}function X(e,t,n=null){if(e==null||t==null)return null;if(m==null||w==null)throw new T;const s=m._getTransformation(w,e,t,n,n?.spatialReference);return s!==null?O.fromGE(s):null}function En(e,t,n=null){if(m==null||w==null)throw new T;const s=m._getTransformationBySuitability(w,e,t,n,n?.spatialReference);if(s!==null){const i=[];for(const r of s)i.push(O.fromGE(r));return i}return[]}class T extends ln{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function Sn(){m=null,w=null,R=null,$={}}const $n={get loadPromise(){return R}};function P(e,t){try{const n=J(e,t);if(n==null)return null;"xmin"in e&&"xmin"in n&&(n.zmin=e.zmin,n.zmax=e.zmax);const s=kn(n.type,e.spatialReference,t);return s?.(n),n}catch(n){if(!(n instanceof T))throw n;return null}}async function Mn(e,t,n){const s=e.spatialReference;return s!=null&&t!=null&&await Y(s,t,null,n),P(e,t)}function _(e,t,n){return!n&&(!!j(e,t)||d(e)&&d(t)&&!!_n(e,t,yn))}function On(e,t){if(j(e,t))return!0;if(!d(e)||!d(t))return!1;const n=F(e)||V(e)||q(e),s=F(t)||V(t)||q(t);return n&&s}async function Y(e,t,n,s){if(G())return K(s);if(Array.isArray(e)){for(const{source:i,dest:r,geographicTransformation:o}of e)if(i&&r&&!_(i,r,o))return x(s)}else if(e&&t&&!_(e,t,n))return x(s);return K(s)}function M(e,t,n){return e?"x"in e?nn(e,t,new un,n,0):"xmin"in e?rn(e,t,new an,n,0):"rings"in e?sn(e,t,new cn,n,0):"paths"in e?en(e,t,new fn,n,0):"points"in e?tn(e,t,new pn,n,0):null:null}function Ln(e,t,n=t.spatialReference,s=0){return n!=null&&e.spatialReference!=null&&nn(e,e.spatialReference,t,n,s)!=null}function nn(e,t,n,s,i){a[0]=e.x,a[1]=e.y;const r=e.z;return a[2]=r!==void 0?r:i,L(a,t,0,a,s,0)?(n.x=a[0],n.y=a[1],n.spatialReference=s,r!==void 0||g(s)?(n.z=a[2],n.hasZ=!0):(n.z=void 0,n.hasZ=!1),e.m===void 0?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}function Tn(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&tn(e,e.spatialReference,t,n,s)!=null}function tn(e,t,n,s,i){const{points:r,hasZ:o,hasM:u}=e,l=[],p=r.length,h=[];for(const c of r)h.push(c[0],c[1],o?c[2]:i);if(!L(h,t,0,h,s,0,p))return null;const f=o||g(s);for(let c=0;c<p;++c){const y=3*c,I=h[y],z=h[y+1];f&&u?l.push([I,z,h[y+2],r[c][3]]):f?l.push([I,z,h[y+2]]):u?l.push([I,z,r[c][2]]):l.push([I,z])}return n.points=l,n.spatialReference=s,n.hasZ=o,n.hasM=u,n}function bn(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&en(e,e.spatialReference,t,n,s)!=null}function en(e,t,n,s,i){const{paths:r,hasZ:o,hasM:u}=e,l=[];if(!on(r,o??!1,u??!1,t,l,s,i))return null;const p=o||g(s);return n.paths=l,n.spatialReference=s,n.hasZ=p,n.hasM=u,n}function Zn(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&sn(e,e.spatialReference,t,n,s)!=null}function sn(e,t,n,s,i){const{rings:r,hasZ:o,hasM:u}=e,l=[];if(!on(r,o??!1,u??!1,t,l,s,i))return null;const p=o||g(s);return n.rings=l,n.spatialReference=s,n.hasZ=p,n.hasM=u,n}function An(e,t,n=t.spatialReference,s=0){return e.spatialReference!=null&&n!=null&&rn(e,e.spatialReference,t,n,s)!=null}function rn(e,t,n,s,i){const{xmin:r,ymin:o,xmax:u,ymax:l,hasZ:p,hasM:h}=e,f=p?e.zmin:i;if(!B(r,o,f,t,a,s))return null;const c=p||g(s);n.xmin=a[0],n.ymin=a[1],c&&(n.zmin=a[2]);const y=p?e.zmax:i;return B(u,l,y,t,a,s)?(n.xmax=a[0],n.ymax=a[1],c&&(n.zmax=a[2]),h&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=s,n):null}function on(e,t,n,s,i,r,o=0){const u=new Array;for(const h of e)for(const f of h)u.push(f[0],f[1],t?f[2]:o);if(!L(u,s,0,u,r,0))return!1;let l=0;i.length=0;const p=t||g(r);for(const h of e){const f=new Array;for(const c of h)p&&n?f.push([u[l++],u[l++],u[l++],c[3]]):p?f.push([u[l++],u[l++],u[l++]]):n?(f.push([u[l++],u[l++],c[2]]),l++):(f.push([u[l++],u[l++]]),l++);i.push(f)}return!0}const a=N(),Kn=Object.freeze(Object.defineProperty({__proto__:null,canProjectWithoutEngine:_,getTransformation:X,getTransformations:En,initializeProjection:Y,isEqualBaseGCS:On,isLoaded:G,isLoadedOrLoad:H,isLoadedOrLoadFor:Gn,load:x,project:J,projectExtent:An,projectMany:Z,projectMultipoint:Tn,projectOrLoad:zn,projectOrLoadMany:U,projectPoint:Ln,projectPolygon:Zn,projectPolyline:bn,projectWithZConversion:Mn,projectWithoutEngine:M,requiresLoad:In,test:$n,tryProjectWithZConversion:P,unload:Sn},Symbol.toStringTag,{value:"Module"}));export{Gn as B,P as H,_ as J,J as K,On as L,Y as N,Z as O,M as Q,zn as V,x as W,U as X,X as Y,G as _,Zn as a,kn as o,Kn as p,O as s};
