import{bv as s,c7 as p,n as u}from"./main-DB4i4A8K.js";import{H as l}from"./vec32-CPVKbSRn.js";import{b as f,a as v}from"./MeshLocalVertexSpace-Ci_3-aR6.js";function c(){return u.getLogger("esri.geometry.Mesh")}function t(e){return e.origin!=null}function d(e){return t(e.vertexSpace)}function m(e,r){if(!t(e))return null;const[i,n,o]=e.origin;return new s({x:i,y:n,z:o,spatialReference:r})}function x(e,r){const{x:i,y:n,z:o,spatialReference:g}=e,a=[i,n,o??0];return r?.geographic!==void 0&&(p(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),(r?.vertexSpace??y(r?.geographic)??h(g))==="local"?new f({origin:a}):new v({origin:a})}function h(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function y(e){return e==null?void 0:e?"local":"georeferenced"}function S(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&l(e.origin,r.origin))}export{t as a,d as g,S as m,x as s,m as u};
