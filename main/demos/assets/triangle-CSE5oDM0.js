import{s}from"./sphere-CxuryP-2.js";import{c,r as v,_ as w}from"./vec32-dwN7UxOE.js";import{cy as m,aC as o}from"./main-BvP2mMJi.js";import{v as M}from"./lineSegment-Ch0lkBCb.js";import"./plane-ncU54Mly.js";function b(r){return r?{p0:m(r.p0),p1:m(r.p1),p2:m(r.p2)}:{p0:o(),p1:o(),p2:o()}}function O(r,p,n){const f=p[0]-r[0],a=p[1]-r[1],u=n[0]-r[0],e=n[1]-r[1];return .5*Math.abs(f*e-a*u)}function S(r,p,n){return c(t,p,r),c(i,n,r),.5*v(w(t,t,i))}new s(M);new s(()=>b());const t=o(),i=o();export{S,O as v};
