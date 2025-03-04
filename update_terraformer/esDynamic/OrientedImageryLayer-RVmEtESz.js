import{k as e,o,A as S,aD as Q,cg as q,a_ as I,d9 as A,v as B,ax as _,f as X,s as Z,aY as ee}from"./main-jlUEdDH5.js";import te from"./FeatureLayer-DvsNnSmA.js";import{f as oe}from"./TemporalLayer-DPPrkznH.js";import{p as ie}from"./TimeExtent-CIp_bSRY.js";import{A as G}from"./interfaces-Cwm0pihk.js";let g=class extends Q{set horizontalWKID(t){t?q({wkid:+t})?this._set("horizontalWKID",+t):this._set("horizontalWKID",t):this._set("horizontalWKID",null)}set verticalWKID(t){t?this._set("verticalWKID",isFinite(t)&&q({wkid:+t})?+t:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:t,focalLength:i,principalOffsetPoint:r,radialDistortionCoefficients:s,tangentialDistortionCoefficients:l}=this;return t?.length>1&&!Number.isNaN(i)&&r?.length>1&&s?.length>1&&l?.length>1}};e([o({json:{write:!0}})],g.prototype,"affineTransformations",void 0),e([o({json:{write:!0}})],g.prototype,"focalLength",void 0),e([o({json:{write:!0}})],g.prototype,"principalOffsetPoint",void 0),e([o({json:{write:!0}})],g.prototype,"radialDistortionCoefficients",void 0),e([o({json:{write:!0}})],g.prototype,"tangentialDistortionCoefficients",void 0),e([o({json:{write:!0}})],g.prototype,"horizontalWKID",null),e([o({json:{write:!0}})],g.prototype,"verticalWKID",null),e([o({json:{write:!0}})],g.prototype,"x",void 0),e([o({json:{write:!0}})],g.prototype,"y",void 0),e([o({json:{write:!0}})],g.prototype,"z",void 0),e([o({json:{write:!0}})],g.prototype,"type",void 0),g=e([S("esri.layers.orientedImagery.core.CameraOrientation")],g);const V=g;let m=class extends I(A(V)){constructor(){super(...arguments),this.type=1}toString(){const{type:t,horizontalWKID:i,verticalWKID:r,x:s,y:l,z:y,heading:c,pitch:d,roll:f,affineTransformations:j,focalLength:P,principalOffsetPoint:w,radialDistortionCoefficients:b,tangentialDistortionCoefficients:N}=this,p=[t,i,r,s,l,y,c,d,f];return this.isAdvanced&&(j?.forEach(n=>p.push(n)),p.push(P),w?.forEach(n=>p.push(n)),b?.forEach(n=>p.push(n)),N?.forEach(n=>p.push(n))),p.map(n=>Number.isNaN(n)?"":n).join("|")}};e([o({json:{write:!0}})],m.prototype,"type",void 0),e([o({type:[Number],json:{write:!0}})],m.prototype,"affineTransformations",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"focalLength",void 0),e([o({type:[Number],json:{write:!0}})],m.prototype,"principalOffsetPoint",void 0),e([o({type:[Number],json:{write:!0}})],m.prototype,"radialDistortionCoefficients",void 0),e([o({type:[Number],json:{write:!0}})],m.prototype,"tangentialDistortionCoefficients",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"heading",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"pitch",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"roll",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"x",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"y",void 0),e([o({type:Number,json:{write:!0}})],m.prototype,"z",void 0),m=e([S("esri.layers.orientedImagery.core.CameraOrientationHPR")],m);const re=m;let D=class extends I(A(V)){constructor(){super(...arguments),this.type=4}toString(){const{type:t,latitude:i,longitude:r,ellipsoidRadius:s,squaredEccentricity:l,properties:y}=this,c=`${y}`.split("|");return c.splice(1,1),`${t}|${i}|${r}|${s}|${l}|${c.join("|")}`}};e([o({json:{write:!0}})],D.prototype,"type",void 0),e([o({json:{write:!0},type:Number})],D.prototype,"latitude",void 0),e([o({json:{write:!0},type:Number})],D.prototype,"longitude",void 0),e([o({json:{write:!0},type:Number})],D.prototype,"ellipsoidRadius",void 0),e([o({json:{write:!0},type:Number})],D.prototype,"squaredEccentricity",void 0),e([o({json:{write:!0}})],D.prototype,"properties",void 0),D=e([S("esri.layers.orientedImagery.core.CameraOrientationLTP")],D);const ne=D;let h=class extends I(A(V)){constructor(){super(...arguments),this.type=2}toString(){const{type:t,horizontalWKID:i,verticalWKID:r,x:s,y:l,z:y,omega:c,phi:d,kappa:f,affineTransformations:j,focalLength:P,principalOffsetPoint:w,radialDistortionCoefficients:b,tangentialDistortionCoefficients:N}=this,p=[t,i,r,s,l,y,c,d,f];return this.isAdvanced&&(j?.forEach(n=>p.push(n)),p.push(P),w?.forEach(n=>p.push(n)),b?.forEach(n=>p.push(n)),N?.forEach(n=>p.push(n))),p.map(n=>isNaN(n)?"":n).join("|")}};e([o({json:{write:!0}})],h.prototype,"type",void 0),e([o({type:[Number],json:{write:!0}})],h.prototype,"affineTransformations",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"focalLength",void 0),e([o({type:[Number],json:{write:!0}})],h.prototype,"principalOffsetPoint",void 0),e([o({type:[Number],json:{write:!0}})],h.prototype,"radialDistortionCoefficients",void 0),e([o({type:[Number],json:{write:!0}})],h.prototype,"tangentialDistortionCoefficients",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"omega",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"phi",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"kappa",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"x",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"y",void 0),e([o({type:Number,json:{write:!0}})],h.prototype,"z",void 0),h=e([S("esri.layers.orientedImagery.core.CameraOrientationOPK")],h);const se=h;let v=class extends I(A(V)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:t,focalLength:i,principalOffsetPoint:r,radialDistortionCoefficients:s,tangentialDistortionCoefficients:l}=this;return t?.length>1||!Number.isNaN(i)||r?.length>1||s?.length>1||l?.length>1}toString(){const{type:t,horizontalWKID:i,verticalWKID:r,x:s,y:l,z:y,yaw:c,pitch:d,roll:f,affineTransformations:j,focalLength:P,principalOffsetPoint:w,radialDistortionCoefficients:b,tangentialDistortionCoefficients:N}=this,p=[t,i,r,s,l,y,c,d,f];return this.isAdvanced&&(j?.forEach(n=>p.push(n)),p.push(P),w?.forEach(n=>p.push(n)),w?.forEach(n=>p.push(n)),b?.forEach(n=>p.push(n)),N?.forEach(n=>p.push(n))),p.map(n=>Number.isNaN(n)?"":n).join("|")}};e([o({json:{write:!0}})],v.prototype,"type",void 0),e([o({type:[Number],json:{write:!0}})],v.prototype,"affineTransformations",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"focalLength",void 0),e([o({type:[Number],json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),e([o({type:[Number],json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),e([o({type:[Number],json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"yaw",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"pitch",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"roll",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"x",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"y",void 0),e([o({type:Number,json:{write:!0}})],v.prototype,"z",void 0),v=e([S("esri.layers.orientedImagery.core.CameraOrientationYPR")],v);const ae=v;var x;(function(t){t[t.HPR=1]="HPR",t[t.OPK=2]="OPK",t[t.YPR=3]="YPR",t[t.LTP=4]="LTP"})(x||(x={}));const R=new Map;R.set(`${x.OPK}`,{desc:"Using Omega Phi Kappa",constructor:se}),R.set(`${x.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:re}),R.set(`${x.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:ae}),R.set(`${x.LTP}`,{desc:"Using Local Tangent Plane",constructor:ne});let O=class extends I(B){constructor(){super(...arguments),this.url=null}};e([o({type:Number,json:{write:!0}})],O.prototype,"lod",void 0),e([o({type:String,json:{write:!0}})],O.prototype,"rasterFunction",void 0),e([o({type:String,json:{write:!0}})],O.prototype,"url",void 0),O=e([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],O);let U=class extends I(B){constructor(){super(...arguments),this.constantElevation=null}};e([o({type:Number,json:{write:!0}})],U.prototype,"constantElevation",void 0),U=e([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],U);const pe=t=>t!=null&&typeof t.constantElevation=="number";function le(t,i,r){return i&&(t=`${i}${t}`),r&&(t+=`${r}`),t}function ye(t,i,r){let{url:s}=t;return s?(s=le(s,i,r),new O({...t,url:s})):null}function ue(t,i,r){return t&&(pe(t)?new U(t):ye(t,i,r))}const H=new _({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),M=new _({Feet:"feet",Meter:"meter"}),k=new _({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),$=new Map;function ce(t){const[i,r,s,l,y,c,d,f,j,P,w,b,N,p,n,T,E,z,K,C,L,W]=t.slice(1);return{horizontalWKID:i,verticalWKID:r,x:s,y:l,z:y,omega:c,phi:d,kappa:f,...Y([j,P,w,b,N,p],[T,E],[z,K,C],[L,W],n)}}$.set(`${x.HPR}`,de),$.set(`${x.YPR}`,fe),$.set(`${x.OPK}`,ce),$.set(`${x.LTP}`,me);const F=t=>{const i=t.map(r=>parseFloat(r)).filter(r=>!isNaN(r));if(i.length===t.length)return i};function Y(t,i,r,s,l){const y=F(t),c=F(i),d=F(r),f=F(s);return{affineTransformations:y?.length===6?y:void 0,focalLength:y?.length===6?parseFloat(l):void 0,principalOffsetPoint:c?.length!==2?[0,0]:c,radialDistortionCoefficients:d?.length!==3?[0,0,0]:d,tangentialDistortionCoefficients:f?.length!==2?[0,0]:f}}function de(t){const[i,r,s,l,y,c,d,f,j,P,w,b,N,p,n,T,E,z,K,C,L,W]=t.slice(1);return{horizontalWKID:i,verticalWKID:r,x:s,y:l,z:y,heading:c,pitch:d,roll:f,...Y([j,P,w,b,N,p],[T,E],[z,K,C],[L,W],n)}}function fe(t){const[i,r,s,l,y,c,d,f,j,P,w,b,N,p,n,T,E,z,K,C,L,W]=t.slice(1);return{horizontalWKID:i,verticalWKID:r,x:s,y:l,z:y,yaw:c,pitch:d,roll:f,...Y([j,P,w,b,N,p],[T,E],[z,K,C],[L,W],n)}}function me(t){const[i,r,s,l,y,...c]=t.slice(1),d=$.get(y),f=R.get(y)?.constructor;return!d||!f?null:{latitude:i,longitude:r,ellipsoidRadius:s,squaredEccentricity:l,properties:new f(d([y,"",...c]))}}function he(t){return Array.isArray(t)&&t?.length===9&&!t.some(isNaN)}const ve=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),J=(t,i)=>!ve.has(i)&&t,ge=(t,i,r)=>{const s=`orientedImageryProperties.${t}`;return{name:s,write:i?{ignoreOrigin:!0,target:s,writer:i}:{ignoreOrigin:!0},read:r?{ignoreOrigin:!0,source:s,reader:r}:{ignoreOrigin:!0}}};function we(t){return t.json&&(t.json.origins=t.json.origins??{},t.json.origins["web-scene"]={write:!1,read:!1}),t}function u(t,i,r,s){const{name:l,write:y,read:c}=ge(t,i,r),d={name:l,write:y,read:c,origins:{service:{name:`orientedImageryInfo.${l}`,write:i,read:r},"web-scene":{name:l,write:J(y,t),read:J(c,t)},"web-map":{name:l,write:y,read:c}}};return s&&d.origins&&(d.type=s,d.origins["web-map"].type=s,d.origins["web-scene"].type=s),d}let a=class extends te{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:t,demPathPrefix:i,demPathSuffix:r}=this;return ue(t,i,r)}async save(t){return this._debouncedSaveOperations(G.SAVE,t)}async saveAs(t,i){return this._debouncedSaveOperations(G.SAVE_AS,i,t)}findFirstValidLayerId(t){return t.layers?.find(i=>this.supportedSourceTypes.has(i.type))?.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Z("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([o({type:Number,json:u("cameraHeading")})],a.prototype,"cameraHeading",void 0),e([o({type:Number,json:u("cameraHeight")})],a.prototype,"cameraHeight",void 0),e([o({type:Number,json:u("cameraPitch")})],a.prototype,"cameraPitch",void 0),e([o({type:Number,json:u("cameraRoll")})],a.prototype,"cameraRoll",void 0),e([o({type:Number,json:u("coveragePercent")})],a.prototype,"coveragePercent",void 0),e([o({type:String,json:u("demPathPrefix")})],a.prototype,"demPathPrefix",void 0),e([o({type:String,json:u("demPathSuffix")})],a.prototype,"demPathSuffix",void 0),e([o({type:String,json:u("depthImagePathPrefix")})],a.prototype,"depthImagePathPrefix",void 0),e([o({type:String,json:u("depthImagePathSuffix")})],a.prototype,"depthImagePathSuffix",void 0),e([o({type:Object,json:u("elevationSource")})],a.prototype,"elevationSource",void 0),e([o({readOnly:!0})],a.prototype,"effectiveElevationSource",null),e([o({type:Number,json:u("farDistance")})],a.prototype,"farDistance",void 0),e([o()],a.prototype,"geometryType",void 0),e([o({type:Number,json:u("horizontalFieldOfView")})],a.prototype,"horizontalFieldOfView",void 0),e([o({type:String,json:u("horizontalMeasurementUnit")})],a.prototype,"horizontalMeasurementUnit",void 0),e([o({type:String,json:u("imagePathPrefix")})],a.prototype,"imagePathPrefix",void 0),e([o({type:String,json:u("imagePathSuffix")})],a.prototype,"imagePathSuffix",void 0),e([o({type:Number,json:u("imageRotation")})],a.prototype,"imageRotation",void 0),e([o({type:Number,json:u("maximumDistance")})],a.prototype,"maximumDistance",void 0),e([o({type:Number,json:u("nearDistance")})],a.prototype,"nearDistance",void 0),e([o({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],a.prototype,"operationalLayerType",void 0),e([o({json:{...u("orientationAccuracy",(t,i,r)=>{ee(r,t.join(";"),i)},t=>{const i=t?.split(";")?.map(Number);return he(i)?i:[0,0,0,0,0,0,0,0,0]},String)}})],a.prototype,"orientationAccuracy",void 0),e([o({json:{...u("orientedImageryType",k.write,k.read,k.jsonValues.slice(1))}})],a.prototype,"orientedImageryType",void 0),e([o({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0),e([o({type:H.apiValues,json:{...u("timeIntervalUnit",H.write,H.read,H.jsonValues)}})],a.prototype,"timeIntervalUnit",void 0),e([o(we(X(oe)))],a.prototype,"useViewTime",void 0),e([o({type:Number,json:u("verticalFieldOfView")})],a.prototype,"verticalFieldOfView",void 0),e([o({type:M.apiValues,json:{...u("verticalMeasurementUnit",M.write,M.read,M.jsonValues)}})],a.prototype,"verticalMeasurementUnit",void 0),e([o({type:String,json:u("videoPathPrefix")})],a.prototype,"videoPathPrefix",void 0),e([o({type:String,json:u("videoPathSuffix")})],a.prototype,"videoPathSuffix",void 0),e([o({type:ie,json:{origins:{"web-scene":{write:!1,read:!1}}}})],a.prototype,"visibilityTimeExtent",void 0),a=e([S("esri.layers.OrientedImageryLayer")],a);const je=a;export{je as default};
