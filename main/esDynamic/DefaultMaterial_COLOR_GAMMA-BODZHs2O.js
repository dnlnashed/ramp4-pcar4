import{b$ as S,hh as w,hi as j,hj as I,fd as A,D as R,hk as T,U as O,_ as q,G as x,s as v,cj as z}from"./main-Czl6u6q4.js";import{l as M,i as N}from"./Indices-CGPnLogP.js";import{E as l}from"./enums-DBi1-Mm2.js";function m(t,e){c(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function c(t,e,a=2,o=a){const n=e.length/2;let r=0,f=0;if(S(e)||w(e)){for(let s=0;s<n;++s)t[r]=e[f],t[r+1]=e[f+1],r+=a,f+=o;return}const u=j(e);if(I(e))for(let s=0;s<n;++s)t[r]=Math.max(e[f]/u,-1),t[r+1]=Math.max(e[f+1]/u,-1),r+=a,f+=o;else for(let s=0;s<n;++s)t[r]=e[f]/u,t[r+1]=e[f+1]/u,r+=a,f+=o}function _(t,e,a,o){const n=t.typedBuffer,r=t.typedBufferStride,f=o?.count??t.count;let u=(o?.dstIndex??0)*r;for(let s=0;s<f;++s)n[u]=e,n[u+1]=a,u+=r}Object.freeze(Object.defineProperty({__proto__:null,fill:_,normalizeIntegerBuffer:c,normalizeIntegerBufferView:m},Symbol.toStringTag,{value:"Module"}));function B(t,e){d(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function d(t,e,a=3,o=a){const n=e.length/o;let r=0,f=0;for(let u=0;u<n;++u)t[r]=e[f],t[r+1]=e[f+1],t[r+2]=e[f+2],r+=a,f+=o}function h(t,e,a,o,n){const r=t.typedBuffer,f=t.typedBufferStride,u=n?.count??t.count;let s=(n?.dstIndex??0)*f;for(let i=0;i<u;++i)r[s]=e,r[s+1]=a,r[s+2]=o,s+=f}Object.freeze(Object.defineProperty({__proto__:null,copy:d,copyView:B,fill:h},Symbol.toStringTag,{value:"Module"}));function b(t,e){y(t.typedBuffer,e,t.typedBufferStride)}function y(t,e,a=4){const o=e.typedBuffer,n=e.typedBufferStride,r=e.count;let f=0,u=0;for(let s=0;s<r;++s)t[f]=o[u],t[f+1]=o[u+1],t[f+2]=o[u+2],t[f+3]=o[u+3],f+=a,u+=n}function g(t,e,a,o,n,r){const f=t.typedBuffer,u=t.typedBufferStride,s=r?.count??t.count;let i=(r?.dstIndex??0)*u;for(let p=0;p<s;++p)f[i]=e,f[i+1]=a,f[i+2]=o,f[i+3]=n,i+=u}Object.freeze(Object.defineProperty({__proto__:null,copy:y,copyView:b,fill:g},Symbol.toStringTag,{value:"Module"}));class U{constructor(e){this._streamDataRequester=e}async loadJSON(e,a){return this._load("json",e,a)}async loadBinary(e,a){return A(e)?(R(a),T(e)):this._load("binary",e,a)}async loadImage(e,a){return this._load("image",e,a)}async _load(e,a,o){if(this._streamDataRequester==null)return(await O(a,{responseType:D[e]})).data;const n=await q(this._streamDataRequester.request(a,e,o));if(n.ok===!0)return n.value;throw x(n.error),new v("glt-loader-request-error",`Request for resource failed: ${n.error}`)}}const D={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function E(t,e){switch(e){case l.TRIANGLES:return G(t);case l.TRIANGLE_STRIP:return P(t);case l.TRIANGLE_FAN:return V(t)}}function G(t){return typeof t=="number"?M(t):z(t)?new Uint16Array(t):t}function P(t){const e=typeof t=="number"?t:t.length;if(e<3)return[];const a=e-2,o=N(3*a);if(typeof t=="number"){let n=0;for(let r=0;r<a;r+=1)r%2==0?(o[n++]=r,o[n++]=r+1,o[n++]=r+2):(o[n++]=r+1,o[n++]=r,o[n++]=r+2)}else{let n=0;for(let r=0;r<a;r+=1)r%2==0?(o[n++]=t[r],o[n++]=t[r+1],o[n++]=t[r+2]):(o[n++]=t[r+1],o[n++]=t[r],o[n++]=t[r+2])}return o}function V(t){const e=typeof t=="number"?t:t.length;if(e<3)return new Uint16Array(0);const a=e-2,o=a<=65536?new Uint16Array(3*a):new Uint32Array(3*a);if(typeof t=="number"){let u=0;for(let s=0;s<a;++s)o[u++]=0,o[u++]=s+1,o[u++]=s+2;return o}const n=t[0];let r=t[1],f=0;for(let u=0;u<a;++u){const s=t[u+2];o[f++]=n,o[f++]=r,o[f++]=s,r=s}return o}const k=2.1;export{g as a,m as b,B as c,k as d,b as e,h as f,c as g,d as h,_ as l,U as n,E as o,y as t};
