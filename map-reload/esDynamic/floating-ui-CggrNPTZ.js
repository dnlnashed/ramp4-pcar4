import{D as xt,i as vt}from"./themeUtils-DG1y3jns.js";import{g as Gt}from"./dom-N58V0tYi.js";import{d as Jt}from"./debounce-27Hmkkyg.js";const bt=["top","right","bottom","left"],Rt=["start","end"],Et=bt.reduce((t,e)=>t.concat(e,e+"-"+Rt[0],e+"-"+Rt[1]),[]),Y=Math.min,z=Math.max,tt=Math.round,et=Math.floor,V=t=>({x:t,y:t}),Kt={left:"right",right:"left",bottom:"top",top:"bottom"},Qt={start:"end",end:"start"};function ut(t,e,n){return z(t,Y(e,n))}function I(t,e){return typeof t=="function"?t(e):t}function B(t){return t.split("-")[0]}function H(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(B(t))?"y":"x"}function mt(t){return Pt(nt(t))}function Tt(t,e,n){n===void 0&&(n=!1);const o=H(t),i=mt(t),l=dt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=it(r)),[r,it(r)]}function Zt(t){const e=it(t);return[ot(t),e,ot(e)]}function ot(t){return t.replace(/start|end/g,e=>Qt[e])}function te(t,e,n){const o=["left","right"],i=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?l:r;default:return[]}}function ee(t,e,n,o){const i=H(t);let l=te(B(t),n==="start",o);return i&&(l=l.map(r=>r+"-"+i),e&&(l=l.concat(l.map(ot)))),l}function it(t){return t.replace(/left|right|bottom|top/g,e=>Kt[e])}function ne(t){return{top:0,right:0,bottom:0,left:0,...t}}function Lt(t){return typeof t!="number"?ne(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ot(t,e,n){let{reference:o,floating:i}=t;const l=nt(e),r=mt(e),a=dt(r),s=B(e),c=l==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,h=o[a]/2-i[a]/2;let f;switch(s){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(H(e)){case"start":f[r]-=h*(n&&c?-1:1);break;case"end":f[r]+=h*(n&&c?-1:1);break}return f}const oe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:l=[],platform:r}=n,a=l.filter(Boolean),s=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Ot(c,o,s),h=o,f={},m=0;for(let p=0;p<a.length;p++){const{name:y,fn:g}=a[p],{x:w,y:x,data:v,reset:b}=await g({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:c,platform:r,elements:{reference:t,floating:e}});u=w??u,d=x??d,f={...f,[y]:{...f[y],...v}},b&&m<=50&&(m++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(c=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=Ot(c,h,s)),p=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}};async function J(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:l,rects:r,elements:a,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=I(e,t),m=Lt(f),p=a[h?d==="floating"?"reference":"floating":d],y=rt(await l.getClippingRect({element:(n=await(l.isElement==null?void 0:l.isElement(p)))==null||n?p:p.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:s})),g=d==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,w=await(l.getOffsetParent==null?void 0:l.getOffsetParent(a.floating)),x=await(l.isElement==null?void 0:l.isElement(w))?await(l.getScale==null?void 0:l.getScale(w))||{x:1,y:1}:{x:1,y:1},v=rt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:w,strategy:s}):g);return{top:(y.top-v.top+m.top)/x.y,bottom:(v.bottom-y.bottom+m.bottom)/x.y,left:(y.left-v.left+m.left)/x.x,right:(v.right-y.right+m.right)/x.x}}const ie=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:l,platform:r,elements:a,middlewareData:s}=e,{element:c,padding:u=0}=I(t,e)||{};if(c==null)return{};const d=Lt(u),h={x:n,y:o},f=mt(i),m=dt(f),p=await r.getDimensions(c),y=f==="y",g=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",v=l.reference[m]+l.reference[f]-h[f]-l.floating[m],b=h[f]-l.reference[f],P=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let E=P?P[x]:0;(!E||!await(r.isElement==null?void 0:r.isElement(P)))&&(E=a.floating[x]||l.floating[m]);const D=v/2-b/2,R=E/2-p[m]/2-1,S=Y(d[g],R),j=Y(d[w],R),T=S,G=E-p[m]-j,L=E/2-p[m]/2+D,C=ut(T,L,G),F=!s.arrow&&H(i)!=null&&L!==C&&l.reference[m]/2-(L<T?S:j)-p[m]/2<0,M=F?L<T?L-T:L-G:0;return{[f]:h[f]+M,data:{[f]:C,centerOffset:L-C-M,...F&&{alignmentOffset:M}},reset:F}}});function re(t,e,n){return(t?[...n.filter(o=>H(o)===t),...n.filter(o=>H(o)!==t)]:n.filter(o=>B(o)===o)).filter(o=>t?H(o)===t||(e?ot(o)!==o:!1):!0)}const le=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:l,middlewareData:r,placement:a,platform:s,elements:c}=e,{crossAxis:u=!1,alignment:d,allowedPlacements:h=Et,autoAlignment:f=!0,...m}=I(t,e),p=d!==void 0||h===Et?re(d||null,f,h):h,y=await J(e,m),g=((n=r.autoPlacement)==null?void 0:n.index)||0,w=p[g];if(w==null)return{};const x=Tt(w,l,await(s.isRTL==null?void 0:s.isRTL(c.floating)));if(a!==w)return{reset:{placement:p[0]}};const v=[y[B(w)],y[x[0]],y[x[1]]],b=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],P=p[g+1];if(P)return{data:{index:g+1,overflows:b},reset:{placement:P}};const E=b.map(R=>{const S=H(R.placement);return[R.placement,S&&u?R.overflows.slice(0,2).reduce((j,T)=>j+T,0):R.overflows[0],R.overflows]}).sort((R,S)=>R[1]-S[1]),D=((i=E.filter(R=>R[2].slice(0,H(R[0])?2:3).every(S=>S<=0))[0])==null?void 0:i[0])||E[0][0];return D!==a?{data:{index:g+1,overflows:b},reset:{placement:D}}:{}}}},ae=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:l,rects:r,initialPlacement:a,platform:s,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0,...y}=I(t,e);if((n=l.arrow)!=null&&n.alignmentOffset)return{};const g=B(i),w=B(a)===a,x=await(s.isRTL==null?void 0:s.isRTL(c.floating)),v=h||(w||!p?[it(a)]:Zt(a));!h&&m!=="none"&&v.push(...ee(a,p,m,x));const b=[a,...v],P=await J(e,y),E=[];let D=((o=l.flip)==null?void 0:o.overflows)||[];if(u&&E.push(P[g]),d){const T=Tt(i,r,x);E.push(P[T[0]],P[T[1]])}if(D=[...D,{placement:i,overflows:E}],!E.every(T=>T<=0)){var R,S;const T=(((R=l.flip)==null?void 0:R.index)||0)+1,G=b[T];if(G)return{data:{index:T,overflows:D},reset:{placement:G}};let L=(S=D.filter(C=>C.overflows[0]<=0).sort((C,F)=>C.overflows[1]-F.overflows[1])[0])==null?void 0:S.placement;if(!L)switch(f){case"bestFit":{var j;const C=(j=D.map(F=>[F.placement,F.overflows.filter(M=>M>0).reduce((M,Xt)=>M+Xt,0)]).sort((F,M)=>F[1]-M[1])[0])==null?void 0:j[0];C&&(L=C);break}case"initialPlacement":L=a;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function Dt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function St(t){return bt.some(e=>t[e]>=0)}const se=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=I(t,e);switch(o){case"referenceHidden":{const l=await J(e,{...i,elementContext:"reference"}),r=Dt(l,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:St(r)}}}case"escaped":{const l=await J(e,{...i,altBoundary:!0}),r=Dt(l,n.floating);return{data:{escapedOffsets:r,escaped:St(r)}}}default:return{}}}}};async function ce(t,e){const{placement:n,platform:o,elements:i}=t,l=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=B(n),a=H(n),s=nt(n)==="y",c=["left","top"].includes(r)?-1:1,u=l&&s?-1:1,d=I(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof m=="number"&&(f=a==="end"?m*-1:m),s?{x:f*u,y:h*c}:{x:h*c,y:f*u}}const fe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:l,placement:r,middlewareData:a}=e,s=await ce(e,t);return r===((n=a.offset)==null?void 0:n.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:i+s.x,y:l+s.y,data:{...s,placement:r}}}}},ue=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:l=!0,crossAxis:r=!1,limiter:a={fn:y=>{let{x:g,y:w}=y;return{x:g,y:w}}},...s}=I(t,e),c={x:n,y:o},u=await J(e,s),d=nt(B(i)),h=Pt(d);let f=c[h],m=c[d];if(l){const y=h==="y"?"top":"left",g=h==="y"?"bottom":"right",w=f+u[y],x=f-u[g];f=ut(w,f,x)}if(r){const y=d==="y"?"top":"left",g=d==="y"?"bottom":"right",w=m+u[y],x=m-u[g];m=ut(w,m,x)}const p=a.fn({...e,[h]:f,[d]:m});return{...p,data:{x:p.x-n,y:p.y-o}}}}};function lt(){return typeof window<"u"}function q(t){return kt(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function N(t){var e;return(e=(kt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function kt(t){return lt()?t instanceof Node||t instanceof O(t).Node:!1}function k(t){return lt()?t instanceof Element||t instanceof O(t).Element:!1}function W(t){return lt()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function At(t){return!lt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function K(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=A(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function de(t){return["table","td","th"].includes(q(t))}function at(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function st(t){const e=pt(),n=k(t)?A(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function me(t){let e=$(t);for(;W(e)&&!U(e);){if(st(e))return e;if(at(e))return null;e=$(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function U(t){return["html","body","#document"].includes(q(t))}function A(t){return O(t).getComputedStyle(t)}function ct(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function $(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||N(t);return At(e)?e.host:e}function Ct(t){const e=$(t);return U(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&K(e)?e:Ct(e)}function Q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ct(t),l=i===((o=t.ownerDocument)==null?void 0:o.body),r=O(i);if(l){const a=pe(r);return e.concat(r,r.visualViewport||[],K(i)?i:[],a&&n?Q(a):[])}return e.concat(i,Q(i,[],n))}function pe(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ft(t){const e=A(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=W(t),l=i?t.offsetWidth:n,r=i?t.offsetHeight:o,a=tt(n)!==l||tt(o)!==r;return a&&(n=l,o=r),{width:n,height:o,$:a}}function gt(t){return k(t)?t:t.contextElement}function X(t){const e=gt(t);if(!W(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:l}=Ft(e);let r=(l?tt(n.width):n.width)/o,a=(l?tt(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const ge=V(0);function Ht(t){const e=O(t);return!pt()||!e.visualViewport?ge:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function he(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==O(t)?!1:e}function _(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),l=gt(t);let r=V(1);e&&(o?k(o)&&(r=X(o)):r=X(t));const a=he(l,n,o)?Ht(l):V(0);let s=(i.left+a.x)/r.x,c=(i.top+a.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(l){const h=O(l),f=o&&k(o)?O(o):o;let m=h,p=m.frameElement;for(;p&&o&&f!==m;){const y=X(p),g=p.getBoundingClientRect(),w=A(p),x=g.left+(p.clientLeft+parseFloat(w.paddingLeft))*y.x,v=g.top+(p.clientTop+parseFloat(w.paddingTop))*y.y;s*=y.x,c*=y.y,u*=y.x,d*=y.y,s+=x,c+=v,m=O(p),p=m.frameElement}}return rt({width:u,height:d,x:s,y:c})}function ye(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const l=i==="fixed",r=N(o),a=e?at(e.floating):!1;if(o===r||a&&l)return n;let s={scrollLeft:0,scrollTop:0},c=V(1);const u=V(0),d=W(o);if((d||!d&&!l)&&((q(o)!=="body"||K(r))&&(s=ct(o)),W(o))){const h=_(o);c=X(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+u.x,y:n.y*c.y-s.scrollTop*c.y+u.y}}function we(t){return Array.from(t.getClientRects())}function Wt(t){return _(N(t)).left+ct(t).scrollLeft}function xe(t){const e=N(t),n=ct(t),o=t.ownerDocument.body,i=z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Wt(t);const a=-n.scrollTop;return A(o).direction==="rtl"&&(r+=z(e.clientWidth,o.clientWidth)-i),{width:i,height:l,x:r,y:a}}function ve(t,e){const n=O(t),o=N(t),i=n.visualViewport;let l=o.clientWidth,r=o.clientHeight,a=0,s=0;if(i){l=i.width,r=i.height;const c=pt();(!c||c&&e==="fixed")&&(a=i.offsetLeft,s=i.offsetTop)}return{width:l,height:r,x:a,y:s}}function be(t,e){const n=_(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,l=W(t)?X(t):V(1),r=t.clientWidth*l.x,a=t.clientHeight*l.y,s=i*l.x,c=o*l.y;return{width:r,height:a,x:s,y:c}}function Mt(t,e,n){let o;if(e==="viewport")o=ve(t,n);else if(e==="document")o=xe(N(t));else if(k(e))o=be(e,n);else{const i=Ht(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return rt(o)}function Bt(t,e){const n=$(t);return n===e||!k(n)||U(n)?!1:A(n).position==="fixed"||Bt(n,e)}function Re(t,e){const n=e.get(t);if(n)return n;let o=Q(t,[],!1).filter(a=>k(a)&&q(a)!=="body"),i=null;const l=A(t).position==="fixed";let r=l?$(t):t;for(;k(r)&&!U(r);){const a=A(r),s=st(r);!s&&a.position==="fixed"&&(i=null),(l?!s&&!i:!s&&a.position==="static"&&i&&["absolute","fixed"].includes(i.position)||K(r)&&!s&&Bt(t,r))?o=o.filter(c=>c!==r):i=a,r=$(r)}return e.set(t,o),o}function Ee(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const l=[...n==="clippingAncestors"?at(e)?[]:Re(e,this._c):[].concat(n),o],r=l[0],a=l.reduce((s,c)=>{const u=Mt(e,c,i);return s.top=z(u.top,s.top),s.right=Y(u.right,s.right),s.bottom=Y(u.bottom,s.bottom),s.left=z(u.left,s.left),s},Mt(e,r,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Pe(t){const{width:e,height:n}=Ft(t);return{width:e,height:n}}function Te(t,e,n){const o=W(e),i=N(e),l=n==="fixed",r=_(t,!0,l,e);let a={scrollLeft:0,scrollTop:0};const s=V(0);if(o||!o&&!l)if((q(e)!=="body"||K(i))&&(a=ct(e)),o){const d=_(e,!0,l,e);s.x=d.x+e.clientLeft,s.y=d.y+e.clientTop}else i&&(s.x=Wt(i));const c=r.left+a.scrollLeft-s.x,u=r.top+a.scrollTop-s.y;return{x:c,y:u,width:r.width,height:r.height}}function ht(t){return A(t).position==="static"}function Nt(t,e){return!W(t)||A(t).position==="fixed"?null:e?e(t):t.offsetParent}function Vt(t,e){const n=O(t);if(at(t))return n;if(!W(t)){let i=$(t);for(;i&&!U(i);){if(k(i)&&!ht(i))return i;i=$(i)}return n}let o=Nt(t,e);for(;o&&de(o)&&ht(o);)o=Nt(o,e);return o&&U(o)&&ht(o)&&!st(o)?n:o||me(t)||n}const Le=async function(t){const e=this.getOffsetParent||Vt,n=this.getDimensions,o=await n(t.floating);return{reference:Te(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Oe(t){return A(t).direction==="rtl"}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:ye,getDocumentElement:N,getClippingRect:Ee,getOffsetParent:Vt,getElementRects:Le,getClientRects:we,getDimensions:Pe,getScale:X,isElement:k,isRTL:Oe};function De(t,e){let n=null,o;const i=N(t);function l(){var a;clearTimeout(o),(a=n)==null||a.disconnect(),n=null}function r(a,s){a===void 0&&(a=!1),s===void 0&&(s=1),l();const{left:c,top:u,width:d,height:h}=t.getBoundingClientRect();if(a||e(),!d||!h)return;const f=et(u),m=et(i.clientWidth-(c+d)),p=et(i.clientHeight-(u+h)),y=et(c),g={rootMargin:-f+"px "+-m+"px "+-p+"px "+-y+"px",threshold:z(0,Y(1,s))||1};let w=!0;function x(v){const b=v[0].intersectionRatio;if(b!==s){if(!w)return r();b?r(!1,b):o=setTimeout(()=>{r(!1,1e-7)},1e3)}w=!1}try{n=new IntersectionObserver(x,{...g,root:i.ownerDocument})}catch{n=new IntersectionObserver(x,g)}n.observe(t)}return r(!0),l}function Se(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:s=!1}=o,c=gt(t),u=i||l?[...c?Q(c):[],...Q(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),l&&g.addEventListener("resize",n)});const d=c&&a?De(c,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(g=>{let[w]=g;w&&w.target===c&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),n()}),c&&!s&&f.observe(c),f.observe(e));let m,p=s?_(t):null;s&&y();function y(){const g=_(t);p&&(g.x!==p.x||g.y!==p.y||g.width!==p.width||g.height!==p.height)&&n(),p=g,m=requestAnimationFrame(y)}return n(),()=>{var g;u.forEach(w=>{i&&w.removeEventListener("scroll",n),l&&w.removeEventListener("resize",n)}),d?.(),(g=f)==null||g.disconnect(),f=null,s&&cancelAnimationFrame(m)}}const ke=fe,Ae=le,Ce=ue,$t=ae,Fe=se,He=ie,We=(t,e,n)=>{const o=new Map,i={platform:yt,...n},l={...i.platform,_c:o};return oe(t,e,{...i,platform:l})};function Me(t){return Be(t)}function wt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function Be(t){for(let e=t;e;e=wt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=wt(t);e;e=wt(e)){if(!(e instanceof Element))continue;const n=getComputedStyle(e);if(n.display!=="contents"&&(n.position!=="static"||st(n)||e.tagName==="BODY"))return e}return null}(function(){if(vt()){const t=yt.getOffsetParent;yt.getOffsetParent=e=>t(e,Me)}})();function jt(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}const zt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:l,flipPlacements:r,offsetDistance:a,offsetSkidding:s,arrowEl:c,type:u})=>{if(!e||!n)return null;const d=Gt(n)==="rtl",{x:h,y:f,placement:m,strategy:p,middlewareData:y}=await We(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:_t(i,d),middleware:ze({placement:i,flipDisabled:l,flipPlacements:r?.map(v=>_t(v,d)),offsetDistance:a,offsetSkidding:s,arrowEl:c,type:u})});if(c&&y.arrow){const{x:v,y:b}=y.arrow,P=m.split("-")[0],E=v!=null?"left":"top",D=qe[P],R={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=P==="left"||P==="right"?"horizontal":"vertical"),Object.assign(c.style,{...R,[E]:`${E=="left"?v:b}px`,[P]:"100%",transform:D})}const g=y.hide?.referenceHidden?"hidden":null,w=g?"none":null;n.setAttribute(Ne,m);const{open:x}=t;Object.assign(n.style,{visibility:g,pointerEvents:w,position:p,transform:x?`translate(${jt(h)}px,${jt(f)}px)`:"",top:0,left:0})},Ne="data-placement",It=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end","leading","trailing","leading-start","leading-end","trailing-start","trailing-end"],Ve="bottom-start",$e="bottom-end",je={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active",arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};function ze({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:l,type:r}){const a=[Ce(),Fe()];if(r==="menu")return[...a,$t({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const s=[...a,ke({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?s.push(Ae({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||s.push($t(n?{fallbackPlacements:n}:{})),l&&s.push(He({element:l})),s}return[]}function Ie(t,e){const n=t.filter(o=>It.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${It.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function _t(t,e=!1){const n=["left","right"];return e&&n.reverse(),t.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function _e(t,e,n=!1){if(!(!t.open||!e.floatingEl||!e.referenceEl)){if(!Z.get(t))return Yt(t,e.referenceEl,e.floatingEl);await(n?Ye(t):zt)(t,e)}}function Ye(t){let e=ft.get(t);return e||(e=Jt(zt,xt.reposition,{leading:!0,maxWait:xt.reposition}),ft.set(t,e),e)}const qe={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},Z=new WeakMap,ft=new WeakMap;async function Yt(t,e,n){if(!n.isConnected)return;const o=vt()?Se:(r,a,s)=>(s(),()=>{});Z.set(t,{state:"pending"});let i;const l=o(e,n,()=>{const r=t.reposition();i||(i=r)});return Z.set(t,{state:"active",cleanUp:l}),i}async function Ue(t,e,n){if(!(!n||!e)&&(qt(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning}),!!t.open))return Yt(t,e,n)}function qt(t,e,n){if(!n||!e)return;const o=Z.get(t);o?.state==="active"&&o.cleanUp(),Z.delete(t),ft.get(t)?.cancel(),ft.delete(t)}const Ut=4,Xe=Math.ceil(Math.hypot(Ut,Ut));export{je as F,Xe as a,qt as b,Ue as c,$e as d,Ve as e,Ie as f,_e as r};
