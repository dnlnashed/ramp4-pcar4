import{n as Z,s as I,eO as ee,hV as te,I as x,by as re,U as w,G as Q,E as ie,H as se,cq as S,aq as oe,fq as j,aM as le,h as g,dq as F,a1 as T,aw as U,ex as W,T as z,N as J,R as ae,hW as G,cL as D,cb as E,hX as L,bx as ne,J as $,hY as pe,hZ as ue,cd as ce,q as h,u as y,D as he,v as ye,z as M,C as de}from"./main-CxlHa1F_.js";import{S as me}from"./MultiOriginJSONSupport-SeZZFn2Z.js";import{f as fe}from"./Layer-DDLV0-Db.js";import{i as ge}from"./APIKeyMixin-XkOlqqws.js";import{p as Ae}from"./ArcGISCachedService-CRclRo4Z.js";import{l as Se}from"./ArcGISService-Gy4gG9G1.js";import{l as we}from"./BlendLayer-D88iJkXS.js";import{e as xe}from"./CustomParametersMixin-DxLnOdhH.js";import{b as ve}from"./OperationalLayer-BPHQc3Ik.js";import{j as _e}from"./PortalLayer-D0W-Cg79.js";import{f as be}from"./RefreshableLayer-CaL1_t1Z.js";import{t as Ie}from"./ScaleRangeLayer-D-F0IEoy.js";import{z as R,p as Ue}from"./TileInfo-BthMx3Li.js";import{T as K}from"./TilemapCache-BIO-vW9T.js";import{e as Y}from"./TileKey-C91mAd4z.js";import{e as Re}from"./jsonContext-CPgv0SUX.js";import{l as $e}from"./StyleRepository-CyrzAC7v.js";import{t as B}from"./capabilities-A2uoe7dc.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-XTYgt-Bw.js";import"./TileInfoTilemapCache-DdmH_BY8.js";import"./arcgisLayerUrl-DPoTp1MX.js";import"./jsonUtils-C6F4sR9l.js";import"./parser-BR48ds1o.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DzX4DNQr.js";import"./common-DQOJ18NT.js";import"./commonProperties-C0yCDuGB.js";import"./ElevationInfo-4KGKaksj.js";import"./lengthUtils-By_dY0He.js";import"./PortalItem-ik1JSv22.js";import"./portalItemUtils-DCmY8e_C.js";import"./projection-FRuD2ZA6.js";import"./projectBuffer-CU3KVS3i.js";import"./TileKey-DZd6gJy7.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-KN1SYQz3.js";import"./StyleDefinition-BTt_i6C1.js";import"./enums-CmIX1y88.js";import"./enums-BRzLM11V.js";import"./GeometryUtils-CdyIs9Ev.js";import"./enums-Dk3osxpS.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./colorUtils-DYpaTgOI.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./unitBezier-BX6NeAEr.js";import"./definitions-C0Jy3zs7.js";let _=null;function Te(e){if(_)return _;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return _=new Promise(r=>{const i=new Image;i.onload=()=>{i.onload=i.onerror=null,r(i.width>0&&i.height>0)},i.onerror=()=>{i.onload=i.onerror=null,r(!1)},i.src="data:image/webp;base64,"+t[e]}),_}const C=1.15;class N{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>C;const{width:r,height:i,data:s,json:l}=await this._getSpriteData(this._spriteSource,t),o=Object.keys(l);if(!o||o.length===0||!s)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=l,this.width=r,this.height=i;const p=Math.max(this._maxTextureSize,4096);if(r>p||i>p){const n=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${p} pixels}`;throw Z.getLogger("esri.layers.support.SpriteSource").error(n),new I("SpriteSource",n)}let a;for(let n=0;n<s.length;n+=4)a=s[n+3]/255,s[n]=s[n]*a,s[n+1]=s[n+1]*a,s[n+2]=s[n+2]*a;this.image=s}async _getSpriteData(t,r){if(t.type==="image"){let u,d;if(this.devicePixelRatio<C){if(!t.spriteSource1x)throw new I("SpriteSource","no image data provided for low resolution sprites!");u=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new I("SpriteSource","no image data provided for high resolution sprites!");u=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in u&&"height"in u&&"data"in u&&(ee(u.data)||te(u.data))?{width:u.width,height:u.height,data:new Uint8Array(u.data),json:d}:{...k(u),json:d}}const i=x(this.baseURL),s=i.query?"?"+re(i.query):"",l=this._isRetina?"@2x":"",o=`${i.path}${l}.${this._spriteImageFormat}${s}`,p=`${i.path}${l}.json${s}`,[a,n]=await Promise.all([w(p,r),w(o,{responseType:"image",...r})]);return{...k(n.data),json:a.data}}}function k(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(i.data)}}let Pe=class{constructor(t){this.url=t}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=w(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const i=await this.fetchTileIndex();return Q(r),this._getIndexedDataKey(i,t)}_getIndexedDataKey(t,r){const i=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let s=r;for(;s.level!==0;)s=new Y(s.level-1,s.row>>1,s.col>>1,s.world),i.push(s);let l,o,p=t,a=i.pop();if(p===1)return a;for(;i.length;)if(l=i.pop(),o=(1&l.col)+((1&l.row)<<1),p){if(p[o]===0){a=null;break}if(p[o]===1){a=l;break}a=l,p=p[o]}return a}},Oe=class{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}destroy(){this._tilemap=ie(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=w(this._tileIndexUrl,{query:{...t?.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:i,row:s,col:l}=t,o=new Y(t);return this._tilemap.fetchAvailabilityUpsample(i,s,l,o,r).then(()=>(o.world=t.world,o)).catch(p=>{if(se(p))throw p;return null})}};class je{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){(this._promise==null||j(this._abortController?.signal))&&(this._promise=this._makeRequest(this._tileUrl));const r=this._abortOptions;return r.push(t),le(t,()=>{r.every(i=>j(i))&&this._abortController.abort()}),this._promise.then(i=>g(i))}async _makeRequest(t){this._abortController=new AbortController;const{data:r}=await w(t,{responseType:"array-buffer",signal:this._abortController.signal});return r}}const q=new Map;function De(e,t,r,i,s){const l=x(e),o=l.query;if(o)for(const[a,n]of Object.entries(o))switch(n){case"{x}":o[a]=i.toString();break;case"{y}":o[a]=r.toString();break;case"{z}":o[a]=t.toString()}const p=l.path;return Ee(S(p.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,i.toString()),{...l.query}),s)}function Ee(e,t){return oe(q,e,()=>new je(e)).getData(t).finally(()=>q.delete(e))}class Le{constructor(t,r,i){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const s=x(this.sourceUrl),l=g(i),o=l.tiles;if(s)for(let m=0;m<o.length;m++){const f=x(o[m]);f&&(F(f.path)||(f.path=T(s.path,f.path)),o[m]=S(f.path,{...s.query,...f.query}))}this.tileServers=o;const p=i.capabilities&&i.capabilities.split(",").map(m=>m.toLowerCase().trim()),a=i?.exportTilesAllowed===!0,n=p?.includes("tilemap")===!0,u=a&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:a,supportsTileMap:n},exportTiles:a?{maxExportTilesCount:+u}:null},this.tileInfo=R.fromJSON(l.tileInfo);const d=i.tileMap?S(T(s.path,i.tileMap),s.query??{}):null;n?(this.type="vector-tile",this.tilemap=new Oe(new K({layer:{parsedUrl:s,tileInfo:this.tileInfo},minLOD:l.minLOD??this.tileInfo.lods[0].level,maxLOD:l.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=U.fromJSON(i.fullExtent),this.initialExtent=U.fromJSON(i.initialExtent)}destroy(){this.tilemap?.destroy()}async getRefKey(t,r){return this.tilemap?this.tilemap.dataKey(t,r):t}requestTile(t,r,i,s){const l=this.tileServers[r%this.tileServers.length];return De(l,t,r,i,s)}isCompatibleWith(t){const r=this.tileInfo,i=t.tileInfo;if(!r.spatialReference.equals(i.spatialReference)||!r.origin.equals(i.origin)||Math.round(r.dpi)!==Math.round(i.dpi))return!1;const s=r.lods,l=i.lods,o=Math.min(s.length,l.length);for(let p=0;p<o;p++){const a=s[p],n=l[p];if(a.level!==n.level||Math.round(a.scale)!==Math.round(n.scale))return!1}return!0}}async function Me(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[i,s]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await A(r,"esri",e,s,t),{layerDefinition:r.validatedSource,url:i,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&v(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&v(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function v(...e){let t;for(const r of e)r!=null&&(W(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=F(r)?r:T(t,r));return t?z(t):void 0}async function A(e,t,r,i,s){let l,o,p;if(Q(s),typeof r=="string"){const n=J(r);p=await w(n,{...s,responseType:"json",query:{f:"json",...s?.query}}),p.ssl&&(l&&(l=l.replace(/^http:/i,"https:")),o&&(o=o.replace(/^http:/i,"https:"))),l=n,o=n}else r!=null&&(p={data:r},l=r.jsonUrl||null,o=i);const a=p?.data;if(H(a))return e.styleUrl=l||null,Ce(e,a,o,s);if(Be(a))return e.sourceUrl?V(e,a,o,!1,t,s):(e.sourceUrl=l||null,V(e,a,o,!0,t,s));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function X(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function H(e){return!!e&&"sources"in e&&!!e.sources}function Be(e){return!H(e)}async function Ce(e,t,r,i){const s=r?ae(r):G();e.styleBase=s,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const o=t.sources.esri;o.url?await A(e,"esri",v(s,o.url),void 0,i):l.push(A(e,"esri",o,s,i))}for(const o of Object.keys(t.sources))o!=="esri"&&t.sources[o].type==="vector"&&(t.sources[o].url?l.push(A(e,o,v(s,t.sources[o].url),void 0,i)):t.sources[o].tiles&&l.push(A(e,o,t.sources[o],s,i)));await Promise.all(l)}async function V(e,t,r,i,s,l){const o=r?z(r)+"/":G(),p=Ne(t),a=new Le(s,S(o,l?.query??{}),p);if(!i&&e.primarySourceName in e.sourceNameToSource){const n=e.sourceNameToSource[e.primarySourceName];if(!n.isCompatibleWith(a))return;a.fullExtent!=null&&(n.fullExtent!=null?n.fullExtent.union(a.fullExtent):n.fullExtent=a.fullExtent.clone()),n.tileInfo&&a.tileInfo&&n.tileInfo.lods.length<a.tileInfo.lods.length&&(n.tileInfo=a.tileInfo)}if(i&&(e.sourceBase=o,e.source=t,e.validatedSource=p,e.primarySourceName=s),e.sourceNameToSource[s]=a,!X(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?A(e,"",v(o,t.defaultStyles,"root.json"),void 0,l):A(e,"",t.defaultStyles,v(o,"root.json"),l)}}function Ne(e){if(ke(e)){const u=e?.tileInfo;return u!=null&&(u.rows==null&&(u.rows=512),u.cols==null&&(u.cols=512)),e}const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let i=null;if(X(e)){const{bounds:u}=e;if(u){const d=D({x:u[0],y:u[1],spatialReference:g(E)}),m=D({x:u[2],y:u[3],spatialReference:g(E)});i={xmin:d.x,ymin:d.y,xmax:m.x,ymax:m.y,spatialReference:g(L)}}}i===null&&(i=r);let s=78271.51696400007,l=2958287637957775e-7;const o=[],p=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,a=0,n=0;for(let u=0;u<=p;u++)o.push({level:u,scale:l,resolution:s}),s/=2,l/=2;return{capabilities:"TilesOnly",initialExtent:i,fullExtent:r,minScale:a,maxScale:n,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:g(L)}}}function ke(e){return e.hasOwnProperty("tileInfo")}const b=1e-6;function qe(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,i=t.origin;if(Math.abs(r.x-i.x)>=b||Math.abs(r.y-i.y)>=b)return!1;let s,l;e.lods[0].scale>t.lods[0].scale?(s=e,l=t):(l=e,s=t);for(let o=s.lods[0].scale;o>=l.lods[l.lods.length-1].scale-b;o/=2)if(Math.abs(o-l.lods[0].scale)<b)return!0;return!1}function Ve(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],i=e.format,s=e.dpi,l=new ne({x:e.origin.x,y:e.origin.y}),o=e.spatialReference,p=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],a=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],n=p.scale,u=p.resolution,d=a.scale,m=[];let f=n,P=u,O=0;for(;f>d;)m.push(new Ue({level:O,resolution:P,scale:f})),O++,f/=2,P/=2;return new R({size:[r,r],dpi:s,format:i||"pbf",origin:l,lods:m,spatialReference:o})}let c=class extends we(Ie(be(Ae(Se(ve(_e(xe(ge(me(fe)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.path=null,this.refreshInterval=0,this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this.primarySource?.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch($).then(async()=>{if(!this.portalItem?.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await w(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem,"portal-item"))}).catch($).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e?.serviceUrl&&x(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get initialExtent(){return this.primarySource?.initialExtent||null}get parsedUrl(){return this.serviceUrl?x(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo?.serviceUrl||null}get spatialReference(){return this.tileInfo?.spatialReference??null}get styleUrl(){return this.currentStyleInfo?.styleUrl||null}writeStyleUrl(e,t){e&&W(e)&&(e=`https:${e}`);const r=pe(e);t.styleUrl=ue(e,r)}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new R;if(e.length>1)for(let r=0;r<e.length;r++)qe(t,e[r].tileInfo)&&(t=Ve(t,e[r].tileInfo));return t}readTilemapCache(e,t){return t.capabilities?.includes("Tilemap")?new K({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=B().maxTextureSize,i=this.currentStyleInfo?.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,s=new N({type:"url",spriteUrl:i,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await s.load(t),this._spriteSourceMap.set(e,s)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=B().maxTextureSize,i=e.spriteUrl,s=i?S(i,{...this.customParameters,token:this.apiKey}):null;if(!s&&e.type==="url")return null;const l=new N(e,r);try{await l.load(t);const o=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(o,l),s&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=s),this.emit("spriteSource-change",{spriteSource:l}),l}catch(o){$(o)}return null}async loadStyle(e,t){const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=ce(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return g(this.styleRepository?.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new I("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Me(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Te("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^/]+)?\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/vectortileserver/i),r=["OpenBasemap_v2","OpenBasemap_GCS_v2","OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2","World_Hillshade_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const s=t[1]||"";for(const l of r)if(l.toLowerCase().includes(i))return J(`//static.arcgis.com/attribution/Vector${s}/${l}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};h([y({readOnly:!0})],c.prototype,"attributionDataUrl",null),h([y({type:["show","hide"]})],c.prototype,"listMode",void 0),h([y({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0),h([y({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),h([y({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),h([y({json:{read:!1},readOnly:!0,type:U})],c.prototype,"fullExtent",null),h([y({json:{read:!1},readOnly:!0,type:U})],c.prototype,"initialExtent",null),h([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),h([y({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),h([y({readOnly:!0})],c.prototype,"parsedUrl",null),h([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),h([y({type:Number,json:{write:!1,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],c.prototype,"refreshInterval",void 0),h([y()],c.prototype,"style",void 0),h([y({readOnly:!0})],c.prototype,"serviceUrl",null),h([y({type:he,readOnly:!0})],c.prototype,"spatialReference",null),h([y({readOnly:!0})],c.prototype,"styleRepository",void 0),h([y({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),h([y({readOnly:!0})],c.prototype,"primarySource",void 0),h([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),h([ye(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),h([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:R})],c.prototype,"tileInfo",null),h([y()],c.prototype,"tilemapCache",void 0),h([M("service","tilemapCache",["capabilities","tileInfo"])],c.prototype,"readTilemapCache",null),h([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),h([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),h([y({readOnly:!0})],c.prototype,"version",void 0),h([M("version",["version","currentVersion"])],c.prototype,"readVersion",null),c=h([de("esri.layers.VectorTileLayer")],c);const Nt=c;export{Nt as default};
