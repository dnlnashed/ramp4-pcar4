import{dM as W,dN as ee,e3 as V,e8 as ie,dS as D,dU as t,dY as n,dT as k,dX as o,e0 as l,gi as x,gj as de,d_ as w,g8 as fe,g7 as v,hX as Le,e2 as re,dO as ce,dQ as _,hY as u,hZ as C,dR as ge,ec as xe,dW as me,ea as B,d$ as M,dE as X,fN as le,e1 as te,dZ as ae,gh as ke,eb as p,h_ as we,fL as Me,e7 as Ce,h$ as b,i0 as U,i1 as ye,dV as R,g6 as Te,i2 as $,hx as ze,i3 as Se,i4 as ne}from"./main-C2GI9Q3q.js";import{m as Ve}from"./marked.esm-DgqJBp_S.js";const He=["type","aria-label","checked","disabled","content"],oe=W({__name:"checkbox",props:{value:{type:Object,required:!0},legendItem:{type:Object,required:!0},checked:{type:Boolean},label:{type:String},isRadio:{type:Boolean},disabled:{type:Boolean}},setup(e){const{t:y}=ee(),i=e,m=V(i.legendItem.visibility);ie(()=>{i.legendItem.checkVisibilityRules(),m.value=i.legendItem.visibility===i.checked});const I=s=>!s.symbologyStack.some(d=>d.visibility),Z=()=>{if(i.value instanceof fe)i.legendItem.toggleVisibility();else if(i.legendItem instanceof v){if(I(i.legendItem)?(i.legendItem.setSymbologyVisibility(void 0,!1),i.legendItem.setSymbologyVisibility(i.value.uid,!0),i.legendItem.toggleVisibility(!0)):i.legendItem.setSymbologyVisibility(i.value.uid,!i.value.lastVisbility),I(i.legendItem)&&i.legendItem.toggleVisibility(!1),i.legendItem.layer?.supportsFeatures){const s=i.legendItem.symbologyStack.filter(z=>z.lastVisbility===!0).map(z=>z.definitionClause||"");let d="";s.length===0?d="1=2":s.length<i.legendItem.symbologyStack.length&&(d=s.join(" OR ")),i.legendItem.layer?.setSqlFilter(Le.SYMBOL,d)}m.value=!0}};return(s,d)=>{const z=D("tippy");return t(),n("div",{class:"relative",onMouseover:d[3]||(d[3]=x(()=>{},["stop"]))},[k(o("input",{type:e.isRadio?"radio":"checkbox","aria-label":l(y)(e.checked?`legend.visibility.hide${e.label}`:`legend.visibility.show${e.label}`),onClick:d[0]||(d[0]=x(j=>Z(),["stop"])),checked:e.checked&&m.value,onKeypress:d[1]||(d[1]=de(x(()=>{},["prevent"]),["enter"])),onKeyup:d[2]||(d[2]=de(x(j=>Z(),["stop"]),["enter"])),class:w([[e.disabled?"text-gray-400 border-gray-300":"text-black cursor-pointer border-gray-500 hover:border-black"],"mx-5 h-15 w-15"]),tabindex:"-1",disabled:e.disabled,content:l(y)(e.checked?`legend.visibility.hide${e.label}`:`legend.visibility.show${e.label}`)},null,42,He),[[z,{placement:"top-end",hideOnClick:!1}]])],32)}}}),Ee=["aria-label"],Ae=["aria-label"],Be=["aria-label"],Ze=["aria-label"],_e=["aria-label"],Ue=["aria-label"],Re=["content","aria-label"],Pe=W({__name:"legend-options",props:{legendItem:v},setup(e){const{t:y}=ee(),i=re("iApi"),m=V(),I=V(!1),Z=ce(),s=V(Z.mobileView),d=e,z=()=>{d.legendItem.layerControlAvailable(u.Symbology)&&d.legendItem.toggleSymbology()},j=()=>{d.legendItem.layerControlAvailable(u.Datatable)&&A("grid")&&i.event.emit(X.GRID_TOGGLE,d.legendItem.layer)},q=()=>{d.legendItem.layerControlAvailable(u.Settings)&&A("settings")&&i.event.emit(X.SETTINGS_TOGGLE,d.legendItem.layer)},Y=()=>{if(d.legendItem.layerControlAvailable(u.Metadata)&&A("metadata")){const S=d.legendItem?.layer?.config.metadata||d.legendItem?.layer?.parentLayer?.config?.metadata||{},c=S?.name||d.legendItem?.layer?.name||"",f=d.legendItem?.layer?.config?.catalogueUrl||d.legendItem?.layer?.layerType==="sublayer"&&d.legendItem?.layer?.parentLayer?.config?.catalogueUrl||void 0;if(S.url){const P=S.url.split("."),H=P[P.length-1],J=H==="xml"||H==="md"?H:"html";i.event.emit(X.METADATA_TOGGLE,{type:J,layerName:c,url:S.url,catalogueUrl:f,layer:d.legendItem.layer})}else console.warn("Layer does not have a metadata url defined")}},E=()=>{d.legendItem.layerControlAvailable(u.BoundaryZoom)&&d.legendItem?.layer?.zoomToLayerBoundary()},N=()=>{d.legendItem.layerControlAvailable(u.Remove)&&i.geo.map.removeLayer(d.legendItem.layerUid)},G=()=>{O.value&&(C(d.legendItem.layer).reload(),m.value.open=!1)},O=_(()=>d.legendItem.layerControlAvailable(u.Reload)&&d.legendItem instanceof v&&C(d.legendItem.layer)?.canReload),K=S=>{I.value=!0,setTimeout(()=>{I.value&&(s.value||S._tippy?.show())},300)},A=S=>{try{return i.fixture.exists(S)}catch{return!1}};return(S,c)=>{const f=ge("dropdown-menu"),P=D("tippy");return t(),n("div",{onClick:c[2]||(c[2]=x(()=>{},["stop"])),onMouseover:c[3]||(c[3]=x(()=>{},["stop"])),class:"options display-block cursor-auto"},[xe(f,{class:"flex-shrink-0",position:"bottom-end",tooltip:l(y)("legend.layer.options"),tooltipPlacement:"left",tooltipPlacementAlt:"left",ref_key:"dropdown",ref:m},{header:me(()=>c[4]||(c[4]=[o("div",{class:"flex p-4 justify-center items-center"},[o("svg",{class:"inline-block fill-current w-18 h-18 mx-4",viewBox:"0 0 23 21"},[o("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})])],-1)])),default:me(()=>[o("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(u).Metadata)||!A("metadata")}]),onClick:Y,role:"button","aria-label":l(y)("legend.layer.controls.metadata")},[c[5]||(c[5]=o("svg",{class:"setting-svg",viewBox:"0 0 23 21"},[o("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"})],-1)),B(" "+M(l(y)("legend.layer.controls.metadata")),1)],10,Ee),o("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(u).Settings)||!A("settings")}]),onClick:q,role:"button","aria-label":l(y)("legend.layer.controls.settings")},[c[6]||(c[6]=o("svg",{class:"setting-svg",viewBox:"0 0 23 21"},[o("g",null,[o("path",{d:"M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z "})])],-1)),B(" "+M(l(y)("legend.layer.controls.settings")),1)],10,Ae),o("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(u).Datatable)||!A("grid")}]),onClick:j,role:"button","aria-label":l(y)("legend.layer.controls.datatable")},[c[7]||(c[7]=o("svg",{class:"setting-svg",viewBox:"0 0 23 21"},[o("path",{d:"M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z "})],-1)),B(" "+M(l(y)("legend.layer.controls.datatable")),1)],10,Be),o("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(u).Symbology)}]),onClick:z,role:"button","aria-label":l(y)("legend.layer.controls.symbology")},[c[8]||(c[8]=o("svg",{class:"setting-svg",viewBox:"0 0 23 21"},[o("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)),B(" "+M(l(y)("legend.layer.controls.symbology")),1)],10,Ze),o("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(u).BoundaryZoom)}]),onClick:E,role:"button","aria-label":l(y)("legend.layer.controls.boundaryzoom")},[c[9]||(c[9]=o("svg",{class:"setting-svg",viewBox:"0 0 24 24"},[o("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)),B(" "+M(l(y)("legend.layer.controls.boundaryzoom")),1)],10,_e),o("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!e.legendItem.layerControlAvailable(l(u).Remove)}]),onClick:N,role:"button","aria-label":l(y)("legend.layer.controls.remove")},[c[10]||(c[10]=o("svg",{class:"setting-svg",viewBox:"0 0 23 21"},[o("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})],-1)),B(" "+M(l(y)("legend.layer.controls.remove")),1)],10,Ue),k((t(),n("a",{href:"javascript:;",class:w(["flex leading-snug items-center text-left w-auto",{disabled:!O.value}]),content:O.value?"":l(y)("legend.layer.controls.reloadDisabled"),onMouseover:c[0]||(c[0]=x(H=>K(H.currentTarget),["stop"])),onMouseout:c[1]||(c[1]=H=>(s.value||H.currentTarget?._tippy?.hide(),I.value=!1)),onClick:G,role:"button","aria-label":l(y)("legend.layer.controls.reload")},[c[11]||(c[11]=o("svg",{class:"setting-svg",viewBox:"0 0 24 24"},[o("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})],-1)),B(" "+M(l(y)("legend.layer.controls.reload")),1)],42,Re)),[[P,{placement:"top-start",trigger:"manual focus",aria:"describedby"}]])]),_:1},8,["tooltip"])],32)}}}),je=le(Pe,[["__scopeId","data-v-9229eed2"]]),Ge={key:0},Oe={key:0,class:"relative left-3"},De=["innerHTML"],$e=["src"],qe={key:1,class:"symbologyIcon w-32 h-32"},Ne=["innerHTML"],Fe=["src"],Qe={key:1,class:"h-32 w-32 inline-flex justify-center items-center"},We=W({__name:"symbology-stack",props:{visible:{type:Boolean,required:!0},legendItem:{type:Object,required:!0}},setup(e){const y=e,i=V([]);return ie(()=>{y.legendItem.loadPromise.then(()=>{y.legendItem.layerUid!==void 0&&Promise.all(C(y.legendItem.symbologyStack).map(m=>m.drawPromise)).then(()=>{i.value=C(y.legendItem).symbologyStack})})}),(m,I)=>e.visible?(t(),n("div",Qe,I[0]||(I[0]=[o("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},[o("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"})],-1)]))):(t(),n("div",Ge,[i.value.length>1?(t(),n("div",Oe,[(t(!0),n(te,null,ae(i.value.slice(0,3).reverse(),(Z,s)=>(t(),n("div",{class:w(["absolute",[s==0?"symbol-0":s==1?"left-3 symbol-1":"left-6 symbol-2"]]),style:ke({"z-index":3-s}),key:s},[i.value[s].svgcode?(t(),n("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:i.value[s].svgcode},null,8,De)):i.value[s].imgUrl?(t(),n("img",{key:1,class:"symbologyIcon w-28 h-28",src:i.value[s].imgUrl},null,8,$e)):p("",!0)],6))),128))])):i.value.length>0?(t(),n("div",qe,[i.value[0].svgcode?(t(),n("span",{key:0,innerHTML:i.value[0].svgcode},null,8,Ne)):i.value[0].imgUrl?(t(),n("img",{key:1,class:"symbologyIcon w-full h-full",src:i.value[0].imgUrl},null,8,Fe)):p("",!0)])):p("",!0)]))}}),Xe=le(We,[["__scopeId","data-v-34dfeccd"]]),Ye={class:"relative"},Ke=["content"],Je={key:0,class:"flex p-5 mr-[13px]"},el={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},ll={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px"},tl=["disabled","content","aria-label"],al=["src"],nl={class:"h-auto break-words text-ellipsis"},ol={key:4,class:"flex-1 pointer-events-none p-5"},sl={key:5,class:"flex-1"},il={key:0,class:"text-lg font-bold"},dl={key:1},rl={key:2},cl=["src"],gl=["innerHTML"],ml={key:6,class:"relative"},yl=["content","aria-label"],vl={key:8,class:"relative"},pl=["content","aria-label"],ul={class:"flex p-5"},Il={key:0,class:"fill-current w-18 h-18",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},bl={key:1,class:"inline-block fill-current w-18 h-18 mr-1",viewBox:"0 1 23 22"},hl=["content"],fl=["content"],Ll={key:11,class:"relative top-1"},xl=["content"],kl={key:0,class:"h-3 w-full absolute bottom-0"},wl={key:0,class:"symbology-stack default-focus-style"},Ml={key:0},Cl={key:0,class:"m-5"},Tl={key:0,class:"items-center grid-cols-1"},zl={key:0,class:"symbologyIcon w-full p-5"},Sl=["src"],Vl=["innerHTML"],Hl={key:2,class:"flex-1 p-5 bg-black-75 text-white"},El={key:1,class:"flex items-center"},Al={key:0,class:"symbologyIcon"},Bl=["src"],Zl={key:1,class:"symbologyIcon"},_l=["innerHTML"],Ul={class:"flex-1 ml-15"},Rl={key:1},Pl={class:"flex p-5 ml-48"},jl={key:0,class:"relative animate-spin spinner h-20 w-20 mr-10 pt-2"},Gl={class:"flex-1 text-gray-500"},Ol={key:1,class:"legend-group border-l-2 ml-4 pl-4"},Dl=W({__name:"item",props:{legendItem:{type:Object,required:!0}},setup(e){const y=we(),i=ce(),{t:m}=ee(),I=re("iApi"),Z=V(),s=e,d=Me(),z=d.multilineItems,j=(s.legendItem instanceof v&&s.legendItem.maxLines)??d.maxLines,q=V(i.mobileView),Y=_(()=>y.layerConfigs),E=V([]),N=V(!1),G=V(!1),O=_(()=>s.legendItem instanceof v?C(s.legendItem.layer)?.layerType:""),K=_(()=>s.legendItem instanceof v&&C(s.legendItem.layer)?.canModifyLayer),A=_(()=>{if(s.legendItem instanceof v){const r=C(s.legendItem.layer);return r?r.canReload:!0}else return!1}),S=_(()=>I.animate),c=_(()=>s.legendItem.children.length>0||s.legendItem instanceof v&&C(s.legendItem.layer)?.sublayers.length>0),f=r=>r===U.Expand||r===U.Visibility?s.legendItem.controlAvailable(r):s.legendItem.layerControlAvailable(r),P=r=>Ve(r),H=()=>{s.legendItem.children.length===0||!f(U.Expand)||(s.legendItem.toggleExpanded(),I.updateAlert(m(`legend.alert.group${s.legendItem.expanded?"Expanded":"Collapsed"}`)))},J=()=>{if(f(u.Symbology)){const r=s.legendItem.toggleSymbology();I.updateAlert(m(`legend.alert.symbology${r?"Expanded":"Collapsed"}`))}},ve=()=>{f(u.Datatable)&&F()&&I.event.emit(X.GRID_TOGGLE,s.legendItem.layer)},pe=r=>{const a=document.createElement("span");a.innerHTML=r.svgcode;const h=a.firstElementChild;return h?.classList.add("max-w-full"),h?.classList.add("h-full"),h?.setAttribute("height",r.imgHeight),h?.setAttribute("width",r.imgWidth),a.outerHTML},F=()=>{try{return I.fixture.exists("grid")}catch{return!1}},ue=()=>{s.legendItem.reload(),setTimeout(()=>{const r=s.legendItem;let a=!0;if(r.layer)C(r.layer).reload(),a=!1;else if(r.isSublayer&&r.parentLayerId){const h=I.geo.layer.getLayer(r.parentLayerId);h&&(C(h).reload(),a=!1)}if(a){const h=r.isSublayer?r.parentLayerId:r.layerId,L=Y.value.find(T=>T.id===h);L!==void 0&&Ie(L)}s.legendItem.loadPromise.catch(()=>{})},400)},Ie=async r=>{try{const a=I.geo.layer.getLayer(r.id);if(a){const[h]=await Se(C(a).reload());if(h)throw new Error;return a}else{const h=I.geo.layer.createLayer(r);return await I.geo.map.addLayer(h).catch(()=>{throw new Error}),h}}catch{return}},be=()=>{const r=C(s.legendItem);let a=0;if(r.type===b.Error){s.legendItem.toggleHidden(!0);const h=setInterval(()=>{const L=r.layer;(L&&(L.layerExists||L.initiationState===ne.NEW||L.initiationState===ne.TERMINATING||L.initiationState===ne.TERMINATED)||a>1200)&&(clearInterval(h),L&&I.geo.map.removeLayer(L),y.removeLayerConfig(r.layerId),I.fixture.get("legend")?.removeLayerItem(r.layerId)),a++},250)}else{s.legendItem.error();const h=setInterval(()=>{const L=r.parentLayerId||r.layerId,T=I.geo.layer.getLayer(L);T&&(clearInterval(h),T.cancelLoad(),(I.fixture.get("legend")?.getLayerBoundItems(T)||[]).forEach(Q=>Q.error())),a>1200&&clearInterval(h),a++},50)}},se=()=>{s.legendItem.loadPromise.then(()=>{if(E.value=[],!s.legendItem.layer){console.warn("Attempted to mount legend item component with undefined layer");return}Promise.all(C(s.legendItem.symbologyStack.map(r=>r.drawPromise))).then(()=>{E.value=s.legendItem.symbologyStack,N.value=!0})}).catch(()=>{})},he=r=>{G.value=!0,setTimeout(()=>{G.value&&(q.value||r._tippy?.show())},300)};return s.legendItem instanceof v&&(se(),Ce(()=>s.legendItem.symbologyStack,()=>{se()})),(r,a)=>{const h=ge("item",!0),L=D("tippy"),T=D("truncate"),Q=D("focus-item");return e.legendItem.hidden?p("",!0):(t(),n("div",{key:`${e.legendItem.uid}-${e.legendItem.visibility}`,ref_key:"el",ref:Z},[o("div",Ye,[k((t(),n("div",{class:w(["flex items-center hover:bg-gray-200 default-focus-style !p-5",[e.legendItem.type===l(b).Item?"loaded-item":e.legendItem.type===l(b).Error?"non-loaded-item bg-red-200":"non-loaded-item",c.value&&f(l(U).Expand)||!c.value&&e.legendItem instanceof l(v)&&f(l(u).Datatable)&&F()&&e.legendItem.type===l(b).Item?"cursor-pointer":"cursor-default",l(z)?"multilined":"singlelined"]]),onMouseover:a[9]||(a[9]=x(g=>he(g.currentTarget),["stop"])),onMouseout:a[10]||(a[10]=g=>(q.value||g.currentTarget?._tippy?.hide(),G.value=!1)),onClick:a[11]||(a[11]=()=>{!c.value&&e.legendItem instanceof l(v)&&f(l(u).Datatable)&&F()&&e.legendItem.type===l(b).Item?ve():c.value&&H()}),content:c.value&&f(l(U).Expand)?l(m)(e.legendItem.expanded?"legend.group.collapse":"legend.group.expand"):e.legendItem instanceof l(v)&&e.legendItem.type===l(b).Item&&f(l(u).Datatable)&&F()?l(m)("legend.layer.data"):"","truncate-trigger":""},[e.legendItem.type!==l(b).Item?(t(),n("div",Je,[e.legendItem.type===l(b).Placeholder?(t(),n("svg",el,a[12]||(a[12]=[ye('<path d="M0 0h24v24H0V0z" fill="none" data-v-9c9a8adc></path><path d="M0 0h24v24H0V0z" fill="none" data-v-9c9a8adc></path><circle cx="15.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-9c9a8adc></path>',7)]))):(t(),n("svg",ll,a[13]||(a[13]=[ye('<path d="M0 0h24v24H0V0z" fill="none" data-v-9c9a8adc></path><path d="M0 0h24v24H0V0z" fill="none" data-v-9c9a8adc></path><circle cx="15.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-9c9a8adc></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-9c9a8adc></path>',7)])))])):p("",!0),e.legendItem.type===l(b).Item&&e.legendItem instanceof l(v)&&e.legendItem.layer.legend.length>0?(t(),n("div",{key:1,class:"relative w-32 h-32 mr-15",onMouseover:a[0]||(a[0]=x(()=>{},["stop"]))},[k((t(),n("button",{type:"button",onClick:x(J,["stop"]),class:w([f(l(u).Symbology)?"cursor-pointer":"cursor-default"]),disabled:!f(l(u).Symbology),content:e.legendItem instanceof l(v)&&e.legendItem.symbologyExpanded?l(m)("legend.symbology.hide"):l(m)("legend.symbology.expand"),"aria-label":e.legendItem instanceof l(v)&&e.legendItem.symbologyExpanded?l(m)("legend.symbology.hide"):l(m)("legend.symbology.expand")},[e.legendItem.coverIcon?(t(),n("img",{key:1,class:w([{"pointer-events-none":!f(l(u).Symbology)},"w-32 h-32 hover:scale-105"]),src:e.legendItem.coverIcon,alt:"Cover icon not found :("},null,10,al)):(t(),R(Xe,{key:0,class:w([{"pointer-events-none":!f(l(u).Symbology)},"w-32 h-32"]),visible:e.legendItem instanceof l(v)&&e.legendItem.symbologyExpanded,legendItem:e.legendItem},null,8,["class","visible","legendItem"]))],10,tl)),[[L,{placement:"top-start"}]])],32)):p("",!0),c.value&&f(l(U).Expand)?(t(),n("div",{key:2,class:w(["expand-toggle p-8 pointer-events-none",{"rotate-180":e.legendItem.expanded}])},a[14]||(a[14]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[o("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)):p("",!0),e.legendItem instanceof l(v)&&l(z)?k((t(),n("div",{key:3,class:w(["flex-1 pointer-events-none m-5",`line-clamp-${l(j)}`])},[o("span",nl,M(e.legendItem.name??(e.legendItem?.layer?.name?e.legendItem.layer?.name:e.legendItem.layerId)),1)],2)),[[T,{externalTrigger:!0,noTruncateClass:!0}]]):e.legendItem instanceof l(v)?k((t(),n("div",ol,[o("span",null,M(e.legendItem.name??(!e.legendItem.layer||e.legendItem?.layer?.name===""?e.legendItem.layerId:e.legendItem.layer?.name)),1)])),[[T,{externalTrigger:!0}]]):e.legendItem instanceof l(Te)?(t(),n("div",sl,[e.legendItem.infoType===l($).Title&&e.legendItem.content?(t(),n("h3",il,M(e.legendItem.content),1)):e.legendItem.infoType===l($).Title?(t(),n("h3",dl,M(e.legendItem.name),1)):e.legendItem.infoType===l($).Text?(t(),n("p",rl,M(e.legendItem.content),1)):e.legendItem.infoType===l($).Image?(t(),n("img",{key:3,src:e.legendItem.content,alt:"InfoType image not found :("},null,8,cl)):e.legendItem.infoType===l($).Markdown?(t(),n("div",{key:4,class:"ramp-markdown",innerHTML:P(e.legendItem.content)},null,8,gl)):(t(),R(ze(`${e.legendItem.uid}-info-section`),{key:5}))])):p("",!0),e.legendItem.type===l(b).Error&&A.value?(t(),n("div",ml,[k((t(),n("button",{type:"button",class:"text-gray-500 hover:text-black",content:l(m)("legend.layer.controls.reload"),onMouseover:a[1]||(a[1]=x(()=>{},["stop"])),onClick:x(ue,["stop"]),"aria-label":l(m)("legend.layer.controls.reload")},a[15]||(a[15]=[o("div",{class:"flex p-8"},[o("svg",{class:"inline-block fill-current w-18 h-18",viewBox:"0 0 24 24"},[o("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"})])],-1)]),40,yl)),[[L,{placement:"top-start"}]])])):p("",!0),(e.legendItem.type===l(b).Item||e.legendItem.type===l(b).Placeholder&&l(z))&&e.legendItem instanceof l(v)?(t(),R(je,{key:7,class:w({invisible:e.legendItem.type===l(b).Placeholder}),legendItem:e.legendItem},null,8,["class","legendItem"])):p("",!0),e.legendItem.type!==l(b).Item&&e.legendItem instanceof l(v)?(t(),n("div",vl,[k((t(),n("button",{type:"button",class:"text-gray-500 hover:text-black",content:e.legendItem.type===l(b).Error?l(m)("legend.layer.controls.remove"):l(m)("legend.layer.controls.cancel"),onMouseover:a[2]||(a[2]=x(()=>{},["stop"])),onClick:x(be,["stop"]),"aria-label":e.legendItem.type===l(b).Error?l(m)("legend.layer.controls.remove"):l(m)("legend.layer.controls.cancel")},[o("div",ul,[e.legendItem.type===l(b).Placeholder?(t(),n("svg",Il,a[16]||(a[16]=[o("path",{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},null,-1)]))):(t(),n("svg",bl,a[17]||(a[17]=[o("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},null,-1)])))])],40,pl)),[[L,{placement:"top-start"}]])])):p("",!0),e.legendItem.type===l(b).Item&&e.legendItem instanceof l(v)&&e.legendItem.layerOffscale?k((t(),n("div",{key:9,class:"relative p-4 cursor-default",content:l(m)("legend.layer.offscale"),onMouseover:a[3]||(a[3]=x(()=>{},["stop"])),onClick:a[4]||(a[4]=x(()=>{},["stop"])),"focus-icon":""},a[18]||(a[18]=[o("svg",{class:"inline-block fill-gray-400 w-18 h-18",viewBox:"0 0 24 24"},[o("path",{d:"M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"})],-1)]),40,hl)),[[L,{placement:"top-start"}]]):p("",!0),e.legendItem.type===l(b).Item&&e.legendItem instanceof l(v)&&!e.legendItem.layer?.mapLayer?k((t(),n("div",{key:10,class:"relative p-4 cursor-default",content:l(m)("legend.layer.data.only"),onMouseover:a[5]||(a[5]=x(()=>{},["stop"])),onClick:a[6]||(a[6]=x(()=>{},["stop"])),"focus-icon":""},a[19]||(a[19]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 -960 960 960",width:"18",class:"inline-block fill-gray-400"},[o("path",{d:"m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z"})],-1)]),40,fl)),[[L,{placement:"top-end"}]]):p("",!0),e.legendItem.type===l(b).Item&&e.legendItem instanceof l(v)&&e.legendItem.layerOffscale?(t(),n("div",Ll,[k((t(),n("button",{type:"button",class:"p-4",content:l(m)("legend.layer.zoomToVisible"),onMouseover:a[7]||(a[7]=x(()=>{},["stop"])),onClick:a[8]||(a[8]=x(g=>e.legendItem.layer.zoomToVisibleScale(),["stop"]))},a[20]||(a[20]=[o("svg",{class:"m-auto",xmlns:"http://www.w3.org/2000/svg",height:"18",viewBox:"0 0 24 24",width:"18"},[o("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o("path",{d:"M0 0h24v24H0V0z",fill:"none"}),o("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"})],-1)]),40,xl)),[[L,{placement:"top-start"}]])])):e.legendItem.type===l(b).Item&&f(l(U).Visibility)?(t(),R(oe,{key:12,checked:e.legendItem.visibility,value:e.legendItem,isRadio:e.legendItem.parent&&e.legendItem.parent.exclusive,legendItem:e.legendItem,disabled:e.legendItem instanceof l(v)&&!e.legendItem.layerControlAvailable(l(u).Visibility),label:c.value?"Group":"Layer"},null,8,["checked","value","isRadio","legendItem","disabled","label"])):p("",!0)],42,Ke)),[[Q,"show-truncate"],[L,{placement:"top-start",trigger:"manual focus",aria:"describedby"}]]),e.legendItem.type===l(b).Placeholder||e.legendItem instanceof l(v)&&e.legendItem.layerRedrawing&&e.legendItem.visibility?(t(),n("div",kl,a[21]||(a[21]=[o("div",{class:"progress-line"},null,-1)]))):p("",!0)]),e.legendItem instanceof l(v)&&e.legendItem.symbologyExpanded?k((t(),n("div",wl,[E.value.length>0?(t(),n("div",Ml,[e.legendItem instanceof l(v)&&e.legendItem.description?(t(),n("p",Cl,M(e.legendItem.description),1)):p("",!0),(t(!0),n(te,null,ae(E.value,g=>(t(),n("div",{class:"m-5",key:g.uid},[g.imgUrl&&e.legendItem.symbologyRenderStyle==="images"||!g.imgUrl&&O.value==="ogc-wms"?(t(),n("div",Tl,[g.imgUrl?(t(),n("div",zl,[o("img",{class:"max-w-full",src:g.imgUrl},null,8,Sl)])):g.imgHeight?(t(),n("div",{key:1,class:"symbologyIcon w-full p-5",innerHTML:pe(g)},null,8,Vl)):p("",!0),g.label?k((t(),n("div",Hl,[o("span",null,M(g.label),1),!g.imgUrl&&E.value.length>1||g.imgUrl&&g.definitionClause?(t(),R(oe,{key:0,class:"float-right",value:g,legendItem:e.legendItem,checked:g.visibility,disabled:!f(l(u).Visibility),label:"Symbol"},null,8,["value","legendItem","checked","disabled"])):p("",!0)])),[[T]]):p("",!0)])):(t(),n("div",El,[g.imgUrl?(t(),n("div",Al,[o("img",{class:"w-32 h-32",src:g.imgUrl},null,8,Bl)])):g.svgcode?(t(),n("div",Zl,[o("span",{innerHTML:g.svgcode},null,8,_l)])):p("",!0),k((t(),n("div",Ul,[B(M(g.label),1)])),[[T]]),K.value&&e.legendItem.layer.supportsFeatures&&(!g.imgUrl&&E.value.length>1||g.imgUrl&&g.definitionClause)?(t(),R(oe,{key:2,value:g,legendItem:e.legendItem,checked:g.visibility,disabled:!f(l(u).Visibility),label:"Symbol"},null,8,["value","legendItem","checked","disabled"])):p("",!0)]))]))),128))])):p("",!0),N.value?p("",!0):(t(),n("div",Rl,[k((t(),n("div",Pl,[S.value?(t(),n("div",jl)):p("",!0),k((t(),n("div",Gl,[o("span",null,M(l(m)("legend.symbology.loading")),1)])),[[T]])])),[[T]])]))])),[[Q]]):p("",!0),e.legendItem.expanded?(t(),n("div",Ol,[(t(!0),n(te,null,ae(e.legendItem.children,g=>(t(),R(h,{legendItem:g,key:g.uid},null,8,["legendItem"]))),128))])):p("",!0)]))}}}),$l=le(Dl,[["__scopeId","data-v-9c9a8adc"]]);export{$l as default};
