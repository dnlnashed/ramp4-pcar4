const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./portalLayers-BpzMguyi.js","./main-CxlHa1F_.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./associatedFeatureServiceUtils-BGbGetKF.js","./arcgisLayerUrl-DPoTp1MX.js","./PortalItem-ik1JSv22.js","./fetchService-CDPs_S0Z.js","./portalItemUtils-DCmY8e_C.js","./projection-FRuD2ZA6.js","./projectBuffer-CU3KVS3i.js","./arcgisLayers-B3hjGDB6.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./preload-helper-ExcqyqRp.js";import{K as h,n as y,bS as b,dd as m,aw as d,D as s,H as f,I as v,U as g,s as w,q as r,u as i,C as E,f as _}from"./main-CxlHa1F_.js";import{p as I}from"./TimeExtent-XTYgt-Bw.js";async function D(t){const o="portalItem"in t?t:{portalItem:t},{fromItem:n}=await p(async()=>{const{fromItem:a}=await import("./portalLayers-BpzMguyi.js").then(l=>l.p);return{fromItem:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);try{return await n(o)}catch(a){const l=o?.portalItem,u=l?.id||"unset",c=l?.portal?.url||h.portalUrl;throw y.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+c+"', id: '"+u+"')",a),a}}let L=0,e=class extends b.EventedMixin(m(_)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new d(-180,-90,180,90,s.WGS84),this.id=Date.now().toString(16)+"-layer-"+L++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.persistenceEnabled=!1,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=s.WGS84,this.title=null,this.type=null,this.url=null,this.visibilityTimeExtent=null,this.visible=!0}static async fromArcGISServerUrl(t){const o=typeof t=="string"?{url:t}:t;return(await p(async()=>{const{fromUrl:n}=await import("./arcgisLayers-B3hjGDB6.js");return{fromUrl:n}},__vite__mapDeps([11,2,1,3,5,4,6,7]),import.meta.url)).fromUrl(o)}static fromPortalItem(t){return D(t)}initialize(){this.when().catch(t=>{f(t)||y.getLogger(this).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){const t=this.parent;if(t){const o=this;"layers"in t&&t.layers.includes(o)?t.layers.remove(o):"tables"in t&&t.tables.includes(o)?t.tables.remove(o):"baseLayers"in t&&t.baseLayers.includes(o)?t.baseLayers.remove(o):"referenceLayers"in t&&t.referenceLayers.includes(o)&&t.referenceLayers.remove(o),this._set("parent",null)}}get effectiveVisible(){let t=this.visible;const o=this.parent;return t&&o&&"effectiveVisible"in o&&(t&&=o.effectiveVisible),t}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return v(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await g(t,{query:{f:"json"},responseType:"json"})).data;throw new w("layer:no-attribution-data","Layer does not have attribution data")}};r([i({type:String})],e.prototype,"attributionDataUrl",void 0),r([i({readOnly:!0})],e.prototype,"effectiveVisible",null),r([i({type:d})],e.prototype,"fullExtent",void 0),r([i({readOnly:!0})],e.prototype,"hasAttributionData",null),r([i({type:String,clonable:!1})],e.prototype,"id",void 0),r([i({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),r([i({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),r([i({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),r([i({clonable:!1})],e.prototype,"parent",void 0),r([i({readOnly:!0})],e.prototype,"parsedUrl",null),r([i({type:Boolean,readOnly:!0})],e.prototype,"persistenceEnabled",void 0),r([i({type:Boolean})],e.prototype,"popupEnabled",void 0),r([i({type:Boolean})],e.prototype,"attributionVisible",void 0),r([i({type:s})],e.prototype,"spatialReference",void 0),r([i({type:String})],e.prototype,"title",void 0),r([i({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),r([i()],e.prototype,"url",void 0),r([i({type:I})],e.prototype,"visibilityTimeExtent",void 0),r([i({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=r([E("esri.layers.Layer")],e);const x=e;export{x as f};
