import{f as i}from"./utils-Bd81ot-K.js";import{c}from"./query-DdiJsybj.js";import{d as e}from"./FeatureSet-BEz5NAc_.js";import{b as p}from"./Query-ai_AMbuj.js";async function u(a,r,o){const t=await s(a,r,o);return e.fromJSON(t)}async function s(a,r,o){const t=i(a),f={...o},n=p.from(r),{data:m}=await c(t,n,n.sourceSpatialReference,f);return m}export{s as a,u as s};
