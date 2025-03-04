import{k as n,o as i,A as y,v as I,hN as P,by as N,u as S,q as x,f as D,hs as O,T as q,au as B,B as L}from"./main-Czl6u6q4.js";import{h as z}from"./ElevationInfo-CsP7l1-u.js";const s=(e=>e)(["operational-layers","basemap","ground"]);let d=class extends I{constructor(e){super(e),this.description=null,this.label=null,this.type=null}};n([i({type:String,json:{write:!0}})],d.prototype,"description",void 0),n([i({type:String,json:{write:!0}})],d.prototype,"label",void 0),n([i()],d.prototype,"type",void 0),d=n([y("esri.tables.elements.AttributeTableElement")],d);const u=d;var w;let c=w=class extends u{constructor(e){super(e),this.displayType="auto",this.type="attachment"}clone(){return new w({description:this.description,displayType:this.displayType,label:this.label})}};n([i({type:["auto"],json:{write:!0}})],c.prototype,"displayType",void 0),n([i({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=w=n([y("esri.tables.elements.AttributeTableAttachmentElement")],c);const C=c;var h;let m=h=class extends u{constructor(e){super(e),this.fieldName=null,this.type="field"}clone(){return new h({description:this.description,fieldName:this.fieldName,label:this.label})}};n([i({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),n([i({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),m=h=n([y("esri.tables.elements.AttributeTableFieldElement")],m);const G=m;var f;let b=f=class extends u{constructor(e){super(e),this.relationshipId=null,this.type="relationship"}clone(){return new f({description:this.description,label:this.label,relationshipId:this.relationshipId})}};n([i({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),n([i({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=f=n([y("esri.tables.elements.AttributeTableRelationshipElement")],b);const A=b;function W(e){return{typesWithGroup:{base:u,key:"type",typeMap:{attachment:C,field:G,group:e,relationship:A}},typesWithoutGroup:{base:u,key:"type",typeMap:{attachment:C,field:G,relationship:A}}}}function R(e,t,r=!0){if(!e)return null;const p=r?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter(o=>p[o.type]).map(o=>p[o.type].fromJSON(o))}function M(e,t,r=!0){if(!e)return null;const p=r?t.typesWithGroup.typeMap:t.typesWithoutGroup.typeMap;return e.filter(o=>p[o.type]).map(o=>o.toJSON())}function F(e,t,r=!0){return e?e.map(p=>P(r?t.typesWithGroup:t.typesWithoutGroup,p)):null}var g;let a=g=class extends u{constructor(e){super(e),this.elements=null,this.type="group"}castElements(e){return F(e,v,!1)}readElements(e,t){return R(t.attributeTableElements,v,!1)}writeElements(e,t){t.attributeTableElements=M(e,v,!1)}clone(){return new g({description:this.description,elements:D(this.elements),label:this.label})}};n([i({json:{write:!0}})],a.prototype,"elements",void 0),n([N("elements")],a.prototype,"castElements",null),n([S("elements",["attributeTableElements"])],a.prototype,"readElements",null),n([x("elements")],a.prototype,"writeElements",null),n([i({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=g=n([y("esri.tables.elements.AttributeTableGroupElement")],a);const v=W(a),U=a;var j;const T=W(U);let l=j=class extends I{constructor(e){super(e),this.elements=null,this.orderByFields=null}castElements(e){return F(e,T)}readElements(e,t){return R(t.attributeTableElements,T)}writeElements(e,t){t.attributeTableElements=M(e,T)}clone(){return new j({elements:D(this.elements),orderByFields:this.orderByFields})}};n([i({json:{write:!0}})],l.prototype,"elements",void 0),n([N("elements")],l.prototype,"castElements",null),n([S("elements",["attributeTableElements"])],l.prototype,"readElements",null),n([x("elements")],l.prototype,"writeElements",null),n([i({type:[Object],json:{write:!0}})],l.prototype,"orderByFields",void 0),l=j=n([y("esri.tables.AttributeTableTemplate")],l);const J=l,V={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:s}}},X={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,writer(e,t,r){t[r]=!e}}}},Y={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:s}}},Z={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:q}}},_={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:s}}},$={value:null,type:z,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:s}}};function H(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const k={write:{enabled:!0,layerContainerTypes:s},read:!0},E={type:Number,json:{origins:{"web-document":k,"portal-item":{write:!0}}}},K={...E,json:{...E.json,origins:{"web-document":{...k,write:{enabled:!0,layerContainerTypes:s,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,t,r)=>r&&r.origin!=="service"||!t.drawingInfo||t.drawingInfo.transparency===void 0?t.layerDefinition?.drawingInfo&&t.layerDefinition.drawingInfo.transparency!==void 0?O(t.layerDefinition.drawingInfo.transparency):void 0:O(t.drawingInfo.transparency)}}},Q={type:B,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,t)=>{const r=B.fromJSON(e);return t.spatialReference!=null&&typeof t.spatialReference=="object"&&(r.spatialReference=L.fromJSON(t.spatialReference)),r}}}},read:!1}},ee={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},te={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:s}}},name:"layerDefinition.minScale",write:!0}},ne={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:s}}},name:"layerDefinition.maxScale",write:!0}},re={json:{write:{ignoreOrigin:!0,layerContainerTypes:s},origins:{"web-map":{read:!1,write:!1}}}},ie={type:J,json:{name:"attributeTableInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}};export{re as I,ie as T,s as a,K as b,$ as c,_ as d,J as e,E as f,Q as g,te as j,X as l,H as m,Y as p,V as s,ee as u,ne as v,Z as y};
