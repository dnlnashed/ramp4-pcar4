import{n as i}from"./projectBuffer-BAJSFEkv.js";import{a as n}from"./MeshLocalVertexSpace-3Df9o4Pj.js";import{bh as s}from"./main-C872cFCP.js";import{B as a}from"./vertexSpaceConversion-DSoJ_Z3b.js";function p(e,r){const o=a(e,n.absolute);if(!o)return null;let t=o.position;return s(e.spatialReference,r)||(t=new Float64Array(o.position.length),i(o.position,e.spatialReference,0,t,r,0))?t:null}export{p as projectMeshVertexPositions};