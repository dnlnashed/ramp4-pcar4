import{dj as d,e$ as w,f0 as q,f1 as B,eL as C,q as s,u as a,C as I,A as k,aC as z,f2 as D,cs as F,cy as l}from"./main-9YtP5FE3.js";import{j as G,P as H,h as L,B as P}from"./mat4-DReQPB6f.js";import{e as y}from"./mat4f64-CSKppSlJ.js";import{v as M,b as p,x as T}from"./quat-wYTQwSzI.js";import{e as m}from"./quatf64-aQ5IuZRd.js";import{s as U}from"./vec32-D1cYxGZh.js";function i(t=v){return[t[0],t[1],t[2],t[3]]}function c(t,o,r=i()){return U(r,t),r[3]=o,r}function V(t,o=i()){const r=G(e,t);return j(o,d(M(o,r))),o}function A(t,o,r=i()){return p(e,t,h(t)),p($,o,h(o)),T(e,$,e),j(r,d(M(r,e)))}function W(t,o,r,x=i()){return c(w,t,u),c(q,o,g),c(B,r,N),A(u,g,u),A(u,N,x),x}function X(t){return t}function E(t){return t[3]}function h(t){return C(t[3])}function j(t,o){return t[3]=o,t}const v=[0,0,1,0],e=m(),$=m();i();const u=i(),g=i(),N=i();var f;let n=f=class extends k{constructor(t){super(t),this.translation=z(),this.rotationAxis=D(v),this.rotationAngle=0,this.scale=F(1,1,1)}get rotation(){return c(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=E(t)}get localMatrix(){const t=y();return p(b,this.rotation,h(this.rotation)),H(t,b,this.translation,this.scale),t}get localMatrixInverse(){return L(y(),this.localMatrix)}equals(t){return this===t||t!=null&&P(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new f(t)}};s([a({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"translation",void 0),s([a({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAxis",void 0),s([a({type:Number,nonNullable:!0,json:{write:!0}})],n.prototype,"rotationAngle",void 0),s([a({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"scale",void 0),s([a()],n.prototype,"rotation",null),s([a()],n.prototype,"localMatrix",null),s([a()],n.prototype,"localMatrixInverse",null),n=f=s([I("esri.geometry.support.MeshTransform")],n);const b=m(),Y=n;export{Y as N,W as d,i as j,V as k,X as w,h as z};
