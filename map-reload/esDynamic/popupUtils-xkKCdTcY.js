import{b4 as u,b5 as b,b6 as f,b7 as m,b8 as o,b9 as p,ba as g,bb as F,bc as y}from"./main-DB4i4A8K.js";function w({displayField:e,editFieldsInfo:t,fields:i,objectIdField:n,title:s},a){if(!i)return null;const l=N({editFieldsInfo:t,fields:i,objectIdField:n},a);if(!l.length)return null;const r=D({titleBase:s,fields:i,displayField:e}),c=S();return new u({title:r,content:c,fieldInfos:l})}function L(e){const{title:t,graphic:i}=e??{},{attributes:n,sourceLayer:s}=i??{},a=s&&"displayField"in s?s.displayField:null,l=a?n?.[a]:null,r=i?.getObjectId()?.toString();return t||l||r||""}const v=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):y(e,t);function I({fields:e,ignoreFieldTypes:t,sortDisabled:i}){const n=e;return t&&(e=e.filter(s=>!t.includes(s.type))),e===n&&(e=e.slice()),i!==!0&&e.sort(C),e}function C(e,t){return e.type==="oid"?-1:t.type==="oid"?1:d(e)?-1:d(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function N(e,t){const i=t?.visibleFieldNames;return I({fields:e.fields??[],ignoreFieldTypes:t?.ignoreFieldTypes||j,sortDisabled:t?.sortDisabled}).map(n=>new b({fieldName:n.name,isEditable:f(n,e),label:n.alias,format:h(n),visible:v(n,{...e,visibleFieldNames:i})}))}function h(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"string":return m(e.name)?new o({digitSeparator:!0,places:0}):void 0;default:return}}function S(){return[new p,new g]}function D(e){const t=F(e),{titleBase:i}=e;return t?`${i}: {${t.trim()}}`:i??""}function d(e){return(e.name&&e.name.toLowerCase())==="name"?!0:e.alias?.toLowerCase()==="name"}const j=["geometry","blob","raster","guid","xml"];export{L as c,w as p};
