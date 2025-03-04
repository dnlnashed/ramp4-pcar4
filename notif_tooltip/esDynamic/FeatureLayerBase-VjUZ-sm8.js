import{k as e,o as i,A as p,v as b,a_ as G,hN as Fe,by as X,u as l,q as a,jd as tt,f as D,fq as it,ig as Te,hg as Oe,je as Me,jf as Re,jg as ot,bo as Y,jh as nt,ji as st,au as rt,V as De,B as Ve,n as pt}from"./main-C2GI9Q3q.js";import{n as lt,i as Ne}from"./Field-DXH13ugl.js";import{c as at,a as ut,v as dt,j as yt,y as ct}from"./commonProperties-BIy04FVd.js";import{v as mt}from"./HeightModelInfo-ln0j8ok0.js";import{S as ht,C as vt}from"./arcgisLayerUrl-DftahE04.js";import{g as ft,B as xt,X as ee,V as wt,D as gt,G as bt}from"./featureLayerUtils-CsYgtMXQ.js";import{p as jt}from"./LayerFloorInfo-BCIYa_W3.js";import{p as St}from"./Relationship-Bv4ZuIqX.js";import{i as It}from"./serviceCapabilitiesUtils-Cd0NfKm8.js";var te;let T=te=class extends b{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new te({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([i({type:String,json:{write:!0}})],T.prototype,"expression",void 0),e([i({type:String,json:{write:!0}})],T.prototype,"name",void 0),e([i({type:["boolean","date","number","string"],json:{write:!0}})],T.prototype,"returnType",void 0),e([i({type:String,json:{write:!0}})],T.prototype,"title",void 0),T=te=e([p("esri.form.ExpressionInfo")],T);const Et=T;let O=class extends b{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([i({type:String,json:{write:!0}})],O.prototype,"description",void 0),e([i({type:String,json:{write:!0}})],O.prototype,"label",void 0),e([i()],O.prototype,"type",void 0),e([i({type:String,json:{write:!0}})],O.prototype,"visibilityExpression",void 0),O=e([p("esri.form.elements.Element")],O);const M=O;let z=class extends G(b){constructor(t){super(t),this.type=null}};e([i()],z.prototype,"type",void 0),z=e([p("esri.form.elements.inputs.attachments.Input")],z);const F=z,Z=["any","capture","upload"];let V=class extends F{constructor(t){super(t),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([i({type:["audio"],readOnly:!0,json:{write:!0}})],V.prototype,"type",void 0),e([i({type:Z,json:{write:!0}})],V.prototype,"inputMethod",void 0),e([i({type:Number,json:{write:!0}})],V.prototype,"maxDuration",void 0),V=e([p("esri.form.elements.inputs.attachments.AudioInput")],V);const Be=V;let Q=class extends F{constructor(t){super(t),this.type="document",this.maxFileSize=null}};e([i({type:["document"],readOnly:!0,json:{write:!0}})],Q.prototype,"type",void 0),e([i({type:Number,json:{write:!0}})],Q.prototype,"maxFileSize",void 0),Q=e([p("esri.form.elements.inputs.attachments.DocumentInput")],Q);const ke=Q;let N=class extends F{constructor(t){super(t),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([i({type:["image"],readOnly:!0,json:{write:!0}})],N.prototype,"type",void 0),e([i({type:Z,json:{write:!0}})],N.prototype,"inputMethod",void 0),e([i({type:Number,json:{write:!0}})],N.prototype,"maxImageSize",void 0),N=e([p("esri.form.elements.inputs.attachments.ImageInput")],N);const Ae=N;let W=class extends F{constructor(t){super(t),this.type="signature",this.inputMethod="any"}};e([i({type:["signature"],readOnly:!0,json:{write:!0}})],W.prototype,"type",void 0),e([i({type:Z,json:{write:!0}})],W.prototype,"inputMethod",void 0),W=e([p("esri.form.elements.inputs.attachments.SignatureInput")],W);const Ue=W;let B=class extends F{constructor(t){super(t),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([i({type:["video"],readOnly:!0,json:{write:!0}})],B.prototype,"type",void 0),e([i({type:Z,json:{write:!0}})],B.prototype,"inputMethod",void 0),e([i({type:Number,json:{write:!0}})],B.prototype,"maxDuration",void 0),B=e([p("esri.form.elements.inputs.attachments.VideoInput")],B);const Le=B;function Ce(t){return{nestableTypes:{base:F,key:"type",typeMap:{audio:Be,document:ke,image:Ae,signature:Ue,video:Le}},allTypes:{base:F,key:"type",typeMap:{attachment:t,audio:Be,document:ke,image:Ae,signature:Ue,video:Le}}}}function Ft(t,o,s){return t?t.map(n=>Fe(o.nestableTypes,n)):null}function Tt(t,o,s){if(!t)return null;const n=o.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Ot(t,o,s){if(!t)return null;const n=o.nestableTypes.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}let f=class extends F{constructor(t){super(t),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(t){return Ft(t,ie)}readInputs(t,o){return Tt(o.inputTypes,ie)}writeInputs(t,o){o.inputTypes=Ot(t,ie)}};e([i({type:["attachment"],readOnly:!0,json:{write:!0}})],f.prototype,"type",void 0),e([i({type:["any","exact","exactOrNone"],json:{write:!0}})],f.prototype,"attachmentAssociationType",void 0),e([i({json:{write:{isRequired:!0}}})],f.prototype,"inputTypes",void 0),e([X("inputTypes")],f.prototype,"castInputs",null),e([l("inputTypes")],f.prototype,"readInputs",null),e([a("inputTypes")],f.prototype,"writeInputs",null),f=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],f);const ie=Ce(f),Mt=f;var oe;const Rt=Ce(Mt);let d=oe=class extends M{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new oe({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([i({type:Boolean,json:{write:!0}})],d.prototype,"allowUserRename",void 0),e([i({type:String,json:{write:{isRequired:!0}}})],d.prototype,"attachmentKeyword",void 0),e([i({type:Boolean,json:{write:!0}})],d.prototype,"displayFilename",void 0),e([i({type:String,json:{write:!0}})],d.prototype,"editableExpression",void 0),e([i({type:String,json:{write:!0}})],d.prototype,"filenameExpression",void 0),e([i({types:Rt.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],d.prototype,"input",void 0),e([i({type:Number,json:{write:!0}})],d.prototype,"maxAttachmentCount",void 0),e([i({type:Number,json:{write:!0}})],d.prototype,"minAttachmentCount",void 0),e([i({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),e([i({type:Boolean,json:{write:!0}})],d.prototype,"useOriginalFilename",void 0),d=oe=e([p("esri.form.elements.AttachmentElement")],d);const Ge=d;let H=class extends b{constructor(t){super(t),this.type=null}};e([i()],H.prototype,"type",void 0),H=e([p("esri.form.elements.inputs.Input")],H);const j=H;let P=class extends j{constructor(t){super(t),this.maxLength=null,this.minLength=0}};e([i({type:Number,json:{write:!0}})],P.prototype,"maxLength",void 0),e([i({type:Number,json:{write:!0}})],P.prototype,"minLength",void 0),P=e([p("esri.form.elements.inputs.TextInput")],P);const ne=P;var se;let J=se=class extends ne{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new se({maxLength:this.maxLength,minLength:this.minLength})}};e([i({type:["barcode-scanner"],json:{read:!1,write:!0}})],J.prototype,"type",void 0),J=se=e([p("esri.form.elements.inputs.BarcodeScannerInput")],J);const Dt=J;var re;let k=re=class extends j{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new re({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([i({type:String,json:{write:!0}})],k.prototype,"noValueOptionLabel",void 0),e([i({type:Boolean,json:{write:!0}})],k.prototype,"showNoValueOption",void 0),e([i({type:["combo-box"],json:{read:!1,write:!0}})],k.prototype,"type",void 0),k=re=e([p("esri.form.elements.inputs.ComboBoxInput")],k);const Vt=k;var pe;function Qe(t){return t??null}function We(t){return t??null}let x=pe=class extends j{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,o){return Qe(o.max)}writeMax(t,o){o.max=We(t)}readMin(t,o){return Qe(o.min)}writeMin(t,o){o.min=We(t)}clone(){return new pe({max:this.max,min:this.min})}};e([i({type:String,json:{type:String,write:!0}})],x.prototype,"max",void 0),e([l("max")],x.prototype,"readMax",null),e([a("max")],x.prototype,"writeMax",null),e([i({type:String,json:{type:String,write:!0}})],x.prototype,"min",void 0),e([l("min")],x.prototype,"readMin",null),e([a("min")],x.prototype,"writeMin",null),e([i({type:["date-picker"],json:{read:!1,write:!0}})],x.prototype,"type",void 0),x=pe=e([p("esri.form.elements.inputs.DatePickerInput")],x);const Nt=x;var le;function ae(t){return t??null}function ue(t){return t??null}let u=le=class extends j{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,o){return ae(o.max)}writeMax(t,o){o.max=ue(t)}readMin(t,o){return ae(o.min)}writeMin(t,o){o.min=ue(t)}readTimeResolution(t,o){return ae(o.timeResolution)}writeTimeResolution(t,o){o.timeResolution=ue(t)}clone(){return new le({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([i({type:Boolean,json:{write:!0}})],u.prototype,"includeTimeOffset",void 0),e([i({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),e([l("max")],u.prototype,"readMax",null),e([a("max")],u.prototype,"writeMax",null),e([i({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),e([l("min")],u.prototype,"readMin",null),e([a("min")],u.prototype,"writeMin",null),e([i({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),e([l("timeResolution")],u.prototype,"readTimeResolution",null),e([a("timeResolution")],u.prototype,"writeTimeResolution",null),e([i({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=le=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],u);const Bt=u;var de;function Pe(t){return t!=null?new Date(t):null}function qe(t){return t?t.getTime():null}let h=de=class extends j{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,o){return Pe(o.max)}writeMax(t,o){o.max=qe(t)}readMin(t,o){return Pe(o.min)}writeMin(t,o){o.min=qe(t)}clone(){return new de({includeTime:this.includeTime,max:this.max,min:this.min})}};e([i({type:Boolean,json:{write:!0}})],h.prototype,"includeTime",void 0),e([i({type:Date,json:{type:Number,write:!0}})],h.prototype,"max",void 0),e([l("max")],h.prototype,"readMax",null),e([a("max")],h.prototype,"writeMax",null),e([i({type:Date,json:{type:Number,write:!0}})],h.prototype,"min",void 0),e([l("min")],h.prototype,"readMin",null),e([a("min")],h.prototype,"writeMin",null),e([i({type:["datetime-picker"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=de=e([p("esri.form.elements.inputs.DateTimePickerInput")],h);const kt=h;var ye;let A=ye=class extends j{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new ye({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([i({type:String,json:{write:!0}})],A.prototype,"noValueOptionLabel",void 0),e([i({type:Boolean,json:{write:!0}})],A.prototype,"showNoValueOption",void 0),e([i({type:["radio-buttons"],json:{read:!1,write:!0}})],A.prototype,"type",void 0),A=ye=e([p("esri.form.elements.inputs.RadioButtonsInput")],A);const At=A;var ce;let U=ce=class extends j{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new ce({offValue:this.offValue,onValue:this.onValue})}};e([i({type:[String,Number],json:{write:!0}})],U.prototype,"offValue",void 0),e([i({type:[String,Number],json:{write:!0}})],U.prototype,"onValue",void 0),e([i({type:["switch"],json:{read:!1,write:!0}})],U.prototype,"type",void 0),U=ce=e([p("esri.form.elements.inputs.SwitchInput")],U);const Ut=U;var me;let _=me=class extends ne{constructor(t){super(t),this.type="text-area"}clone(){return new me({maxLength:this.maxLength,minLength:this.minLength})}};e([i({type:["text-area"],json:{read:!1,write:!0}})],_.prototype,"type",void 0),_=me=e([p("esri.form.elements.inputs.TextAreaInput")],_);const Lt=_;var he;let K=he=class extends ne{constructor(t){super(t),this.type="text-box"}clone(){return new he({maxLength:this.maxLength,minLength:this.minLength})}};e([i({type:["text-box"],json:{read:!1,write:!0}})],K.prototype,"type",void 0),K=he=e([p("esri.form.elements.inputs.TextBoxInput")],K);const Ct=K;var ve;function fe(t){return t??null}function xe(t){return t??null}let y=ve=class extends j{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,o){return fe(o.max)}writeMax(t,o){o.max=xe(t)}readMin(t,o){return fe(o.min)}writeMin(t,o){o.min=xe(t)}readTimeResolution(t,o){return fe(o.timeResolution)}writeTimeResolution(t,o){o.timeResolution=xe(t)}clone(){return new ve({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([i({type:String,json:{type:String,write:!0}})],y.prototype,"max",void 0),e([l("max")],y.prototype,"readMax",null),e([a("max")],y.prototype,"writeMax",null),e([i({type:String,json:{type:String,write:!0}})],y.prototype,"min",void 0),e([l("min")],y.prototype,"readMin",null),e([a("min")],y.prototype,"writeMin",null),e([i({type:String,json:{type:String,write:!0}})],y.prototype,"timeResolution",void 0),e([l("timeResolution")],y.prototype,"readTimeResolution",null),e([a("timeResolution")],y.prototype,"writeTimeResolution",null),e([i({type:["time-picker"],json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=ve=e([p("esri.form.elements.inputs.TimePickerInput")],y);const Gt=y,Qt={base:j,key:"type",typeMap:{"barcode-scanner":Dt,"combo-box":Vt,"date-picker":Nt,"datetime-picker":kt,"datetimeoffset-picker":Bt,"radio-buttons":At,switch:Ut,"text-area":Lt,"text-box":Ct,"time-picker":Gt}};var we;let m=we=class extends M{constructor(t){super(t),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new we({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([i({types:lt,json:{read:{reader:Ne},write:!0}})],m.prototype,"domain",void 0),e([i({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"editableExpression",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"hint",void 0),e([i({types:Qt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],m.prototype,"input",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"requiredExpression",void 0),e([i({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),e([i({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),m=we=e([p("esri.form.elements.FieldElement")],m);const ze=m;var ge;let S=ge=class extends M{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new ge({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:D(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([i({type:Number,json:{write:!0}})],S.prototype,"displayCount",void 0),e([i({type:["list"],json:{write:!0}})],S.prototype,"displayType",void 0),e([i({type:String,json:{write:!0}})],S.prototype,"editableExpression",void 0),e([i({type:[tt],json:{write:!0}})],S.prototype,"orderByFields",void 0),e([i({type:Number,json:{write:!0}})],S.prototype,"relationshipId",void 0),e([i({type:["relationship"],json:{read:!1,write:!0}})],S.prototype,"type",void 0),S=ge=e([p("esri.form.elements.RelationshipElement")],S);const Ze=S;var be;let L=be=class extends M{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new be({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([i({type:String,json:{write:!0}})],L.prototype,"text",void 0),e([i({type:String,json:{write:!0}})],L.prototype,"textFormat",void 0),e([i({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],L.prototype,"type",void 0),L=be=e([p("esri.form.elements.TextElement")],L);const He=L;function Je(t){return{typesWithGroup:{base:M,key:"type",typeMap:{attachment:Ge,field:ze,group:t,relationship:Ze,text:He}},typesWithoutGroup:{base:M,key:"type",typeMap:{attachment:Ge,field:ze,relationship:Ze,text:He}}}}function _e(t,o,s=!0){if(!t)return null;const n=s?o.typesWithGroup.typeMap:o.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>n[r.type].fromJSON(r))}function Ke(t,o,s=!0){if(!t)return null;const n=s?o.typesWithGroup.typeMap:o.typesWithoutGroup.typeMap;return t.filter(r=>n[r.type]).map(r=>r.toJSON())}function $e(t,o,s=!0){return t?t.map(n=>Fe(s?o.typesWithGroup:o.typesWithoutGroup,n)):null}var je;let w=je=class extends M{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return $e(t,Se,!1)}readElements(t,o){return _e(o.formElements,Se,!1)}writeElements(t,o){o.formElements=Ke(t,Se,!1)}clone(){return new je({description:this.description,elements:D(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([i({json:{write:!0}})],w.prototype,"elements",void 0),e([X("elements")],w.prototype,"castElements",null),e([l("elements",["formElements"])],w.prototype,"readElements",null),e([a("elements")],w.prototype,"writeElements",null),e([i({type:["collapsed","expanded"],json:{write:!0}})],w.prototype,"initialState",void 0),e([i({type:String,json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=je=e([p("esri.form.elements.GroupElement")],w);const Se=Je(w),Wt=w,Pt=t=>t.type==="field",qt=t=>t.type==="group",zt=t=>t.type==="text";var Ie;const Ee=Je(Wt);let v=Ie=class extends b{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return $e(t,Ee)}readElements(t,o){return _e(o.formElements,Ee)}writeElements(t,o){o.formElements=Ke(t,Ee)}clone(){return new Ie({description:this.description,expressionInfos:D(this.expressionInfos),elements:D(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,o){const s=new Set,{description:n,elements:r,expressionInfos:c,title:R}=this;if(q(s,t,n),q(s,t,R),!r)return[];const et=Zt(r,c).map($=>it(s,t,$));await Promise.all(et);for(const $ of r)Xe(s,{fieldsIndex:t,relationships:o},$);return Array.from(s).sort()}};function Xe(t,o,s){const{fieldsIndex:n}=o;if(!n||n.fields.length!==t.size)switch(q(t,n,s.label),q(t,n,s.description),s.type){case"field":Te(t,n,s.fieldName);break;case"group":s.elements.forEach(r=>Xe(t,o,r));break;case"relationship":if(o.relationships){const r=o.relationships.find(c=>c.id===s.relationshipId);r&&Te(t,n,r.keyField)}Oe(t,n,s.orderByFields?.map(r=>r.field));break;case"text":q(t,n,s.text)}}function Zt(t,o){if(!o||o.length===0)return[];const s=Ye(t),n=[];for(const r of o)s.has(r.name)&&n.push(r.expression);return n}function Ye(t){const o=new Set;for(const s of t)if(Me(o,s.visibilityExpression),!zt(s)){if(qt(s))Re(o,Ye(s.elements));else if(Me(o,s.editableExpression),Pt(s)){const{requiredExpression:n,valueExpression:r}=s;Re(o,[n,r])}}return o}function q(t,o,s){Oe(t,o,ot(s))}e([i({type:String,json:{write:!0}})],v.prototype,"description",void 0),e([i({json:{write:!0}})],v.prototype,"elements",void 0),e([X("elements")],v.prototype,"castElements",null),e([l("elements",["formElements"])],v.prototype,"readElements",null),e([a("elements")],v.prototype,"writeElements",null),e([i({type:[Et],json:{write:!0}})],v.prototype,"expressionInfos",void 0),e([i({type:Boolean,json:{default:!1,write:!0}})],v.prototype,"preserveFieldValuesWhenHidden",void 0),e([i({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=Ie=e([p("esri.form.FormTemplate")],v);const Ht=v;let I=class extends G(b){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([i()],I.prototype,"creatorField",void 0),e([i()],I.prototype,"creationDateField",void 0),e([i()],I.prototype,"editorField",void 0),e([i()],I.prototype,"editDateField",void 0),e([i()],I.prototype,"realm",void 0),e([i(Y("dateFieldsTimeReference",!0))],I.prototype,"timeZone",void 0),I=e([p("esri.layers.support.EditFieldsInfo")],I);const Jt=I;let g=class extends G(b){constructor(t){super(t)}};e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"name",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"fields",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"isAscending",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"indexType",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"isUnique",void 0),e([i({constructOnly:!0,json:{write:!0}})],g.prototype,"description",void 0),g=e([p("esri.layers.support.FeatureIndex")],g);let C=class extends G(b){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([i({type:String,json:{read:{source:"shapeAreaFieldName"}}})],C.prototype,"shapeAreaField",void 0),e([i({type:String,json:{read:{source:"shapeLengthFieldName"}}})],C.prototype,"shapeLengthField",void 0),e([i({type:String,json:{read:t=>nt.read(t)||st.read(t)}})],C.prototype,"units",void 0),C=e([p("esri.layers.support.GeometryFieldsInfo")],C);const _t=C;let E=class extends G(b){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const o={};for(const s of Object.keys(t))o[s]=Ne(t[s]);return o}writeDomains(t,o){if(!t)return;const s={};for(const n of Object.keys(t))t[n]&&(s[n]=t[n]?.toJSON());o.domains=s}};e([i({type:Number,json:{write:!0}})],E.prototype,"code",void 0),e([i({type:Object,json:{write:!0}})],E.prototype,"defaultValues",void 0),e([i({json:{write:!0}})],E.prototype,"domains",void 0),e([l("domains")],E.prototype,"readDomains",null),e([a("domains")],E.prototype,"writeDomains",null),e([i({type:String,json:{write:!0}})],E.prototype,"name",void 0),E=e([p("esri.layers.support.Subtype")],E);const Kt=E,$t=t=>{let o=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(De.ofType(g)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=Ve.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:s}=this;if(s){const{query:r,operations:c,editing:R}=s;if(!r.supportsQueryByOthers||!r.supportsQueryByAnonymous||c.supportsEditing&&!(R.supportsUpdateByOthers&&R.supportsUpdateByAnonymous&&R.supportsDeleteByOthers&&R.supportsDeleteByAnonymous))return"load"}if(this.serviceDefinitionExpression?.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(xt(this))return"load";if(this.hasUpdateItemRestrictions)return s.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const n=this.editFieldsInfo;return(n?.creatorField||n?.editorField)&&s?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(s,n){return It(n,this.url)}readEditingInfo(s,n){const{editingInfo:r}=n;return r?{lastEditDate:r.lastEditDate!=null?new Date(r.lastEditDate):null}:null}get effectiveCapabilities(){const s=this.capabilities;if(!s)return null;const n=D(s),{operations:r,editing:c}=n;return ee(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),n):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=c.supportsDeleteByOthers=c.supportsGeometryUpdate=c.supportsUpdateByOthers=!0,n):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=c.supportsGeometryUpdate=!0),n)}readGlobalIdFieldFromService(s,n){return wt(n)}get hasFullEditingRestrictions(){const s=this.capabilities;if(!s||ee(this))return!1;const{operations:n,editing:r}=s;return n.supportsEditing&&!(n.supportsAdd&&n.supportsDelete&&n.supportsUpdate&&r.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const s=this.capabilities;if(!s)return!1;const{operations:n,editing:r}=s;return ee(this)?!n.supportsQuery:!(n.supportsAdd&&n.supportsDelete&&n.supportsEditing&&n.supportsQuery&&n.supportsUpdate&&r.supportsDeleteByOthers&&r.supportsGeometryUpdate&&r.supportsUpdateByOthers)}readIsTableFromService(s,n){return n.type==="Table"}readMaxScale(s,n){return n.effectiveMaxScale||s||0}readMinScale(s,n){return n.effectiveMinScale||s||0}readObjectIdFieldFromService(s,n){return gt(n)}readServiceDefinitionExpression(s,n){return n.definitionQuery||n.definitionExpression}set url(s){if(s==null)return void this._set("url",s);const n=ht({layer:this,url:s,nonStandardUrlAllowed:!0,logger:pt.getLogger(this)});this._set("url",n.url),n.layerId!=null&&this._set("layerId",n.layerId)}writeUrl(s,n,r,c){vt(this,s,null,n,c)}readVersion(s,n){return bt(n)}};return e([i({readOnly:!0})],o.prototype,"authenticationTriggerEvent",null),e([i({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],o.prototype,"copyright",void 0),e([i({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],o.prototype,"capabilities",void 0),e([l("service","capabilities")],o.prototype,"readCapabilitiesFromService",null),e([i(Y("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),e([i({type:Boolean})],o.prototype,"datesInUnknownTimezone",void 0),e([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),e([i({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],o.prototype,"displayField",void 0),e([i({readOnly:!0,type:Jt})],o.prototype,"editFieldsInfo",void 0),e([i({readOnly:!0})],o.prototype,"editingInfo",void 0),e([l("editingInfo")],o.prototype,"readEditingInfo",null),e([i({readOnly:!0})],o.prototype,"effectiveCapabilities",null),e([i((()=>{const s=D(at),n=s.json.origins;return n["web-map"]={read:!1,write:!1},n["portal-item"]={read:!1,write:!1},s})())],o.prototype,"elevationInfo",void 0),e([i({type:jt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:ut}}}}})],o.prototype,"floorInfo",void 0),e([i({type:rt,json:{origins:{service:{read:{source:"extent"}}}}})],o.prototype,"fullExtent",void 0),e([i()],o.prototype,"gdbVersion",void 0),e([i({readOnly:!0,type:_t,json:{read:{source:"geometryProperties"}}})],o.prototype,"geometryFieldsInfo",void 0),e([i({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ft.read}}}})],o.prototype,"geometryType",void 0),e([i({type:String})],o.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],o.prototype,"readGlobalIdFieldFromService",null),e([i({readOnly:!0})],o.prototype,"hasFullEditingRestrictions",null),e([i({type:Boolean,json:{origins:{service:{read:!0}}}})],o.prototype,"hasM",void 0),e([i({readOnly:!0})],o.prototype,"hasUpdateItemRestrictions",null),e([i({type:Boolean,json:{origins:{service:{read:!0}}}})],o.prototype,"hasZ",void 0),e([i({readOnly:!0,type:mt})],o.prototype,"heightModelInfo",void 0),e([i({type:Date})],o.prototype,"historicMoment",void 0),e([i({type:De.ofType(g),readOnly:!0})],o.prototype,"indexes",void 0),e([i({readOnly:!0})],o.prototype,"isTable",void 0),e([l("service","isTable",["type"])],o.prototype,"readIsTableFromService",null),e([i({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],o.prototype,"layerId",void 0),e([i(dt)],o.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],o.prototype,"readMaxScale",null),e([i(yt)],o.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],o.prototype,"readMinScale",null),e([i({type:String})],o.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],o.prototype,"readObjectIdFieldFromService",null),e([i(Y("preferredTimeReference"))],o.prototype,"preferredTimeZone",void 0),e([i({type:[St],readOnly:!0})],o.prototype,"relationships",void 0),e([i({type:Boolean})],o.prototype,"returnM",void 0),e([i({type:Boolean})],o.prototype,"returnZ",void 0),e([i({readOnly:!0,json:{write:!1}})],o.prototype,"serverGens",void 0),e([i({readOnly:!0})],o.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],o.prototype,"readServiceDefinitionExpression",null),e([i({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"serviceItemId",void 0),e([i()],o.prototype,"sourceJSON",void 0),e([i({type:Ve,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),e([i({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"subtypeField",void 0),e([i({type:[Kt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"subtypes",void 0),e([i({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],o.prototype,"trackIdField",void 0),e([i(ct)],o.prototype,"url",null),e([a("url")],o.prototype,"writeUrl",null),e([i({json:{origins:{service:{read:!0}},read:!1}})],o.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],o.prototype,"readVersion",null),o=e([p("esri.layers.mixins.FeatureLayerBase")],o),o};export{$t as B,Ht as V};
