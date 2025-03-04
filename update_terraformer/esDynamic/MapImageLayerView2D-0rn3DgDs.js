import{k as i,o as s,A as n,E as g,n as l,aE as d}from"./main-jlUEdDH5.js";import{c as u}from"./GraphicsCollection-D-wxwvlr.js";import{a as c}from"./BitmapContainer-amjle0ya.js";import{j as y,y as f}from"./LayerView-BUDFyckr.js";import{F as x}from"./GraphicsView2D-C_KHgexA.js";import{h as w}from"./HighlightGraphicContainer-DOfKCPJa.js";import{_}from"./ExportStrategy-BAlA65EB.js";import{y as H}from"./ExportImageParameters-BfWRjHS5.js";import{i as v}from"./timeSupport-senNMp53.js";import{i as I}from"./RefreshableLayerView-BEiCqsdT.js";import{R as E}from"./MapServiceLayerViewHelper-DqSun6qP.js";import{r as V}from"./drapedUtils-CcjSWKp8.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new H({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return v(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return i([s()],e.prototype,"exportImageParameters",void 0),i([s({readOnly:!0})],e.prototype,"floors",null),i([s({readOnly:!0})],e.prototype,"exportImageVersion",null),i([s()],e.prototype,"layer",void 0),i([s()],e.prototype,"suspended",void 0),i([s({readOnly:!0})],e.prototype,"timeExtent",null),e=i([n("esri.views.layers.MapImageLayerView")],e),e};let h=class extends P(I(y(f))){constructor(){super(...arguments),this._highlightGraphics=new u,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(r=>{g(r)||l.getLogger(this).error(r)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:r}=this.layer,a=r>=10.3,m=r>=10;this._bitmapContainer=new c,this.container.addChild(this._bitmapContainer),this._highlightView=new x({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new w(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new E({createFetchPopupFeaturesQueryGeometry:(o,p)=>V(o,p,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(o,p)=>{this._highlightView.graphicUpdateHandler({graphic:o,property:p})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new _({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:a,imageNormalizationSupported:m,hidpi:!0}),this.addAttachHandles(d(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,a){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...a})}fetchImageBitmap(t,e,r,a){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...a})}highlight(t){return this._popupHighlightHelper.highlight(t)}};i([s()],h.prototype,"strategy",void 0),i([s()],h.prototype,"updating",void 0),h=i([n("esri.views.2d.layers.MapImageLayerView2D")],h);const U=h;export{U as default};
