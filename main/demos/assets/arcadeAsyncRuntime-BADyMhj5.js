import{C as pe,X as we,M as de,L as he,f as ge,m as me,s as ye,a as ne,p as ve,N as A,e as y,b as Y,D as re}from"./arcadeUtils-BD20HAM2.js";import{i as J,L as R,a as l,r as s,e as W,w as v,x as _,M as p,v as S,O as I,R as E,u as oe,P as g,E as B,z as C,h as f,U as O,X as K,d as $,c as be,m as U,I as Se,A as xe,H as Ie,s as Fe,b as P,K as Re,f as Ae,n as Q}from"./languageUtils-DaVAQTGe.js";import{registerFunctions as Me}from"./geomasync-a2YUIaKy.js";import{D as ae,cK as ee}from"./main-BvP2mMJi.js";import"./preload-helper-ExcqyqRp.js";import"./TimeOnly-DlrROwhf.js";import"./UnknownTimeZone-CQpr54yV.js";import"./ImmutableArray-BPVd6ESQ.js";import"./featureConversionUtils-DtD8mV_D.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FieldsIndex-CSxfwv8F.js";import"./number-DnoiM12R.js";import"./shared-DcECMfA2.js";import"./Field-Es9rqDok.js";import"./fieldType-CEOeHy7Y.js";import"./uuid-Cl5lrJ4c.js";import"./Query-DWs7GZ6H.js";import"./TimeExtent-BPaAkukn.js";import"./portalUtils-DOYqVA8U.js";import"./geometryEngineAsync-C_YiBQqO.js";import"./workers-Cm5C_BYW.js";const L=100;async function z(t,e){const n=[];for(let r=0;r<e.arguments.length;r++)n.push(await u(t,e.arguments[r]));return n}async function F(t,e,n){return e.preparsed===!0?n(t,null,e.arguments):n(t,e,await z(t,e))}class Ce extends Ae{constructor(e,n){super(),this.definition=null,this.context=null,this.definition=e,this.context=n}createFunction(e){return(...n)=>{const r={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(r.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,null);return D(this.definition,r,n,null)}}call(e,n){return k(e,n,(r,o,a)=>{const i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,n);return D(this.definition,i,a,n)})}marshalledCall(e,n,r,o){return o(e,n,async(a,i,c)=>{const w={spatialReference:e.spatialReference,globalScope:r.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return c=c.map(d=>!S(d)||d instanceof P?d:Q(d,e,o)),Q(await D(this.definition,w,c,n),r,o)})}}class M extends Fe{constructor(e){super(),this.source=e}async global(e){const n=this.executingContext.globalScope[e.toLowerCase()];if(n.valueset||(n.value=await u(this.executingContext,n.node),n.valueset=!0),S(n.value)&&!(n.value instanceof P)){const r=new P;r.fn=n.value,r.parameterEvaluator=k,r.context=this.executingContext,n.value=r}return n.value}setGlobal(e,n){if(S(n))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:n,valueset:!0,node:null}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=e.toLowerCase()),this.executingContext.exports[e]!==void 0}async loadModule(e){let n=e.spatialReference;n==null&&(n=new ae({wkid:102100})),this.moduleScope=ue({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:n,services:e.services,libraryResolver:new ne(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??fe,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await X(this.executingContext,this.source.syntax)}}async function k(t,e,n){return e.preparsed===!0?n(t,null,e.arguments):n(t,e,await z(t,e))}async function u(t,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"UpdateExpression":return await Le(t,e);case"AssignmentExpression":return await je(t,e);case"TemplateLiteral":return await Ye(t,e);case"Identifier":return await H(t,e);case"MemberExpression":return await Ve(t,e);case"Literal":return e.value;case"CallExpression":return await He(t,e);case"UnaryExpression":return await We(t,e);case"BinaryExpression":return await ze(t,e);case"LogicalExpression":return await Xe(t,e);case"ArrayExpression":return await _e(t,e);case"ObjectExpression":return await Ne(t,e);default:throw new l(t,s.Unrecognized,e)}}catch(n){throw oe(t,e,n)}}async function b(t,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"ImportDeclaration":return await Ge(t,e);case"ExportNamedDeclaration":return await qe(t,e);case"VariableDeclaration":return await le(t,e,0);case"BlockStatement":return await X(t,e);case"FunctionDeclaration":return await Ze(t,e);case"ReturnStatement":return await Pe(t,e);case"IfStatement":return await Ue(t,e);case"ExpressionStatement":return await De(t,e);case"ForStatement":return await ke(t,e);case"WhileStatement":return await Oe(t,e);case"ForInStatement":return await Ke(t,e);case"BreakStatement":return I;case"EmptyStatement":return p;case"ContinueStatement":return E;default:throw new l(t,s.Unrecognized,e)}}catch(n){throw oe(t,e,n)}}async function Ne(t,e){const n=[];for(let i=0;i<e.properties.length;i++){const c=e.properties[i],w=await u(t,c.value),d=c.key.type==="Identifier"?c.key.name:await u(t,c.key);n[i]={key:d,value:w}}const r={},o=new Map;for(let i=0;i<n.length;i++){const c=n[i];if(S(c.value))throw new l(t,s.NoFunctionInDictionary,e);if(g(c.key)===!1)throw new l(t,s.KeyMustBeString,e);let w=c.key.toString();const d=w.toLowerCase();o.has(d)?w=o.get(d):o.set(d,w),c.value===p?r[w]=null:r[w]=c.value}const a=new A(r);return a.immutable=!1,a}async function Oe(t,e){const n={testResult:!0,lastAction:p};if(n.testResult=await u(t,e.test),n.testResult===!1)return p;if(n.testResult!==!0)throw new l(t,s.BooleanConditionRequired,e);for(;n.testResult===!0&&(n.lastAction=await b(t,e.body),n.lastAction!==I)&&!(n.lastAction instanceof v);)if(n.testResult=await u(t,e.test),n.testResult!==!0&&n.testResult!==!1)throw new l(t,s.BooleanConditionRequired,e);return n.lastAction instanceof v?n.lastAction:p}async function te(t,e,n){const r=await b(t,e.body);return n.lastAction=r,n.lastAction===I||n.lastAction instanceof v?(n.testResult=!1,n):(e.update!==null&&await u(t,e.update),n)}async function $e(t,e,n){if(e.test!==null){const r=await u(t,e.test);if(t.abortSignal?.aborted===!0)throw new l(t,s.Cancelled,e);if(n.testResult=r,n.testResult===!1)return n;if(n.testResult!==!0)throw new l(t,s.BooleanConditionRequired,e);return te(t,e,n)}return te(t,e,n)}function Z(t,e,n,r,o,a){try{$e(t,e,n).then(()=>{try{n.testResult===!0?++a>L?(a=0,setTimeout(()=>{Z(t,e,n,r,o,a)},0)):Z(t,e,n,r,o,a):n.lastAction instanceof v?r(n.lastAction):r(p)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}async function ke(t,e){try{return e.init!==null&&(e.init.type==="VariableDeclaration"?await b(t,e.init):await u(t,e.init)),await new Promise((n,r)=>{Z(t,e,{testResult:!0,lastAction:p},o=>{n(o)},o=>{r(o)},0)})}catch(n){throw n}}function G(t,e,n,r,o,a,i,c,w,d){try{if(r<=a)return void c(p);o.value=i==="k"?n[a]:a,b(t,e.body).then(m=>{try{m instanceof v?c(m):m===I?c(p):++d>L?(d=0,setTimeout(()=>{G(t,e,n,r,o,a+1,i,c,w,d)},0)):G(t,e,n,r,o,a+1,i,c,w,d)}catch(j){w(j)}},m=>{w(m)})}catch(m){w(m)}}function q(t,e,n,r,o,a,i,c,w){try{if(n.length()<=o)return void i(p);r.value=a==="k"?n.get(o):o,b(t,e.body).then(d=>{d instanceof v?i(d):d===I?i(p):++w>L?(w=0,setTimeout(()=>{q(t,e,n,r,o+1,a,i,c,w)},0)):q(t,e,n,r,o+1,a,i,c,w)},d=>{c(d)})}catch(d){c(d)}}function T(t,e,n,r,o,a){try{if(a===void 0&&(a="i"),n.length===0)return void r.resolve(p);G(t,e,n,n.length,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Ee(t,e,n,r,o,a){try{if(a===void 0&&(a="i"),n.length()===0)return void r.resolve(p);q(t,e,n,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Be(t,e,n,r,o){try{T(t,e,n.keys(),r,o,"k")}catch(a){r.reject(a)}}function V(t,e,n,r,o,a,i,c){try{t.next().then(w=>{try{if(w===null)a(p);else{const d=re.createFromGraphicLikeObject(w.geometry,w.attributes,r,e.timeZone);d._underlyingGraphic=w,o.value=d,b(e,n.body).then(m=>{try{m===I?a(p):m instanceof v?a(m):++c>L?(c=0,setTimeout(()=>{V(t,e,n,r,o,a,i,c)},0)):V(t,e,n,r,o,a,i,c)}catch(j){i(j)}},m=>{i(m)})}}catch(d){i(d)}},w=>{i(w)})}catch(w){i(w)}}async function Ke(t,e){return new Promise((n,r)=>{u(t,e.right).then(o=>{try{let a;a=e.left.type==="VariableDeclaration"?b(t,e.left):Promise.resolve(),a.then(()=>{try{const i=y(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let c=null;if(t.localScope!=null&&t.localScope[i]!==void 0&&(c=t.localScope[i]),c===null&&t.globalScope[i]!==void 0&&(c=t.globalScope[i]),c===null)return void r(new l(t,s.InvalidIdentifier,e));B(o)||g(o)?T(t,e,o,{reject:r,resolve:n},c):K(o)?Ee(t,e,o,{reject:r,resolve:n},c):o instanceof A||O(o)?Be(t,e,o,{reject:r,resolve:n},c):Re(o)?V(o.iterator(t.abortSignal),t,e,o,c,w=>{n(w)},w=>{r(w)},0):T(t,e,[],{reject:r,resolve:n},c)}catch(i){r(i)}},r)}catch(a){r(a)}},r)})}async function Le(t,e){const n=e.argument;if(n.type==="CallExpression")throw new l(t,s.NeverReach,e);if(n.type==="MemberExpression"){const a=await u(t,n.object);let i,c;if(n.computed===!0)i=await u(t,n.property);else{if(n.property.type!=="Identifier")throw new l(t,s.Unrecognized,e);i=n.property.name}if(B(a)){if(!C(i))throw new l(t,s.ArrayAccessorMustBeNumber,e);if(i<0&&(i=a.length+i),i<0||i>=a.length)throw new l(t,s.OutOfBounds,e);c=f(a[i]),a[i]=e.operator==="++"?c+1:c-1}else if(a instanceof A){if(g(i)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(a.hasField(i)!==!0)throw new l(t,s.FieldNotFound,e,{key:i});c=f(a.field(i)),a.setField(i,e.operator==="++"?c+1:c-1)}else if(a instanceof M){if(g(i)===!1)throw new l(t,s.ModuleAccessorMustBeString,e);if(a.hasGlobal(i)!==!0)throw new l(t,s.ModuleExportNotFound,e);c=f(await a.global(i)),a.setGlobal(i,e.operator==="++"?c+1:c-1)}else{if(!O(a))throw K(a)?new l(t,s.Immutable,e):new l(t,s.InvalidParameter,e);if(g(i)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(a.hasField(i)!==!0)throw new l(t,s.FieldNotFound,e,{key:i});c=f(a.field(i)),a.setField(i,e.operator==="++"?c+1:c-1)}return e.prefix===!1?c:e.operator==="++"?c+1:c-1}const r=y(n);let o;if(t.localScope!=null&&t.localScope[r]!==void 0)return o=f(t.localScope[r].value),t.localScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(t.globalScope[r]!==void 0)return o=f(t.globalScope[r].value),t.globalScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new l(t,s.InvalidIdentifier,e)}function x(t,e,n,r,o){switch(e){case"=":return t===p?null:t;case"/=":return f(n)/f(t);case"*=":return f(n)*f(t);case"-=":return f(n)-f(t);case"+=":return g(n)||g(t)?$(n)+$(t):f(n)+f(t);case"%=":return f(n)%f(t);default:throw new l(o,s.UnsupportedOperator,r)}}async function je(t,e){const n=e.left;if(n.type==="MemberExpression"){const o=await u(t,n.object);let a;if(n.computed===!0)a=await u(t,n.property);else{if(n.property.type!=="Identifier")throw new l(t,s.InvalidIdentifier,e);a=n.property.name}const i=await u(t,e.right);if(B(o)){if(!C(a))throw new l(t,s.ArrayAccessorMustBeNumber,e);if(a<0&&(a=o.length+a),a<0||a>o.length)throw new l(t,s.OutOfBounds,e);if(a===o.length){if(e.operator!=="=")throw new l(t,s.OutOfBounds,e);o[a]=x(i,e.operator,o[a],e,t)}else o[a]=x(i,e.operator,o[a],e,t)}else if(o instanceof A){if(g(a)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,x(i,e.operator,o.field(a),e,t));else{if(e.operator!=="=")throw new l(t,s.FieldNotFound,e,{key:a});o.setField(a,x(i,e.operator,null,e,t))}}else if(o instanceof M){if(g(a)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(o.hasGlobal(a)!==!0)throw new l(t,s.ModuleExportNotFound,e);o.setGlobal(a,x(i,e.operator,await o.global(a),e,t))}else{if(!O(o))throw K(o)?new l(t,s.Immutable,e):new l(t,s.InvalidParameter,e);if(g(a)===!1)throw new l(t,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,x(i,e.operator,o.field(a),e,t));else{if(e.operator!=="=")throw new l(t,s.FieldNotFound,e,{key:a});o.setField(a,x(i,e.operator,null,e,t))}}return p}const r=y(n);if(t.localScope!=null&&t.localScope[r]!==void 0){const o=await u(t,e.right);return t.localScope[r]={value:x(o,e.operator,t.localScope[r].value,e,t),valueset:!0,node:e.right},p}if(t.globalScope[r]!==void 0){const o=await u(t,e.right);return t.globalScope[r]={value:x(o,e.operator,t.globalScope[r].value,e,t),valueset:!0,node:e.right},p}throw new l(t,s.InvalidIdentifier,e)}async function De(t,e){const n=await u(t,e.expression);return n===p?p:new _(n)}async function Ue(t,e){const n=await u(t,e.test);if(n===!0)return b(t,e.consequent);if(n===!1)return e.alternate!==null?b(t,e.alternate):p;throw new l(t,s.BooleanConditionRequired,e)}async function X(t,e){return ie(t,e,0)}async function ie(t,e,n){if(n>=e.body.length)return p;const r=await b(t,e.body[n]);return r instanceof v||r===I||r===E||n===e.body.length-1?r:ie(t,e,n+1)}async function Pe(t,e){if(e.argument===null)return new v(p);const n=await u(t,e.argument);return new v(n)}async function Ze(t,e){const n=y(e.id);return t.globalScope[n]={valueset:!0,node:null,value:new Ce(e,t)},p}async function Ge(t,e){const n=y(e.specifiers[0].local),r=t.libraryResolver.loadLibrary(n);let o;return t.libraryResolver._moduleSingletons?.has(r.uri)?o=t.libraryResolver._moduleSingletons.get(r.uri):(o=new M(r),await o.loadModule(t),t.libraryResolver._moduleSingletons?.set(r.uri,o)),t.globalScope[n]={value:o,valueset:!0,node:e},p}async function qe(t,e){if(await b(t,e.declaration),e.declaration.type==="FunctionDeclaration")t.exports[y(e.declaration.id)]="function";else if(e.declaration.type==="VariableDeclaration")for(const n of e.declaration.declarations)t.exports[y(n.id)]="variable";return p}async function le(t,e,n){return n>=e.declarations.length?p:(await Te(t,e.declarations[n]),n===e.declarations.length-1||await le(t,e,n+1),p)}async function Te(t,e){let n=null;if(n=e.init===null?null:await u(t,e.init),t.localScope!==null){if(n===p&&(n=null),e.id.type!=="Identifier")throw new l(t,s.InvalidIdentifier,e);const o=y(e.id);return void(t.localScope!=null&&(t.localScope[o]={value:n,valueset:!0,node:e.init}))}if(e.id.type!=="Identifier")throw new l(t,s.InvalidIdentifier,e);const r=y(e.id);n===p&&(n=null),t.globalScope[r]={value:n,valueset:!0,node:e.init}}async function Ve(t,e){const n=await u(t,e.object);if(n===null)throw new l(t,s.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(n instanceof A||O(n))return n.field(e.property.name);if(n instanceof ee)return Y(n,e.property.name,t,e);if(n instanceof M){if(!n.hasGlobal(e.property.name))throw new l(t,s.InvalidIdentifier,e);return n.global(e.property.name)}throw new l(t,s.InvalidMemberAccessKey,e)}throw new l(t,s.InvalidMemberAccessKey,e)}let r=await u(t,e.property);if(n instanceof A||O(n)){if(g(r))return n.field(r);throw new l(t,s.InvalidMemberAccessKey,e)}if(n instanceof M){if(g(r))return n.global(r);throw new l(t,s.InvalidMemberAccessKey,e)}if(n instanceof ee){if(g(r))return Y(n,r,t,e);throw new l(t,s.InvalidMemberAccessKey,e)}if(B(n)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l(t,s.OutOfBounds,e);return n[r]}throw new l(t,s.InvalidMemberAccessKey,e)}if(K(n)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new l(t,s.OutOfBounds,e);return n.get(r)}throw new l(t,s.InvalidMemberAccessKey,e)}if(g(n)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new l(t,s.OutOfBounds,e);return n[r]}throw new l(t,s.InvalidMemberAccessKey,e)}throw new l(t,s.InvalidMemberAccessKey,e)}async function We(t,e){const n=await u(t,e.argument);if(R(n)){if(e.operator==="!")return!n;if(e.operator==="-")return-1*f(n);if(e.operator==="+")return 1*f(n);if(e.operator==="~")return~f(n);throw new l(t,s.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*f(n);if(e.operator==="+")return 1*f(n);if(e.operator==="~")return~f(n);throw new l(t,s.UnsupportedUnaryOperator,e)}async function _e(t,e){const n=[];for(let r=0;r<e.elements.length;r++)n.push(await u(t,e.elements[r]));for(let r=0;r<n.length;r++){if(S(n[r]))throw new l(t,s.NoFunctionInArray,e);n[r]===p&&(n[r]=null)}return n}async function ze(t,e){const n=await u(t,e.left),r=await u(t,e.right);switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return Se(f(n),f(r),e.operator);case"==":return U(n,r);case"!=":return!U(n,r);case"<":case">":case"<=":case">=":return be(n,r,e.operator);case"+":return g(n)||g(r)?$(n)+$(r):f(n)+f(r);case"-":return f(n)-f(r);case"*":return f(n)*f(r);case"/":return f(n)/f(r);case"%":return f(n)%f(r);default:throw new l(t,s.UnsupportedOperator,e)}}async function Xe(t,e){const n=await u(t,e.left);if(!R(n))throw new l(t,s.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":{if(n===!0)return n;const r=await u(t,e.right);if(R(r))return r;throw new l(t,s.LogicExpressionOrAnd,e)}case"&&":{if(n===!1)return n;const r=await u(t,e.right);if(R(r))return r;throw new l(t,s.LogicExpressionOrAnd,e)}default:throw new l(t,s.LogicExpressionOrAnd,e)}}async function H(t,e){const n=y(e);if(t.localScope!=null&&t.localScope[n]!==void 0){const r=t.localScope[n];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=u(t,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}if(t.globalScope[n]!==void 0){const r=t.globalScope[n];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=u(t,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}throw new l(t,s.InvalidIdentifier,e)}async function He(t,e){if(e.callee.type==="MemberExpression"){const r=await u(t,e.callee.object);if(!(r instanceof M))throw new l(t,s.FunctionNotFound,e);const o=e.callee.computed===!1?e.callee.property.name:await u(t,e.callee.property);if(!r.hasGlobal(o))throw new l(t,s.FunctionNotFound,e);const a=await r.global(o);if(!S(a))throw new l(t,s.CallNonFunction,e);return a.call(t,e)}if(e.callee.type!=="Identifier")throw new l(t,s.FunctionNotFound,e);const n=y(e.callee);if(t.localScope!=null&&t.localScope[n]!==void 0){const r=t.localScope[n];if(S(r.value))return r.value.call(t,e);throw new l(t,s.CallNonFunction,e)}if(t.globalScope[n]!==void 0){const r=t.globalScope[n];if(S(r.value))return r.value.call(t,e);throw new l(t,s.CallNonFunction,e)}throw new l(t,s.FunctionNotFound,e)}async function Ye(t,e){let n="",r=0;for(const o of e.quasis)if(n+=o.value?o.value.cooked:"",o.tail===!1){if(e.expressions[r]){const a=await u(t,e.expressions[r]);if(S(a))throw new l(t,s.NoFunctionInTemplateLiteral,e);n+=$(a)}r++}return n}const h={};async function se(t,e,n,r){const o=await u(t,e.arguments[n]);if(U(o,r))return u(t,e.arguments[n+1]);const a=e.arguments.length-n;return a===1?u(t,e.arguments[n]):a===2?null:a===3?u(t,e.arguments[n+2]):se(t,e,n+2,r)}async function ce(t,e,n,r){if(r===!0)return u(t,e.arguments[n+1]);if(e.arguments.length-n===3)return u(t,e.arguments[n+2]);const o=await u(t,e.arguments[n+2]);if(R(o)===!1)throw new l(t,s.ModuleExportNotFound,e.arguments[n+2]);return ce(t,e,n+2,o)}async function D(t,e,n,r){const o=t.body;if(n.length!==t.params.length)throw new l(e,s.WrongNumberOfParameters,null);for(let i=0;i<n.length;i++){const c=t.params[i];c.type==="Identifier"&&e.localScope!=null&&(e.localScope[y(c)]={d:null,value:n[i],valueset:!0,node:null})}const a=await b(e,o);if(a instanceof v)return a.value;if(a===I)throw new l(e,s.UnexpectedToken,r);if(a===E)throw new l(e,s.UnexpectedToken,r);return a instanceof _?a.value:a}pe(h,F),we(h,F),de(h,F),he(h,F),ge(h,F),Me({functions:h,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:F,standardFunctionAsync:k}),h.iif=async function(t,e){J(e.arguments===null?[]:e.arguments,3,3,t,e);const n=await u(t,e.arguments[0]);if(R(n)===!1)throw new l(t,s.BooleanConditionRequired,e);return u(t,n?e.arguments[1]:e.arguments[2])},h.defaultvalue=async function(t,e){J(e.arguments===null?[]:e.arguments,2,3,t,e);const n=await u(t,e.arguments[0]);if(e.arguments.length===3){const r=await u(t,e.arguments[1]),o=me(n,r);return o!=null&&o!==""?o:u(t,e.arguments[2])}return n==null||n===""?u(t,e.arguments[1]):n},h.decode=async function(t,e){if(e.arguments.length<2)throw new l(t,s.WrongNumberOfParameters,e);if(e.arguments.length===2)return u(t,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new l(t,s.WrongNumberOfParameters,e);return se(t,e,1,await u(t,e.arguments[0]))},h.when=async function(t,e){if(e.arguments.length<3)throw new l(t,s.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new l(t,s.WrongNumberOfParameters,e);const n=await u(t,e.arguments[0]);if(R(n)===!1)throw new l(t,s.BooleanConditionRequired,e.arguments[0]);return ce(t,e,0,n)};const Je={fixSpatialReference:xe,parseArguments:z,standardFunction:F,standardFunctionAsync:k,evaluateIdentifier:H};for(const t in h)h[t]={value:new W(h[t]),valueset:!0,node:null};const N=function(){};function ue(t,e,n){const r=new N;t==null&&(t={}),e==null&&(e={});const o=new A({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const a in e)r[a]={value:new W(e[a]),native:!0,valueset:!0,node:null};for(const a in t)r[a]={value:Ie(t[a])?re.createFromGraphic(t[a],n):t[a],valueset:!0,node:null};return r}function fe(t){console.log(t)}N.prototype=h,N.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},N.prototype.pi={value:Math.PI,valueset:!0,node:null};const xt=Je;function Qe(t){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:F,standardFunctionAsync:k,evaluateIdentifier:H};for(let n=0;n<t.length;n++)t[n].registerFunctions(e);for(const n in e.functions)h[n]={value:new W(e.functions[n]),valueset:!0,node:null},N.prototype[n]=h[n];for(let n=0;n<e.signatures.length;n++)ye(e.signatures[n],"async")}async function It(t,e){let n=e.spatialReference;n==null&&(n=new ae({wkid:102100}));let r=null;t.usesModules&&(r=new ne(new Map,t.loadedModules));const o=ue(e.vars,e.customfunctions,e.timeZone),a={spatialReference:n,services:e.services,exports:{},libraryResolver:r,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console??fe,timeZone:e.timeZone??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},i=await X(a,t);if(i instanceof v||i instanceof _){const c=i.value;if(c===p)return null;if(S(c))throw new l(a,s.IllegalResult,null);return c}if(i===p)return null;throw i===I?new l(a,s.IllegalResult,null):i===E?new l(a,s.IllegalResult,null):new l(a,s.NeverReach,null)}Qe([ve]);export{It as executeScript,Qe as extend,xt as functionHelper};
