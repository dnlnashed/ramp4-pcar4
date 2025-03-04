import{bS as k,dc as $,aI as f,aG as y,aB as p,f5 as v,aw as d,ei as L,V as m,q as r,u as o,f6 as O,z as h,C as c,f as _,D as S,bD as F,J as j,v as M}from"./main-9YtP5FE3.js";import{n as C}from"./CollectionFlattener-D2juEa_k.js";import{S as I}from"./MultiOriginJSONSupport-fZ1kStAQ.js";import{f as K}from"./Layer-_ILr-0Q8.js";import{l as N}from"./BlendLayer-ClEiWFqm.js";import{b as P}from"./OperationalLayer-BgL5Yzis.js";import{j as R}from"./PortalLayer-Bzc9BzxL.js";import{f as T}from"./RefreshableLayer-DODjSDlk.js";import{t as J}from"./ScaleRangeLayer-kzR7QUKB.js";import{y as z}from"./commonProperties-BKXMXAlV.js";import{j as A,S as g,g as w,d as x}from"./kmlUtils-eS0CnsEU.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-BQe9_hUw.js";import"./jsonUtils-BAqUIyre.js";import"./parser-DIYgTQNP.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DReQPB6f.js";import"./common-DQOJ18NT.js";import"./PortalItem-CLh7n-v2.js";import"./portalItemUtils-Dlnb--Ve.js";import"./projection-DaCGobfe.js";import"./projectBuffer-Fiv69sO3.js";import"./ElevationInfo-CjIekNJY.js";import"./lengthUtils-D9CGIOCA.js";import"./jsonUtils-DcJz3OZv.js";import"./UniqueValueRenderer-hmk5dol7.js";import"./RendererLegendOptions-B3FG1aAO.js";import"./diffUtils-9EdVEVOA.js";import"./colorRamps-B-W30F3W.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Bpf7mmx9.js";import"./compilerUtils-CSEFWOSO.js";import"./styleUtils-Be-JXBKl.js";import"./LRUCache-Dm8jDN-Y.js";import"./Version-CBOT3rH8.js";import"./FieldsIndex-BS35cuRl.js";import"./UnknownTimeZone-Czm1r0lm.js";import"./OverrideHelper-D4_EJW38.js";import"./colorUtils-DfH4ILc4.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-CPOL0qZX.js";import"./heatmapUtils-e2DBy3tI.js";import"./FeatureSet-hcKxg27v.js";import"./Field-D2AZ6hjx.js";import"./fieldType-Bu7w8dwA.js";var u;let a=u=class extends k.EventedMixin($(_)){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([f(()=>this.sublayers,"after-add",({item:e})=>{e.parent=this,e.layer=this.layer},p),f(()=>this.sublayers,"after-remove",({item:e})=>{e.layer=e.parent=null},p),y(()=>this.sublayers,(e,i)=>{if(i)for(const s of i)s.layer=s.parent=null;if(e)for(const s of e)s.parent=this,s.layer=this.layer},p),y(()=>this.layer,e=>{if(this.sublayers)for(const i of this.sublayers)i.layer=e},p)])}initialize(){v(()=>this.networkLink).then(()=>v(()=>this.visible===!0)).then(()=>this.load())}load(t){if(!this.networkLink||this.networkLink.viewFormat)return;const e=t!=null?t.signal:null,i=this._fetchService(this._get("networkLink")?.href??"",e).then(s=>{const n=A(s.sublayers);this.fullExtent=d.fromJSON(n),this.sourceJSON=s;const b=L(m.ofType(u),g(u,s));this.sublayers?this.sublayers.addMany(b):this.sublayers=b,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,e){return!!e.visibility}_fetchService(t,e){return w(t,this.layer.outSpatialReference,this.layer.refreshInterval,e).then(i=>x(i.data))}};r([o()],a.prototype,"description",void 0),r([o({type:d})],a.prototype,"fullExtent",void 0),r([o()],a.prototype,"id",void 0),r([o({readOnly:!0,value:null})],a.prototype,"networkLink",void 0),r([o({json:{write:{allowNull:!0}}})],a.prototype,"parent",void 0),r([o({type:m.ofType(a),json:{write:{allowNull:!0}}})],a.prototype,"sublayers",void 0),r([o({value:null,json:{read:{source:"name",reader:t=>O(t)}}})],a.prototype,"title",void 0),r([o({value:!0})],a.prototype,"visible",null),r([h("visible",["visibility"])],a.prototype,"readVisible",null),r([o()],a.prototype,"sourceJSON",void 0),r([o()],a.prototype,"layer",void 0),a=u=r([c("esri.layers.support.KMLSublayer")],a);const E=a,D=["kml","xml"];let l=class extends N(T(J(P(R(I(K)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new C({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=S.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([y(()=>this.sublayers,(t,e)=>{e&&e.forEach(i=>{i.parent=null,i.layer=null}),t&&t.forEach(i=>{i.parent=this,i.layer=this})},p),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}readSublayersFromItemOrWebMap(t,e){this._visibleFolders=e.visibleFolders}readSublayers(t,e,i){return g(E,e,i,this._visibleFolders)}writeSublayers(t,e){const i=[],s=t.toArray();for(;s.length;){const n=s[0];n.networkLink||(n.visible&&i.push(n.id),n.sublayers&&s.push(...n.sublayers.toArray())),s.shift()}e.visibleFolders=i}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?F(this.url,D)||"KML":t}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,e=[],i=s=>{s.visible&&(e.push(s),s.sublayers&&s.sublayers.forEach(i))};return t&&t.forEach(i),e}get fullExtent(){return this._recomputeFullExtent()}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(j).then(()=>this._fetchService(e))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const e=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:w(this.url??"",this.outSpatialReference,this.refreshInterval,t)),i=x(e.data);i&&this.read(i,{origin:"service"})}_recomputeFullExtent(){let t=null;this.extent!=null&&(t=this.extent.clone());const e=i=>{if(i.sublayers)for(const s of i.sublayers.items)e(s),s.visible&&s.fullExtent&&(t!=null?t.union(s.fullExtent):t=s.fullExtent.clone())};return e(this),t}};r([o({readOnly:!0})],l.prototype,"allSublayers",void 0),r([o({type:S})],l.prototype,"outSpatialReference",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),r([o({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"legendEnabled",void 0),r([o({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),r([o({type:["KML"]})],l.prototype,"operationalLayerType",void 0),r([o({})],l.prototype,"resourceInfo",void 0),r([o({type:m.ofType(E),json:{write:{ignoreOrigin:!0}}})],l.prototype,"sublayers",void 0),r([h(["web-map","portal-item"],"sublayers",["visibleFolders"])],l.prototype,"readSublayersFromItemOrWebMap",null),r([h("service","sublayers",["sublayers"])],l.prototype,"readSublayers",null),r([M("sublayers")],l.prototype,"writeSublayers",null),r([o({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),r([o({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],l.prototype,"title",null),r([o(z)],l.prototype,"url",void 0),r([o({readOnly:!0})],l.prototype,"visibleSublayers",null),r([o({type:d})],l.prototype,"extent",void 0),r([o()],l.prototype,"fullExtent",null),l=r([c("esri.layers.KMLLayer")],l);const Rt=l;export{Rt as default};
