import{au as e}from"./main-C2GI9Q3q.js";import{f as i}from"./utils-ssRsS25A.js";import{d as s}from"./queryTopFeatures-DQUbEV1X.js";import u from"./TopFeaturesQuery-zx1y7lCU.js";async function x(o,n,r){const m=i(o),a=await s(m,u.from(n),{...r}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:e.fromJSON(t)}}export{x as executeForTopExtents};
