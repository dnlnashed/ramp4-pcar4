import{o as v}from"./floatRGBA-D7GHzRie.js";import{cO as y}from"./main-DB4i4A8K.js";import{t as F,c as C,o as b}from"./constants-Bqe1QJ4u.js";const A=r=>r==="vertical"||r==="horizontal"||r==="cross"||r==="esriSFSCross"||r==="esriSFSVertical"||r==="esriSFSHorizontal";function z(r,d,M){const s=d.style,h=y(Math.ceil(M)),t=A(s)?8*h:16*h,o=2*h;r.width=t,r.height=t;const e=r.getContext("2d");e.strokeStyle="#ffffff",e.lineWidth=h,e.beginPath(),s!=="vertical"&&s!=="cross"&&s!=="esriSFSCross"&&s!=="esriSFSVertical"||(e.moveTo(t/2,-o),e.lineTo(t/2,t+o)),s!=="horizontal"&&s!=="cross"&&s!=="esriSFSCross"&&s!=="esriSFSHorizontal"||(e.moveTo(-o,t/2),e.lineTo(t+o,t/2)),s!=="backward-diagonal"&&s!=="diagonal-cross"&&s!=="esriSFSDiagonalCross"&&s!=="esriSFSBackwardDiagonal"||(e.moveTo(-o,-o),e.lineTo(t+o,t+o),e.moveTo(t-o,-o),e.lineTo(t+o,o),e.moveTo(-o,t-o),e.lineTo(o,t+o)),s!=="forward-diagonal"&&s!=="diagonal-cross"&&s!=="esriSFSForwardDiagonal"&&s!=="esriSFSDiagonalCross"||(e.moveTo(t+o,-o),e.lineTo(-o,t+o),e.moveTo(o,-o),e.lineTo(-o,o),e.moveTo(t+o,t-o),e.lineTo(t-o,t+o)),e.stroke();const m=e.getImageData(0,0,r.width,r.height),i=new Uint8Array(m.data);let c;for(let n=0;n<i.length;n+=4)c=i[n+3]/255,i[n]=i[n]*c,i[n+1]=i[n+1]*c,i[n+2]=i[n+2]*c;return[i,r.width,r.height,h]}function D(r){r.length%2==1&&(r=[...r,...r]);const d=r.reduce((n,l)=>n+l,0),M=Math.round(d*F),s=1,h=new Float32Array(M*s);let t=0,o=0,e=.5,m=!0;for(const n of r){for(t=o,o+=n*F;e<=o;){const l=e-.5,a=Math.min(Math.abs(e-t),Math.abs(e-o));h[l]=m?-a:a,e++}m=!m}const i=h.length,c=new Uint8Array(4*i);for(let n=0;n<i;++n){const l=h[n]/F;v(l/C*.5+.5,c,4*n)}return[c,M,s]}function k(r,d){r==null&&(r=[]);const M=d==="Butt",s=d==="Square",h=!M&&!s;r.length%2==1&&(r=[...r,...r]);const t=b,o=2*t;let e=0;for(const f of r)e+=f;const m=Math.round(e*t),i=new Float32Array(m*o),c=.5*t;let n=0,l=0,a=.5,T=!0;for(const f of r){for(n=l,l+=f*t;a<=l;){let g=.5;for(;g<o;){const x=(g-.5)*m+a-.5,S=h?(g-t)*(g-t):Math.abs(g-t);i[x]=T?M?Math.max(Math.max(n+c-a,S),Math.max(a-l+c,S)):S:h?Math.min((a-n)*(a-n)+S,(a-l)*(a-l)+S):s?Math.min(Math.max(a-n,S),Math.max(l-a,S)):Math.min(Math.max(a-n+c,S),Math.max(l+c-a,S)),g++}a++}T=!T}const u=i.length,w=new Uint8Array(4*u);for(let f=0;f<u;++f){const g=(h?Math.sqrt(i[f]):i[f])/t;v(g,w,4*f)}return[w,m,o]}export{D as i,k as l,z as s};
