const m=[["binary","application/octet-stream","bin",""]];function F(n,t){return p(t.name,n?.supportedFormats??[])!=null}function w(n,t){if(!n)return!1;const r=c(t,n.supportedFormats??[]);return r!=null&&n.editFormats.includes(r)}function u(n,t){return i(M(n,t))}function a(n,t){return i(p(n,t))}function b(n,t){return l(y(n,t))}function c(n,t){return a(n.name,t)??u(n.type,t)}function o(n,t,r){return u(n,r)??a(t,r)}function f({supportedFormats:n}){return o("model/gltf-binary","glb",n)}function g(n){const t=f(n);return t!=null&&n.editFormats.includes(t)}function C({supportedFormats:n}){return o("model/gltf+json","gltf",n)}function L({supportedFormats:n}){return o("application/esri3do-SR_world","wld",n)}function j({supportedFormats:n}){return o("application/esri3do-SR_prj","prj",n)}function s(n){return[...m,...n]}function y(n,t){return s(t).find(r=>i(r)===n)}function M(n,t){const r=n.toLowerCase();return s(t).find(e=>l(e)===r)}function p(n,t){const r=n.toLowerCase();return s(t).find(e=>R(e).some(d=>r.endsWith(d)))}function i(n){return n?.[0]}function l(n){return n?.[1].toLowerCase()}function R(n){return n?.[2].split(",").map(t=>t.toLowerCase())??[]}function S(n){return n.tables?.find(t=>t.role==="assetMaps")}export{S as M,f as a,c,C as d,g as f,L as l,j as m,F as n,o as p,w as r,b as s,u};
