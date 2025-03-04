import{k as a,o as s,A as f,V,dA as F,eN as b,aH as U,eg as H,n as _,bt as w}from"./main-C2GI9Q3q.js";import{j as x,y as I}from"./LayerView-COQmhOYa.js";const y=Symbol(),A=o=>{let e=class extends o{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=F(async()=>{const{layer:r,parent:i}=this,n=i?.footprintLayerView;let d=[];const l=this._createQuery();if(l&&n){const{features:h}=await n.queryFeatures(l);this.suspended||(d=h.map(c=>r.acquireLayer(c)))}this.removeHandles(y),this.addHandles(d,y)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return b([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(H(this._debouncedUpdate()).catch(r=>{_.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,i=this.layer?.parent;if(!r||!i||i.destroyed)return null;const{layer:{maximumVisibleSublayers:n},view:{scale:d}}=this;if(!n)return null;const{itemTypeField:l,itemSourceField:h,itemNameField:c,minScaleField:m,maxScaleField:L,objectIdField:v,orderBy:S}=i,$=w(`${m} IS NULL OR ${d} <= ${m} OR ${m} = 0`,`${L} IS NULL OR ${d} >= ${L}`),p=S?.find(u=>u.field&&!u.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=n,t.outFields=[v,h,c],t.where=w(t.where,$),this.unsupportedItemTypes!=null){const u=`${l} NOT IN (${this.unsupportedItemTypes.map(C=>`'${C}'`)})`;t.where=w(t.where,u)}return p?.field&&(t.orderByFields=[`${p.field} ${p.order==="descending"?"DESC":"ASC"}`],t.outFields.push(p.field)),t}};return a([s({readOnly:!0})],e.prototype,"creatingLayerViews",null),a([s()],e.prototype,"layer",void 0),a([s()],e.prototype,"layerViews",void 0),a([s({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),a([s()],e.prototype,"parent",void 0),a([s({readOnly:!0})],e.prototype,"isUpdating",null),e=a([f("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends A(x(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(o){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((o,e)=>this.container.addChildAt(o.container,e))}};g=a([f("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const O=g;export{O as default};
