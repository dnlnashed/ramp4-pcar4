import{b1 as L}from"./main-CxlHa1F_.js";import{u as d}from"./basicInterfaces-CZwQPxTp.js";class h{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=d.KTX2_ENCODING}}function w(t){return t?.type==="encoded-mesh-texture"}async function f(t){const r=new Blob([t]),o=await r.text();return JSON.parse(o)}async function p(t,r){if(r===d.KTX2_ENCODING)return new h(t);const o=new Blob([t],{type:r}),n=URL.createObjectURL(o),e=new Image;if(L("esri-iPhone"))return new Promise((c,m)=>{const s=()=>{a(),c(e)},i=u=>{a(),m(u)},a=()=>{URL.revokeObjectURL(n),e.removeEventListener("load",s),e.removeEventListener("error",i)};e.addEventListener("load",s),e.addEventListener("error",i),e.src=n});try{e.src=n,await e.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),e}export{f as n,p as o,w as r,h as t};
