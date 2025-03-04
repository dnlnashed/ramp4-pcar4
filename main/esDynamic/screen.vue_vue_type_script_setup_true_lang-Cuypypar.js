import{dM as _,dN as C,dO as j,dP as M,dQ as f,dR as $,dS as q,dT as R,dU as p,dV as S,dW as v,dX as e,dY as k,dZ as V,d_ as L,d$ as h,e0 as s,e1 as B,e2 as P,e3 as g,e4 as W,e5 as A,e6 as F,e7 as H,e8 as N,e9 as Q,ea as T,eb as U}from"./main-Czl6u6q4.js";const X=["onClick","aria-label"],Y={class:"md-icon-small inline"},Z=_({__name:"settings-button",props:{componentSelectedState:{type:Object,required:!0}},setup(m){const{t:x}=C(),n=j(),i=M(),w=f(()=>n.mobileView?"top-end":"left-end"),t=c=>{c.selectable&&i.toggleSelected({name:c.name})};return(c,o)=>{const b=$("dropdown-menu"),u=q("focus-item");return R((p(),S(b,{position:w.value,tooltip:s(x)("export.menu"),tooltipPlacement:"top"},{header:v(()=>o[0]||(o[0]=[e("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"},[e("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("g",null,[e("path",{d:"M0,0h24v24H0V0z",fill:"none"}),e("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1)])),default:v(()=>[(p(!0),k(B,null,V(m.componentSelectedState,l=>(p(),k("a",{key:l.name,onClick:y=>t(l),href:"javascript:;",class:L(`text-left text-sm sm:text-base ${l.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":l.name},[e("div",Y,[(p(),k("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:L(`inline mx-8 ${l.selected?"":"invisible"}`)},o[1]||(o[1]=[e("g",null,[e("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]),2)),e("span",{class:L(`inline ${l.selectable?"":"text-gray-300"}
                    `)},h(s(x)(`export.menu.component.${l.name}`)),3)])],10,X))),128))]),_:1},8,["position","tooltip"])),[[u]])}}}),D={class:"overflow-hidden border border-gray-200",ref:"componentEl"},G={class:"flex"},I=["aria-label"],J=["aria-label"],K=_({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const x=m,{t:n}=C(),i=P("iApi"),w=M(),t=g(),c=g(void 0),o=g(void 0),b=g([]),u=W("componentEl"),l=f(()=>w.componentSelectedState),y=f(()=>{const r={};return t.value&&Object.keys(l.value).forEach(a=>{r[a]={name:a,selected:l.value[a]??!1,selectable:(t.value?.config)[a]?.selectable??!0}}),r}),z=f(()=>!!t.value?.customRendererFunc),d=A(300,()=>{if(!t.value||!u.value)return;const r=u.value.querySelector(".export-canvas");t.value.make(r,u.value.clientWidth)});return F(()=>{x.panel.exportMake=d,b.value.push(H(y,()=>{d()}))}),N(()=>{t.value=i.fixture.get("export"),c.value=new ResizeObserver(d),o.value=new ResizeObserver(d),c.value.observe(i.$rootEl),o.value.observe(i.$rootEl.querySelector('[data-cy="export"]'))}),Q(()=>{c.value.disconnect(),o.value.disconnect(),b.value.forEach(r=>r())}),(r,a)=>{const E=$("panel-screen");return p(),S(E,{panel:m.panel,footer:!0},{header:v(()=>[T(h(s(n)("export.title")),1)]),content:v(()=>[e("div",D,a[2]||(a[2]=[e("canvas",{class:"export-canvas !w-[100%]"},null,-1)]),512)]),footer:v(()=>[e("div",G,[e("button",{type:"button",onClick:a[0]||(a[0]=O=>t.value?.export()),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16","aria-label":s(n)("export.download")},h(s(n)("export.download")),9,I),e("button",{type:"button",onClick:a[1]||(a[1]=O=>s(d)()),class:"py-8 px-4 sm:px-16","aria-label":s(n)("export.refresh")},h(s(n)("export.refresh")),9,J),z.value?U("",!0):(p(),S(Z,{key:0,componentSelectedState:y.value,class:"ml-auto flex px-4 sm:px-8"},null,8,["componentSelectedState"]))])]),_:1},8,["panel"])}}});export{K as _};
