import{q as o,u as h,C as E,E as C,s as w,G as F,H as M,n as S,aG as q,aw as R}from"./main-BvP2mMJi.js";import{a as b}from"./BitmapContainer-CzursJDT.js";import{j as U,y as V}from"./LayerView-CwJ1y3_o.js";import{_ as L}from"./ExportStrategy-BpOWwMM6.js";import{i as W}from"./RefreshableLayerView-B6JD2CW6.js";import{a as H}from"./ExportWMSImageParameters-CPqWUOZJ.js";import{i as A}from"./timeSupport-Cb5RGJjW.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-Bkw7576q.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-Dewx0MlR.js";import"./enums-CmIX1y88.js";import"./Texture-BZKdBHEN.js";import"./enums-Dk3osxpS.js";import"./Program-C1NmWef6.js";import"./BufferObject-CpXS0eB0.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-DIyor97G.js";import"./ProgramTemplate-DycQ-vVD.js";import"./Tile-CZtp4G4_.js";import"./common-DQOJ18NT.js";import"./TileKey-CEzXAy40.js";import"./vec2-DGVIkCvT.js";import"./QueueProcessor-BQS0qOPe.js";import"./workers-Cm5C_BYW.js";import"./ReactiveMap-C0ixbddB.js";import"./signal-BB-xUwNd.js";import"./quickselect-QQC62dOK.js";import"./Query-DWs7GZ6H.js";import"./Field-Es9rqDok.js";import"./fieldType-CEOeHy7Y.js";import"./TimeExtent-BPaAkukn.js";import"./mat3-XZDRtl20.js";import"./MapView-DEd0Q1fe.js";import"./Cyclical-CeQVURVQ.js";import"./CollectionFlattener-BMrovecg.js";import"./projection-96b3oHY5.js";import"./projectBuffer-BwKv3h14.js";import"./TileInfo-BjUnRV6k.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-6Fo0adHJ.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-0E1QIVps.js";import"./Map-DkhWdbzs.js";import"./Basemap-BgWAypVr.js";import"./loadAll-FJ0odn1e.js";import"./PortalItem-BydbbX79.js";import"./writeUtils-C2Gh7vKk.js";import"./compilerUtils-DxE-Nek9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CXjyCzoa.js";import"./TablesMixin-dVfjydtl.js";import"./Layer-7Fzyz5PT.js";import"./GraphicsCollection-Be7b5zcq.js";import"./HeightModelInfo-BgQMOlES.js";import"./arcgisLayerUrl-zirf8jRz.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./normalizeUtils-CZuR4U2F.js";import"./normalizeUtilsCommon-DV3peIvO.js";import"./utils-aU2bE2Ii.js";import"./utils-C4fiXq06.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-B414b4WB.js";import"./vec32-dwN7UxOE.js";import"./imageUtils-dCc_S-fe.js";import"./capabilities-A2uoe7dc.js";import"./Version-6jGLrZbF.js";import"./ColorBackground-DDP1KIv7.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CY5RtaM8.js";import"./parser-DikVt0Fk.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-DtD8mV_D.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-iB_MNcTW.js";import"./Bitmap-BxaMD2FS.js";const _=e=>{let t=class extends e{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters=C(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return A(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,p){const{layer:a}=this;if(!i)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:d}=a;if(!d)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:d});const r=this.createFetchPopupFeaturesQuery(i);if(!r)return[];const{extent:m,width:s,height:n,x:c,y}=r;if(!(m&&s&&n))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:m,width:s,height:n});const g=await a.fetchFeatureInfo(m,s,n,c,y);return F(p),g}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends _(W(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{M(t)||S.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new L({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=C(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:p,y:a}=e,{spatialReference:d}=t;let r,m=0,s=0;if(i.children.some(g=>{const{width:f,height:v,resolution:I,x:l,y:x}=g,P=l+I*f,$=x-I*v;return p>=l&&p<=P&&a<=x&&a>=$&&(r=new R({xmin:l,ymin:$,xmax:P,ymax:x,spatialReference:d}),m=f,s=v,!0)}),!r)return null;const n=r.width/m,c=Math.round((p-r.xmin)/n),y=Math.round((r.ymax-a)/n);return{extent:r,width:m,height:s,x:c,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,p){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...p})}};o([h()],u.prototype,"strategy",void 0),o([h()],u.prototype,"updating",void 0),u=o([E("esri.views.2d.layers.WMSLayerView2D")],u);const de=u;export{de as default};
