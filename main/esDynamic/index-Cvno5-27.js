import{dM as d,h2 as r,dN as p,e2 as h,e3 as u,dQ as v,e8 as g,dE as $,e9 as m,dY as f,dX as A,d$ as w,e0 as E,dU as _,fN as b,F as y}from"./main-Czl6u6q4.js";const C={en:{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},fr:{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}},L={class:"sg-label"},x=d({__name:"map-scrollguard",setup(o){const e=r(),{t:i}=p(),s=h("iApi"),t=u(),c=v(()=>e.enabled);g(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",l,{capture:!0}),s.event.on($.MAP_CREATED,()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener("wheel",l,{capture:!0})})}),m(()=>{s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener("wheel",l,{capture:!0})});const l=n=>{if(!c.value)return;const a=t.value.classList;n.ctrlKey?(a.remove("sg-active"),a.add("sg-scrolling")):(n.stopPropagation(),a.remove("sg-scrolling"),a.add("sg-active"),window.setTimeout(()=>a.remove("sg-active"),2e3))};return(n,a)=>(_(),f("div",{class:"sg",ref_key:"scrollGuard",ref:t},[A("p",L,w(E(i)("scrollguard.instructions")),1)],512))}}),N=b(x,[["__scopeId","data-v-bf6386a4"]]);class S extends y{setEnabled(e){r(this.$vApp.$pinia).enabled=e}_parseConfig(e){r(this.$vApp.$pinia).enabled=e?.enabled||!1}get config(){return super.config}}class q extends S{added(){Object.entries(C).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t)),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t)),{destroy:i,el:s}=this.mount(N,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]),this.removed=()=>{e(),i(),r(this.$vApp.$pinia).$reset()}}}export{q as default};
