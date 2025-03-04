import{p as n,H as d,c as a,h as t,a as l}from"./themeUtils-lDeSCh76.js";import{c}from"./observers-C2k_wyUO.js";import{C as p}from"./resources3-Qm0M2nV8.js";import"./main-9YtP5FE3.js";import"./preload-helper-ExcqyqRp.js";import"./uuid-Cl5lrJ4c.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const u=":host{position:relative;display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",h=u,o=n(class extends d{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDropdownItemChange=a(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach(e=>e.selectionMode=this.selectionMode)},this.mutationObserver=c("mutation",()=>this.updateItems()),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const e=this.groupTitle?t("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,i=this.groupPosition>0?t("div",{class:"dropdown-separator",role:"separator"}):null;return t(l,{key:"f41943751aefdb17d4f5d5bd8778c219cfd01a00","aria-label":this.groupTitle,role:"group"},t("div",{key:"87b78040b93c06081ca8282a785d466ed8fcf334",class:{[p.container]:!0}},i,e,t("slot",{key:"f635a5bdbe439315eba6292a4858cbd8519d23d1"})))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{selectionMode:["handlePropsChange"]}}static get style(){return h}},[17,"calcite-dropdown-group",{groupTitle:[513,"group-title"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalDropdownItemSelect","updateActiveItemOnChange"]],{selectionMode:["handlePropsChange"]}]);function r(){if(typeof customElements>"u")return;["calcite-dropdown-group"].forEach(e=>{switch(e){case"calcite-dropdown-group":customElements.get(e)||customElements.define(e,o);break}})}r();const C=o,I=r;export{C as CalciteDropdownGroup,I as defineCustomElement};
