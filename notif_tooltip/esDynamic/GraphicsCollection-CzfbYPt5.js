import{k as r,o as p,A as a,V as n,cX as w,cW as c,ee as y,b1 as l,ef as _}from"./main-C2GI9Q3q.js";let s=class extends n{constructor(e){super(e),this.addHandles([this.on("before-add",t=>{t.item==null&&t.preventDefault()}),this.on("after-add",t=>this._own(t.item)),this.on("after-remove",t=>this._release(t.item))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(n.ofType(this.itemType.Type))(e):new n(e)}};function u(e,t){return{type:e,cast:w,set(h){const i=c(h,this._get(t),e);i.owner=this,this._set(t,i)}}}r([p()],s.prototype,"owner",null),s=r([a("esri.core.support.OwningCollection")],s);let o=class extends s{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};r([y({Type:l,ensureType:_(l)})],o.prototype,"itemType",void 0),o=r([a("esri.support.GraphicsCollection")],o);export{o as c,u as l,s as n};
