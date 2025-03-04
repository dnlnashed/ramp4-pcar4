import{q as e,u as i,C as p}from"./main-CxlHa1F_.js";import{c as o,l as a}from"./GraphicsCollection-DxS0AsqT.js";import{f as h}from"./Layer-DDLV0-Db.js";import{l as n}from"./BlendLayer-D88iJkXS.js";import{t as m}from"./ScaleRangeLayer-D-F0IEoy.js";import{h as c}from"./ElevationInfo-4KGKaksj.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-XTYgt-Bw.js";import"./jsonUtils-C6F4sR9l.js";import"./parser-BR48ds1o.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-DzX4DNQr.js";import"./common-DQOJ18NT.js";import"./lengthUtils-By_dY0He.js";let t=class extends n(m(h)){constructor(r){super(r),this.elevationInfo=null,this.graphics=new o,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(r){return this.graphics.add(r),this}addMany(r){return this.graphics.addMany(r),this}removeAll(){return this.graphics.removeAll(),this}remove(r){this.graphics.remove(r)}removeMany(r){this.graphics.removeMany(r)}on(r,s){return super.on(r,s)}graphicChanged(r){this.emit("graphic-update",r)}};e([i({type:c})],t.prototype,"elevationInfo",void 0),e([i(a(o,"graphics"))],t.prototype,"graphics",void 0),e([i({type:["show","hide"]})],t.prototype,"listMode",void 0),e([i()],t.prototype,"screenSizePerspectiveEnabled",void 0),e([i({readOnly:!0})],t.prototype,"type",void 0),e([i({constructOnly:!0})],t.prototype,"internal",void 0),t=e([p("esri.layers.GraphicsLayer")],t);const C=t;export{C as default};
