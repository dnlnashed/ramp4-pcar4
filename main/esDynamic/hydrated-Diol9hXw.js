import{bv as r,bC as c,aT as h,bD as x,au as g}from"./main-Czl6u6q4.js";const m={convertToGEGeometry:p,exportPoint:u,exportPolygon:l,exportPolyline:f,exportMultipoint:M,exportExtent:Z};function p(e,n){if(n==null)return null;let a="cache"in n?n.cache._geVersion:void 0;return a==null&&(a=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=a)),a}function u(e,n,a){const o=e.hasZ(n),i=e.hasM(n),t=new r({x:e.getPointX(n),y:e.getPointY(n),spatialReference:a});return o&&(t.z=e.getPointZ(n)),i&&(t.m=e.getPointM(n)),t.cache._geVersion=n,t}function l(e,n,a){const o=new c({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:a});return o.cache._geVersion=n,o}function f(e,n,a){const o=new h({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:a});return o.cache._geVersion=n,o}function M(e,n,a){const o=new x({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:a});return o.cache._geVersion=n,o}function Z(e,n,a){const o=e.hasZ(n),i=e.hasM(n),t=new g({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:a});if(o){const s=e.getZExtent(n);t.zmin=s.vmin,t.zmax=s.vmax}if(i){const s=e.getMExtent(n);t.mmin=s.vmin,t.mmax=s.vmax}return t.cache._geVersion=n,t}export{m as hydratedAdapter};
