import{dM as F,e3 as w,e8 as ae,dU as t,dY as a,dX as h,e1 as Z,dZ as W,d_ as U,gm as ve,eb as j,d$ as H,fQ as ne,g5 as X,dQ as M,dS as q,dT as A,ef as se,g7 as pe,dN as V,i3 as ie,e6 as J,e7 as P,e9 as K,dV as R,e0 as L,e2 as ee,iz as me,hC as we,gf as $e,iA as Te,ed as Y,ea as le,dR as Me,dW as ce}from"./main-9YtP5FE3.js";import{T as Ie}from"./toggle-switch-control-BcEwYJS0.js";import"./preload-helper-ExcqyqRp.js";const Ee={key:0,class:"relative"},Ce={key:0,class:"relative"},ze=["innerHTML"],Se=["src"],De={key:1,class:"w-32 h-32"},He={class:"symbologyIcon"},je=["innerHTML"],Be=["src"],Ne={class:"badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"},Oe={key:0,class:"px-5"},Ae={key:1,class:"inline-flex justify-center items-center relative"},qe=F({__name:"symbology-stack",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0}},setup(v){const b=v,n=w([]);return ae(()=>{n.value=b.layer.legend}),(c,p)=>v.result.loaded?(t(),a("div",Ee,[h("div",{class:U(v.result.items.length===0?"opacity-50":"")},[n.value.length>1?(t(),a("div",Ce,[(t(!0),a(Z,null,W(n.value.slice(0,3).reverse(),($,f)=>(t(),a("div",{class:U(["absolute",[f==0?"symbol-0":f==1?"left-3":"left-6"]]),style:ve({"z-index":3-f}),key:f},[n.value[f].svgcode?(t(),a("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:n.value[f].svgcode},null,8,ze)):n.value[f].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-28 h-28",src:n.value[f].imgUrl},null,8,Se)):j("",!0)],6))),128))])):n.value.length>0?(t(),a("div",De,[h("div",He,[n.value[0].svgcode?(t(),a("span",{key:0,innerHTML:n.value[0].svgcode},null,8,je)):n.value[0].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-full h-full",src:n.value[0].imgUrl},null,8,Be)):j("",!0)])])):j("",!0)],2),h("div",Ne,[v.result.loaded?(t(),a("div",Oe,H(v.result.items.length),1)):j("",!0)])])):(t(),a("div",Ae,p[0]||(p[0]=[h("div",{class:"symbologyIcon h-32 w-32"},[h("div",{class:"relative animate-spin spinner h-24 w-24"})],-1)])))}}),Fe=ne(qe,[["__scopeId","data-v-e0b0309a"]]),Ge=["content"],Pe={class:"symbologyLayerName truncate"},Ue=F({__name:"symbology-item",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0},selected:{type:Boolean,required:!0}},setup(v){const b=X(),n=M(()=>b.properties),c=v,p=()=>{const $=c.layer;return $&&n.value[$.id]&&n.value[$.id].name?n.value[$.id].name:$?.name??""};return($,f)=>{const _=q("tippy");return A((t(),a("button",{class:U(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate",v.selected?"detailsButtonSelected":"px-11"]),onClick:f[0]||(f[0]=pe(()=>{},["stop"])),content:p()},[se(Fe,{class:"symbStack w-32 h-32 mr-10",layer:v.layer,result:v.result},null,8,["layer","result"]),h("div",Pe,H(p()),1)],10,Ge)),[[_,{placement:"right",sticky:!0}]])}}}),Re=["content"],Ve=F({__name:"symbology-list",props:{results:{type:Object,required:!0},selected:{type:String,required:!0}},emits:["selection-changed"],setup(v,{emit:b}){const{t:n}=V(),c=ie(),p=w(),$=()=>{p.value._tippy.hide()},f=g=>{g.key==="Tab"&&p.value?.matches(":focus")&&p.value._tippy.show()},_=b,u=v,r=w(""),d=w([]),i=w(!1),e=w(!1),o=g=>c.getLayerByUid(g),I=g=>{r.value=g,_("selection-changed",g),i.value=!1},B=()=>{e.value||setTimeout(()=>{i.value=e.value},500),e.value=!0},S=()=>{i.value=e.value=!1},m=()=>{e.value||(i.value=!0),e.value=!0},E=()=>{i.value=e.value=!1};return J(()=>{d.value.push(P(u,()=>{r.value=u.selected}))}),ae(()=>{p.value?.addEventListener("blur",$),p.value?.addEventListener("keyup",f)}),K(()=>{d.value.forEach(g=>g()),p.value?.removeEventListener("blur",$),p.value?.removeEventListener("keyup",f)}),(g,N)=>{const O=q("focus-item"),z=q("focus-list"),C=q("tippy");return A((t(),a("div",{class:U(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col",{"symbology-list-expanded":i.value}]),onMouseover:B,onMouseleave:S,onFocus:m,onBlur:pe(E,["self"]),content:L(n)("details.layers.results.list.tooltip"),ref_key:"el",ref:p},[(t(!0),a(Z,null,W(u.results,(s,y)=>(t(),a("div",{class:"flex justify-start relative",key:y},[A((t(),R(Ue,{key:s.uid,layer:o(s.uid),result:s,selected:s.uid===r.value,onClick:k=>I(s.uid)},null,8,["layer","result","selected","onClick"])),[[O]])]))),128))],42,Re)),[[z],[C,{trigger:"manual",placement:"top-start",touch:!1}]])}}}),Ze={class:"inline font-bold"},Qe=["innerHTML"],Ye=F({__name:"esri-default",props:{fixtureFields:{type:Object,required:!1},fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(v){const{t:b}=V(),n=ee("iApi"),c=v,p=(r,d,i,e)=>{const o=r.find(I=>I[d].toLowerCase()===i.toLowerCase());o&&delete e[o.name]},$=()=>{const r=Object.assign({},c.identifyData.data);p(c.fields,"type","geometry",r),n?.ui.exposeOids||p(c.fields,"type","oid",r),n?.ui.exposeMeasurements||(p(c.fields,"name","shape_length",r),p(c.fields,"name","shape_area",r));const d={};c.fields.forEach(e=>{const o=c.fixtureFields?.find(I=>e.name===I.field);d[e.name]={name:o?.alias||e.alias||e.name,type:e.type,visible:o?.visible??!0}});const i={};Object.keys(r).forEach(e=>{const o=d[e];if(o&&o.visible){const I=r[e];i[e]={value:typeof I=="number"?n?.ui.formatNumber(I):I,alias:o.name,type:o.type}}});for(const[e]of Object.entries(i))n.ui.isPlainText(i[e].value)&&(i[e].value=n.ui.escapeHtml(i[e].value));return i},f=(r,d,i)=>{switch(i){case"date":return u(r);default:return _(r,d)}},_=(r,d)=>{if(!r)return r;if(r.trim().match(/\.(jpeg|jpg|gif|png)$/)||r.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${r}" alt="${b("details.item.alert.defaultAltText",{alias:d})}" />`;const i="underline text-blue-700 break-all",e=document.createElement("div");return e.innerHTML=r.trim(),e.firstElementChild?.tagName=="A"?(e.firstElementChild.className=i,e.innerHTML):me(r,{className:i,target:"_blank",validate:{url:I=>/^https?:\/\//.test(I)}})},u=r=>{const d=parseInt(r);return isNaN(d)?r:new Date(d).toISOString().split("T")[0]};return(r,d)=>(t(),a("div",null,[(t(!0),a(Z,null,W($(),(i,e,o)=>(t(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:o},[h("span",Ze,H(i.alias),1),d[0]||(d[0]=h("span",{class:"flex-auto"},null,-1)),h("span",{class:"inline",innerHTML:f(i.value,i.alias,i.type)},null,8,Qe)]))),128))]))}}),We=["innerHTML"],Xe={key:1},Je=F({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(v){const{t:b}=V();return(n,c)=>v.identifyData?(t(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:v.identifyData.data.data??v.identifyData.data},null,8,We)):(t(),a("div",Xe,H(L(b)("details.layers.results.empty")),1))}}),Ke={class:"relative flex flex-grow truncate"},et={key:0,class:"flex flex-grow items-center truncate"},tt={class:"flex p-8 items-center"},st=["innerHTML"],lt={key:1,class:"symbologyIcon p-6"},at=["content","innerHTML","tabindex"],nt={key:1,class:"flex p-6 flex-grow"},it={key:2,class:"zoomButton text-center p-3"},ot=["content","aria-label"],rt={key:0,class:"m-auto animate-spin spinner h-20 w-20"},ut={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"green",class:"m-auto w-20 h-20"},ct={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"m-auto w-20 h-20"},dt=["innerHTML"],de=F({__name:"result-item",props:{uid:{type:String,required:!0},data:{type:Object,required:!0},open:{type:Boolean,required:!1},inList:{type:Boolean,required:!1}},setup(v){const b=ie(),n=v,c=ee("iApi"),p=w([]),$=X(),{t:f}=V(),_=w(""),u=w("none"),r=w(),d=()=>b.getLayerByUid(n.uid),i=M(()=>$.properties),e=M(()=>$.defaultTemplates),o=M(()=>d()?.supportsFeatures??!1),I=M(()=>d()?.mapLayer??!1),B=M(()=>{const s=d()?.nameField;let y=s&&n.data.loaded?n.data.data[s]:c.$i18n.t("details.items.title");return c.ui.isPlainText(y)&&(y=c.ui.escapeHtml(y)),y}),S=s=>{if(typeof s=="string"){const y="underline text-blue-700 break-all",k=document.createElement("div");return k.innerHTML=s.trim(),k.firstElementChild?.tagName=="A"?(k.firstElementChild.className=y,k.innerHTML):me(s,{className:y,target:"_blank",validate:{url:D=>/^https?:\/\//.test(D)}})}return s},m=()=>{z("none"),n.data.loaded?E():n.data.load().then(()=>{E()})},E=()=>{if(_.value="",!(n.data&&n.data.loaded))return;const s=d();if(s===void 0){console.warn(`could not find layer for uid ${n.uid} during icon lookup`);return}if(s.supportsFeatures){const y=s.oidField;s.getIcon(n.data.data[y]).then(k=>{_.value=k})}},g=M(()=>{const s=d();return s&&i.value[s.id]&&i.value[s.id].template?i.value[s.id].template:e.value&&e.value[n.data.format]?e.value[n.data.format]:o.value?Ye:Je}),N=M(()=>o.value?d()?.fields||[]:[]),O=M(()=>{const s=d();if(s&&i.value[s.id]&&i.value[s.id].fields)return i.value[s.id].fields}),z=s=>{s==="zoomed"||s==="error"?setTimeout(()=>{u.value=s,r.value?._tippy.show(),setTimeout(()=>{r.value?._tippy.hide(),u.value="none"},3e3)},300):u.value=s},C=()=>{if(u.value!=="none")return;z("zooming");const s=d();if(s===void 0||!s.isLoaded){console.warn(`Could not find layer for uid ${n.uid} during zoom geometry lookup`),z("error");return}if(!n.data.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."),z("error");return}const y=n.data.data[s.oidField],k=()=>{const T={getGeom:!0};s.getGraphic(y,T).then(D=>{D.geometry.invalid()?(console.error(`Could not find graphic for objectid ${y}`),z("error")):(c.geo.map.zoomMapTo(D.geometry),z("zoomed"),c.updateAlert(c.$i18n.t("details.item.alert.zoom")))}).catch(()=>{z("error")})};s.layerType===$e.FEATURE&&s.geomType!==Te.POINT?s.getGraphicExtent(y).then(T=>{c.geo.map.zoomMapTo(T),z("zoomed"),c.updateAlert(c.$i18n.t("details.item.alert.zoom"))}).catch(()=>{k()}):k()};return J(()=>{p.value.push(P(n,()=>{m()},{deep:!1,immediate:!0}))}),K(()=>{p.value.forEach(s=>s())}),(s,y)=>{const k=q("truncate"),T=q("tippy");return t(),a(Z,null,[h("div",Ke,[o.value?(t(),a("div",et,[h("div",tt,[v.data.loaded&&_.value?(t(),a("span",{key:0,class:"flex-none symbologyIcon",innerHTML:_.value},null,8,st)):(t(),a("div",lt,y[1]||(y[1]=[h("div",{class:"animate-spin spinner h-20 w-20"},null,-1)])))]),v.data.loaded?A((t(),a("span",{key:0,class:"pl-3 text-left flex-grow itemName",content:B.value,innerHTML:S(B.value),tabindex:v.inList?-1:0},null,8,at)),[[k,{options:{placement:"right"}}]]):(t(),a("div",nt,H(L(f)("details.loading")),1)),v.data.loaded?(t(),a("span",it,[I.value?A((t(),a("button",{key:0,type:"button",content:L(f)(`details.item.zoom${u.value==="none"?"":`.${u.value}`}`),"aria-label":L(f)(`grid.cells.zoom${u.value==="none"?"":`.${u.value}`}`),ref_key:"zoomButton",ref:r,onClick:y[0]||(y[0]=D=>{D.stopPropagation(),C()}),class:"text-gray-600 w-24 h-24 p-2 flex justify-center items-center"},[u.value==="zooming"?(t(),a("div",rt)):u.value==="zoomed"?(t(),a("svg",ut,y[2]||(y[2]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)]))):u.value==="error"?(t(),a("svg",ct,y[3]||(y[3]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),a("span",{key:3,innerHTML:L(c).ui.getZoomIcon()},null,8,dt))],8,ot)),[[T,{placement:"bottom"}]]):j("",!0)])):j("",!0)])):j("",!0)]),v.open?(t(),R(we(g.value),{key:0,identifyData:v.data,fields:N.value,fixtureFields:O.value,class:"p-8"},null,8,["identifyData","fields","fixtureFields"])):j("",!0)],64)}}}),vt={key:0,class:"layerName w-full flex-grow p-5 pb-8 font-bold truncate",tabIndex:"0"},pt={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},mt={for:"toggle"},ft={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},yt={class:"flex"},gt=["aria-label"],ht=["content","aria-label","disabled"],_t={class:"px-3 text-center flex-grow"},bt=["content","aria-label","disabled"],kt={key:3},xt={key:0},Lt=["content"],wt=["onClick"],$t={key:1,class:"text-center"},Tt={key:4,class:"p-5"},Mt=F({__name:"result-list",props:{uid:{type:String,required:!0},results:{type:Object,required:!0}},setup(v){const b=w(),n=()=>{b.value._tippy.hide()},c=l=>{l.key==="Tab"&&b.value?.matches(":focus")&&b.value._tippy.show()},p=ee("iApi"),$=X(),f=ie(),_=v,{t:u}=V(),r=w(!1),d=w(p.fixture.get("details")),i=w(!0),e=w(!1),o=w(0),I=w(20),B=w([]),S=w([]),m=M(()=>$.activeGreedy),E=M(()=>$.properties),g=M(()=>o.value+I.value),N=()=>f.getLayerByUid(_.uid),O=()=>_.results.find(l=>l.uid===_.uid),z=M(()=>O()?.loaded??!1),C=M(()=>O()?.requestTime),s=M(()=>r.value&&(!e.value&&T().length>1||e.value&&T().length>I.value)),y=M(()=>{const l=N();return l&&E.value[l.id]&&E.value[l.id].name?E.value[l.id].name:l?.name??""}),k=M(()=>_.uid),T=()=>{const l=O();return l?l.items:[]},D=M(()=>T()[o.value]),oe=M(()=>{if(d.value.hasHilighter()){const l=N();if(l)return l.mapLayer&&l.supportsFeatures}return!1}),fe=l=>{i.value=l,$.hilightToggle=l,G()},ye=()=>{const l=N();o.value=o.value??0,i.value=$.hilightToggle??i.value,e.value=!1,r.value=!!l,G()},re=l=>{e.value?(o.value+=l*I.value,G()):o.value+=l},G=()=>{const l=T();if(i.value&&z.value&&l.length>0&&oe.value)if(e.value)d.value.hilightDetailsItems(l.slice(o.value,g.value),_.uid);else{const x=l[o.value];x&&d.value.hilightDetailsItems([x],_.uid)}else d.value.removeDetailsHilight()},ge=()=>{e.value=!0,o.value=Math.floor(o.value/I.value)*I.value,G()},he=()=>{d.value.removeDetailsHilight()},_e=()=>{d.value.removeDetailsHilight()},be=l=>{const x=o.value;o.value=l,e.value=!1,x===l&&G()};return ae(()=>{B.value.push(p.event.on(Y.LAYER_REMOVE,l=>{const x=p.panel.get("details");_.uid===l.uid&&x&&x.close()})),B.value.push(p.event.on(Y.PANEL_CLOSED,l=>{l.id==="details"&&he()})),B.value.push(p.event.on(Y.PANEL_MINIMIZED,l=>{l.id==="details"&&_e()})),B.value.push(p.event.on(Y.MAP_BASEMAPCHANGE,l=>{i.value&&l.schemaChanged&&G()})),b.value?.addEventListener("blur",n),b.value?.addEventListener("keyup",c)}),J(()=>{S.value.push(P(D,()=>{e.value||(ye(),D.value===void 0&&d.value.removeDetailsHilight())},{deep:!1,immediate:!0})),S.value.push(P(k,()=>{const l=_.uid;if(e.value&&l){const x=O();x&&x.loading.then(()=>{_.uid===l&&e.value&&G()})}},{deep:!1,immediate:!0})),S.value.push(P(C,()=>{o.value=0})),S.value.push(P(()=>_.uid,()=>{o.value=0}))}),K(()=>{S.value.forEach(l=>l()),B.value.forEach(l=>p.event.off(l)),b.value?.removeEventListener("blur",n),b.value?.removeEventListener("keyup",c)}),(l,x)=>{const ke=q("truncate"),te=q("tippy"),xe=q("focus-item"),Le=q("focus-list");return z.value&&m.value===0?(t(),a("div",{key:0,class:"detailsContent relative flex flex-col flex-grow pl-5",style:ve(v.results.length>1?{"margin-left":"42px"}:"")},[r.value?A((t(),a("h1",vt,[le(H(y.value),1)])),[[ke,{options:{placement:"top-start"}}]]):j("",!0),oe.value?(t(),a("div",pt,[h("label",mt,H(L(u)("details.togglehilight.title")),1),se(Ie,{config:{value:i.value,disabled:!1},onToggled:fe},null,8,["config"])])):j("",!0),s.value?(t(),a("div",ft,[h("div",yt,[e.value?j("",!0):(t(),a("button",{key:0,type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":L(u)("details.item.see.list"),onClick:x[0]||(x[0]=Q=>ge())},H(L(u)("details.item.see.list")),9,gt)),h("div",{class:U(["flex ml-auto bg-gray-200 py-8 items-center",{"w-full":e.value}])},[A((t(),a("button",{type:"button",content:L(u)(e.value?"details.items.previous":"details.item.previous.item"),onClick:x[1]||(x[1]=Q=>re(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":L(u)(e.value?"details.items.previous":"details.item.previous.item"),disabled:o.value===0},x[3]||(x[3]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,ht)),[[te,{placement:"top"}]]),h("span",_t,H(e.value?L(u)("details.items.range",[o.value+1,Math.min(g.value,T().length),T().length]):L(u)("details.item.count",[o.value+1,T().length])),1),A((t(),a("button",{type:"button",content:L(u)(e.value?"details.items.next":"details.item.next.item"),onClick:x[2]||(x[2]=Q=>re(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":L(u)(e.value?"details.items.next":"details.item.next.item"),disabled:!e.value&&o.value===T().length-1||e.value&&g.value>=T().length},x[4]||(x[4]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,bt)),[[te,{placement:"top"}]])],2)])])):j("",!0),r.value?(t(),a("div",kt,[T().length>0?(t(),a("div",xt,[e.value?A((t(),a("div",{key:0,class:"flex flex-col",content:L(u)("details.layers.results.list.tooltip"),ref_key:"el",ref:b},[(t(!0),a(Z,null,W(T().slice(o.value,g.value),(Q,ue)=>A((t(),a("button",{class:"flex flex-grow truncate default-focus-style hover:bg-gray-200",key:ue,onClick:St=>be(o.value+ue)},[se(de,{data:Q,uid:v.uid,open:!1,"in-list":!0},null,8,["data","uid"])],8,wt)),[[xe,"show-truncate"]])),128))],8,Lt)),[[Le],[te,{trigger:"manual",placement:"top-start",touch:!1}]]):(t(),R(de,{key:1,data:D.value,uid:v.uid,open:!0,"in-list":!1},null,8,["data","uid"]))])):(t(),a("div",$t,H(L(u)("details.layers.results.empty.currentLayer")),1))])):(t(),a("div",Tt,H(L(u)("details.item.no.data")),1))],4)):(t(),a("div",{key:1,class:U(["flex justify-center py-10 items-center",v.results.length>1?"ml-42":""])},[x[5]||(x[5]=h("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1)),le(" "+H(L(u)("details.item.loading")),1)],2))}}}),It=ne(Mt,[["__scopeId","data-v-68b9daac"]]),Et={class:"relative h-full"},Ct={class:"detailsContentSection overflow-y-auto h-full"},zt=F({__name:"details-screen",props:{panel:{type:Object}},setup(v){const{t:b}=V(),n=ee("iApi"),c=X(),p=w([]),$=w([]),f=w([]),_=w(!1),u=w(""),r=M(()=>c.activeGreedy),d=M(()=>c.payload),i=M(()=>c.properties),e=m=>{u.value=m},o=m=>f.value.find(E=>E.uid===m),I=m=>{m!==void 0&&(c.activeGreedy=m.length===0?0:m[0].requestTime,f.value=m,B(m))},B=m=>{if(u.value){const E=o(u.value);E?E.loading.then(()=>{E.requestTime===r.value&&(E.items.length>0?(c.activeGreedy=0,_.value=!1):S(m))}):S(m)}else S(m)},S=(m,E)=>{let g;if(E)g=E;else{const C=c.properties,s=m.map(k=>[C[k.layerId]?.priority??50,k.layerId]),y=new Set(s.map(k=>k[0]));g=[],y.forEach(k=>{const T=s.filter(D=>D[0]===k).map(D=>D[1]);g.push([k,T])}),g.sort((k,T)=>T[0]-k[0])}if(g.length===0){c.activeGreedy=0,_.value=!0;return}const N=g[g.length-1][1],O=m.filter(C=>N.includes(C.layerId)).map(C=>C.loading.then(()=>C.items.length>0?Promise.resolve(C):Promise.reject())),z=m.length===0?0:m[0].requestTime;Promise.any(O).then(C=>{C.requestTime===r.value&&(c.activeGreedy=0,u.value=C.uid,_.value=!1)}).catch(()=>{z===r.value&&(g.pop(),S(m,g))})};return J(()=>{$.value.push(P(d,m=>{I(m)},{deep:!1,immediate:!0}))}),K(()=>{p.value.forEach(m=>n.event.off(m)),$.value.forEach(m=>m())}),(m,E)=>{const g=Me("panel-screen");return t(),R(g,{panel:v.panel},{header:ce(()=>[le(H(L(c).origin==="toggleEvent"?L(b)("details.layers.title.gridOrigin"):L(b)("details.layers.title.identifyOrigin")),1)]),content:ce(()=>[h("div",Et,[f.value.length>1?(t(),R(Ve,{key:0,results:f.value,detailsProperties:i.value,selected:u.value,onSelectionChanged:e},null,8,["results","detailsProperties","selected"])):j("",!0),h("div",Ct,[_.value?(t(),a("div",{key:1,class:U(["text-center",{"ml-42":f.value.length>1}])},H(f.value.length>=1?L(b)("details.layers.results.empty"):L(b)("details.layers.results.empty.noLayers")),3)):(t(),R(It,{key:0,uid:u.value,results:f.value},null,8,["uid","results"]))])])]),_:1},8,["panel"])}}}),Bt=ne(zt,[["__scopeId","data-v-8dee3fda"]]);export{Bt as default};
