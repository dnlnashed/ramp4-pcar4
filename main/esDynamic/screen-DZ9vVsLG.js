import{dM as L,dN as b,e2 as E,e3 as x,e8 as I,e9 as T,dQ as W,dR as j,dS as u,dV as p,dW as i,dU as a,ea as w,d$ as A,e0 as s,ec as M,dT as N,dY as o,e1 as S,dZ as V,ed as c}from"./main-C872cFCP.js";const q=["content"],B=L({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const v=c(()=>import("./header-DdPZKsiH.js")),g=c(()=>import("./item-xBUHuXsG.js")),{t:n}=b(),y=E("iApi"),e=x(),l=()=>{e.value._tippy.hide()},r=t=>{t.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};I(()=>{e.value?.addEventListener("blur",l),e.value?.addEventListener("keyup",r)}),T(()=>{e.value?.removeEventListener("blur",l),e.value?.removeEventListener("keyup",r)});const f=W(()=>{let t=y.fixture.get("legend");return t?[...t.getLegend()]:[]});return(t,C)=>{const h=j("panel-screen"),_=u("focus-list"),k=u("tippy");return a(),p(h,{panel:m.panel},{header:i(()=>[w(A(s(n)("legend.title")),1)]),content:i(()=>[M(s(v)),N((a(),o("div",{content:s(n)("panels.controls.items"),ref_key:"el",ref:e},[(a(!0),o(S,null,V(f.value,d=>(a(),p(s(g),{legendItem:d,key:d.uid},null,8,["legendItem"]))),128))],8,q)),[[_],[k,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{B as default};