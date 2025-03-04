import{E as s,b3 as a,V as g,bT as l,aJ as e,q as h,u as n,C as c}from"./main-CxlHa1F_.js";import{j as d,y as u}from"./LayerView-CL8YZYya.js";import{t as w}from"./GraphicContainer-Bh9DCzOU.js";import{F as y}from"./GraphicsView2D-CYIld5Ic.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./preload-helper-ExcqyqRp.js";import"./Container-Cth9tOaW.js";import"./MapView-oRGQjqWk.js";import"./Cyclical-wh8nJccE.js";import"./CollectionFlattener-Cw-VSlmG.js";import"./workers-CJgJdW1e.js";import"./projection-FRuD2ZA6.js";import"./projectBuffer-CU3KVS3i.js";import"./TileInfo-BthMx3Li.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-pnQtjTZO.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DpDU_nbh.js";import"./signal-Cdr8tPJH.js";import"./Map-jqoU9D3E.js";import"./Basemap-BuWzYzfr.js";import"./loadAll-D3WdLxvt.js";import"./PortalItem-ik1JSv22.js";import"./writeUtils-_xhLC5uN.js";import"./compilerUtils-DI1xzJ1u.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DzX4DNQr.js";import"./common-DQOJ18NT.js";import"./TablesMixin-BXxShSwQ.js";import"./Layer-DDLV0-Db.js";import"./TimeExtent-XTYgt-Bw.js";import"./GraphicsCollection-DxS0AsqT.js";import"./HeightModelInfo-C3qB2TuM.js";import"./ReactiveMap-GOLPHhiU.js";import"./Query-DQLHe9WY.js";import"./Field-C2GmeKVE.js";import"./fieldType-BX9AlQiK.js";import"./arcgisLayerUrl-DPoTp1MX.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-BL9m9stj.js";import"./TileKey-C91mAd4z.js";import"./QueueProcessor-Bk84n9zj.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-D8WLtzSE.js";import"./normalizeUtilsCommon-_MlC5Fc4.js";import"./utils-Cm_CPrEh.js";import"./utils-CeOFX1H6.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-C0SR60-w.js";import"./vec32-BOJsoKIk.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-2A3yLGlJ.js";import"./imageUtils-CanPiQZj.js";import"./capabilities-A2uoe7dc.js";import"./Version-DOW_m9Ks.js";import"./ColorBackground-BJ9v5WR2.js";import"./parser-BR48ds1o.js";import"./layerViewUtils-MEdYXIAz.js";import"./AGraphicContainer-B114Bpve.js";import"./TechniqueInstance-BDgPW1IZ.js";import"./UpdateTracking2D-D94f8s59.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-CdyIs9Ev.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BO_Mu078.js";import"./Program-KOxeYUQ_.js";import"./BufferObject-H-QYxcpo.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-Ceqb01_O.js";import"./WGLContainer-DLbqtNiL.js";import"./VertexArrayObject-UItg7L8d.js";import"./ProgramTemplate-BkelemXz.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-ClZh3Htx.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-XyE1TUqm.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-By_dY0He.js";import"./FieldsIndex-DxYGXf61.js";import"./UnknownTimeZone-Btgs4Awd.js";import"./OverrideHelper-_58XBGen.js";import"./colorUtils-DYpaTgOI.js";import"./quantizationUtils-CPDopM42.js";import"./AttributeStore-DESReZ3G.js";import"./TimeOnly-DLCRLfSw.js";import"./timeSupport-BmIBYlQn.js";import"./queryUtils-CwB8D98R.js";import"./json-Wa8cmqdu.js";import"./labelUtils-B-xe5MHn.js";import"./diffUtils-Bx2acKg8.js";import"./normalizeUtilsSync-DFNH88Ny.js";let m=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=s(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof a?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(o=>o&&o.uid):g.isCollection(i)&&i.length>0&&(r=i.map(o=>o&&o.uid).toArray());const p=r?.filter(l);return p?.length?(this._addHighlight(p,t),e(()=>this._removeHighlight(p,t))):e()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){const i=[];for(const t of this._highlightCounter.ids()){const r=this._highlightCounter.getHighlightGroups(t),p=this._getHighlightBits(r);i.push({objectId:t,highlightFlags:p})}this.graphicsView?.setHighlight(i)}};h([n()],m.prototype,"graphicsView",void 0),m=h([c("esri.views.2d.layers.GraphicsLayerView2D")],m);const yt=m;export{yt as default};
