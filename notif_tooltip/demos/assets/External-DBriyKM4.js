import{c$ as g,G as h,U as b}from"./main-CxlHa1F_.js";import{c as N,p as A}from"./infoFor3D-_5f2f6Um.js";class m{constructor(r,s,t){this.assetName=r,this.assetMimeType=s,this.parts=t}equals(r){return this===r||this.assetName===r.assetName&&this.assetMimeType===r.assetMimeType&&g(this.parts,r.parts,(s,t)=>s.equals(t))}isOnService(r){return this.parts.every(s=>s.isOnService(r))}makeHash(){let r="";for(const s of this.parts)r+=s.partHash;return r}async toBlob(r){const{parts:s}=this;if(s.length===1)return s[0].toBlob(r);const t=await Promise.all(s.map(a=>a.toBlob(r)));return h(r),new Blob(t)}}class B{constructor(r,s){this.partUrl=r,this.partHash=s}equals(r){return this===r||this.partUrl===r.partUrl&&this.partHash===r.partHash}isOnService(r){return this.partUrl.startsWith(`${r.path}/assets/`)}async toBlob(r){const{data:s}=await b(this.partUrl,{responseType:"blob"});return h(r),s}}function H(e){return $(e?.source)}function u(e){return Array.isArray(e)?e.every(r=>r instanceof m):!1}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,f=/\.(gltf|glb)/i;function $(e){return e?Array.isArray(e)?e.some(l):l(e):!1}function l(e){if(e instanceof File){const{type:r,name:s}=e;return c.test(r)||f.test(s)}return c.test(e.assetMimeType)||f.test(e.assetName)}function M(e,r){if(!e)return!1;const{source:s}=e;return v(s,r)}function q(e,r){if(e===r)return!0;const{source:s}=e,{source:t}=r;if(s===t)return!0;if(u(s)&&u(t)){if(s.length!==t.length)return!1;const a=(n,o)=>n.assetName<o.assetName?-1:n.assetName>o.assetName?1:0,i=[...s].sort(a),y=[...t].sort(a);for(let n=0;n<i.length;++n)if(!i[n].equals(y[n]))return!1;return!0}return!1}function v(e,r){if(Array.isArray(e)){const s=e;return s.length>0&&s.every(t=>p(t,r))}return p(e,r)}function p(e,r){return e instanceof m&&e.isOnService(r)}function O(e,r){return e instanceof File?N(e,r):A(e.assetMimeType,e.assetName,r)}function S(e){return Array.isArray(e)?e:[e]}function d(e){return!!e.original}export{d as A,S as N,m as a,O as b,q as h,B as i,M as m,H as o};
