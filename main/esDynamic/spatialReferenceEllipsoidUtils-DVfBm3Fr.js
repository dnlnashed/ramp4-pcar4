import{B as t,c1 as k,c2 as u,c3 as C,c4 as U,c5 as l,c6 as p}from"./main-C872cFCP.js";const d=new t(k),n=new t(u),a=new t(C),m=new t(U);function x(e){const w=f.get(e);if(w)return w;let s=d;if(e)if(e===n)s=n;else if(e===a)s=a;else{const c=e.wkid,o=e.latestWkid;if(c!=null||o!=null)l(c)||l(o)?s=n:(p(c)||p(o))&&(s=a);else{const i=e.wkt2??e.wkt;if(i){const r=i.toUpperCase();r===B?s=n:r===g&&(s=a)}}}return f.set(e,s),s}const f=new Map,B=n.wkt.toUpperCase(),g=a.wkt.toUpperCase();export{x as a,m as w};