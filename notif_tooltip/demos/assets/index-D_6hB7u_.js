const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-B84KPjwX.js","./main-CxlHa1F_.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./screen-CwbtZ41W.css"])))=>i.map(i=>d[i]);
import{_ as n}from"./preload-helper-ExcqyqRp.js";import{F as h,dM as p,dN as l,e2 as g,dR as v,dV as f,dW as m,e0 as u,dU as d,dX as r,g9 as t,f9 as S,fa as _,fb as b}from"./main-CxlHa1F_.js";class x extends h{}const A=p({__name:"nav-button",setup(a){const{t:e}=l(),s=g("iApi"),i=()=>{s?.panel.toggle("geosearch")};return($,o)=>{const c=v("mapnav-button");return d(),f(c,{onClickFunction:i,tooltip:u(e)("geosearch.title")},{default:m(()=>o[0]||(o[0]=[r("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[r("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["tooltip"])}}}),w={en:{"geosearch.title":"Geolocation Search","geosearch.noResults":"No results to show for ","geosearch.searchText":"Search for a location...","geosearch.visible":"Visible on map","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Clear filters","geosearch.serviceError":"No response from {services} service(s)","geosearch.badChars":"The character(s) {chars} are not supported and will be ignored"},fr:{"geosearch.title":"Recherche géolocalisée","geosearch.noResults":"Aucun résultat à afficher pour ","geosearch.searchText":"Rechercher un emplacement...","geosearch.visible":"Visible sur la carte","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Effacer les filtres","geosearch.serviceError":"Pas de réponse de la part des services de {services}","geosearch.badChars":"Les caractères {chars} ne sont pas pris en charge et seront ignorés"}};class R extends x{async added(){t(this.$vApp.$pinia).initService(this.$iApi.language,this.config),this.$iApi.component("geosearch-nav-button",A),this.$iApi.panel.register({id:"geosearch",config:{screens:{"geosearch-component":()=>S(n(()=>import("./screen-B84KPjwX.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url))},button:{tooltip:"geosearch.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"geosearch.title"}},{i18n:{messages:w}}),this.handlePanelTeleports(["geosearch"])}removed(){this.$iApi.fixture.exists("appbar")&&_(this.$vApp.$pinia).removeButton("geosearch"),this.$iApi.fixture.exists("mapnav")&&b(this.$vApp.$pinia).removeItem("geosearch"),t(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("geosearch")}}export{R as default};
