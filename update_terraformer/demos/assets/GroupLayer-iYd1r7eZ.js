const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./groupLayerUtils-JMh1swQR.js","./utils-BPtbSZ4g.js","./main-C4ZPumQG.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./PortalItem-DWC4iI6A.js","./jsonContext-C7hXRiXO.js","./portalItemUtils-Cw_vHyA7.js","./projection-8-uxS4CM.js","./projectBuffer-C2AmViVa.js","./saveUtils-gdUw0rfs.js","./resourceUtils-CJhFGJfm.js","./uuid-Cl5lrJ4c.js","./resourceUtils-BMB6u3m0.js"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-ExcqyqRp.js";import{dD as b,aG as d,bo as v,J as c,bh as f,q as s,u as l,v as h,z as _,f4 as w,aI as g,aB as m,C as I,n as L}from"./main-C4ZPumQG.js";import{n as O}from"./CollectionFlattener-Bad_hcUG.js";import{t as S}from"./loadAll-uCCJvqur.js";import{S as $}from"./MultiOriginJSONSupport-CfimntwA.js";import{f as A}from"./Layer-kJz1RbGs.js";import{l as V}from"./BlendLayer-CLlgDHiw.js";import{b as P}from"./OperationalLayer-CLG7nePC.js";import{j as E}from"./PortalLayer-CheKnZ-m.js";import{t as M}from"./ScaleRangeLayer-BkSMimzn.js";import{b as C}from"./fetchService--aISDZG5.js";import T from"./PortalItem-DWC4iI6A.js";import{n as x,l as G,t as R}from"./TablesMixin-DtEmo75-.js";import{A as p}from"./interfaces-CL2NbQte.js";import{r as j}from"./saveUtils-gdUw0rfs.js";import{f as H}from"./writeUtils-BHvBwqoN.js";import"./TimeExtent-gaoR-i0M.js";import"./jsonUtils-D0Ph3-uP.js";import"./parser-C1xXAJ6X.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CLl-Rp5L.js";import"./common-DQOJ18NT.js";import"./commonProperties-Bsvq8RFW.js";import"./ElevationInfo-m_Ju7IO-.js";import"./lengthUtils-BttfIwGw.js";import"./portalItemUtils-Cw_vHyA7.js";import"./projection-8-uxS4CM.js";import"./projectBuffer-C2AmViVa.js";const F=Symbol("WebScene");let r=class extends V(M(P(E(x(G($(A))))))){constructor(e){super(e),this.allLayers=new O({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=R(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=b(async(i,t,o)=>{const{save:a,saveAs:n}=await u(()=>import("./groupLayerUtils-JMh1swQR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url);switch(i){case p.SAVE:return a(this,t);case p.SAVE_AS:return n(this,o,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([d(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&F in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(g(()=>this.tables,"before-add",t=>{t.preventDefault(),L.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},w),d(()=>this.visible,this._onVisibilityChange.bind(this),m)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===v.USER}_writeLayers(e,i,t,o){const a=[];if(!e)return a;e.forEach(n=>{const y=H(n,o.webmap?o.webmap.getLayerJSONFromResourceInfo(n):null,o);y?.layerType&&a.push(y)}),i.layers=a}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:o,layerType:a}=i;if(a==="GroupLayer"&&o)return new T({id:o,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return j(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:C},e).catch(t=>{if(c(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return S(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(p.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles(d(()=>e.visible,i=>this._onChildVisibilityChange(e,i),m),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!f(this).initialized)return;const t=this.layers;let o=t.find(a=>a.visible);switch(e){case"exclusive":t.length&&!o&&(o=t.at(0),o.visible=!0),this._turnOffOtherLayers(o);break;case"inherited":t.forEach(a=>{a.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};s([l({readOnly:!0,dependsOn:[]})],r.prototype,"allLayers",void 0),s([l({readOnly:!0})],r.prototype,"allTables",void 0),s([l({json:{read:!0,write:!0}})],r.prototype,"blendMode",void 0),s([l()],r.prototype,"fullExtent",void 0),s([l({readOnly:!0})],r.prototype,"sourceIsPortalItem",null),s([l({json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"layers",void 0),s([h("layers")],r.prototype,"_writeLayers",null),s([l({type:["GroupLayer"]})],r.prototype,"operationalLayerType",void 0),s([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:e?.type==="Group Layer"&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],r.prototype,"portalItem",null),s([_("web-map","portalItem",["itemId"])],r.prototype,"readPortalItem",null),s([h("web-map","portalItem",{itemId:{type:String}})],r.prototype,"writePortalItem",null),s([l()],r.prototype,"spatialReference",void 0),s([l({json:{read:!1},readOnly:!0,value:"group"})],r.prototype,"type",void 0),s([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],r.prototype,"visibilityMode",null),r=s([I("esri.layers.GroupLayer")],r);const ue=r;export{ue as default};
