import{q as l,u as r,C as a,V as c,aA as u,aB as d}from"./main-BvP2mMJi.js";let s=class extends c{constructor(e){super(e),this.getCollections=null}initialize(){this.addHandles(u(()=>this._refresh(),d))}destroy(){this.getCollections=null}_refresh(){const e=this.getCollections!=null?this.getCollections():null;if(e==null)return void this.removeAll();let o=0;for(const n of e)n!=null&&(o=this._processCollection(o,n));this.splice(o,this.length)}_createNewInstance(e){return new c(e)}_processCollection(e,o){if(!o)return e;const n=this.itemFilterFunction??(t=>!!t);for(const t of o)if(t){if(n(t)){const i=this.indexOf(t,e);i>=0?i!==e&&this.reorder(t,e):this.add(t,e),++e}if(this.getChildrenFunction){const i=this.getChildrenFunction(t);if(Array.isArray(i))for(const h of i)e=this._processCollection(e,h);else e=this._processCollection(e,i)}}return e}};l([r()],s.prototype,"getCollections",void 0),l([r()],s.prototype,"getChildrenFunction",void 0),l([r()],s.prototype,"itemFilterFunction",void 0),s=l([a("esri.core.CollectionFlattener")],s);const C=s;export{C as n};
