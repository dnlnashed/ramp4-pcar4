import{D as c,c4 as k,c5 as u,c6 as m,c7 as C,c8 as l,c9 as r}from"./main-CxlHa1F_.js";const U=new c(k),n=new c(u),e=new c(m),x=new c(C);function D(t){const p=f.get(t);if(p)return p;let s=U;if(t)if(t===n)s=n;else if(t===e)s=e;else{const a=t.wkid,o=t.latestWkid;if(a!=null||o!=null)l(a)||l(o)?s=n:(r(a)||r(o))&&(s=e);else{const w=t.wkt2??t.wkt;if(w){const i=w.toUpperCase();i===$?s=n:i===d&&(s=e)}}}return f.set(t,s),s}const f=new Map,$=n.wkt.toUpperCase(),d=e.wkt.toUpperCase();export{D as a,x as w};
