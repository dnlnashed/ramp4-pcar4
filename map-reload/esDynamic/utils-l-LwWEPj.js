import{I as u,f as c}from"./main-DB4i4A8K.js";function a(t,s){return s?{...s,query:{...t??{},...s.query}}:{query:t}}function y(t){return typeof t=="string"?u(t):c(t)}function n(t,s,o){const i={};for(const r in t){if(r==="declaredClass")continue;const e=t[r];if(e!=null&&typeof e!="function")if(Array.isArray(e))i[r]=e.map(f=>n(f));else if(typeof e=="object")if(e.toJSON){const f=e.toJSON(o?.[r]);i[r]=JSON.stringify(f)}else i[r]=JSON.stringify(e);else i[r]=e}return i}export{y as f,a as i,n as s};
