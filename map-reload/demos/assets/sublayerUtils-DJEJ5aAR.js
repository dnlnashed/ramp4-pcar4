import{bo as l}from"./main-9YtP5FE3.js";function s(e,r,o){return r.flatten(({sublayers:i})=>i).length!==e.length?!0:!!e.some(i=>i.originIdOf("minScale")>o||i.originIdOf("maxScale")>o||i.originIdOf("renderer")>o||i.originIdOf("labelingInfo")>o||i.originIdOf("opacity")>o||i.originIdOf("labelsVisible")>o||i.originIdOf("source")>o)||!f(e,r)}function c(e,r,o){return!!e.some(n=>{const i=n.source,t=!i||i.type==="map-layer"&&i.mapLayerId===n.id&&(i.gdbVersion==null||i.gdbVersion===o);return n.commitProperty("renderer"),n.commitProperty("labelingInfo"),n.commitProperty("opacity"),n.commitProperty("labelsVisible"),!t||n.originIdOf("renderer")>l.SERVICE||n.originIdOf("labelingInfo")>l.SERVICE||n.originIdOf("opacity")>l.SERVICE||n.originIdOf("labelsVisible")>l.SERVICE})||!f(e,r)}function f(e,r){if(!e?.length||r==null)return!0;const o=r.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(e.length>o.length)return!1;let n=0;const i=o.length;for(const{id:t}of e){for(;n<i&&o[n]!==t;)n++;if(n>=i)return!1}return!0}function g(e){return!!e&&e.some(r=>r.minScale!=null||r.layerDefinition?.minScale!=null)}export{s as e,c as n,g as o};
