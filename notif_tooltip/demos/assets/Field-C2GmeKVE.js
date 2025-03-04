import{q as t,u as n,C as l,A as w,az as j,bm as p,h as N,z as f,br as O}from"./main-CxlHa1F_.js";import{i as T}from"./fieldType-BX9AlQiK.js";var h;let s=h=class extends w{constructor(e){super(e),this.name=null,this.code=null}clone(){return new h({name:this.name,code:this.code})}};t([n({type:String,json:{write:!0}})],s.prototype,"name",void 0),t([n({type:[String,Number],json:{write:!0}})],s.prototype,"code",void 0),s=h=t([l("esri.layers.support.CodedValue")],s);const D=new j({inherited:"inherited",codedValue:"coded-value",range:"range"});let u=class extends w{constructor(e){super(e),this.name=null,this.type=null}};t([n({type:String,json:{write:!0}})],u.prototype,"name",void 0),t([p(D)],u.prototype,"type",void 0),u=t([l("esri.layers.support.Domain")],u);const m=u;var v;let d=v=class extends m{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let r=null;if(this.codedValues){const i=String(e);this.codedValues.some(c=>(String(c.code)===i&&(r=c.name),!!r))}return r}clone(){return new v({codedValues:N(this.codedValues),name:this.name})}};t([n({type:[s],json:{write:!0}})],d.prototype,"codedValues",void 0),t([p({codedValue:"coded-value"})],d.prototype,"type",void 0),d=v=t([l("esri.layers.support.CodedValueDomain")],d);const S=d;var g;let y=g=class extends m{constructor(e){super(e),this.type="inherited"}clone(){return new g}};t([p({inherited:"inherited"})],y.prototype,"type",void 0),y=g=t([l("esri.layers.support.InheritedDomain")],y);const $=y;var V;let a=V=class extends m{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new V({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};t([n({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:this.maxValue!=null&&this.minValue==null}},target:"range",writer(e,r,i){r[i]=[this.minValue||0,e]}}}})],a.prototype,"maxValue",void 0),t([n({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[0]},write:{target:"range",writer(e,r,i){r[i]=[e,this.maxValue||0]}}}})],a.prototype,"minValue",void 0),t([p({range:"range"})],a.prototype,"type",void 0),a=V=t([l("esri.layers.support.RangeDomain")],a);const x=a,J={key:"type",base:m,typeMap:{range:x,"coded-value":S,inherited:$}};function C(e){if(!e?.type)return null;switch(e.type){case"range":return x.fromJSON(e);case"codedValue":return S.fromJSON(e);case"inherited":return $.fromJSON(e)}return null}var b;const F=new j({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let o=b=class extends w{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:r}){let i=null;try{i=r?JSON.parse(r):null}catch{}return i?.value??null}readValueType(e,{description:r}){let i=null;try{i=r?JSON.parse(r):null}catch{}return i?F.fromJSON(i.fieldValueType):null}clone(){return new b({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};t([n({type:String,json:{write:!0}})],o.prototype,"alias",void 0),t([n({type:[String,Number],json:{write:{allowNull:!0}}})],o.prototype,"defaultValue",void 0),t([n()],o.prototype,"description",void 0),t([f("description")],o.prototype,"readDescription",null),t([n({types:J,json:{read:{reader:C},write:!0}})],o.prototype,"domain",void 0),t([n({type:Boolean,json:{write:!0}})],o.prototype,"editable",void 0),t([n({type:O,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],o.prototype,"length",void 0),t([n({type:String,json:{write:!0}})],o.prototype,"name",void 0),t([n({type:Boolean,json:{write:!0}})],o.prototype,"nullable",void 0),t([p(T)],o.prototype,"type",void 0),t([n()],o.prototype,"valueType",void 0),t([f("valueType",["description"])],o.prototype,"readValueType",null),t([n({type:Boolean,json:{read:!1}})],o.prototype,"visible",void 0),o=b=t([l("esri.layers.support.Field")],o);const P=o,q=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{q as F,S as a,C as i,J as n,s as p,P as y};
