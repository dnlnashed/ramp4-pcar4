import{P as y,$ as p}from"./utils-CTp1doZV.js";import{o as f}from"./jsonContext-97B2ELW5.js";import{s as v,a as d,i as I,f as o}from"./portalItemUtils-CgAkECga.js";import{p as n}from"./resourceUtils-DKA8on4N.js";const i="Group Layer",P="group-layer-save",g="group-layer-save-as",s=o.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:v(e,s),errorMessage:`Layer.portalItem.typeKeywords should have '${s}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function l(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,o.METADATA),I(r,s)}async function L(e,r){return y({layer:e,itemType:i,validateLayer:c,validateItem:A,createJSONContext:a=>u(a,e),createItemData:l,errorNamePrefix:P,saveResources:async(a,t)=>(e.sourceIsPortalItem||await a.removeAllResources().catch(()=>{}),n(e.resourceReferences,t))},r)}async function O(e,r,a){return p({layer:e,itemType:i,validateLayer:c,createJSONContext:t=>u(t,e),createItemData:l,errorNamePrefix:g,newItem:r,setItemProperties:R,saveResources:(t,m)=>n(e.resourceReferences,m)},a)}export{L as save,O as saveAs};
