import{p as d,H as c,c as l,h as t,a as r}from"./themeUtils-DUnn3vh8.js";import{u as f,I as h}from"./interactive-CsbQebTI.js";import{M as p}from"./resources4-DXHY1U7R.js";import"./main-C4ZPumQG.js";import"./preload-helper-ExcqyqRp.js";import"./uuid-Cl5lrJ4c.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const i={container:"container",heading:"heading"},u=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}",m=u,n=d(class extends c{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=l(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0}componentDidRender(){f(this)}render(){const{disabled:e,heading:a}=this;return t(r,{key:"e1e0304c3d4fe02909fd0075de2e4f5ef806be39"},t(h,{key:"5fb0861fb58de90808e98b7061d3c906c822203c",disabled:e},t("tr",{key:"c77af78f937c3135601df2c4574b858662d5fcdb",class:i.container},t("td",{key:"f1ae6b9e09e78f87b814287f8eaeb0a105575c7a",class:i.heading,colSpan:p},a)),t("slot",{key:"7346d5d774173403910eddd35bf700ccd1437c4f",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return m}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function s(){if(typeof customElements>"u")return;["calcite-list-item-group"].forEach(e=>{switch(e){case"calcite-list-item-group":customElements.get(e)||customElements.define(e,n);break}})}s();const k=n,v=s;export{k as CalciteListItemGroup,v as defineCustomElement};
