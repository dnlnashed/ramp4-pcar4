import{B as g,au as A,dg as _,cp as u,c4 as E,s as V,G as M,U as j,n as S,k as c,o as d,A as z,aA as v}from"./main-jlUEdDH5.js";import{S as U}from"./MultiOriginJSONSupport-BgdLjyae.js";import{c as X,u as p,E as L,s as R,l as T,d as D,R as f}from"./vec32-CEG2axC5.js";import{n as I}from"./projectBuffer-DvYZ93s9.js";import{f as k}from"./Layer-DpLggCHQ.js";import{i as G}from"./APIKeyMixin-954PY-SB.js";import{l as W}from"./ArcGISService-CzTmjpBx.js";import{e as F}from"./CustomParametersMixin-CBHZ1aG6.js";import{b as P}from"./OperationalLayer-5N6co_M_.js";import{j as q}from"./PortalLayer-BpEIjlDB.js";import{t as K}from"./ScaleRangeLayer-DfFs61n-.js";import{c as $,y as B}from"./commonProperties-Dv8vaZOo.js";import{$ as N,Z as O,w as Z}from"./elevationInfoUtils-Caaz3QZb.js";let m=class extends W(P(q(K(U(F(G(k))))))){constructor(i){super(i),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new g({wkid:4326,vcsWkid:115700}),this.fullExtent=new A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(i){this._set("elevationInfo",i),this._validateElevationInfo()}_verifyArray(i,r){if(!Array.isArray(i)||i.length<r)return!1;for(const n of i)if(typeof n!="number")return!1;return!0}_initFullExtent(i){const r=i.root?.boundingVolume;if(!r)return;if(r.box){const t=r?.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const n=i.root?.transform,w=v();if(r.region&&this._verifyArray(r.region,6)){const t=r.region,l=_(t[0]),o=_(t[1]),a=t[4],s=_(t[2]),e=_(t[3]),y=t[5];this.fullExtent=new A({xmin:l,ymin:o,zmin:a,xmax:s,ymax:e,zmax:y,spatialReference:this.spatialReference})}else if(r.sphere&&this._verifyArray(r.sphere,4)){const t=r.sphere,l=u(t[0],t[1],t[2]),o=t[3]/Math.sqrt(3),a=v();X(a,l,u(o,o,o));const s=v();if(p(s,l,u(o,o,o)),n&&this._verifyArray(n,16)){const x=n;L(w,a,x),R(a,w),L(w,s,x),R(s,w)}I(a,E,0,a,g.WGS84,0),I(s,E,0,s,g.WGS84,0);const e=v(),y=v();T(e,a,s),D(y,a,s),this.fullExtent=new A({xmin:e[0],ymin:e[1],zmin:e[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(r.box&&this._verifyArray(r.box,12)){const t=r.box,l=u(t[0],t[1],t[2]),o=u(t[3],t[4],t[5]),a=u(t[6],t[7],t[8]),s=u(t[9],t[10],t[11]),e=[];for(let h=0;h<8;++h)e.push(v());if(p(e[0],l,o),p(e[0],e[0],a),p(e[0],e[0],s),f(e[1],l,o),p(e[1],e[1],a),p(e[1],e[1],s),p(e[2],l,o),f(e[2],e[2],a),p(e[2],e[2],s),f(e[3],l,o),f(e[3],e[3],a),p(e[3],e[3],s),p(e[4],l,o),p(e[4],e[4],a),f(e[4],e[4],s),f(e[5],l,o),p(e[5],e[5],a),f(e[5],e[5],s),p(e[6],l,o),f(e[6],e[6],a),f(e[6],e[6],s),f(e[7],l,o),f(e[7],e[7],a),f(e[7],e[7],s),n&&this._verifyArray(n,16)){const h=n;for(let b=0;b<8;++b)L(e[b],e[b],h)}const y=u(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),x=u(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let h=0;h<8;++h)I(e[h],E,0,e[h],g.WGS84,0),T(x,x,e[h]),D(y,y,e[h]);this.fullExtent=new A({xmin:x[0],ymin:x[1],zmin:x[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}}async load(i){return this.addResolvingPromise(this._doLoad(i)),this}async _doLoad(i){const r=i!=null?i.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:n=>{if(n.typeKeywords?.includes("IntegratedMesh"))return!0;throw new V("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},i)}catch(n){M(n)}this.url&&await j(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(n=>{this._initFullExtent(n.data)},n=>{M(n)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const i=this.elevationInfo,r="Integrated mesh 3d tiles layers";N(S.getLogger(this),O(r,"absolute-height",i)),N(S.getLogger(this),Z(r,i))}};c([d({type:["IntegratedMesh3DTilesLayer"]})],m.prototype,"operationalLayerType",void 0),c([d({type:g})],m.prototype,"spatialReference",void 0),c([d({type:A})],m.prototype,"fullExtent",void 0),c([d($)],m.prototype,"elevationInfo",null),c([d({type:["show","hide"]})],m.prototype,"listMode",void 0),c([d(B)],m.prototype,"url",void 0),c([d({readOnly:!0})],m.prototype,"type",void 0),c([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),c([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"minScale",void 0),c([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"maxScale",void 0),m=c([z("esri.layers.IntegratedMesh3DTilesLayer")],m);const C=m;export{C as default};
