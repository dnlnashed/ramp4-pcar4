import{V as p,cZ as m,q as o,u as e,c_ as s,C as a}from"./main-BvP2mMJi.js";import{j as n,y as l}from"./LayerView-CwJ1y3_o.js";import"./preload-helper-ExcqyqRp.js";import"./Container-CY5RtaM8.js";import"./MapView-DEd0Q1fe.js";import"./Cyclical-CeQVURVQ.js";import"./CollectionFlattener-BMrovecg.js";import"./workers-Cm5C_BYW.js";import"./projection-96b3oHY5.js";import"./projectBuffer-BwKv3h14.js";import"./TileInfo-BjUnRV6k.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-6Fo0adHJ.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-0E1QIVps.js";import"./signal-BB-xUwNd.js";import"./Map-DkhWdbzs.js";import"./Basemap-BgWAypVr.js";import"./loadAll-FJ0odn1e.js";import"./PortalItem-BydbbX79.js";import"./writeUtils-C2Gh7vKk.js";import"./compilerUtils-DxE-Nek9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CXjyCzoa.js";import"./common-DQOJ18NT.js";import"./TablesMixin-dVfjydtl.js";import"./Layer-7Fzyz5PT.js";import"./TimeExtent-BPaAkukn.js";import"./GraphicsCollection-Be7b5zcq.js";import"./HeightModelInfo-BgQMOlES.js";import"./ReactiveMap-C0ixbddB.js";import"./Query-DWs7GZ6H.js";import"./Field-Es9rqDok.js";import"./fieldType-CEOeHy7Y.js";import"./arcgisLayerUrl-zirf8jRz.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-CZtp4G4_.js";import"./TileKey-CEzXAy40.js";import"./QueueProcessor-BQS0qOPe.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-CZuR4U2F.js";import"./normalizeUtilsCommon-DV3peIvO.js";import"./utils-aU2bE2Ii.js";import"./utils-C4fiXq06.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-B414b4WB.js";import"./vec32-dwN7UxOE.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-BZKdBHEN.js";import"./imageUtils-dCc_S-fe.js";import"./capabilities-A2uoe7dc.js";import"./Version-6jGLrZbF.js";import"./ColorBackground-DDP1KIv7.js";import"./parser-DikVt0Fk.js";import"./layerViewUtils-iB_MNcTW.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([e({cast:s})],r.prototype,"layerViews",null),o([e({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const wt=r;export{wt as default};
