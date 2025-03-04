import{q as e,u as t,C as u,A,b5 as C,cK as O,aw as H,bF as P,V as b,cZ as q,s as x,aG as l,f4 as h,aI as E,n as $,dd as T,gv as I,bS as j,aF as V,E as L}from"./main-9YtP5FE3.js";import{n as U}from"./Container-CGnIr2K8.js";import{i as _,l as N,a as k,r as M,b as F}from"./MapView-CTBPw5TN.js";import{r as G,a as R}from"./layerViewUtils-wHYxX8Y8.js";import{h as B}from"./UpdatingHandles-CwpLiIAp.js";function D(i){return i!=null&&typeof i=="object"&&i.type==="2d"&&i.view2dType==="linkchart"}let y=class extends A{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};e([t({readOnly:!0})],y.prototype,"version",null),y=e([u("esri.views.layers.support.ClipArea")],y);const S=y;var f;let p=f=class extends S{constructor(i){super(i),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new f({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};e([t({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),e([t({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=f=e([u("esri.views.layers.support.ClipRect")],p);const z=p;var w;const W={base:O,key:"type",typeMap:{extent:H,polygon:P}};let g=w=class extends S{constructor(i){super(i),this.type="geometry",this.geometry=null}clone(){return new w({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};e([t({types:W,json:{read:C,write:!0}})],g.prototype,"geometry",void 0),g=w=e([u("esri.views.layers.support.Geometry")],g);const K=g;let v=class extends S{constructor(i){super(i),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};e([t({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=e([u("esri.views.layers.support.Path")],v);const Z=v,m=b.ofType({key:"type",base:null,typeMap:{rect:z,path:Z,geometry:K}}),J=new(b.ofType(_)),ie=i=>{let n=class extends i{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const s=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new x("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new U),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([l(()=>this.suspended,r=>{this.container&&(this.container.visible=!r)},h),l(()=>this.updateSuspended,r=>{this.view&&!r&&this.updateRequested&&this.view.requestUpdate()},h),l(()=>this.layer?.opacity??1,r=>{this.container&&(this.container.opacity=r)},h),l(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",r=>{this.container&&(this.container.blendMode=r)},h),l(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,r=>{this.container&&(this.container.effect=r)},h),l(()=>this._mergedHighlights.items.map(r=>({name:r.name,options:{fillColor:r.options.color,haloColor:r.options.haloColor,fillOpacity:r.options.fillOpacity,haloOpacity:r.options.haloOpacity,haloWidth:r.options.haloWidth,haloBlur:r.options.haloBlur}})),()=>{this.container.highlightGradient=k(this.container.highlightGradient,this._mergedHighlights.items)},h),l(()=>this._mergedHighlights.items.map(r=>r.name),()=>{this._updateHighlights()}),E(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},h),l(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:r,scaleRange:c})=>{const d=G(c,r);d!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=d)},h)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(r=>{r===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return M(this)}set highlightOptions(s){F(this,s)}get _mergedHighlights(){if(!this.view)return J;if(!this.highlights)return this.view.highlights;const s=this.view.highlights.clone();for(const o of this.highlights){const r=s.find(c=>c.name===o.name);r&&(r.options=o.options)}return s}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const s=this.view?.spatialReference;return s==null||this.supportsSpatialReference(s)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(s){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",s),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(s))):this.updateRequested=!1}hitTest(s,o){return Promise.resolve(null)}supportsSpatialReference(s){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(D(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const s=super.getSuspendInfo(),o=!this.spatialReferenceSupported;return o&&(s.spatialReferenceNotSupported=o),s}addAttachHandles(s){this.addHandles(s,"attach")}_getHighlightBits(s){s=new Set(s);let o=1,r=0;if(!this.view)return 0;const c=this._mergedHighlights;for(const{name:d}of c)s.delete(d)&&(r=o),o<<=1;for(const d of s)$.getLogger(this).error("#highlights",`${d} was not found. Features in this group will not be highlighted.`);return r}};return e([t()],n.prototype,"attached",void 0),e([t({type:m,set(s){const o=q(s,this._get("clips"),m);this._set("clips",o)}})],n.prototype,"clips",void 0),e([t()],n.prototype,"container",void 0),e([t({type:N})],n.prototype,"highlightOptions",null),e([t({type:b.ofType(_)})],n.prototype,"highlights",void 0),e([t()],n.prototype,"_mergedHighlights",null),e([t()],n.prototype,"moving",void 0),e([t({readOnly:!0})],n.prototype,"spatialReferenceSupported",null),e([t({readOnly:!0})],n.prototype,"updateParameters",void 0),e([t()],n.prototype,"updateRequested",void 0),e([t()],n.prototype,"updating",null),e([t()],n.prototype,"view",void 0),e([t()],n.prototype,"_visibleAtCurrentScale",void 0),e([t({readOnly:!0})],n.prototype,"visibleAtCurrentScale",null),n=e([u("esri.views.2d.layers.LayerView2D")],n),n};let a=class extends T(I(j.EventedMixin(V))){constructor(i){super(i),this._updatingHandles=new B,this.layer=null,this.parent=null}initialize(){this.when().catch(i=>{if(i.name!=="layerview:create-error"){const n=this.layer&&this.layer.id||"no id",s=this.layer?.title||"no title";$.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${n}')`,i)}})}destroy(){this._updatingHandles=L(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&this.layer?.legendEnabled===!0}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return this.layer?.visible===!0}set visible(i){this._overrideIfSome("visible",i)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const i=this.view.timeExtent,n=this.layer?.visibilityTimeExtent;return!i||!n||!i.intersection(n).isEmpty}canResume(){const i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&R(i)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const i=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0);const s=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return R(s)&&this.visibleAtCurrentScale||(i.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(i.outsideVisibilityTimeExtent=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};e([t()],a.prototype,"view",void 0),e([t()],a.prototype,"fullOpacity",null),e([t()],a.prototype,"layer",void 0),e([t()],a.prototype,"parent",void 0),e([t({readOnly:!0})],a.prototype,"suspended",null),e([t({readOnly:!0})],a.prototype,"suspendInfo",null),e([t({readOnly:!0})],a.prototype,"legendEnabled",null),e([t({type:Boolean,readOnly:!0})],a.prototype,"updating",null),e([t({readOnly:!0})],a.prototype,"updatingProgress",null),e([t()],a.prototype,"updateSuspended",null),e([t()],a.prototype,"visible",null),e([t({readOnly:!0})],a.prototype,"visibleAtCurrentScale",null),e([t({readOnly:!0})],a.prototype,"visibleAtCurrentTimeExtent",null),a=e([u("esri.views.layers.LayerView")],a);const se=a;export{K as a,ie as j,se as y};
