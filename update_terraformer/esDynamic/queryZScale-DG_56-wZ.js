import{o as a}from"./projection-BNlWOorZ.js";function n(o,r,t){if(!t?.features||!t.hasZ)return;const e=a(t.geometryType,r,o.outSpatialReference);if(e!=null)for(const f of t.features)e(f.geometry)}export{n as t};
