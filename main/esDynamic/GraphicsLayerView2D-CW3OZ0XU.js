import{C as p,b1 as l,V as o,bQ as n,aH as r,k as g,o as c,A as d}from"./main-Czl6u6q4.js";import{j as u,y as w}from"./LayerView-Cko7o1US.js";import{t as m}from"./GraphicContainer-D-Z-o1FR.js";import{F as y}from"./GraphicsView2D-aIsF0Pc9.js";import{e as V}from"./HighlightCounter-DFWq7PnG.js";let a=class extends u(w){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new m(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let e;typeof i=="number"?e=[i]:i instanceof l?e=[i.uid]:Array.isArray(i)&&i.length>0?e=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):o.isCollection(i)&&i.length>0&&(e=i.map(s=>s&&s.uid).toArray());const h=e?.filter(n);return h?.length?(this._addHighlight(h,t),r(()=>this._removeHighlight(h,t))):r()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(t),h=this._getHighlightBits(e);i.push({objectId:t,highlightFlags:h})}this.graphicsView?.setHighlight(i)}};g([c()],a.prototype,"graphicsView",void 0),a=g([d("esri.views.2d.layers.GraphicsLayerView2D")],a);const f=a;export{f as default};
