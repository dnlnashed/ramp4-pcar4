import{p as Nt,f as Kt}from"./mat3-XZDRtl20.js";import{t as kt,e as Ut}from"./mat3f64-q3fE-ZOt.js";import{e as ta}from"./mat4f64-CSKppSlJ.js";import{X as aa,O as U,x as sa}from"./quat-voDZvMoA.js";import{r as Rt,e as jt}from"./quatf64-aQ5IuZRd.js";import{g as et,u as mt,o as D,Q as w,f as lt,X as At,Z as ia,N as ea,R as Xt,d as na,l as oa,r as Ct,q as gt,m as ra,e as ha}from"./vec32-BOJsoKIk.js";import{aC as f,cs as zt,fL as ca,fx as Qt,fM as ua,fN as fa,f1 as Ft}from"./main-CxlHa1F_.js";import{z as da}from"./vec42-CKs01hkn.js";import{n as ma}from"./vec4f64-CMoMXWBi.js";import{a as _t}from"./spatialReferenceEllipsoidUtils-BF9AjBNN.js";import{C as la}from"./computeTranslationToOriginAndRotation-B-NxEdz1.js";import{n as xt,G as Zt}from"./projectBuffer-CU3KVS3i.js";import{c as vt,o as _a,O as St}from"./plane-C0GogQtY.js";import{l as ga}from"./ViewingMode-HRfKv6NR.js";import{n as ba}from"./vec2f64-B7N_6o8F.js";class yt{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class ss extends yt{constructor(t,a,s,n=!1,o=s){super(t,s,o),this.indices=a,this.exclusive=n}}const nt=1e-6,ot=f(),bt=f();function $a(i,t){const{data:a,size:s}=i,n=a.length/s;if(n<=0)return;const o=new qa(i);qt(ot,o.minProj,o.maxProj),ft(ot,ot,.5),y(bt,o.maxProj,o.minProj);const r=It(bt),c=new wa;c.quality=r,n<14&&(i=new yt(new Float64Array(o.buffer,112,42),3));const e=f(),h=f(),b=f(),l=f(),z=f(),A=f(),$=f();switch(Ma(o,i,$,e,h,b,l,z,A,c)){case 1:return void Ot(ot,bt,t);case 2:return void Na(i,l,t)}Pa(i,$,e,h,b,l,z,A,c),Bt(i,c.b0,c.b1,c.b2,at,st);const E=f();y(E,st,at),c.quality=It(E),c.quality<r?Wt(c.b0,c.b1,c.b2,at,st,E,t):Ot(ot,bt,t)}function Ma(i,t,a,s,n,o,r,c,e,h){return ja(i,s,n),wt(s,n)<nt?1:(y(r,s,n),g(r,r),xa(t,s,r,o)<nt?2:(y(c,n,o),g(c,c),y(e,o,s),g(e,e),V(a,c,r),g(a,a),W(t,a,r,c,e,h),0))}const rt=f(),ht=f(),S=f(),N=f(),I=f(),H=f(),R=f(),X=f();function Pa(i,t,a,s,n,o,r,c,e){pa(i,t,a,rt,ht),rt[0]!==void 0&&(y(S,rt,a),g(S,S),y(N,rt,s),g(N,N),y(I,rt,n),g(I,I),V(H,N,o),g(H,H),V(R,I,r),g(R,R),V(X,S,c),g(X,X),W(i,H,o,N,S,e),W(i,R,r,I,N,e),W(i,X,c,S,I,e)),ht[0]!==void 0&&(y(S,ht,a),g(S,S),y(N,ht,s),g(N,N),y(I,ht,n),g(I,I),V(H,N,o),g(H,H),V(R,I,r),g(R,R),V(X,S,c),g(X,X),W(i,H,o,N,S,e),W(i,R,r,I,N,e),W(i,X,c,S,I,e))}function ja(i,t,a){let s=wt(i.maxVert[0],i.minVert[0]),n=0;for(let o=1;o<7;++o){const r=wt(i.maxVert[o],i.minVert[o]);r>s&&(s=r,n=o)}p(t,i.minVert[n]),p(a,i.maxVert[n])}const q=[0,0,0];function xa(i,t,a,s){const{data:n,size:o}=i;let r=Number.NEGATIVE_INFINITY,c=0;for(let e=0;e<n.length;e+=o){q[0]=n[e]-t[0],q[1]=n[e+1]-t[1],q[2]=n[e+2]-t[2];const h=a[0]*q[0]+a[1]*q[1]+a[2]*q[2],b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],l=q[0]*q[0]+q[1]*q[1]+q[2]*q[2]-h*h/b;l>r&&(r=l,c=e)}return p(s,n,c),r}const _=ba();function pa(i,t,a,s,n){Sa(i,t,_,n,s);const o=Jt(a,t);_[1]-nt<=o&&(s[0]=void 0),_[0]+nt>=o&&(n[0]=void 0)}const Tt=f(),Et=f(),Gt=f(),J=f(),L=f(),$t=f();function W(i,t,a,s,n,o){if(Dt(t)<nt)return;V(Tt,a,t),V(Et,s,t),V(Gt,n,t),tt(i,t,_),L[1]=_[0],J[1]=_[1],$t[1]=J[1]-L[1];const r=[a,s,n],c=[Tt,Et,Gt];for(let e=0;e<3;++e){tt(i,r[e],_),L[0]=_[0],J[0]=_[1],tt(i,c[e],_),L[2]=_[0],J[2]=_[1],$t[0]=J[0]-L[0],$t[2]=J[2]-L[2];const h=It($t);h<o.quality&&(p(o.b0,r[e]),p(o.b1,t),p(o.b2,c[e]),o.quality=h)}}const za=f();function tt(i,t,a){const{data:s,size:n}=i;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let o=0;o<s.length;o+=n){const r=s[o]*t[0]+s[o+1]*t[1]+s[o+2]*t[2];a[0]=Math.min(a[0],r),a[1]=Math.max(a[1],r)}}function Sa(i,t,a,s,n){const{data:o,size:r}=i;p(s,o),p(n,s),a[0]=Jt(za,t),a[1]=a[0];for(let c=r;c<o.length;c+=r){const e=o[c]*t[0]+o[c+1]*t[1]+o[c+2]*t[2];e<a[0]&&(a[0]=e,p(s,o,c)),e>a[1]&&(a[1]=e,p(n,o,c))}}function Ot(i,t,a){a.center=i,a.halfSize=et(t,t,.5),a.quaternion=Rt}const G=f(),K=f(),ct=f(),at=f(),st=f(),Yt=f();function Na(i,t,a){p(G,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?G[0]=0:Math.abs(t[1])>Math.abs(t[2])?G[1]=0:G[2]=0,Dt(G)<nt&&(G[0]=G[1]=G[2]=1),V(K,t,G),g(K,K),V(ct,t,K),g(ct,ct),Bt(i,t,K,ct,at,st),y(Yt,st,at),Wt(t,K,ct,at,st,Yt,a)}function Bt(i,t,a,s,n,o){tt(i,t,_),n[0]=_[0],o[0]=_[1],tt(i,a,_),n[1]=_[0],o[1]=_[1],tt(i,s,_),n[2]=_[0],o[2]=_[1]}const Z=f(),ut=f(),Mt=f(),v=kt(1,0,0,0,1,0,0,0,1),Ia=jt();function Wt(i,t,a,s,n,o,r){v[0]=i[0],v[1]=i[1],v[2]=i[2],v[3]=t[0],v[4]=t[1],v[5]=t[2],v[6]=a[0],v[7]=a[1],v[8]=a[2],r.quaternion=ya(Ia,v),qt(Z,s,n),ft(Z,Z,.5),ft(ut,i,Z[0]),ft(Mt,t,Z[1]),qt(ut,ut,Mt),ft(Mt,a,Z[2]),r.center=mt(ut,ut,Mt),r.halfSize=et(Z,o,.5)}const P=7;let qa=class{constructor(t){this.minVert=new Array(P),this.maxVert=new Array(P);const a=64*P;this.buffer=new ArrayBuffer(a);let s=0;this.minProj=new Float64Array(this.buffer,s,P),s+=8*P,this.maxProj=new Float64Array(this.buffer,s,P),s+=8*P;for(let e=0;e<P;++e)this.minVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.maxVert[e]=new Float64Array(this.buffer,s,3),s+=24;for(let e=0;e<P;++e)this.minProj[e]=Number.POSITIVE_INFINITY,this.maxProj[e]=Number.NEGATIVE_INFINITY;const n=new Array(P),o=new Array(P),{data:r,size:c}=t;for(let e=0;e<r.length;e+=c){let h=r[e];h<this.minProj[0]&&(this.minProj[0]=h,n[0]=e),h>this.maxProj[0]&&(this.maxProj[0]=h,o[0]=e),h=r[e+1],h<this.minProj[1]&&(this.minProj[1]=h,n[1]=e),h>this.maxProj[1]&&(this.maxProj[1]=h,o[1]=e),h=r[e+2],h<this.minProj[2]&&(this.minProj[2]=h,n[2]=e),h>this.maxProj[2]&&(this.maxProj[2]=h,o[2]=e),h=r[e]+r[e+1]+r[e+2],h<this.minProj[3]&&(this.minProj[3]=h,n[3]=e),h>this.maxProj[3]&&(this.maxProj[3]=h,o[3]=e),h=r[e]+r[e+1]-r[e+2],h<this.minProj[4]&&(this.minProj[4]=h,n[4]=e),h>this.maxProj[4]&&(this.maxProj[4]=h,o[4]=e),h=r[e]-r[e+1]+r[e+2],h<this.minProj[5]&&(this.minProj[5]=h,n[5]=e),h>this.maxProj[5]&&(this.maxProj[5]=h,o[5]=e),h=r[e]-r[e+1]-r[e+2],h<this.minProj[6]&&(this.minProj[6]=h,n[6]=e),h>this.maxProj[6]&&(this.maxProj[6]=h,o[6]=e)}for(let e=0;e<P;++e){let h=n[e];p(this.minVert[e],r,h),h=o[e],p(this.maxVert[e],r,h)}}},wa=class{constructor(){this.b0=zt(1,0,0),this.b1=zt(0,1,0),this.b2=zt(0,0,1),this.quality=0}};function It(i){return i[0]*i[1]+i[0]*i[2]+i[1]*i[2]}function qt(i,t,a){i[0]=t[0]+a[0],i[1]=t[1]+a[1],i[2]=t[2]+a[2]}function y(i,t,a){i[0]=t[0]-a[0],i[1]=t[1]-a[1],i[2]=t[2]-a[2]}function ft(i,t,a){i[0]=t[0]*a,i[1]=t[1]*a,i[2]=t[2]*a}function p(i,t,a=0){i[0]=t[a],i[1]=t[a+1],i[2]=t[a+2]}function V(i,t,a){const s=t[0],n=t[1],o=t[2],r=a[0],c=a[1],e=a[2];i[0]=n*e-o*c,i[1]=o*r-s*e,i[2]=s*c-n*r}function g(i,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s}}function Dt(i){return i[0]*i[0]+i[1]*i[1]+i[2]*i[2]}function wt(i,t){const a=t[0]-i[0],s=t[1]-i[1],n=t[2]-i[2];return a*a+s*s+n*n}function Jt(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ya(i,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);i[3]=.5*s,s=.5/s,i[0]=(t[5]-t[7])*s,i[1]=(t[6]-t[2])*s,i[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const n=(s+1)%3,o=(s+2)%3;let r=Math.sqrt(t[3*s+s]-t[3*n+n]-t[3*o+o]+1);i[s]=.5*r,r=.5/r,i[3]=(t[3*n+o]-t[3*o+n])*r,i[n]=(t[3*n+s]+t[3*s+n])*r,i[o]=(t[3*o+s]+t[3*s+o])*r}return i}class dt{constructor(t=ca,a=Oa,s=Rt){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new dt;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new dt;return a._data=t.slice(),a}static fromJSON(t){return new dt(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return D(vt.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return D(vt.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return aa(_a.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=m,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let n=0;n<8;++n){const o=t[n];o[0]=(1&n?-1:1)*s[3],o[1]=(2&n?-1:1)*s[4],o[2]=(4&n?-1:1)*s[5],w(o,o,a),o[0]+=s[0],o[1]+=s[1],o[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){u[0]=this._data[0]-t[0],u[1]=this._data[1]-t[1],u[2]=this._data[2]-t[2];const a=this.getQuaternion(Y);return U(m,a),w(u,u,m),lt(u,u),O[0]=Math.min(u[0],this._data[3]),O[1]=Math.min(u[1],this._data[4]),O[2]=Math.min(u[2],this._data[5]),At(O,u)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;u[0]=s[0]-t[0],u[1]=s[1]-t[1],u[2]=s[2]-t[2];const n=t[3],o=n+a;return!(ia(u)>o*o)&&(m[0]=-s[6],m[1]=-s[7],m[2]=-s[8],m[3]=s[9],w(u,u,m),lt(u,u),O[0]=Math.min(u[0],s[3]),O[1]=Math.min(u[1],s[4]),O[2]=Math.min(u[2],s[5]),At(O,u)<n*n)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(St(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const n=this._data,o=m;o[0]=-n[6],o[1]=-n[7],o[2]=-n[8],o[3]=n[9],u[0]=t[0]-n[0],u[1]=t[1]-n[1],u[2]=t[2]-n[2];const r=w(u,u,m),c=w(O,a,m);let e=-1/0,h=1/0;const b=this.getHalfSize(it);for(let l=0;l<3;l++){const z=r[l],A=c[l],$=b[l]+s;if(Math.abs(A)>1e-6){const E=($-z)/A,M=(-$-z)/A;e=Math.max(e,Math.min(E,M)),h=Math.min(h,Math.max(E,M))}else if(z>$||z<-$)return!1}return e<=h}projectedArea(t,a,s,n){const o=this.getQuaternion(Y);U(m,o),u[0]=t[0]-this._data[0],u[1]=t[1]-this._data[1],u[2]=t[2]-this._data[2],w(u,u,m);const r=this.getHalfSize(it),c=u[0]<-r[0]?-1:u[0]>r[0]?1:0,e=u[1]<-r[1]?-1:u[1]>r[1]?1:0,h=u[2]<-r[2]?-1:u[2]>r[2]?1:0,b=Math.abs(c)+Math.abs(e)+Math.abs(h);if(b===0)return 1/0;const l=b===1?4:6,z=6*(c+3*e+9*h+13);Nt(k,o),Kt(k,k,r);const A=this.getCenter(F);for(let M=0;M<l;M++){const pt=Ca[z+M];D(u,((1&pt)<<1)-1,(2&pt)-1,((4&pt)>>1)-1),ea(u,u,k),mt(B,A,u),B[3]=1,da(B,B,a);const Vt=1/Math.max(1e-6,B[3]);C[2*M]=B[0]*Vt,C[2*M+1]=B[1]*Vt}const $=2*l-2;let E=C[0]*(C[3]-C[$+1])+C[$]*(C[1]-C[$-1]);for(let M=2;M<$;M+=2)E+=C[M]*(C[M+3]-C[M-1]);return Math.abs(E)*s*n*.125}projectedRadius(t){const a=this.getQuaternion(Y);return U(m,a),w(u,t,m),Math.abs(u[0]*this._data[3])+Math.abs(u[1]*this._data[4])+Math.abs(u[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(St(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(St(t))}toAaBoundingBox(t){const a=this.getQuaternion(Y),s=Nt(k,a),n=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),o=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),r=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-n,t[1]=this._data[1]-o,t[2]=this._data[2]-r,t[3]=this._data[0]+n,t[4]=this._data[1]+o,t[5]=this._data[2]+r}transform(t,a,s,n=0,o=_t(s),r=_t(a),c=Zt(a,r)){if(s===o)a.isGeographic?Ta(this,t,a,n,r):va(this,t,a,n,r,c);else if(a.isWGS84&&(s.isWebMercator||Qt(s)))Qa(a,this,s,t,n);else if(a.isWebMercator&&Qt(s))Fa(a,this,s,t,n);else{const e=this.getCenter(F);e[2]+=n,xt(e,a,0,e,s,0),t.center=e,this!==t&&(t.quaternion=this.getQuaternion(Y),t.halfSize=this.getHalfSize(it))}}}const m=jt(),Y=jt(),Va=jt(),u=f(),O=f(),B=ma();function Aa(i,t=new dt){return $a(i,t),t}const C=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Ca=(()=>{const i=new Int8Array(162);let t=0;const a=s=>{for(let n=0;n<s.length;n++)i[t+n]=s[n];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),i})();function ns(i,t,a,s,n){const o=i.getQuaternion(Y);n.quaternion=o,U(m,o);const r=i.getCenter(F),c=i.getHalfSize(it);if(s===ga.Global){w(d,r,m),lt(Q,d),oa(x,Q,c),Xt(x,Q,x);const e=Ct(x);mt(x,Q,c);const h=Ct(x);if(e<a)n.center=r,D(d,a,a,a),n.halfSize=mt(d,c,d);else{const b=h>0?1+t/h:1,l=e>0?1+a/e:1,z=(l+b)/2,A=(l-b)/2;et(x,Q,A),n.halfSize=gt(x,x,c,z),et(x,Q,z),gt(x,x,c,A),ra(d,d),ha(d,x,d);const $=i.getQuaternion(Va);n.center=w(d,d,$)}}else{n.center=gt(d,r,Ft,(a+t)/2);const e=w(d,Ft,m);lt(e,e),n.halfSize=gt(Q,c,e,(a-t)/2)}return n}function Qa(i,t,a,s,n){t.getCenter(F),F[2]+=n;const o=_t(a);xt(F,i,0,F,o,0),Lt(o,t,F,a,s)}function Fa(i,t,a,s,n){t.getCenter(F),F[2]+=n,Lt(i,t,F,a,s)}function Lt(i,t,a,s,n){const o=t.getQuaternion(Y),r=Nt(k,o),c=t.getHalfSize(it);for(let e=0;e<8;++e){for(let h=0;h<3;++h)T[h]=c[h]*(e&1<<h?-1:1);for(let h=0;h<3;++h){let b=a[h];for(let l=0;l<3;++l)b+=T[l]*r[3*l+h];Pt[3*e+h]=b}}xt(Pt,i,0,Pt,s,0,8),Aa(Ea,n)}function va(i,t,a,s,n=_t(a),o=Zt(a,n)){i.getCorners(Ht),i.getCenter(T),T[2]+=s,la(a,T,j,n),t.setCenter(j[12],j[13],j[14]);const r=2*Math.sqrt(1+j[0]+j[5]+j[10]);m[0]=(j[6]-j[9])/r,m[1]=(j[8]-j[2])/r,m[2]=(j[1]-j[4])/r,m[3]=.25*r;const c=i.getQuaternion(Y);t.quaternion=sa(m,m,c),U(m,m),D(Q,0,0,0);const e=t.getCenter(Ga);for(const h of Ht)h[2]+=s,o(h,0,h,0),Xt(d,h,e),w(d,d,m),lt(d,d),na(Q,Q,d);t.halfSize=Q}function Ta(i,t,a,s,n=_t(a)){const o=ua(a),r=1+Math.max(0,s)/(o.radius+i.centerZ);i.getCenter(T),T[2]+=s,xt(T,a,0,T,n,0),t.center=T;const c=i.getQuaternion(Y);t.quaternion=c,U(m,c),D(d,0,0,1),w(d,d,m);const e=i.getHalfSize(it);D(d,e[0]*Math.abs(d[0]),e[1]*Math.abs(d[1]),e[2]*Math.abs(d[2])),et(d,d,o.inverseFlattening),mt(d,e,d),t.halfSize=et(d,d,r)}const Pt=new Array(24),Ea=new yt(Pt,3),T=f(),F=f(),Ga=f(),it=f(),k=Ut(),j=ta(),Ht=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],d=f(),Q=f(),x=f(),Oa=fa(-1,-1,-1);export{dt as I,ns as L,ss as t};
