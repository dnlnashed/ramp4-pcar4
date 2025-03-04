import{F as n,dM as h,dN as l,e2 as p,dR as g,dV as v,dW as d,e0 as f,dU as u,dX as e,g4 as a,f6 as m,f7 as $,f8 as w}from"./main-jlUEdDH5.js";class x extends n{}const b=h({__name:"nav-button",setup(s){const{t}=l(),i=p("iApi"),o=()=>{i?.panel.toggle("geosearch")};return(S,r)=>{const c=g("mapnav-button");return u(),v(c,{onClickFunction:o,tooltip:f(t)("geosearch.title")},{default:d(()=>r[0]||(r[0]=[e("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),e("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["tooltip"])}}}),A={en:{"geosearch.title":"Geolocation Search","geosearch.noResults":"No results to show for ","geosearch.searchText":"Search for a location...","geosearch.visible":"Visible on map","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Clear filters","geosearch.serviceError":"No response from {services} service(s)","geosearch.badChars":"The character(s) {chars} are not supported and will be ignored"},fr:{"geosearch.title":"Recherche g\xE9olocalis\xE9e","geosearch.noResults":"Aucun r\xE9sultat \xE0 afficher pour ","geosearch.searchText":"Rechercher un emplacement...","geosearch.visible":"Visible sur la carte","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Effacer les filtres","geosearch.serviceError":"Pas de r\xE9ponse de la part des services de {services}","geosearch.badChars":"Les caract\xE8res {chars} ne sont pas pris en charge et seront ignor\xE9s"}};class C extends x{async added(){a(this.$vApp.$pinia).initService(this.$iApi.language,this.config),this.$iApi.component("geosearch-nav-button",b),this.$iApi.panel.register({id:"geosearch",config:{screens:{"geosearch-component":()=>m(import("./screen-Bc6YYTIy.js"))},button:{tooltip:"geosearch.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"geosearch.title"}},{i18n:{messages:A}}),this.handlePanelTeleports(["geosearch"])}removed(){this.$iApi.fixture.exists("appbar")&&$(this.$vApp.$pinia).removeButton("geosearch"),this.$iApi.fixture.exists("mapnav")&&w(this.$vApp.$pinia).removeItem("geosearch"),a(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("geosearch")}}export{C as default};
