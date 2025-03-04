import{p as g,H as x,h as r,a as I,i as v,g as y}from"./themeUtils-lDeSCh76.js";import{g as C,t as D}from"./dom-BveoWHh2.js";import{c as z}from"./observers-C2k_wyUO.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const w={icon:"icon",flipRtl:"flip-rtl"},f={},p={},u={s:16,m:24,l:32};function b({icon:e,scale:t}){const n=u[t],i=E(e),s=i.charAt(i.length-1)==="F";return`${s?i.substring(0,i.length-1):i}${n}${s?"F":""}`}async function k(e){const t=b(e),n=m(t);if(n)return n;p[t]||(p[t]=fetch(y(`./assets/icon/${t}.json`)).then(s=>s.json()).catch(()=>(console.error(`"${t}" is not a valid calcite-ui-icon name`),"")));const i=await p[t];return f[t]=i,i}function P(e){return m(b(e))}function m(e){return f[e]}function E(e){const t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){const s=/[a-z]/i;e=n.map((c,l)=>c.replace(s,function(o,d){return l===0&&d===0?o:o.toUpperCase()})).join("")}return t?`i${e}`:e}const N=":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}",O=N,$=g(class extends x{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:t,flipRtl:n,pathData:i,scale:s,textLabel:c}=this,l=C(t),h=u[s],o=!!c,d=[].concat(i||"");return r(I,{key:"724265acdc6fb528bf7b25d7ec445c73a63f4c8e","aria-hidden":D(!o),"aria-label":o?c:null,role:o?"img":null},r("svg",{key:"864ee2d80bebd282543ba5d94c57f84b48a6204d","aria-hidden":"true",class:{[w.flipRtl]:l==="rtl"&&n,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${h} ${h}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},d.map(a=>typeof a=="string"?r("path",{d:a}):r("path",{d:a.d,opacity:"opacity"in a?a.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:n,visible:i}=this;if(!v()||!t||!i)return;const s={icon:t,scale:n},c=P(s)||await k(s);t===this.icon&&(this.pathData=c)}waitUntilVisible(t){if(this.intersectionObserver=z("intersection",n=>{n.forEach(i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return O}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function R(){if(typeof customElements>"u")return;["calcite-icon"].forEach(t=>{switch(t){case"calcite-icon":customElements.get(t)||customElements.define(t,$);break}})}R();export{$ as I,R as d};
