import{d9 as w,aC as y,k as t,o as n,bp as h,fy as v,bd as D,A as m,g0 as b,bv as x,by as S,f$ as z,V as P,cX as E,aE as R,f1 as N,cW as k,au as j,q as C}from"./main-DB4i4A8K.js";import{c as A}from"./Analysis-BcDodrrA.js";import{a as L}from"./Cyclical-OcKnO-iN.js";import{X as T}from"./projection-Cq_ghN3e.js";import{S as _}from"./MultiOriginJSONSupport-Bzh3niK5.js";import{f as H}from"./Layer-D6niDR8_.js";import{b as M}from"./OperationalLayer-KFvN2P5N.js";let r=class extends w(b){constructor(e){super(e),this.type="simple",this.color=new y("black"),this.lineSize=2,this.fontSize=10,this.textColor=new y("black"),this.textBackgroundColor=new y([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],r.prototype,"type",void 0),t([n({type:y,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"color",void 0),t([n({type:Number,cast:v,nonNullable:!0,range:{min:D(1)},json:{write:{isRequired:!0}}})],r.prototype,"lineSize",void 0),t([n({type:Number,cast:v,nonNullable:!0,json:{write:{isRequired:!0}}})],r.prototype,"fontSize",void 0),t([n({type:y,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textColor",void 0),t([n({type:y,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textBackgroundColor",void 0),r=t([m("esri.analysis.DimensionSimpleStyle")],r);const f=r;var d;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(d||(d={}));const V=[d.Horizontal,d.Vertical,d.Direct];let l=class extends w(b){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=d.Direct,this.offset=0,this.orientation=0}};t([n({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:x,json:{write:!0}})],l.prototype,"startPoint",void 0),t([n({type:x,json:{write:!0}})],l.prototype,"endPoint",void 0),t([n({type:V,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>L.normalize(z(e),0,!0))],l.prototype,"orientation",void 0),l=t([m("esri.analysis.LengthDimension")],l);const q=l,g=P.ofType(q);let p=class extends A{constructor(e){super(e),this.type="dimension",this.style=new f,this.extent=null}initialize(){this.addHandles(R(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},N))}get dimensions(){return this._get("dimensions")||new g}set dimensions(e){this._set("dimensions",k(e,this.dimensions,g))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const i=[];for(const o of this.dimensions)o.startPoint!=null&&i.push(o.startPoint),o.endPoint!=null&&i.push(o.endPoint);const a=T(i,e);if(a.pending!=null)return{pending:a.pending,extent:null};let c=null;return a.geometries!=null&&(c=a.geometries.reduce((o,u)=>o==null?u!=null?j.fromPoint(u):null:u!=null?o.union(j.fromPoint(u)):o,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],p.prototype,"type",void 0),t([n({cast:E,type:g,nonNullable:!0})],p.prototype,"dimensions",null),t([n({readOnly:!0})],p.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:f}},nonNullable:!0})],p.prototype,"style",void 0),t([n({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([n({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([m("esri.analysis.DimensionAnalysis")],p);const O=p;let s=class extends M(_(H)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new O,this.opacity=1,e){const{source:i,style:a}=e;i&&a&&(i.style=a)}}initialize(){this.addHandles([R(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},N)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new O)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,a,c){i.dimensions=e.filter(({startPoint:o,endPoint:u})=>o!=null&&u!=null).map(o=>o.toJSON(c)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],s.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],s.prototype,"source",void 0),t([n({readOnly:!0})],s.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:f}},json:{write:{ignoreOrigin:!0}}})],s.prototype,"style",null),t([n({readOnly:!0})],s.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),t([n({type:["show","hide"]})],s.prototype,"listMode",void 0),t([n({type:P.ofType(q),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],s.prototype,"dimensions",null),t([C("web-scene","dimensions")],s.prototype,"writeDimensions",null),s=t([m("esri.layers.DimensionLayer")],s);const B=s;export{B as default};
