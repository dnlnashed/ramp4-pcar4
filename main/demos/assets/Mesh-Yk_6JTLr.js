const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loadGLTFMesh-BnzZMVNA.js","./main-BvP2mMJi.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./mat3-XZDRtl20.js","./common-DQOJ18NT.js","./mat3f64-q3fE-ZOt.js","./vec4f64-CMoMXWBi.js","./MeshVertexAttributes-CepEhI8m.js","./meshVertexSpaceUtils-C3YLj0Qx.js","./vec32-dwN7UxOE.js","./MeshLocalVertexSpace-Dk_hjKAW.js","./BufferView-ClyhgvMd.js","./vec2-DGVIkCvT.js","./vec42-CKs01hkn.js","./vec3-DI0GK2i8.js","./vec4-B_e4TE4m.js","./types-D0PSWh4d.js","./loader-u3Q-lqM2.js","./mat4f64-CSKppSlJ.js","./enums-Dk3osxpS.js","./Version-6jGLrZbF.js","./mat4-CXjyCzoa.js","./quat-CfwtNjOD.js","./quatf64-aQ5IuZRd.js","./resourceUtils-BkjyVXJz.js","./basicInterfaces-CZwQPxTp.js","./DefaultMaterial_COLOR_GAMMA-Ctqv7CWf.js","./Indices-OtKiVCR2.js","./vertexSpaceConversion-Dp6OIHT3.js","./spatialReferenceEllipsoidUtils-bxrqrL0N.js","./computeTranslationToOriginAndRotation-GrL5d37X.js","./projectBuffer-BwKv3h14.js","./projectPointToVector-jUcoGXxZ.js","./projection-96b3oHY5.js","./MeshTransform-DoMumNNa.js","./imageUtils-dCc_S-fe.js","./earcut-Lltz9D9k.js","./plane-ncU54Mly.js","./vec2f64-B7N_6o8F.js","./deduplicate-DUXipJw9.js","./External-BiwpYwjr.js","./infoFor3D-_5f2f6Um.js","./gltfexport-Bi8FTKhS.js"])))=>i.map(i=>d[i]);
import{_ as Re}from"./preload-helper-ExcqyqRp.js";import{q as u,u as f,a0 as Nt,v as Wt,z as Pt,C as z,A as ve,dn as We,cJ as Se,b0 as zt,aE as ot,bA as Pe,n as ie,h as Ae,s as ne,eL as Ht,cG as _,bs as Bt,bi as Gt,iB as kt,iC as Vt,iD as je,h6 as le,ca as Zt,aC as R,cs as Me,iE as qt,gK as ze,iF as _e,aw as Xt,bw as st,G as we,bx as E,R as Yt,fc as Jt,hR as Kt,fq as Qt,aP as er,g3 as tr,V as rr,aI as nr,eu as or,fL as $e,f as sr,gv as ir,aG as ar,bR as lr,iG as cr,bF as ur,iH as pr,cK as hr}from"./main-BvP2mMJi.js";import{j as it,N as oe,z as at,w as pe,k as lt,d as fr}from"./MeshTransform-DoMumNNa.js";import{c as mr}from"./imageUtils-dCc_S-fe.js";import{r as dr,n as gr,p as he}from"./MeshVertexAttributes-CepEhI8m.js";import{b as Ce,a as fe}from"./MeshLocalVertexSpace-Dk_hjKAW.js";import{a as ae,s as me,g as ct,u as yr}from"./meshVertexSpaceUtils-C3YLj0Qx.js";import{e as xr}from"./earcut-Lltz9D9k.js";import{t as ut}from"./Indices-OtKiVCR2.js";import{o as de,c as vr,u as wr,N as De,A as $r,z as pt,E as br,g as Ar}from"./vec32-dwN7UxOE.js";import{M as Tr,O as Rr,v as Sr}from"./plane-ncU54Mly.js";import{e as He}from"./deduplicate-DUXipJw9.js";import{c as I}from"./projectPointToVector-jUcoGXxZ.js";import{F as $,B as Le,O as N,n as Mr,k as ht,g as ft,E as mt,w as dt,h as gt,R as yt,G as xt}from"./vertexSpaceConversion-Dp6OIHT3.js";import{e as be}from"./mat4f64-CSKppSlJ.js";import{J as _r}from"./projection-96b3oHY5.js";import{a as Ie}from"./spatialReferenceEllipsoidUtils-bxrqrL0N.js";import{C as vt}from"./computeTranslationToOriginAndRotation-GrL5d37X.js";import{n as Cr}from"./projectBuffer-BwKv3h14.js";import{e as Be,i as Dr}from"./vec3-DI0GK2i8.js";import{o as Ge,h as Lr,m as Fr}from"./External-BiwpYwjr.js";import{e as wt}from"./mat3f64-q3fE-ZOt.js";import{n as Or}from"./mat3-XZDRtl20.js";import{D as $t,c as bt,O as At,f as Tt,I as Rt,p as Er}from"./mat4-CXjyCzoa.js";import{b as jr}from"./quat-CfwtNjOD.js";import{e as Ir,r as Ur}from"./quatf64-aQ5IuZRd.js";var V;const Te=new WeakMap;let Nr=0,F=V=class extends ve{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,r,n){if(e instanceof HTMLImageElement){const o={type:"image-element",src:We(e.src,n),crossOrigin:e.crossOrigin};t[r]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:ke(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[r]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:We(e.src,n),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[r]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:ke(e)};t[r]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=Ve(e.imageData),r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d").putImageData(t,0,0),r}case"image-data":return Ve(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?Ze(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?Ze(e):!(!t?.toLowerCase().endsWith(".png")&&!t?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(r="")=>`d:${r},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(Te.has(this.data)||Te.set(this.data,++Nr),t(Te.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new V(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const r=this.clone();return e.set(this,r),r}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new V({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new V({data:e}):Se(V,e)}};function ke(e){let t="";for(let r=0;r<e.data.length;r++)t+=String.fromCharCode(e.data[r]);return{data:btoa(t),width:e.width,height:e.height}}function Ve(e){const t=atob(e.data),r=new Uint8ClampedArray(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return mr(r,e.width,e.height)}function Ze(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Nt}})],F.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],F.prototype,"data",null),u([Wt("data")],F.prototype,"writeData",null),u([Pt("data")],F.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],F.prototype,"transparent",null),u([f({json:{write:!0}})],F.prototype,"wrap",void 0),u([f({readOnly:!0})],F.prototype,"contentHash",null),F=V=u([z("esri.geometry.support.MeshTexture")],F);const te=F;let Z=class extends zt(ve){constructor(t){super(t),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],Z.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],Z.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],Z.prototype,"scale",void 0),Z=u([z("esri.geometry.support.MeshTextureTransform")],Z);const re=Z;var Fe;let C=Fe=class extends ve{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=e!=null?e.get(this):null;if(r)return r;const n=new Fe(this.clonePropertiesWithDeduplication(t));return e?.set(this,n),n}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:ot,json:{write:!0}})],C.prototype,"color",void 0),u([f({type:te,json:{write:!0}})],C.prototype,"colorTexture",void 0),u([f({type:re,json:{write:!0}})],C.prototype,"colorTextureTransform",void 0),u([f({type:te,json:{write:!0}})],C.prototype,"normalTexture",void 0),u([f({type:re,json:{write:!0}})],C.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],C.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],C.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],C.prototype,"doubleSided",void 0),C=Fe=u([z("esri.geometry.support.MeshMaterial")],C);const Ue=C;var Oe;let S=Oe=class extends Ue{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=e!=null?e.get(this):null;if(r)return r;const n=new Oe(this.clonePropertiesWithDeduplication(t));return e?.set(this,n),n}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};u([f({type:ot,json:{write:!0}})],S.prototype,"emissiveColor",void 0),u([f({type:te,json:{write:!0}})],S.prototype,"emissiveTexture",void 0),u([f({type:re,json:{write:!0}})],S.prototype,"emissiveTextureTransform",void 0),u([f({type:te,json:{write:!0}})],S.prototype,"occlusionTexture",void 0),u([f({type:re,json:{write:!0}})],S.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],S.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],S.prototype,"roughness",void 0),u([f({type:te,json:{write:!0}})],S.prototype,"metallicRoughnessTexture",void 0),u([f({type:re,json:{write:!0}})],S.prototype,"metallicRoughnessTextureTransform",void 0),S=Oe=u([z("esri.geometry.support.MeshMaterialMetallicRoughness")],S);const Wr=S;var Q;let O=Q=class extends ve{static from(e){return Se(Q,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return gr(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},ie.getLogger(this))}castMaterial(e){return Se(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?Wr:Ue,e)}clone(){return new Q({faces:Ae(this.faces),shading:this.shading,material:Ae(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const r={faces:Ae(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new Q(r)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:dr}})],O.prototype,"faces",void 0),u([Pe("faces")],O.prototype,"castFaces",null),u([f({type:Ue,json:{write:!0}})],O.prototype,"material",void 0),u([Pe("material")],O.prototype,"castMaterial",null),u([f({json:{write:!0}})],O.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],O.prototype,"shading",void 0),u([f({type:Boolean})],O.prototype,"trustSourceNormals",void 0),O=Q=u([z("esri.geometry.support.MeshComponent")],O);const J=O,Pr="Mesh must be loaded before applying operations",zr="Provided component is not part of the list of components",Hr="Expected polygon to be a Polygon instance",ee="Expected location to be a Point instance";class qe extends ne{constructor(){super("invalid-input:location",ee)}}function Br(e,t,r){const n=Gr(Xe,e,t,r)?Rr(Xe):[0,0,1];return Math.abs(n[2])>Math.cos(Ht(80))?_.Z:Math.abs(n[1])>Math.abs(n[0])?_.Y:_.X}function Gr(e,t,r,n){const o=(a=>!Array.isArray(a[0]))(t)?(a,i)=>t[3*a+i]:(a,i)=>t[a][i],s=n?Bt(n)/Gt(n):1;return Sr(e,(a,i)=>de(a,o(i,0)*s,o(i,1)*s,o(i,2)),r)}const Xe=Tr();function kr(e){const t=Zr(e.rings,e.hasZ,ge.CCW_IS_HOLE,e.spatialReference),r=new Array;let n=0,o=0;for(const i of t.polygons){const c=i.count,l=i.index,h=kt(t.position,3*l,3*c),d=i.holeIndices.map(p=>p-l),m=ut(xr(h,d,3));r.push({position:h,faces:m}),n+=h.length,o+=m.length}const s=Vr(r,n,o),a=Array.isArray(s.position)?He(s.position,3,{originalIndices:s.faces}):He(s.position.buffer,6,{originalIndices:s.faces});return s.position=Vt(new Float64Array(a.buffer)),s.faces=a.indices,s}function Vr(e,t,r){if(e.length===1)return e[0];const n=je(t),o=new Array(r);let s=0,a=0,i=0;for(const c of e){for(let l=0;l<c.position.length;l++)n[s++]=c.position[l];for(const l of c.faces)o[a++]=l+i;i=s/3}return{position:n,faces:ut(o)}}function Zr(e,t,r,n){const o=e.length,s=new Array(o),a=new Array(o),i=new Array(o);let c=0;for(let g=0;g<o;++g)c+=e[g].length;let l=0,h=0,d=0;const m=je(3*c);let p=0;for(let g=o-1;g>=0;g--){const y=e[g],b=r===ge.CCW_IS_HOLE&&qr(y,t,n);if(b&&o!==1)s[l++]=y;else{let D=y.length;for(let x=0;x<l;++x)D+=s[x].length;const w={index:p,pathLengths:new Array(l+1),count:D,holeIndices:new Array(l)};w.pathLengths[0]=y.length,y.length>0&&(i[d++]={index:p,count:y.length}),p=b?ce(y,y.length-1,-1,m,p,y.length,t):ce(y,0,1,m,p,y.length,t);for(let x=0;x<l;++x){const T=s[x];w.holeIndices[x]=p,w.pathLengths[x+1]=T.length,T.length>0&&(i[d++]={index:p,count:T.length}),p=ce(T,0,1,m,p,T.length,t)}l=0,w.count>0&&(a[h++]=w)}}for(let g=0;g<l;++g){const y=s[g];y.length>0&&(i[d++]={index:p,count:y.length}),p=ce(y,0,1,m,p,y.length,t)}return a.length=h,i.length=d,{position:m,polygons:a,outlines:i}}function ce(e,t,r,n,o,s,a){o*=3;for(let i=0;i<s;++i){const c=e[t];n[o++]=c[0],n[o++]=c[1],n[o++]=a&&c[2]?c[2]:0,t+=r}return o/3}function qr(e,t,r){if(!t)return!le(e);const n=e.length-1;switch(Br(e,n,r)){case _.X:return!le(e,_.Y,_.Z);case _.Y:return!le(e,_.X,_.Z);case _.Z:return!le(e,_.X,_.Y)}}var ge;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(ge||(ge={}));function Ne(e,t,r,n){if(n!==void 0){Zt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!ae(t)||n===o)return r.isGeographic||r.isWebMercator&&n;e().warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return r.isGeographic;case"local":return r.isGeographic||r.isWebMercator}}const se=()=>ie.getLogger("esri.geometry.support.meshUtils.centerAt");function Xr(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n}=e,o=r?.origin??e.origin,s=Ne(se,n,o.spatialReference,r?.geographic);ae(n)?Yr(e,t,o):s?Jr(e,t,o):Kr(e,t,o)}function Yr(e,t,r){const{vertexSpace:n}=e;if(!ae(n))return;const o=Mt,s=St;if(!I(t,s,e.spatialReference))return void $(se(),t.spatialReference,e.spatialReference,N);if(!I(r,o,e.spatialReference)){const i=e.origin;return o[0]=i.x,o[1]=i.y,o[2]=i.z,void $(se(),r.spatialReference,e.spatialReference,N)}const a=vr(en,s,o);n.origin=wr(R(),n.origin,a)}function Jr(e,t,r){const n=Me(r.x,r.y,r.z??0),o=Le(e,new Ce({origin:n}));if(!o)return;const s=Me(t.x,t.y,t.z??0),a=Le({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new Ce({origin:s})},fe.absolute);if(!a)return;const{position:i,normal:c,tangent:l}=a;e.vertexAttributes.position=i,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function Kr(e,t,r){const n=Mt,o=St;if(I(t,o,e.spatialReference)){if(!I(r,n,e.spatialReference)){const s=e.origin;return n[0]=s.x,n[1]=s.y,n[2]=s.z,void $(se(),r.spatialReference,e.spatialReference,N)}Qr(e.vertexAttributes.position,o,n),e.vertexAttributesChanged()}else $(se(),t.spatialReference,e.spatialReference,N)}function Qr(e,t,r){if(e)for(let n=0;n<e.length;n+=3)for(let o=0;o<3;o++)e[n+o]+=t[o]-r[o]}const St=R(),Mt=R(),en=R();function tn(e){const{spatialReference:t,vertexSpace:r,untransformedBounds:n}=e,o=qt(n,rn);if(ae(r)&&e.transform&&Be(o,o,e.transform.localMatrix),r.type==="georeferenced"){const i=r.origin;return i&&Dr(o,o,i),ze(_e(o),t)}const s=Ie(t),a=r.origin;if(!_r(s,t)){const[i,c,l]=a;return new Xt({xmin:i,ymin:c,zmin:l,xmax:i,ymax:c,zmax:l,spatialReference:t})}return vt(t,a,Ye,s),Be(o,o,Ye),Cr(o,s,0,o,t,0),ze(_e(o),t)}const Ye=be(),rn=je(24);async function nn(e,t,r){const{source:n}=t,{loadGLTFMesh:o}=await st(Re(()=>import("./loadGLTFMesh-BnzZMVNA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]),import.meta.url),r),s=await sn(n,r);we(r);const a=o(new E({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:on(s),signal:r?.signal,expectedType:s.type,unitConversionDisabled:t.unitConversionDisabled});a.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:i,components:c}=await a;e.vertexAttributes=i,e.components=c}function on(e){const t=Yt(e.url);return r=>{const n=Jt(r,t,t),o=n?n.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??r}}async function sn(e,t){if(Array.isArray(e)){if(!e.length)throw new ne("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?ln(e):cn(e,t)}return _t(e)}async function an(e,t){const{parts:r,assetMimeType:n,assetName:o}=e;if(r.length===1)return new ye(r[0].partUrl);const s=await e.toBlob(t);return we(t),ye.fromBlob(s,Ot(o,n))}function _t(e){return ye.fromBlob(e,Ot(e.name,e.type))}function ln(e){return Lt(e.map(t=>({name:t.name,mimeType:t.type,source:_t(t)})))}async function cn(e,t){const r=await Kt(e.map(async n=>{const o=await an(n);return we(t),{name:n.assetName,mimeType:n.assetMimeType,source:o}}));if(Qt(t))throw r.forEach(n=>n.source.dispose()),er();return Lt(r)}const Ct=/^model\/gltf\+json$/,Dt=/^model\/gltf-binary$/,Ee=/\.gltf$/i,un=/\.glb$/i;function Je({mimeType:e,source:t,name:r}){return Ct.test(e)||Ee.test(r)?{url:t.url,type:"gltf"}:Dt.test(e)||un.test(r)?{url:t.url,type:"glb"}:null}function Lt(e){const t=new Map;let r=null,n=null;for(const s of e){const{source:a,name:i}=s;r??=Je(s),i==="ESRI3DO_NORM.glb"&&(n=Je(s)),t.set(i,a.url),a.files.forEach((c,l)=>t.set(l,c))}const o=n??r;if(o==null)throw new ne("mesh-load-external:missing-files","Missing files to load external mesh source");return new ye(o.url,()=>e.forEach(({source:s})=>s.dispose()),t,o.type)}let ye=class Ft{constructor(t,r=()=>{},n=new Map,o){this.url=t,this.dispose=r,this.files=n,this.type=o}static fromBlob(t,r){const n=URL.createObjectURL(t);return new Ft(n,()=>URL.revokeObjectURL(n),void 0,r)}};function Ot(e,t){return Ct.test(t)||Ee.test(e)?"gltf":Dt.test(t)||Ee.test(e)?"glb":void 0}let j=class extends tr{constructor(e){super(e),this.externalSources=new rr,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(nr(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!Ge(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Lr(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Fr(t,e))}get _implicitDisplaySource(){return this.externalSources.find(Ge)}};u([f()],j.prototype,"externalSources",void 0),u([f()],j.prototype,"displaySource",null),u([f()],j.prototype,"_implicitDisplaySource",null),u([f()],j.prototype,"_explicitDisplaySource",void 0),u([f()],j.prototype,"georeferenced",void 0),j=u([z("esri.geometry.support.meshUtils.Metadata")],j);function pn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:r}=wn,n=4*e.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*e.length*3);let c=0,l=0,h=0,d=0;for(let m=0;m<e.length;m++){const p=e[m],g=c/3;for(const b of t)i[d++]=g+b;const y=p.corners;for(let b=0;b<4;b++){const D=y[b];let w=0;a[h++]=.25*r[b][0]+p.uvOrigin[0],a[h++]=p.uvOrigin[1]-.25*r[b][1];for(let x=0;x<3;x++)p.axis[x]!==0?(o[c++]=.5*p.axis[x],s[l++]=p.axis[x]):(o[c++]=.5*D[w++],s[l++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function hn(e,t){const r=e.components[0],n=r.faces,o=$n[t],s=6*o,a=new Array(6),i=new Array(n.length-6);let c=0,l=0;for(let h=0;h<n.length;h++)h>=s&&h<s+6?a[c++]=n[h]:i[l++]=n[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),d=4*o*2,m=[0,1,1,1,1,0,0,0];for(let p=0;p<m.length;p++)h[d+p]=m[p];e.vertexAttributes.uv=h}return e.components=[new J({faces:a,material:r.material}),new J({faces:i})],e}function fn(e=0){const t=Math.round(8*2**e),r=2*t,n=(t-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((t-1)*r*2));let c=0,l=0,h=0,d=0;for(let m=0;m<=t;m++){const p=m/t*Math.PI+.5*Math.PI,g=Math.cos(p),y=Math.sin(p);v[2]=y;const b=m===0||m===t,D=b?r-1:r;for(let w=0;w<=D;w++){const x=w/D*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let T=0;T<3;T++)o[c]=.5*v[T],s[c]=v[T],++c;a[l++]=(w+(b?.5:0))/r,a[l++]=m/t,m!==0&&w!==r&&(m!==t&&(i[h++]=d,i[h++]=d+1,i[h++]=d-r),m!==1&&(i[h++]=d,i[h++]=d-r,i[h++]=d-r-1)),d++}}return{position:o,normal:s,uv:a,faces:i}}function mn(e=0){const r=Math.round(16*2**e),n=4*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let c=0,l=0,h=0,d=0,m=0;for(let p=0;p<=5;p++){const g=p===0||p===5,y=p<=1||p>=4,b=p===2||p===4,D=g?r-1:r;for(let w=0;w<=D;w++){const x=w/D*2*Math.PI,T=g?0:.5;v[0]=T*Math.sin(x),v[1]=T*-Math.cos(x),v[2]=p<=2?.5:-.5;for(let H=0;H<3;H++)o[c++]=v[H],s[l++]=y?H===2?p<=1?1:-1:0:H===2?0:v[H]/T;a[h++]=(w+(g?.5:0))/r,a[h++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,b||p===0||w===r||(p!==5&&(i[d++]=m,i[d++]=m+1,i[d++]=m-r),p!==1&&(i[d++]=m,i[d++]=m-r,i[d++]=m-r-1)),m++}}return{position:o,normal:s,uv:a,faces:i}}function dn(e,t){const r=typeof t=="number"?t:t!=null?t.width:1,n=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}function gn(e){const t=K.facingAxisOrderSwap[e],r=K.position,n=K.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const c=a;for(let l=0;l<3;l++){const h=t[l],d=Math.abs(h)-1,m=h>=0?1:-1;o[a]=r[c+d]*m,s[a]=n[c+d]*m,a++}}return{position:o,normal:s,uv:new Float32Array(K.uv),faces:new Uint32Array(K.faces),isPlane:!0}}const B=1,G=2,k=3,K={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[k,B,G],west:[-k,-B,G],north:[-B,k,G],south:[B,-k,G],up:[B,G,k],down:[B,-G,-k]}};function ue(e,t,r){e.isPlane||yn(e),vn(e,xn(r?.size,r?.unit,t.spatialReference));const n=me(t,r),o=t.spatialReference.isGeographic?me(t):n,s=Le({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},n,{allowBufferReuse:!0});return{vertexAttributes:new he({...s,uv:e.uv}),vertexSpace:n,components:[new J({faces:e.faces,material:r?.material||null})],spatialReference:t.spatialReference}}function yn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function xn(e,t,r){const n=Mr(t,r);if(e==null&&n===1)return null;if(e==null)return[n,n,n];if(typeof e=="number"){const o=e*n;return[o,o,o]}return[e.width!=null?e.width*n:n,e.depth!=null?e.depth*n:n,e.height!=null?e.height*n:n]}function vn(e,t){if(t!=null){U[0]=t[0],U[4]=t[1],U[8]=t[2];for(let r=0;r<e.position.length;r+=3){for(let n=0;n<3;n++)v[n]=e.position[r+n];De(v,v,U);for(let n=0;n<3;n++)e.position[r+n]=v[n]}if(t[0]!==t[1]||t[1]!==t[2]){U[0]=1/t[0],U[4]=1/t[1],U[8]=1/t[2];for(let r=0;r<e.normal.length;r+=3){for(let n=0;n<3;n++)v[n]=e.normal[r+n];De(v,v,U),$r(v,v);for(let n=0;n<3;n++)e.normal[r+n]=v[n]}}}}const wn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},$n={south:0,east:1,north:2,west:3,up:4,down:5},v=R(),U=wt(),W=()=>ie.getLogger("esri.geometry.support.meshUtils.rotate");function bn(e,t,r){if(!e.vertexAttributes?.position||t[3]===0)return;const{spatialReference:n,vertexSpace:o}=e,s=r?.origin??e.origin,a=r?.geographic,i=Ne(W,o,n,a);ct(e)?An(e,t,s):i?Tn(e,t,s):Rn(e,t,s)}function An(e,t,r){e.transform??=new oe;const{vertexSpace:n,transform:o,spatialReference:s}=e,[a,i,c]=n.origin,l=new E({x:a,y:i,z:c,spatialReference:s}),h=q;if(l.equals(r))de(h,0,0,0);else if(!ht(h,r,e))return void $(W(),r.spatialReference,s,N);jr(tt,pe(t),at(t));const d=$t(Ke,tt,$e,or,h),{localMatrix:m}=o,p=bt(Ke,d,m);o.scale=At(R(),p),Tt(p,p,pt(q,o.scale));const g=o.rotationAxis;o.rotation=lt(p),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=Rt(R(),p)}function Tn(e,t,r){const n=e.spatialReference,o=Ie(n),s=Et;if(!I(r,s,o)&&($(W(),r.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void $(W(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(a.length),h=i!=null?new Float32Array(i.length):null,d=c!=null?new Float32Array(c.length):null;vt(o,s,xe,o),Or(et,xe);const m=Qe;De(pe(Qe),pe(t),et),m[3]=t[3],ft(a,n,l,o)&&(i==null||h==null||mt(i,a,n,l,o,h))&&(c==null||d==null||dt(c,a,n,l,o,d))?(Y(l,m,3,s),gt(l,o,a,n)&&(i==null||h==null||(Y(h,m,3),yt(h,a,n,l,o,i)))&&(c==null||d==null||(Y(d,m,4),xt(d,a,n,l,o,c)))?e.vertexAttributesChanged():$(W(),o,n)):$(W(),n,o)}function Rn(e,t,r){const n=Et;if(!I(r,n,e.spatialReference)){const o=e.origin;return n[0]=o.x,n[1]=o.y,n[2]=o.z,void $(W(),r.spatialReference,e.spatialReference,N)}Y(e.vertexAttributes.position,t,3,n),Y(e.vertexAttributes.normal,t,3),Y(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function Y(e,t,r,n=$e){if(e!=null){Er(xe,at(t),pe(t));for(let o=0;o<e.length;o+=r){for(let s=0;s<3;s++)q[s]=e[o+s]-n[s];br(q,q,xe);for(let s=0;s<3;s++)e[o+s]=q[s]+n[s]}}}const q=R(),Ke=be(),Qe=it(),xe=be(),et=wt(),Et=R(),tt=Ir(),P=()=>ie.getLogger("esri.geometry.support.meshUtils.scale");function Sn(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n,spatialReference:o}=e,s=r?.origin??e.origin,a=r?.geographic,i=Ne(P,n,o,a);ct(e)?Mn(e,t,s):i?_n(e,t,s):Cn(e,t,s)}function Mn(e,t,r){e.transform??=new oe;const{vertexSpace:n,transform:o,spatialReference:s}=e,[a,i,c]=n.origin,l=new E({x:a,y:i,z:c,spatialReference:s}),h=X;if(l.equals(r))de(h,0,0,0);else if(!ht(h,r,e))return void $(P(),r.spatialReference,s,N);const d=de(Dn,t,t,t),m=$t(rt,Ur,$e,d,h),{localMatrix:p}=o,g=bt(rt,m,p);o.scale=At(R(),g),Tt(g,g,pt(X,o.scale));const y=o.rotationAxis;o.rotation=lt(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=Rt(R(),g)}function _n(e,t,r){const n=e.spatialReference,o=Ie(n),s=It;if(!I(r,s,o)&&($(P(),r.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void $(P(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(a.length),h=i!=null?new Float32Array(i.length):null,d=c!=null?new Float32Array(c.length):null;ft(a,n,l,o)&&(i==null||h==null||mt(i,a,n,l,o,h))&&(c==null||d==null||dt(c,a,n,l,o,d))?(jt(l,t,s),gt(l,o,a,n)&&(i==null||h==null||yt(h,a,n,l,o,i))&&(c==null||d==null||xt(d,a,n,l,o,c))?e.vertexAttributesChanged():$(P(),o,n)):$(P(),n,o)}function Cn(e,t,r){const n=It;if(!I(r,n,e.spatialReference)){const o=e.origin;return n[0]=o.x,n[1]=o.y,n[2]=o.z,void $(P(),r.spatialReference,e.spatialReference,N)}jt(e.vertexAttributes.position,t,n),e.vertexAttributesChanged()}function jt(e,t,r=$e){if(e)for(let n=0;n<e.length;n+=3){for(let o=0;o<3;o++)X[o]=e[n+o]-r[o];Ar(X,X,t);for(let o=0;o<3;o++)e[n+o]=X[o]+r[o]}}const X=R(),Dn=R(),rt=be(),It=R();var M;const Ut="esri.geometry.Mesh";function L(){return ie.getLogger(Ut)}const Ln={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:fe,local:Ce}};let A=M=class extends sr.LoadableMixin(ir(hr)){constructor(e){super(e),this.components=null,this.vertexSpace=new fe,this.transform=null,this.metadata=new j,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new he,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(ar(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,r=this;return tn({get transform(){return r.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||t?.length===0?lr(cr):_e(e)}get origin(){const e=yr(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:r}=this._transformedExtent;return new E({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(J.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}L().error("removeComponent()",zr)}}rotate(e,t,r,n){return fr(e,t,r,nt),bn(this,nt,n),this}offset(e,t,r){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:n,vertexAttributes:o}=this,s=o?.position;if(!s)return this;if(ae(n)){const[a,i,c]=n.origin;n.origin=Me(a+e,i+t,c+r)}else{for(let a=0;a<s.length;a+=3)s[a]+=e,s[a+1]+=t,s[a+2]+=r;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Sn(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Xr(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(nn(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,r){let n=null;if(this.components){const s=new Map,a=new Map;n=this.components.map(i=>i.cloneWithDeduplication(s,a))}const o={components:n,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:r?.preserveMetadata?this.metadata.clone():new j};return new M(o)}cloneShallow(){return new M({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([Re(()=>import("./gltfexport-Bi8FTKhS.js"),__vite__mapDeps([43,1,2,3,23,6,24,5,10,14,29,4,22,19,30,31,32,33,34,9,11,15,12,13,16,20,25,26,35,36,8,37,28,38,39,7,40,41,42]),import.meta.url),this.load(e)]);return we(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(L().error(e,Pr),!1)}static createBox(e,t){if(!(e instanceof E))return L().error(".createBox()",ee),null;const r=new M(ue(pn(),e,t));return t?.imageFace&&t.imageFace!=="all"?hn(r,t.imageFace):r}static createSphere(e,t){return e instanceof E?new M(ue(fn(t?.densificationFactor||0),e,t)):(L().error(".createSphere()",ee),null)}static createCylinder(e,t){return e instanceof E?new M(ue(mn(t?.densificationFactor||0),e,t)):(L().error(".createCylinder()",ee),null)}static createPlane(e,t){if(!(e instanceof E))return L().error(".createPlane()",ee),null;const r=t?.facing??"up",n=dn(r,t?.size);return new M(ue(gn(r),e,{...t,size:n}))}static createFromPolygon(e,t){if(!(e instanceof ur))return L().error(".createFromPolygon()",Hr),null;const r=kr(e);return new M({vertexAttributes:new he({position:r.position}),components:[new J({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new fe})}static async createFromGLTF(e,t,r){if(!(e instanceof E)){const o=new qe;throw L().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:n}=await st(Re(()=>import("./loadGLTFMesh-BnzZMVNA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]),import.meta.url),r);return new M(await n(e,t,r))}static async createFromFiles(e,t,r){pr(L(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const n=o=>L().error(".createFromFiles()",o.message);if(!(e instanceof E)){const o=new qe;throw n(o),o}if(!r?.layer)throw new ne("invalid:no-layer","SceneLayer required for file to mesh conversion.");return r.layer.convertMesh(t,{location:e,...r})}static createWithExternalSource(e,t,r){const n=r?.extent??null,{spatialReference:o}=e,s=r?.transform?.clone()??new oe,a=me(e,r),i=r?.unitConversionDisabled,c={source:t,extent:n,unitConversionDisabled:i},l=new j;return l.externalSources.push(c),new M({metadata:l,transform:s,vertexSpace:a,spatialReference:o})}static createIncomplete(e,t){const{spatialReference:r}=e,n=t?.transform?.clone()??new oe,o=me(e,t),s=new M({transform:n,vertexSpace:o,spatialReference:r});return s.addResolvingPromise(Promise.reject(new ne("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[J],json:{write:!0}})],A.prototype,"components",void 0),u([f({nonNullable:!0,types:Ln,constructOnly:!0,json:{write:!0}})],A.prototype,"vertexSpace",void 0),u([f({type:oe,json:{write:!0}})],A.prototype,"transform",void 0),u([f({constructOnly:!0})],A.prototype,"metadata",void 0),u([f()],A.prototype,"hasExtent",null),u([f()],A.prototype,"_transformedExtent",null),u([f()],A.prototype,"_untransformedBounds",null),u([f()],A.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],A.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],A.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],A.prototype,"hasM",void 0),u([f({type:he,nonNullable:!0,json:{write:!0}})],A.prototype,"vertexAttributes",void 0),A=M=u([z(Ut)],A);const nt=it(),so=A;export{so as $,re as c,J as f,Wr as m,te as w};
