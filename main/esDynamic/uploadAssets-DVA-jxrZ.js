import{a$ as A,ao as X,aH as Z,gI as D,cP as v,gJ as I,Z as h,U as m,D as l,B as Q,eX as Y,G as ee,eV as se,n as te}from"./main-C872cFCP.js";import{r as re}from"./uuid-Dj9mdEVg.js";import{m as oe,b as ne,a as x,i as E,N as ae}from"./External-DQnpjbAb.js";import{r as ie,n as ce,a as le,d as ue,c as R,l as pe,t as fe,b as me,u as de,p as ge}from"./meshSpatialReferenceScaleUtils-8zYiwvf1.js";import{g as he}from"./arcgisLayerUrl-Bymns6-c.js";import{m as we,l as ye,s as Pe,u as be,a as Te}from"./infoFor3D-DIuYZyyK.js";import{i as Ae,n as ve}from"./meshFeatureAttributes-cRCltiAa.js";const F={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function w(e,s=r=>{},t){return new Fe(e,s,t)}let Fe=class{constructor(e,s=r=>{},t){if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let r=0;r<e;r++){const o=r,n=1/e;this._weights[o]=n,this._progressMap.set(o,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(e===1&&A("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,r]of this._timingsMap){const o=Math.round(r.end-r.start)/1e3,n=Math.round(o/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:o,relativeTime:n})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),A("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??=t;const r=X(this._timingsMap,e,()=>({start:t,end:0}));s===1&&(r.end=t)}this.emitProgress()}simulate(e,s){return _(t=>this.setProgress(e,t),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function _(e=t=>{},s=Ie){const t=performance.now();e(0);const r=setInterval(()=>{const o=performance.now()-t,n=1-Math.exp(-o/s);e(n)},De);return Z(()=>{clearInterval(r),e(1)})}function Me(e,s=Ne){return D(I(e*k/s))}function je(e,s=Se){return D(I(e*k/s))}const Ne=10,Se=10,k=8e-6,De=v(50),Ie=v(1e3),C=1e6,U=20*C,xe=2e9,Ee=3;async function Re({data:e,name:s,description:t},r,o){let n=null;try{const a=h(r,"uploads"),i=h(a,"info"),{data:u}=await m(i,{query:{f:"json"},responseType:"json"});l(o);const d=he(r),g=u.maxUploadFileSize*C,f=d?xe:g,c=d?Math.min(U,g):U;if(e.size>f)throw new Error("Data too large");const z=h(a,"register"),{data:M}=await m(z,{query:{f:"json",itemName:_e(s),description:t},responseType:"json",method:"post"});if(l(o),!M.success)throw new Error("Registration failed");const{itemID:L}=M.item;n=h(a,L);const H=h(n,"uploadPart"),j=Math.ceil(e.size/c),y=new Array;for(let p=0;p<j;++p)y.push(e.slice(p*c,Math.min((p+1)*c,e.size)));const P=y.slice().reverse(),N=new Array,G=w(j,o?.onProgress,"uploadItem"),J=async()=>{for(;P.length!==0;){const p=y.length-P.length,b=P.pop(),T=new FormData,V=G.simulate(p,Me(b.size));try{T.append("f","json"),T.append("file",b),T.append("partId",`${p}`);const{data:W}=await m(H,{timeout:0,body:T,responseType:"json",method:"post"});if(l(o),!W.success)throw new Error("Part upload failed")}finally{V.remove()}}};for(let p=0;p<Ee&&P.length!==0;++p)N.push(J());await Promise.all(N);const K=h(n,"commit"),{data:S}=await m(K,{query:{f:"json",parts:y.map((p,b)=>b).join(",")},responseType:"json",method:"post"});if(l(o),!S.success)throw new Error("Commit failed");return S.item}catch(a){if(n!=null){const i=h(n,"delete");await m(i,{query:{f:"json"},responseType:"json",method:"post"})}throw a}}function _e(e){return e.replaceAll("/","_").replaceAll("\\","_")}async function ke(e,s,t){const r=e.length;if(!r)return t?.onProgress?.(1),[];const o=w(r,t?.onProgress,"uploadAssets");return Promise.all(e.map((n,a)=>Ce(n,s,{...t,onProgress:o.makeOnProgress(a)})))}async function Ce(e,{layer:s,ongoingUploads:t},r){const o=t.get(e);if(o)return o;if(!es(s))throw new ie;if(Ue(e,s))return r?.onProgress?.(1),e;const n=Oe(e,s,r);t.set(e,n);try{await n}finally{t.delete(e)}return e}function Ue(e,s){const{parsedUrl:t}=s;return t!=null&&e.metadata.externalSources.some(r=>oe(r,t))}async function Oe(e,s,t){const{metadata:r}=e,{displaySource:o}=r,n=O(o?.source,s,{checkForConversionRequired:A("enable-feature:georeferenced-uploads")}),a=n!=null?Be(n,s,t):r.externalSources.length>0?qe(e,s,t):$e(e,s,t),i=await a;return l(t),e.addExternalSources([i]),e}async function Be(e,s,t){return{source:await B(e,s,t),original:!0,unitConversionDisabled:!0}}async function qe(e,s,t){const r=$(s),{externalSources:o}=e.metadata,n=Le(o,s);if(!n)throw new ce;const a=w(F.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),i=await B(n,s,{onProgress:a.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:i,original:!0}]);const u=n.reduce((g,{asset:f})=>f instanceof File?g+f.size:g,0),d=a.simulate("serviceAssetsToGlb",je(u));try{const{source:g,transform:f,origin:c}=await Xe(i,s,r);return e.transform=f,c&&(e.metadata.georeferenced=!0,t?.useAssetOrigin&&(e.vertexSpace.origin=[c.x,c.y,c.z??0],e.spatialReference=c.spatialReference)),{source:g,unitConversionDisabled:!0}}finally{d.remove()}}async function $e(e,s,t){const r=w(F.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),o=ze(e,s,{...t,onProgress:r.makeOnProgress("meshToAssetBlob")});return{source:await q([o],s,{...t,onProgress:r.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}async function ze(e,s,t){const r=$(s),o=await e.load(t),n=await o.toBinaryGLTF({origin:o.origin,signal:t?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return l(t),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${re()}.glb`,assetType:r}}function Le(e,s){for(const t of e){const r=O(t.source,s);if(r)return r}return null}function O(e,{infoFor3D:s},t={}){if(!e)return null;const{supportedFormats:r,editFormats:o}=s,n=ae(e),a=new Array,i=we(s),u=ye(s);let d=!1;for(const g of n){const f=He(g,r);if(!f)return null;const{assetType:c}=f;if(t.checkForConversionRequired&&(c===i||c===u))return null;o.includes(c)&&(d=!0),a.push(f)}return d?a:null}function He(e,s){const t=ne(e,s);return t?{asset:e,assetType:t}:null}async function B(e,s,t){return q(e.map(r=>Ge(r,t)),s,t)}async function q(e,s,t){const r=w(F.uploadAssetBlobs,t?.onProgress,"uploadAssetBlobs"),o=await Ke(e,s,{...t,onProgress:r.makeOnProgress("prepareAssetItems")});l(t);const n=o.map(({item:i})=>i),{uploadResults:a}=await Ve(n,s,{...t,onProgress:r.makeOnProgress("uploadAssetItems")});return l(t),e.map((i,u)=>We(o[u],a[u],s))}async function Ge(e,s){const{asset:t,assetType:r}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:r};const o=await t.toBlob(s);return l(s),{blob:o,assetName:t.assetName,assetType:r}}async function Je(e,s,t){const{blob:r,assetType:o,assetName:n}=e;let a=null;try{const i=await Re({data:r,name:n},s.url,t);l(t),a={assetType:o,assetUploadId:i.itemID}}catch(i){ee(i),ss().warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!a){const i=await se(r);if(l(t),!i.isBase64)throw new de;a={assetType:o,assetData:i.data}}if(!a)throw new ge;return{item:a,assetName:n}}function Ke(e,s,t){const r=w(e.length,t?.onProgress,"prepareAssetItems");return Promise.all(e.map(async(o,n)=>{const a=Je(await o,s,{...t,onProgress:r.makeOnProgress(n)});return l(t),a}))}async function Ve(e,s,t){const r=_(t?.onProgress);try{const o=await m(h(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(l(t),o.data.uploadResults.length!==e.length)throw new le(e.length,o.data.uploadResults.length);return o.data}finally{r.remove()}}function We(e,s,t){const{success:r}=s;if(!r){const{error:d}=s;throw new ue(e.assetName,d)}const{assetHash:o}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,u=Pe(a,i);if(!u)throw new R(a);return new x(n,u,[new E(`${t.parsedUrl.path}/assets/${o}`,o)])}async function Xe(e,s,t){const r=e.map(({assetName:n,parts:a})=>({assetName:n,assetHash:a[0].partHash}));let o;try{const n=h(s.parsedUrl.path,"convert3D"),a=s.capabilities?.operations.supportsAsyncConvert3D;o=(await(a?Ye:Qe)(n,{query:{f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:a},responseType:"json",timeout:0})).data}catch{throw new pe}return Ze(s,o)}function Ze(e,s){const t={source:s.assets.map(r=>{const o=be(r.contentType,e.infoFor3D.supportedFormats);if(!o)throw new R(o);return new x(r.assetName,r.contentType,[new E(r.assetURL,r.assetHash)])}),origin:void 0,transform:void 0};if(A("enable-feature:georeferenced-uploads")&&s.transform){if(t.transform=Ae(s.transform),s.spatialReference){const r=Q.fromJSON(s.spatialReference);t.origin=ve(s.transform,r)}}else t.transform=fe(e.spatialReference);return t}function Qe(e,s){return m(e,s)}async function Ye(e,s){const t=(await m(e,s)).data.statusUrl;for(;;){const r=(await m(t,{query:{f:"json"},responseType:"json"})).data;switch(r.status){case"Completed":return m(r.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(r.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await Y(ts)}}function es(e){return!!e.infoFor3D&&!!e.url}function $({infoFor3D:e}){const s=Te(e);if(!s)throw new me;return s}function ss(){return te.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const ts=v(1e3);export{ke as uploadAssets};