import{eL as O,bQ as x,B as v}from"./main-C872cFCP.js";import{O as C}from"./quat-BO7eUcmh.js";import{e as k}from"./quatf64-C16JxGFv.js";import{Q as F}from"./vec32-Du0R6XLp.js";import{t as A,n as w}from"./vec3f32-BS0cezmI.js";import{n as R}from"./projectBuffer-BAJSFEkv.js";import{a as B,b as U,d as J}from"./PointCloudUniqueValueRenderer-DqeaH6KK.js";import{w as N,l as V,c as T,I as q}from"./I3SBinaryReader-69pROKcF.js";import{I as z}from"./orientedBoundingBox-fOU6Ag3n.js";function E(i,e,l,n){const{rendererJSON:c,isRGBRenderer:m}=i;let t=null,f=null;if(e&&m)t=e;else if(e&&c?.type==="pointCloudUniqueValueRenderer"){f=B.fromJSON(c);const r=f.colorUniqueValueInfos;t=new Uint8Array(3*n);const s=g(f.fieldTransformType);for(let o=0;o<n;o++){const a=(s?s(e[o]):e[o])+"";for(let u=0;u<r.length;u++)if(r[u].values.includes(a)){t[3*o]=r[u].color.r,t[3*o+1]=r[u].color.g,t[3*o+2]=r[u].color.b;break}}}else if(e&&c?.type==="pointCloudStretchRenderer"){f=U.fromJSON(c);const r=f.stops;t=new Uint8Array(3*n);const s=g(f.fieldTransformType);for(let o=0;o<n;o++){const a=s?s(e[o]):e[o],u=r.length-1;if(a<r[0].value)t[3*o]=r[0].color.r,t[3*o+1]=r[0].color.g,t[3*o+2]=r[0].color.b;else if(a>=r[u].value)t[3*o]=r[u].color.r,t[3*o+1]=r[u].color.g,t[3*o+2]=r[u].color.b;else for(let b=1;b<r.length;b++)if(a<r[b].value){const p=(a-r[b-1].value)/(r[b].value-r[b-1].value);t[3*o]=r[b].color.r*p+r[b-1].color.r*(1-p),t[3*o+1]=r[b].color.g*p+r[b-1].color.g*(1-p),t[3*o+2]=r[b].color.b*p+r[b-1].color.b*(1-p);break}}}else if(e&&c?.type==="pointCloudClassBreaksRenderer"){f=J.fromJSON(c);const r=f.colorClassBreakInfos;t=new Uint8Array(3*n);const s=g(f.fieldTransformType);for(let o=0;o<n;o++){const a=s?s(e[o]):e[o];for(let u=0;u<r.length;u++)if(a>=r[u].minValue&&a<=r[u].maxValue){t[3*o]=r[u].color.r,t[3*o+1]=r[u].color.g,t[3*o+2]=r[u].color.b;break}}}else t=new Uint8Array(3*n).fill(255);if(l&&f?.colorModulation){const r=f.colorModulation.minValue,s=f.colorModulation.maxValue,o=.3;for(let a=0;a<n;a++){const u=l[a],b=u>=s?1:u<=r?o:o+(1-o)*(u-r)/(s-r);t[3*a]=b*t[3*a],t[3*a+1]=b*t[3*a+1],t[3*a+2]=b*t[3*a+2]}}return t}function L(i,e){if(i.encoding==null||i.encoding===""){const l=N(e,i);if(l.vertexAttributes.position==null)return;const n=V(e,l.vertexAttributes.position),c=l.header.fields,m=[c.offsetX,c.offsetY,c.offsetZ],t=[c.scaleX,c.scaleY,c.scaleZ],f=n.length/3,r=new Float64Array(3*f);for(let s=0;s<f;s++)r[3*s]=n[3*s]*t[0]+m[0],r[3*s+1]=n[3*s+1]*t[1]+m[1],r[3*s+2]=n[3*s+2]*t[2]+m[2];return r}if(i.encoding==="lepcc-xyz")return T(e).result}function h(i,e,l){return i?.attributeInfo.useElevation?e?Q(e,l):null:i?.attributeInfo.storageInfo?q(i.attributeInfo.storageInfo,i.buffer,l):null}function Q(i,e){const l=new Float64Array(e);for(let n=0;n<e;n++)l[n]=i[3*n+2];return l}function X(i,e,l,n,c){const m=i.length/3;let t=0;for(let f=0;f<m;f++){let r=!0;for(let s=0;s<n.length&&r;s++){const{filterJSON:o}=n[s],a=c[s].values[f];switch(o.type){case"pointCloudValueFilter":{const u=o.mode==="exclude";o.values.includes(a)===u&&(r=!1);break}case"pointCloudBitfieldFilter":{const u=M(o.requiredSetBits),b=M(o.requiredClearBits);((a&u)!==u||a&b)&&(r=!1);break}case"pointCloudReturnFilter":{const u=15&a,b=a>>>4&15,p=b>1,S=u===1,y=u===b;let I=!1;for(const d of o.includedReturns)if(d==="last"&&y||d==="firstOfMany"&&S&&p||d==="lastOfMany"&&y&&p||d==="single"&&!p){I=!0;break}I||(r=!1);break}}}r&&(l[t]=f,i[3*t]=i[3*f],i[3*t+1]=i[3*f+1],i[3*t+2]=i[3*f+2],e[3*t]=e[3*f],e[3*t+1]=e[3*f+1],e[3*t+2]=e[3*f+2],t++)}return t}function g(i){switch(i){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function M(i){let e=0;for(const l of i||[])e|=1<<l;return e}class Y{transform(e){const l=this._transform(e),n=[l.points.buffer,l.rgb.buffer];l.pointIdFilterMap!=null&&n.push(l.pointIdFilterMap.buffer);for(const c of l.attributes)"buffer"in c.values&&O(c.values.buffer)&&c.values.buffer!==l.rgb.buffer&&n.push(c.values.buffer);return Promise.resolve({result:l,transferList:n})}_transform(e){const l=L(e.schema,e.geometryBuffer);let n=l.length/3,c=null;const m=new Array,t=h(e.primaryAttributeData,l,n);e.primaryAttributeData!=null&&t&&m.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:t});const f=h(e.modulationAttributeData,l,n);e.modulationAttributeData!=null&&f&&m.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:f});let r=E(e.rendererInfo,t,f,n);if(e.filterInfo&&e.filterInfo.length>0&&e.filterAttributesData!=null){const o=e.filterAttributesData.filter(x).map(a=>{const u=h(a,l,n),b={attributeInfo:a.attributeInfo,values:u};return m.push(b),b});c=new Uint32Array(n),n=X(l,r,c,e.filterInfo,o)}for(const o of e.userAttributesData){const a=h(o,l,n);m.push({attributeInfo:o.attributeInfo,values:a})}3*n<r.length&&(r=new Uint8Array(r.buffer.slice(0,3*n))),_(l,n,e.elevationOffset);const s=Z(l,n,z.fromData(e.obbData),v.fromJSON(e.inSR),v.fromJSON(e.outSR));return{obbData:e.obbData,points:s,rgb:r,attributes:m,pointIdFilterMap:c}}}function Z(i,e,l,n,c){if(!R(i,n,0,i,c,0,e))throw new Error("Can't reproject");const m=A(l.center),t=w(),f=w(),r=A(l.halfSize);C(D,l.quaternion);const s=new Float32Array(3*e);for(let o=0;o<e;o++){let a=3*o;t[0]=i[a]-m[0],t[1]=i[a+1]-m[1],t[2]=i[a+2]-m[2],F(f,t,D),r[0]=Math.max(r[0],Math.abs(f[0])),r[1]=Math.max(r[1],Math.abs(f[1])),r[2]=Math.max(r[2],Math.abs(f[2])),s[a++]=t[0],s[a++]=t[1],s[a]=t[2]}return l.halfSize=r,s}function _(i,e,l){if(l!==0)for(let n=0;n<e;n++)i[3*n+2]+=l}const D=k();function j(){return new Y}export{j as default};