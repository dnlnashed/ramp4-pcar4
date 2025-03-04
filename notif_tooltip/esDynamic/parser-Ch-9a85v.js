import{bd as Ue,gv as He,s as b,gw as Ke,gx as Qe,gy as Ve,gz as We}from"./main-C2GI9Q3q.js";import{e as Mt}from"./mat4f32-CiZjBg9k.js";import{r as P,s as j}from"./mat4-C5m5kNuT.js";const Ze=(n,r)=>{const a=P(n,r,0,0,0,0,r,0,0,0,0,r,0,0,0,0,1);return j(a,a)},Be=(n,r)=>{const a=P(n,r,0,0,.5-.5*r,0,r,0,.5-.5*r,0,0,r,.5-.5*r,0,0,0,1);return j(a,a)},Ge=(n,r)=>{const a=1-r,e=P(n,.2126+.7874*a,.7152-.7152*a,.0722-.0722*a,0,.2126-.2126*a,.7152+.2848*a,.0722-.0722*a,0,.2126-.2126*a,.7152-.7152*a,.0722+.9278*a,0,0,0,0,1);return j(e,e)},tn=(n,r)=>{const a=Math.sin(r*Math.PI/180),e=Math.cos(r*Math.PI/180),f=P(n,.213+.787*e-.213*a,.715-.715*e-.715*a,.072-.072*e+.928*a,0,.213-.213*e+.143*a,.715+.285*e+.14*a,.072-.072*e-.283*a,0,.213-.213*e-.787*a,.715-.715*e+.715*a,.072+.928*e+.072*a,0,0,0,0,1);return j(f,f)},en=(n,r)=>{const a=1-2*r,e=P(n,a,0,0,r,0,a,0,r,0,0,a,r,0,0,0,1);return j(e,e)},nn=(n,r)=>{const a=P(n,.213+.787*r,.715-.715*r,.072-.072*r,0,.213-.213*r,.715+.285*r,.072-.072*r,0,.213-.213*r,.715-.715*r,.072+.928*r,0,0,0,0,1);return j(a,a)},rn=(n,r)=>{const a=1-r,e=P(n,.393+.607*a,.769-.769*a,.189-.189*a,0,.349-.349*a,.686+.314*a,.168-.168*a,0,.272-.272*a,.534-.534*a,.131+.869*a,0,0,0,0,1);return j(e,e)};class K{constructor(r,a,e){this.strength=r,this.radius=a,this.threshold=e,this.type="bloom"}interpolate(r,a,e){this.strength=M(r.strength,a.strength,e),this.radius=M(r.radius,a.radius,e),this.threshold=M(r.threshold,a.threshold,e)}clone(){return new K(this.strength,this.radius,this.threshold)}toJSON(){return{type:"bloom",radius:z(this.radius),strength:this.strength,threshold:this.threshold}}}let $t=class St{constructor(r){this.radius=r,this.type="blur"}interpolate(r,a,e){this.radius=Math.round(M(r.radius,a.radius,e))}clone(){return new St(this.radius)}toJSON(){return{type:"blur",radius:z(this.radius)}}};class L{constructor(r,a){this.type=r,this.amount=a,this.type!=="invert"&&this.type!=="grayscale"&&this.type!=="sepia"||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(r,a,e){this.amount=M(r.amount,a.amount,e),this._updateMatrix()}clone(){return new L(this.type,this.amount)}toJSON(){return{type:this.type,amount:this.amount}}_updateMatrix(){const r=this._colorMatrix||Mt();switch(this.type){case"brightness":this._colorMatrix=Ze(r,this.amount);break;case"contrast":this._colorMatrix=Be(r,this.amount);break;case"grayscale":this._colorMatrix=Ge(r,this.amount);break;case"invert":this._colorMatrix=en(r,this.amount);break;case"saturate":this._colorMatrix=nn(r,this.amount);break;case"sepia":this._colorMatrix=rn(r,this.amount)}}}let Ft=class kt{constructor(r,a,e,f){this.offsetX=r,this.offsetY=a,this.blurRadius=e,this.color=f,this.type="drop-shadow"}interpolate(r,a,e){this.offsetX=M(r.offsetX,a.offsetX,e),this.offsetY=M(r.offsetY,a.offsetY,e),this.blurRadius=M(r.blurRadius,a.blurRadius,e),this.color[0]=Math.round(M(r.color[0],a.color[0],e)),this.color[1]=Math.round(M(r.color[1],a.color[1],e)),this.color[2]=Math.round(M(r.color[2],a.color[2],e)),this.color[3]=M(r.color[3],a.color[3],e)}clone(){return new kt(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}toJSON(){const r=[...this.color];return r[3]*=255,{type:"drop-shadow",xoffset:z(this.offsetX),yoffset:z(this.offsetY),blurRadius:z(this.blurRadius),color:r}}},Et=class Nt{constructor(r){this.angle=r,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(r,a,e){this.angle=M(r.angle,a.angle,e),this._updateMatrix()}clone(){return new Nt(this.angle)}toJSON(){return{type:"hue-rotate",angle:this.angle}}_updateMatrix(){const r=this._colorMatrix||Mt();this._colorMatrix=tn(r,this.angle)}};class Q{constructor(r){this.amount=r,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(r,a,e){this.amount=M(r.amount,a.amount,e)}clone(){return new Q(this.amount)}toJSON(){return{type:"opacity",amount:this.amount}}}function M(n,r,a){return n+(r-n)*a}function z(n){return Math.round(1e3*Ue(n))/1e3}function on(n){switch(n.type){case"grayscale":case"sepia":case"invert":return new L(n.type,0);case"saturate":case"brightness":case"contrast":return new L(n.type,1);case"opacity":return new Q(1);case"hue-rotate":return new Et(0);case"blur":return new $t(0);case"drop-shadow":return new Ft(0,0,0,[...He("transparent")]);case"bloom":return new K(0,0,1)}}function Ct(n,r){const a=n.length>r.length?n:r;return(n.length>r.length?r:n).every((e,f)=>e.type===a[f].type)}function Ot(n,r){const a=n.length>r.length?n:r,e=n.length>r.length?r:n;for(let f=e.length;f<a.length;f++)e.push(on(a[f]))}function an(n){const r=n[0];return!!r&&"type"in r}function un(n,r){function a(){this.constructor=n}a.prototype=r.prototype,n.prototype=new a}function X(n,r,a,e){var f=Error.call(this,n);return Object.setPrototypeOf&&Object.setPrototypeOf(f,X.prototype),f.expected=r,f.found=a,f.location=e,f.name="SyntaxError",f}function Z(n,r,a){return a=a||" ",n.length>r?n:(r-=n.length,n+(a+=a.repeat(r)).slice(0,r))}function sn(n,r){var a,e={},f=(r=r!==void 0?r:{}).grammarSource,F={start:bt},k=bt,N="none",I=")",p=",",d="(",E="%",v="px",et="cm",nt="mm",rt="in",ot="pt",at="pc",ut="deg",st="rad",it="grad",ct="turn",Pt="#",jt=".",It="e",lt=/^[ \t\n\r]/,ft=/^[a-z\-]/,ht=/^[0-9a-fA-F]/,pt=/^[+\-]/,R=/^[0-9]/,Jt=_("none"),Xt=w("none",!1),Yt=w(")",!1),gt=w(",",!1),qt=_("whitespace"),mt=q([" ","	",`
`,"\r"],!1,!1),zt=_("function"),Dt=w("(",!1),Lt=_("identifier"),dt=q([["a","z"],"-"],!1,!1),Tt=_("percentage"),Ut=w("%",!1),Ht=_("length"),Kt=w("px",!1),Qt=w("cm",!1),Vt=w("mm",!1),Wt=w("in",!1),Zt=w("pt",!1),Bt=w("pc",!1),Gt=_("angle"),te=w("deg",!1),ee=w("rad",!1),ne=w("grad",!1),re=w("turn",!1),oe=_("number"),ae=_("color"),ue=w("#",!1),yt=q([["0","9"],["a","f"],["A","F"]],!1,!1),vt=q(["+","-"],!1,!1),S=q([["0","9"]],!1,!1),se=w(".",!1),ie=w("e",!1),ce=function(){return[]},le=function(t,u){return{type:"function",name:t,parameters:u||[]}},fe=function(t,u){return u.length>0?Te(t,u,3):[t]},he=function(t){return{type:"quantity",value:t.value,unit:t.unit}},pe=function(t){return{type:"color",colorType:t.type,value:t.value}},ge=function(t){return t},me=function(){return U()},de=function(t){return{value:t,unit:"%"}},ye=function(t){return{value:t,unit:"px"}},ve=function(t){return{value:t,unit:"cm"}},we=function(t){return{value:t,unit:"mm"}},xe=function(t){return{value:t,unit:"in"}},be=function(t){return{value:t,unit:"pt"}},Ae=function(t){return{value:t,unit:"pc"}},Me=function(t){return{value:t,unit:"deg"}},$e=function(t){return{value:t,unit:"rad"}},Fe=function(t){return{value:t,unit:"grad"}},Ee=function(t){return{value:t,unit:"turn"}},Ce=function(t){return{value:t,unit:null}},Oe=function(){return{type:"hex",value:U()}},_e=function(t){return{type:"function",value:t}},Re=function(){return{type:"named",value:U()}},Se=function(){return parseFloat(U())},o=0|r.peg$currPos,g=o,J=[{line:1,column:1}],C=o,T=r.peg$maxFailExpected||[],i=0|r.peg$silentFails;if(r.startRule){if(!(r.startRule in F))throw new Error(`Can't start parsing from rule "`+r.startRule+'".');k=F[r.startRule]}function U(){return n.substring(g,o)}function w(t,u){return{type:"literal",text:t,ignoreCase:u}}function q(t,u,s){return{type:"class",parts:t,inverted:u,ignoreCase:s}}function ke(){return{type:"end"}}function _(t){return{type:"other",description:t}}function wt(t){var u,s=J[t];if(s)return s;if(t>=J.length)u=J.length-1;else for(u=t;!J[--u];);for(s={line:(s=J[u]).line,column:s.column};u<t;)n.charCodeAt(u)===10?(s.line++,s.column=1):s.column++,u++;return J[t]=s,s}function xt(t,u,s){var c=wt(t),h=wt(u);return{source:f,start:{offset:t,line:c.line,column:c.column},end:{offset:u,line:h.line,column:h.column}}}function l(t){o<C||(o>C&&(C=o,T=[]),T.push(t))}function Ne(t,u,s){return new X(X.buildMessage(t,u),t,u,s)}function bt(){var t;return(t=Pe())===e&&(t=je()),t}function Pe(){var t,u;return i++,t=o,x(),n.substr(o,4)===N?(u=N,o+=4):(u=e,i===0&&l(Xt)),u!==e?(x(),g=t,t=ce()):(o=t,t=e),i--,t===e&&i===0&&l(Jt),t}function je(){var t,u;if(t=[],(u=V())!==e)for(;u!==e;)t.push(u),u=V();else t=e;return t}function V(){var t,u,s,c;return t=o,x(),(u=Je())!==e?(x(),(s=Ie())===e&&(s=null),x(),n.charCodeAt(o)===41?(c=I,o++):(c=e,i===0&&l(Yt)),c!==e?(x(),g=t,t=le(u,s)):(o=t,t=e)):(o=t,t=e),t}function Ie(){var t,u,s,c,h,m,y,A;if(t=o,(u=W())!==e){for(s=[],c=o,h=x(),n.charCodeAt(o)===44?(m=p,o++):(m=e,i===0&&l(gt)),m===e&&(m=null),y=x(),(A=W())!==e?c=h=[h,m,y,A]:(o=c,c=e);c!==e;)s.push(c),c=o,h=x(),n.charCodeAt(o)===44?(m=p,o++):(m=e,i===0&&l(gt)),m===e&&(m=null),y=x(),(A=W())!==e?c=h=[h,m,y,A]:(o=c,c=e);g=t,t=fe(u,s)}else o=t,t=e;return t}function W(){var t,u;return t=o,(u=Xe())===e&&(u=Ye())===e&&(u=qe())===e&&(u=ze()),u!==e&&(g=t,u=he(u)),(t=u)===e&&(t=o,(u=De())!==e&&(g=t,u=pe(u)),t=u),t}function x(){var t,u;for(i++,t=[],u=n.charAt(o),lt.test(u)?o++:(u=e,i===0&&l(mt));u!==e;)t.push(u),u=n.charAt(o),lt.test(u)?o++:(u=e,i===0&&l(mt));return i--,u=e,i===0&&l(qt),t}function Je(){var t,u,s;return i++,t=o,(u=At())!==e?(n.charCodeAt(o)===40?(s=d,o++):(s=e,i===0&&l(Dt)),s!==e?(g=t,t=ge(u)):(o=t,t=e)):(o=t,t=e),i--,t===e&&(u=e,i===0&&l(zt)),t}function At(){var t,u,s;if(i++,t=o,u=[],s=n.charAt(o),ft.test(s)?o++:(s=e,i===0&&l(dt)),s!==e)for(;s!==e;)u.push(s),s=n.charAt(o),ft.test(s)?o++:(s=e,i===0&&l(dt));else u=e;return u!==e&&(g=t,u=me()),i--,(t=u)===e&&(u=e,i===0&&l(Lt)),t}function Xe(){var t,u,s;return i++,t=o,x(),(u=$())!==e?(n.charCodeAt(o)===37?(s=E,o++):(s=e,i===0&&l(Ut)),s!==e?(g=t,t=de(u)):(o=t,t=e)):(o=t,t=e),i--,t===e&&i===0&&l(Tt),t}function Ye(){var t,u,s;return i++,t=o,x(),(u=$())!==e?(n.substr(o,2)===v?(s=v,o+=2):(s=e,i===0&&l(Kt)),s!==e?(g=t,t=ye(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,x(),(u=$())!==e?(n.substr(o,2)===et?(s=et,o+=2):(s=e,i===0&&l(Qt)),s!==e?(g=t,t=ve(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,x(),(u=$())!==e?(n.substr(o,2)===nt?(s=nt,o+=2):(s=e,i===0&&l(Vt)),s!==e?(g=t,t=we(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,x(),(u=$())!==e?(n.substr(o,2)===rt?(s=rt,o+=2):(s=e,i===0&&l(Wt)),s!==e?(g=t,t=xe(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,x(),(u=$())!==e?(n.substr(o,2)===ot?(s=ot,o+=2):(s=e,i===0&&l(Zt)),s!==e?(g=t,t=be(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,x(),(u=$())!==e?(n.substr(o,2)===at?(s=at,o+=2):(s=e,i===0&&l(Bt)),s!==e?(g=t,t=Ae(u)):(o=t,t=e)):(o=t,t=e)))))),i--,t===e&&i===0&&l(Ht),t}function qe(){var t,u,s;return i++,t=o,(u=$())!==e?(n.substr(o,3)===ut?(s=ut,o+=3):(s=e,i===0&&l(te)),s!==e?(g=t,t=Me(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,(u=$())!==e?(n.substr(o,3)===st?(s=st,o+=3):(s=e,i===0&&l(ee)),s!==e?(g=t,t=$e(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,(u=$())!==e?(n.substr(o,4)===it?(s=it,o+=4):(s=e,i===0&&l(ne)),s!==e?(g=t,t=Fe(u)):(o=t,t=e)):(o=t,t=e),t===e&&(t=o,(u=$())!==e?(n.substr(o,4)===ct?(s=ct,o+=4):(s=e,i===0&&l(re)),s!==e?(g=t,t=Ee(u)):(o=t,t=e)):(o=t,t=e)))),i--,t===e&&(u=e,i===0&&l(Gt)),t}function ze(){var t,u;return i++,t=o,x(),(u=$())!==e?(g=t,t=Ce(u)):(o=t,t=e),i--,t===e&&i===0&&l(oe),t}function De(){var t,u,s,c;if(i++,t=o,n.charCodeAt(o)===35?(u=Pt,o++):(u=e,i===0&&l(ue)),u!==e){if(s=[],c=n.charAt(o),ht.test(c)?o++:(c=e,i===0&&l(yt)),c!==e)for(;c!==e;)s.push(c),c=n.charAt(o),ht.test(c)?o++:(c=e,i===0&&l(yt));else s=e;s!==e?(g=t,t=Oe()):(o=t,t=e)}else o=t,t=e;return t===e&&(t=o,(u=V())!==e&&(g=t,u=_e(u)),(t=u)===e&&(t=o,(u=At())!==e&&(g=t,u=Re()),t=u)),i--,t===e&&(u=e,i===0&&l(ae)),t}function $(){var t,u,s,c,h,m,y,A;for(t=o,u=n.charAt(o),pt.test(u)?o++:(u=e,i===0&&l(vt)),u===e&&(u=null),s=o,c=[],h=n.charAt(o),R.test(h)?o++:(h=e,i===0&&l(S));h!==e;)c.push(h),h=n.charAt(o),R.test(h)?o++:(h=e,i===0&&l(S));if(n.charCodeAt(o)===46?(h=jt,o++):(h=e,i===0&&l(se)),h!==e){if(m=[],y=n.charAt(o),R.test(y)?o++:(y=e,i===0&&l(S)),y!==e)for(;y!==e;)m.push(y),y=n.charAt(o),R.test(y)?o++:(y=e,i===0&&l(S));else m=e;m!==e?s=c=[c,h,m]:(o=s,s=e)}else o=s,s=e;if(s===e)if(s=[],c=n.charAt(o),R.test(c)?o++:(c=e,i===0&&l(S)),c!==e)for(;c!==e;)s.push(c),c=n.charAt(o),R.test(c)?o++:(c=e,i===0&&l(S));else s=e;if(s!==e){if(c=o,n.charCodeAt(o)===101?(h=It,o++):(h=e,i===0&&l(ie)),h!==e){if(m=n.charAt(o),pt.test(m)?o++:(m=e,i===0&&l(vt)),m===e&&(m=null),y=[],A=n.charAt(o),R.test(A)?o++:(A=e,i===0&&l(S)),A!==e)for(;A!==e;)y.push(A),A=n.charAt(o),R.test(A)?o++:(A=e,i===0&&l(S));else y=e;y!==e?c=h=[h,m,y]:(o=c,c=e)}else o=c,c=e;c===e&&(c=null),g=t,t=Se()}else o=t,t=e;return t}function Le(t,u){return t.map(function(s){return s[u]})}function Te(t,u,s){return[t].concat(Le(u,s))}if(a=k(),r.peg$library)return{peg$result:a,peg$currPos:o,peg$FAILED:e,peg$maxFailExpected:T,peg$maxFailPos:C};if(a!==e&&o===n.length)return a;throw a!==e&&o<n.length&&l(ke()),Ne(T,C<n.length?n.charAt(C):null,C<n.length?xt(C,C+1):xt(C,C))}function cn(n){if(!n||n.length===0)return null;if(typeof n=="string"){const a=_t(n);return a&&a.length!==0?a:null}const r=n.map(a=>{if(!Number.isFinite(a.scale)||a.scale<=0)throw new b("effect:invalid-scale","scale must be finite and greater than 0",{stop:a});return{scale:a.scale,effects:_t(a.value)}});r.sort((a,e)=>e.effects.length-a.effects.length);for(let a=0;a<r.length-1;a++){if(!Ct(r[a].effects,r[a+1].effects))throw new b("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:r[a].effects,b:r[a+1].effects});Ot(r[a].effects,r[a+1].effects)}return r.sort((a,e)=>e.scale-a.scale),r}function _t(n){let r;if(!n)return[];try{r=sn(n)}catch(a){throw new b("effect:invalid-syntax","Invalid effect syntax",{value:n,error:a})}return r.map(a=>ln(a))}function ln(n){try{switch(n.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return fn(n);case"opacity":return hn(n);case"hue-rotate":return pn(n);case"blur":return gn(n);case"drop-shadow":return mn(n);case"bloom":return dn(n)}}catch(r){throw r.details.filter=n,r}throw new b("effect:unknown-effect",`Effect '${n.name}' is not supported`,{effect:n})}function fn(n){let r=1;return Y(n.parameters,1),n.parameters.length===1&&(r=O(n.parameters[0])),new L(n.name,r)}function hn(n){let r=1;return Y(n.parameters,1),n.parameters.length===1&&(r=O(n.parameters[0])),new Q(r)}function pn(n){let r=0;return Y(n.parameters,1),n.parameters.length===1&&(r=An(n.parameters[0])),new Et(r)}function gn(n){let r=0;return Y(n.parameters,1),n.parameters.length===1&&(r=tt(n.parameters[0]),D(r,n.parameters[0])),new $t(r)}function mn(n){const r=[];let a=null;for(const e of n.parameters)if(e.type==="color"){if(r.length&&Object.freeze(r),a)throw new b("effect:type-error","Accepts only one color",{});a=Mn(e)}else{const f=tt(e);if(Object.isFrozen(r))throw new b("effect:type-error","<length> parameters not consecutive",{lengths:r});r.push(f),r.length===3&&D(f,e)}if(r.length<2||r.length>3)throw new b("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${r.length}}`,{lengths:r});return new Ft(r[0],r[1],r[2]||0,a||Rt("black"))}function dn(n){let r=1,a=0,e=0;return Y(n.parameters,3),n.parameters[0]&&(r=O(n.parameters[0])),n.parameters[1]&&(a=tt(n.parameters[1]),D(a,n.parameters[1])),n.parameters[2]&&(e=O(n.parameters[2])),new K(r,a,e)}function Y(n,r){if(n.length>r)throw new b("effect:type-error",`Function supports up to ${r} parameters, Actual: ${n.length}`,{parameters:n})}function H(n){if(n.type==="color")return"<color>";if(n.unit){if(n.unit in G)return"<length>";if(n.unit in B)return"<angle>";if(n.unit==="%")return"<percentage>"}return"<double>"}function D(n,r){if(n<0)throw new b("effect:type-error",`Negative values are not allowed, Actual: ${n}`,{term:r})}function yn(n){if(n.type!=="quantity"||n.unit!==null)throw new b("effect:type-error",`Expected <double>, Actual: ${H(n)}`,{term:n})}function vn(n){if(n.type!=="quantity"||n.unit!==null&&n.unit!=="%")throw new b("effect:type-error",`Expected <double> or <percentage>, Actual: ${H(n)}`,{term:n})}un(X,Error),X.prototype.format=function(n){var r="Error: "+this.message;if(this.location){var a,e=null;for(a=0;a<n.length;a++)if(n[a].source===this.location.source){e=n[a].text.split(/\r\n|\n|\r/g);break}var f=this.location.start,F=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(f):f,k=this.location.source+":"+F.line+":"+F.column;if(e){var N=this.location.end,I=Z("",F.line.toString().length," "),p=e[f.line-1],d=(f.line===N.line?N.column:p.length+1)-f.column||1;r+=`
 --> `+k+`
`+I+` |
`+F.line+" | "+p+`
`+I+" | "+Z("",f.column-1," ")+Z("",d,"^")}else r+=`
 at `+k}return r},X.buildMessage=function(n,r){var a={literal:function(p){return'"'+f(p.text)+'"'},class:function(p){var d=p.parts.map(function(E){return Array.isArray(E)?F(E[0])+"-"+F(E[1]):F(E)});return"["+(p.inverted?"^":"")+d.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(p){return p.description}};function e(p){return p.charCodeAt(0).toString(16).toUpperCase()}function f(p){return p.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+e(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+e(d)})}function F(p){return p.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(d){return"\\x0"+e(d)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(d){return"\\x"+e(d)})}function k(p){return a[p.type](p)}function N(p){var d,E,v=p.map(k);if(v.sort(),v.length>0){for(d=1,E=1;d<v.length;d++)v[d-1]!==v[d]&&(v[E]=v[d],E++);v.length=E}switch(v.length){case 1:return v[0];case 2:return v[0]+" or "+v[1];default:return v.slice(0,-1).join(", ")+", or "+v[v.length-1]}}function I(p){return p?'"'+f(p)+'"':"end of input"}return"Expected "+N(n)+" but "+I(r)+" found."};const B={deg:1,grad:.9,rad:180/Math.PI,turn:360};function wn(n){if(n.type!=="quantity"||!(n.value===0&&n.unit===null||n.unit&&B[n.unit]!=null))throw new b("effect:type-error",`Expected <angle>, Actual: ${H(n)}`,{term:n})}const G={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function xn(n){if(n.type!=="quantity"||!(n.value===0&&n.unit===null||n.unit&&G[n.unit]!=null))throw new b("effect:type-error",`Expected <length>, Actual: ${H(n)}`,{term:n})}function O(n){vn(n);const r=n.value;return D(r,n),n.unit==="%"?.01*r:r}function bn(n){return yn(n),D(n.value,n),n.value}function An(n){return wn(n),n.value*B[n.unit]||0}function tt(n){return xn(n),n.value*G[n.unit]||0}function Mn(n){switch(n.colorType){case"hex":return Ke(n.value);case"named":return Rt(n.value);case"function":return En(n.value)}}function Rt(n){if(!Qe(n))throw new b("effect:unknown-color",`color '${n}' isn't valid`,{namedColor:n});return Ve(n)}const $n=/^rgba?/i,Fn=/^hsla?/i;function En(n){if(Y(n.parameters,4),$n.test(n.name))return[O(n.parameters[0]),O(n.parameters[1]),O(n.parameters[2]),n.parameters[3]?O(n.parameters[3]):1];if(Fn.test(n.name))return We(bn(n.parameters[0]),O(n.parameters[1]),O(n.parameters[2]),n.parameters[3]?O(n.parameters[3]):1);throw new b("effect:syntax-error",`Invalid color function '${n.name}'`,{colorFunction:n})}export{cn as d,Ot as e,an as l,Ct as t};
