import{au as B,bq as I,bQ as ke,bC as V,bv as E,bF as Ee,s as fe,cq as T,cr as C,cs as ue,ct as ve,cu as Te,B as xe}from"./main-C872cFCP.js";import{_ as F,W as Ce,K as z,J as _e,Y as he}from"./projection-DV6L2ZlL.js";var H;function $(e,t,i){return!_e(e,t,i)}function L(e,t,i){const o=$(e,t,i);if(o&&!F())throw new fe("rasterprojectionhelper-project","projection engine is not loaded");return o}(function(e){e[e.None=0]="None",e[e.North=1]="North",e[e.South=2]="South",e[e.Both=3]="Both"})(H||(H={}));const me=(e,t,i,o=0)=>{if(i[0]===1)return[0,0];let a=1,n=-1,s=1,c=-1;for(let f=0;f<e.length;f+=2)isNaN(e[f])||(a=a>e[f]?e[f]:a,n=n>e[f]?n:e[f],s=s>e[f+1]?e[f+1]:s,c=c>e[f+1]?c:e[f+1]);const{cols:l,rows:r}=t,u=(n-a)/l/i[0],w=(c-s)/r/i[1],g=2*o;let x=0,h=!1,m=[0,0];for(let f=0;f<l-3;f++){for(let M=0;M<r-3;M++){const y=f*r*2+2*M,p=(e[y]+e[y+4]+e[y+4*r]+e[y+4*r+4])/4,d=(e[y+1]+e[y+5]+e[y+4*r+1]+e[y+4*r+5])/4,R=Math.abs((p-e[y+2*r+2])/u),S=Math.abs((d-e[y+2*r+3])/w);if(R+S>x&&(x=R+S,m=[R,S]),g&&x>g){h=!0;break}}if(h)break}return m},ze={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},q=32,Y=4,Z=Y,ee=new Map,te=new Map,J=500;let K=null;async function Le(){K&&F()||(F()||await Ce(),K=await import("./geometryEngine-op25KnMn.js"))}function pe(e,t,i){return L(e.spatialReference,t),i?he(t,e.spatialReference,e):he(e.spatialReference,t,e)}function We(e,t,i,o=null){const a=e.spatialReference;if(!a||!t||a.equals(t))return e;L(a,t,o);const n=i.center,s=new B({xmin:n.x-e.x/2,xmax:n.x+e.x/2,ymin:n.y-e.y/2,ymax:n.y+e.y/2,spatialReference:a}),c=z(s,t,o),l=k(t);return c==null||l!=null&&c.width>=l?D(e,a,t):{x:c.width,y:c.height}}function D(e,t,i){const o=I(t)/I(i);return{x:e.x*o,y:e.y*o}}function ge(e,t,i){const{spatialReference:o}=i;if(!o||!t||o.equals(t))return e;if(o.isGeographic&&t.isGeographic)return D(e,o,t);if(L(o,t),!K)throw new fe("raster-projection-helper:project-dataset-resolution","geometry engine is not loaded");let{x:a,y:n}=e;const s=(a+n)/2*I(o);let c=1;s>30&&(c=30/s,a*=c,n*=c);const l=256,r=a*l/2,u=n*l/2,{x:w,y:g}=i.center,x=[];for(let b=0;b<=l;b++)x.push([w-r,g-u+b*n]);for(let b=1;b<=l;b++)x.push([w-r+b*a,g+u]);for(let b=1;b<=l;b++)x.push([w+r,g+u-b*n]);for(let b=1;b<l;b++)x.push([w+r-b*a,g-u]);x.push(x[0]);const h=new V({rings:[x],spatialReference:o}),m=z(h,t);if(!m)return D(e,o,t);const f=m.extent,M=k(t);if(f==null||M!=null&&f.width>=M)return D(e,o,t);const y=K.planarArea(m),p=a*n*l*l,d=Math.sqrt(y/p)/c,R={x:f.width/c/l,y:f.height/c/l},S={x:a*d,y:n*d},G=R.x*R.y;return Math.abs(G-S.x*S.y)/G<.1?R:S}function N(e,t=.01){return I(e)?t/I(e):0}function ne(e,t,i=null,o=!0){const a=e.spatialReference;if(a.equals(t))return e;L(a,t,i);const n=z(e,t,i);return o&&n&&ye([e],[n],a,t),n}function ye(e,t,i,o){const a=X(i,!0),n=X(o,!0),s=N(i,J),c=N(o,J);if(s&&a!=null&&n!=null)for(let l=0;l<e.length;l++){const r=t[l];if(!r)continue;const{x:u}=e[l],{x:w}=r;w>=n[1]-c&&Math.abs(u-a[0])<s?r.x-=n[1]-n[0]:w<=n[0]+c&&Math.abs(u-a[1])<s&&(r.x+=n[1]-n[0])}}function Ie(e){const{inSR:t,outSR:i,datumTransformation:o,preferPE:a}=e;if(t.equals(i)){const{points:n}=ie(e,null);return n}return t.isWebMercator&&i.isWGS84||t.isWGS84&&i.isWebMercator?Ae(e):L(t,i,o)&&a&&(t.isGeographic||O(t)!=null)?je(e):Oe(e)}function Oe(e){const{points:t}=ie(e,null),{inSR:i,outSR:o,datumTransformation:a}=e,n=t.map(c=>new E(c[0],c[1],i)),s=z(n,o,a);return a&&ye(n,s,i,o),s.map(c=>c?[c.x,c.y]:[NaN,NaN])}function je(e){const{inSR:t,outSR:i,datumTransformation:o}=e,a=O(t),{points:n,mask:s}=ie(e,a);if(!t.isGeographic){const l=t.wkid?T.coordsys(t.wkid):T.fromString(t.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,t.wkt2||t.wkt);ue.projToGeog(l,n.length,n)}if(o!=null&&o.steps.length){let l;if(i.isGeographic&&(l=n.map(([r])=>r>179.9955?1:r<-179.9955?-1:0)),o.steps.forEach(r=>{const u=r.wkid?T.geogtran(r.wkid):T.fromString(C.PE_TYPE_GEOGTRAN,r.wkt);ve.geogToGeog(u,n.length,n,null,r.isInverse?C.PE_TRANSFORM_2_TO_1:C.PE_TRANSFORM_1_TO_2)}),l)for(let r=0;r<n.length;r++){const u=l[r],w=n[r][0],g=w>179.9955?1:w<-179.9955?-1:0;u&&g&&u!==g&&(n[r][0]=u>0?w+360:w-360)}}if(!i.isGeographic){const l=O(i,!0),r=l!=null&&l.isEnvelope?[l.bbox[1],l.bbox[3]]:[-90,90];Be(n,r);const u=i.wkid?T.coordsys(i.wkid):T.fromString(i.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,i.wkt2||i.wkt);ue.geogToProj(u,n.length,n)}let c=n;if(s&&n.length!==s.length){c=[];for(let l=0,r=0;l<s.length;l++)s[l]?c.push(n[r++]):c.push([NaN,NaN])}return c}function Ae(e){const{cols:t,rows:i,xres:o,yres:a,usePixelCenter:n,inSR:s,outSR:c}=e;let{xmin:l,ymax:r}=e;n&&(l+=o/2,r-=a/2);const u=[],w=[],g=Math.max(t,i);for(let h=0;h<g;h++){const m=l+o*Math.min(t,h),f=r-a*Math.min(i,h),M=z(new E({x:m,y:f,spatialReference:s}),c);h<=t&&u.push(M.x),h<=i&&w.push(M.y)}const x=[];for(let h=0;h<t;h++)for(let m=0;m<i;m++)x.push([u[h],w[m]]);return x}function O(e,t=!1){let i=e.wkid||e.wkt2||e.wkt;if(!i||e.isGeographic)return null;if(i=String(i),ee.has(i)){const s=ee.get(i);return t?s?.gcs:s?.pcs}const o=e.wkid?T.coordsys(e.wkid):T.fromString(e.isGeographic?C.PE_TYPE_GEOGCS:C.PE_TYPE_PROJCS,e.wkt2||e.wkt),a=de(o,N(e,1e-4)),n=de(o,0,!0);return ee.set(i,{pcs:a,gcs:n}),t?n:a}function de(e,t=0,i=!1){const o=Te.generate(e),a=i?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!o||!a?.length)return null;let n=!1,s=a.find(f=>f.getInclusive()===1&&f.getKind()===1);if(!s){if(s=a.find(f=>f.getInclusive()===1&&f.getKind()===0),!s)return null;n=!0}const c=i?0:(o.getNorthPoleLocation()===2?1:0)|(o.getSouthPoleLocation()===2?2:0),l=o.isPannableRectangle(),r=s.getCoord();if(n)return{isEnvelope:n,isPannable:l,vertices:r,coef:null,bbox:[r[0][0]-t,r[0][1]-t,r[1][0]+t,r[1][1]+t],poleLocation:c};let u=0;const w=[];let[g,x]=r[0],[h,m]=r[0];for(let f=0,M=r.length;f<M;f++){u++,u===M&&(u=0);const[y,p]=r[f],[d,R]=r[u];if(R===p)w.push([y,d,p,R,2]);else{const S=(d-y)/(R-p||1e-4),G=y-S*p;p<R?w.push([S,G,p,R,0]):w.push([S,G,R,p,1])}g=g<y?g:y,x=x<p?x:p,h=h>y?h:y,m=m>p?m:p}return{isEnvelope:!1,isPannable:l,vertices:r,coef:w,bbox:[g,x,h,m],poleLocation:c}}function ie(e,t){const i=[],{cols:o,rows:a,xres:n,yres:s,usePixelCenter:c}=e;let{xmin:l,ymax:r}=e;if(c&&(l+=n/2,r-=s/2),t==null){for(let x=0;x<o;x++)for(let h=0;h<a;h++)i.push([l+n*x,r-s*h]);return{points:i}}const u=new Uint8Array(o*a);if(t.isEnvelope){const{bbox:[x,h,m,f]}=t;for(let M=0,y=0;M<o;M++){const p=l+n*M,d=t.isPannable||p>=x&&p<=m;for(let R=0;R<a;R++,y++){const S=r-s*R;d&&S>=h&&S<=f&&(i.push([p,S]),u[y]=1)}}return{points:i,mask:u}}const w=t.coef,g=[];for(let x=0;x<a;x++){const h=r-s*x,m=[],f=[];for(let y=0;y<w.length;y++){const[p,d,R,S,G]=w[y];if(h===R&&R===S)m.push(p),m.push(d),f.push(2),f.push(2);else if(h>=R&&h<=S){const b=p*h+d;m.push(b),f.push(G)}}let M=m;if(m.length>2){let y=f[0]===2?0:f[0],p=m[0];M=[];for(let d=1;d<f.length;d++)f[d]===2&&d!==f.length-1||(f[d]!==y&&(M.push(y===0?Math.min(p,m[d-1]):Math.max(p,m[d-1])),y=f[d],p=m[d]),d===f.length-1&&M.push(f[d]===0?Math.min(p,m[d]):Math.max(p,m[d])));M.sort((d,R)=>d-R)}else m[0]>m[1]&&(M=[m[1],m[0]]);g.push(M)}for(let x=0,h=0;x<o;x++){const m=l+n*x;for(let f=0;f<a;f++,h++){const M=r-s*f,y=g[f];if(y.length===2)m>=y[0]&&m<=y[1]&&(i.push([m,M]),u[h]=1);else if(y.length>2){let p=!1;for(let d=0;d<y.length;d+=2)if(m>=y[d]&&m<=y[d+1]){p=!0;break}p&&(i.push([m,M]),u[h]=1)}}}return{points:i,mask:u}}function Be(e,t){const[i,o]=t;for(let a=0;a<e.length;a++){const n=e[a][1];(n<i||n>o)&&(e[a]=[NaN,NaN])}}function we(e,t){const i=k(e[0].spatialReference);if(e.length<2||i==null||(t=t??N(e[0].spatialReference),(e=e.filter(c=>c.width>t)).length===1))return e[0];let{xmin:o,xmax:a,ymin:n,ymax:s}=e[0];for(let c=1;c<e.length;c++){const l=e[c];a=l.xmax+i*c,n=Math.min(n,l.ymin),s=Math.max(s,l.ymax)}return new B({xmin:o,xmax:a,ymin:n,ymax:s,spatialReference:e[0].spatialReference})}function oe(e,t,i=null,o=!0){const a=e.spatialReference;if(a.equals(t))return e;const n=se(e),s=k(a,!0),c=k(t);if(n===0||s==null||c==null){const r=Me(e,t,i,o);if(s==null&&c!=null&&Math.abs(r.width-c)<N(t)&&F()){const u=O(a);if(u!=null&&u.poleLocation===H.None&&e.width<(u.bbox[2]-u.bbox[0])/2)return qe(e,t)||r}return r}const l=e.clone().normalize();if(l.length===1&&e.xmax<s&&e.xmax-s/2>N(a)){const{xmin:r,xmax:u}=e;for(let w=0;w<=n;w++){const g=w===0?r:-s/2,x=w===n?u-s*w:s/2;l[w]=new B({xmin:g,xmax:x,ymin:e.ymin,ymax:e.ymax,spatialReference:a})}}return we(l.map(r=>Me(r,t,i,o)).filter(ke))}function Fe(e,t,i){if(e.type==="extent"){const{xmin:o,ymin:a,xmax:n,ymax:s,spatialReference:c}=e;e=new V({rings:[[[o,s],[n,s],[n,a],[o,a],[o,s]]],spatialReference:c})}return e.spatialReference.equals(t)?e:(L(e.spatialReference,t,i),z(e,t,i))}function qe(e,t){const i=k(t);if(i==null)return null;let{xmin:o,ymin:a,xmax:n,ymax:s}=e;const c=e.spatialReference,l=new V({spatialReference:c,rings:[[[o,a],[n,a],[n,s],[o,s],[o,a]]]}),r=z(l,t);if(r.rings.length!==2||!r.rings[0].length||!r.rings[1].length)return null;const{rings:u}=r,w=N(c),g=new B({spatialReference:t});for(let x=0;x<2;x++){o=n=u[x][0][0],a=s=u[x][0][1];for(let h=0;h<u[x].length;h++)o=o>u[x][h][0]?u[x][h][0]:o,n=n<u[x][h][0]?u[x][h][0]:n,a=a>u[x][h][1]?u[x][h][1]:a,s=s<u[x][h][1]?u[x][h][1]:s;if(x===0)g.ymin=a,g.ymax=s,g.xmin=o,g.xmax=n;else if(g.ymin=Math.min(g.ymin,a),g.ymax=Math.max(g.ymax,s),Math.abs(n-i/2)<w)g.xmin=o,g.xmax=g.xmax+i;else{if(!(Math.abs(o+i/2)<w))return null;g.xmax=n+i}}return g}function Me(e,t,i=null,o=!0,a=!0){const n=e.spatialReference;if(n.equals(t)||!t)return e;L(n,t,i);const s=z(e,t,i);if(a&&t.isWebMercator&&s&&(s.ymax=Math.min(20037508342787e-6,s.ymax),s.ymin=Math.max(-20037508342787e-6,s.ymin),s.ymin>=s.ymax))return null;if(!o||!s)return s;const c=X(n,!0),l=X(t,!0);if(c==null||l==null)return s;const r=N(n,.001),u=N(n,J),w=N(t,.001);if(Math.abs(s.xmin-l[0])<w&&Math.abs(s.xmax-l[1])<w){const g=Math.abs(e.xmin-c[0]),x=Math.abs(c[1]-e.xmax);if(g<r&&x>u){s.xmin=l[0];const h=[];h.push(new E(e.xmax,e.ymin,n)),h.push(new E(e.xmax,(e.ymin+e.ymax)/2,n)),h.push(new E(e.xmax,e.ymax,n));const m=h.map(f=>ne(f,t,i)).filter(f=>!isNaN(f?.x)).map(f=>f.x);s.xmax=Math.max.apply(null,m)}if(x<r&&g>u){s.xmax=l[1];const h=[];h.push(new E(e.xmin,e.ymin,n)),h.push(new E(e.xmin,(e.ymin+e.ymax)/2,n)),h.push(new E(e.xmin,e.ymax,n));const m=h.map(f=>ne(f,t,i)).filter(f=>!isNaN(f?.x)).map(f=>f.x);s.xmin=Math.min.apply(null,m)}}else{const g=N(t,.001);Math.abs(s.xmin-l[0])<g&&(s.xmin=l[0]),Math.abs(s.xmax-l[1])<g&&(s.xmax=l[1])}return s}function k(e,t=!1){if(!e)return null;const i=t?20037508342787e-6:20037508342788905e-9;return e.isWebMercator?2*i:e.wkid&&e.isGeographic?360:2*ze[e.wkid]||null}function X(e,t=!1){if(e.isGeographic)return[-180,180];const i=k(e,t);return i!=null?[-i/2,i/2]:null}function Re(e,t,i,o){let a=(e-t)/i;return a-Math.floor(a)!=0?a=Math.floor(a):o&&(a-=1),a}function se(e,t=!1){const i=k(e.spatialReference);if(i==null)return 0;const o=t?0:-(i/2),a=N(e.spatialReference),n=!t&&Math.abs(e.xmax-i/2)<a?i/2:e.xmax,s=!t&&Math.abs(e.xmin+i/2)<a?-i/2:e.xmin;return Re(n,o,i,!0)-Re(s,o,i,!1)}function Ye(e){const t=e.storageInfo.origin.x,i=k(e.spatialReference,!0);if(i==null)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const o=i/2,{nativePixelSize:a,storageInfo:n,extent:s}=e,{maximumPyramidLevel:c,blockWidth:l,pyramidScalingFactor:r}=n;let u=a.x;const w=[],g=e.transform!=null&&e.transform.type==="gcs-shift",x=t+(g?0:o),h=g?i-t:o-t;for(let m=0;m<=c;m++){const f=(s.xmax-t)/u/l,M=f-Math.floor(f)==0?f:Math.ceil(f),y=h/u/l,p=y-Math.floor(y)==0?y:Math.ceil(y),d=Math.floor(x/u/l),R=Math.round(x/u)%l,S=(l-Math.round(h/u)%l)%l;w.push({resolutionX:u,blockWidth:l,datasetColumnCount:M,worldColumnCountFromOrigin:p,leftMargin:R,rightPadding:S,originColumnOffset:d}),u*=r}return{originX:t,halfWorldWidth:o,pyramidsInfo:w,hasGCSSShiftTransform:g}}function Je(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt2||e.wkt);let i;return te.has(t)?i=te.get(t):(i=(e.wkid?T.coordsys(e.wkid):T.fromString(C.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),te.set(t,i)),new xe({wkid:i})}function Ke(e){const t=e.isAdaptive&&e.spacing==null;let i=e.spacing||[q,q],o=ae(e),a={cols:o.size[0]+1,rows:o.size[1]+1};const n=o.outofBoundPointCount>0&&o.outofBoundPointCount<o.offsets.length/2;let s=o.outofBoundPointCount===o.offsets.length/2||t&&n?[0,0]:me(o.offsets,a,i,Z);const c=(s[0]+s[1])/2,l=e.projectedExtent.spatialReference,r=e.srcBufferExtent.spatialReference;if(t&&(n||c>Z)&&($(l,r,e.datumTransformation)&&(l.isGeographic||O(l)),i=[Y,Y],o=ae({...e,spacing:i}),a={cols:o.size[0]+1,rows:o.size[1]+1},s=me(o.offsets,a,i,Z)),o.error=s,i[0]>1&&(o.coefficients=be(o.offsets,a,n)),e.includeGCSGrid&&!l.isGeographic&&!l.isWebMercator)if(r.isGeographic)o.gcsGrid={offsets:o.offsets,coefficients:o.coefficients,spacing:i};else{const u=O(l);if(u!=null&&!u.isEnvelope){const w=Je(l),g=oe(e.projectedExtent,w),{offsets:x}=ae({...e,srcBufferExtent:g,spacing:i}),h=be(x,a,n);o.gcsGrid={offsets:x,coefficients:h,spacing:i}}}return o}function ae(e){const{projectedExtent:t,srcBufferExtent:i,pixelSize:o,datumTransformation:a,rasterTransform:n}=e,s=t.spatialReference,c=i.spatialReference,l=L(s,c),{xmin:r,ymin:u,xmax:w,ymax:g}=t,x=k(c),h=x!=null&&(e.hasWrapAround||n?.type==="gcs-shift"),m=e.spacing||[q,q],f=m[0]*o.x,M=m[1]*o.y,y=m[0]===1,p=Math.ceil((w-r)/f-.1/m[0])+(y?0:1),d=Math.ceil((g-u)/M-.1/m[1])+(y?0:1),R=Ie({cols:p,rows:d,xmin:r,ymax:g,xres:f,yres:M,inSR:s,outSR:c,datumTransformation:a,preferPE:m[0]<=Y,usePixelCenter:y}),S=[];let G,b=0;const v=y?-1:NaN,{xmin:W,xmax:j,ymax:Q,width:Se,height:Pe}=i,Ge=N(c,J),Ne=x!=null&&W>0&&j>x/2;let le=!1;if(l){const _=O(s);le=_!=null&&_.poleLocation>0}for(let _=0;_<p;_++){const U=[];for(let A=0;A<d;A++){let P=R[_*d+A];if(h&&P[0]>j&&P[0]>x/2-Ge?P[0]-=x:h&&_===0&&P[0]<0&&Ne&&!n&&(P[0]+=x),!P||isNaN(P[0])||isNaN(P[1]))S.push(v),S.push(v),U.push(null),b++;else{if(n){const ce=n.inverseTransform(new E({x:P[0],y:P[1],spatialReference:c}));P=[ce.x,ce.y]}U.push(P),_>0&&h&&G[A]&&P[0]<G[A][0]&&(P[0]+=x,le&&P[0]>j&&P[0]>x&&(P[0]-=x)),S.push((P[0]-W)/Se),S.push((Q-P[1])/Pe)}}G=U}return{offsets:S,error:null,coefficients:null,outofBoundPointCount:b,spacing:m,size:y?[p,d]:[p-1,d-1]}}function be(e,t,i){const{cols:o,rows:a}=t,n=new Float32Array((o-1)*(a-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<o-1;l++){for(let r=0;r<a-1;r++){let u=l*a*2+2*r;const w=e[u],g=e[u+1],x=e[u+2],h=e[u+3];u+=2*a;const m=e[u],f=e[u+1],M=e[u+2],y=e[u+3];let p=0,d=12*(r*(o-1)+l);for(let R=0;R<3;R++)n[d++]=s[p++]*w+s[p++]*x+s[p++]*M;p=0;for(let R=0;R<3;R++)n[d++]=s[p++]*g+s[p++]*h+s[p++]*y;p=0;for(let R=0;R<3;R++)n[d++]=c[p++]*w+c[p++]*m+c[p++]*M;p=0;for(let R=0;R<3;R++)n[d++]=c[p++]*g+c[p++]*f+c[p++]*y}if(i)for(let r=0;r<n.length;r++)isNaN(n[r])&&(n[r]=-1)}return n}function De(e,t){const i=e.clone().normalize();return i.length===1?i[0]:we(i,t)}function Xe(e){const{spatialReference:t}=e,i=Ee(t);if(!i)return e;const[o,a]=i.valid,n=a-o;let s=0;if(e.xmin<o){const c=o-e.xmin;s=Math.ceil(c/n)}else if(e.xmin>a){const c=e.xmin-a;s=-Math.ceil(c/n)}return new B({spatialReference:e.spatialReference,xmin:e.xmin+s*n,ymin:e.ymin,xmax:e.xmax+s*n,ymax:e.ymax})}function Qe(e,t,i){const{storageInfo:o,pixelSize:a}=t;let n=0,s=!1;const{pyramidResolutions:c}=o,l=o.tileInfo.format?.toLowerCase()==="mixed"?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,r=(e.x+e.y)/2/l;if(c!=null&&c.length){const h=c[c.length-1],m=(h.x+h.y)/2,f=(a.x+a.y)/2;if(r<=f)n=0;else if(r>=m)n=c.length,s=r/m>8;else{let y,p=f;for(let d=1;d<=c.length;d++){if(y=(c[d-1].x+c[d-1].y)/2,r<=y){r===y?n=d:i==="down"?(n=d-1,s=r/p>8):n=i==="up"||r-p>y-r||r/p>2?d:d-1;break}p=y}}const M=n===0?a:c[n-1];return s&&Math.min(M.x,M.y)*I(t.spatialReference)>19567&&(s=!1),{pyramidLevel:n,pyramidResolution:new E({x:M.x,y:M.y,spatialReference:t.spatialReference}),excessiveReading:s}}const u=Math.log(e.x/a.x)/Math.LN2,w=Math.log(e.y/a.y)/Math.LN2,g=t.storageInfo.maximumPyramidLevel||0;n=i==="down"?Math.floor(Math.min(u,w)):i==="up"?Math.ceil(Math.max(u,w)):Math.round((u+w)/2),n<0?n=0:n>g&&(s=n>g+3,n=g);const x=2**n;return{pyramidLevel:n,pyramidResolution:new E({x:x*t.nativePixelSize.x,y:x*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:s}}function re(e,t){const{pixelSize:i,extent:o}=e,a=pe(o,t,!1);return oe(De(o,(i.x+i.y)/16),t,a)}function Ue(e,t,i){const o=i?.tileSize,a=i?.alignGlobalDatasetWithAGOL,{extent:n,spatialReference:s,pixelSize:c}=e,l=ge(c,t,n);if(l==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const r=(l.x+l.y)/2,u=I(t),w=r*u*96*39.37,g=t.isGeographic?256/o*2958287637958547e-7:256/o*591657527591555e-6;let x=e.dataType==="vector-magdir"||e.dataType==="vector-uv";const h=re(e,t),m=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(g/2/w)/Math.LN2));if(!x&&a&&(t.isGeographic||t.isWebMercator)){const b=k(t);if(x=se(h)>0||b!=null&&h.width>b/4,!x&&b!=null){let v=-1;if(m<3)v=2**m*r*o;else if(e.storageInfo){const{maximumPyramidLevel:j=0,pyramidScalingFactor:Q=2}=e.storageInfo;v=Q**j*r*o}const W=Math.ceil(b/v);x=W===1||W===2&&b/2-h.xmax<v}}let f,M=w;const y=1.001,p=Math.min(2,Math.max(1.414,e.storageInfo?.pyramidScalingFactor||2));if(x){M=g;const b=t.isGeographic?1341104507446289e-21:.29858214164761665,v=b*(96*u*39.37),W=t.isGeographic?4326:3857;f=ge({x:b,y:b},s,re(e,new xe({wkid:W}))),f.x*=M/v,f.y*=M/v}else{f={x:c.x,y:c.y};let b=0;for(;M<g*(y/2)&&b<m;)b++,M*=p,f.x*=p,f.y*=p;Math.max(M,g)/Math.min(M,g)<=y&&(M=g)}const d=[M],R=[{x:f.x,y:f.y}],S=70.5310735,G=Math.min(S,w)/y;for(;M>=G;)M/=p,f.x/=p,f.y/=p,d.push(M),R.push({x:f.x,y:f.y});return{projectedPixelSize:l,scales:d,srcResolutions:R,isCustomTilingScheme:!x}}export{We as C,Fe as D,ne as I,oe as K,k as V,Xe as a,re as c,se as e,Ue as f,Ke as i,pe as j,Qe as l,Ye as t,Le as v,$ as w};