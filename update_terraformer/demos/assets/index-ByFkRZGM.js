import{dM as _,dN as E,e2 as w,e3 as m,gi as h,e8 as y,ed as p,e9 as x,dY as M,dX as A,d$ as T,e0 as I,dU as P,fQ as R,F as S}from"./main-C4ZPumQG.js";import"./preload-helper-ExcqyqRp.js";const B={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},D={class:"pg-label"},$=_({__name:"map-panguard",setup(v){const{t:c}=E(),t=w("iApi"),o=m(),a=m(-1),n=h([]),r=h([]);y(()=>{u(),r.push(t.event.on(p.MAP_CREATED,()=>{u()})),r.push(t.event.on(p.MAP_DESTROYED,()=>{n.forEach(e=>e.remove())})),r.push(t.event.on(p.MAP_REFRESH_START,()=>{n.forEach(e=>e.remove())})),r.push(t.event.on(p.MAP_REFRESH_END,()=>{u()}))}),x(()=>{r.forEach(e=>t.event.off(e)),n.forEach(e=>e.remove())});const u=()=>{const e=new Map;t.geo.map.viewPromise.then(()=>{n.push(t.geo.map.esriView.on("pointer-down",s=>{s.pointerType==="touch"&&e.set(s.pointerId,{x:s.x,y:s.y})})),n.push(t.geo.map.esriView.on(["pointer-up","pointer-leave"],s=>{s.pointerType==="touch"&&window.setTimeout(()=>{e.delete(s.pointerId)},200)})),n.push(t.geo.map.esriView.on("pointer-move",s=>{const{pointerId:f,pointerType:g,x:d,y:l}=s,i=e.get(f);if(!i||g!=="touch"||e.size!==1){o.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(d-i.x,2)+Math.pow(l-i.y,2))<20||(o.value.classList.add("pg-active"),a.value!==-1&&clearTimeout(a.value),a.value=window.setTimeout(()=>{o.value.classList.remove("pg-active")},2e3),window.scrollBy(i.x-d,i.y-l))}))})};return(e,s)=>(P(),M("div",{class:"pg",ref_key:"panGuard",ref:o},[A("p",D,T(I(c)("panguard.instructions")),1)],512))}}),F=R($,[["__scopeId","data-v-676e58b0"]]);class C extends S{added(){Object.entries(B).forEach(a=>this.$iApi.$i18n.mergeLocaleMessage(...a));const{destroy:c,el:t}=this.mount(F,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]),this.removed=()=>{c()}}}export{C as default};
