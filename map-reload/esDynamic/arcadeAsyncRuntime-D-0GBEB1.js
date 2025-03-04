import{C as pe,X as de,M as he,L as ge,f as me,m as ye,s as ve,a as J,p as be,N as R,e as y,b as Q,D as $}from"./arcadeUtils-Dl1BykHR.js";import{i as ee,L as A,a as l,r as s,e as D,w as v,x as P,M as f,v as S,O as x,R as E,u as ne,P as h,E as j,z as C,h as w,U as N,X as K,d as O,c as Se,m as Z,I as xe,A as Ie,H as Fe,s as Re,b as G,K as Ae,f as Me,n as te}from"./languageUtils--EoG7ROY.js";import{registerFunctions as Ce}from"./geomasync-DIwsI7fF.js";import{B as re,cH as oe}from"./main-DB4i4A8K.js";const L=100;async function q(n,e){const t=[];for(let r=0;r<e.arguments.length;r++)t.push(await u(n,e.arguments[r]));return t}async function F(n,e,t){return e.preparsed===!0?t(n,null,e.arguments):t(n,e,await q(n,e))}class Ne extends Me{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{const r={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(r.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,null);return Y(this.definition,r,t,null)}}call(e,t){return k(e,t,(r,o,a)=>{const i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,t);return Y(this.definition,i,a,t)})}marshalledCall(e,t,r,o){return o(e,t,async(a,i,c)=>{const p={spatialReference:e.spatialReference,globalScope:r.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return c=c.map(d=>!S(d)||d instanceof G?d:te(d,e,o)),te(await Y(this.definition,p,c,t),r,o)})}}class M extends Re{constructor(e){super(),this.source=e}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await u(this.executingContext,t.node),t.valueset=!0),S(t.value)&&!(t.value instanceof G)){const r=new G;r.fn=t.value,r.parameterEvaluator=k,r.context=this.executingContext,t.value=r}return t.value}setGlobal(e,t){if(S(t))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=e.toLowerCase()),this.executingContext.exports[e]!==void 0}async loadModule(e){let t=e.spatialReference;t==null&&(t=new re({wkid:102100})),this.moduleScope=ue({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new J(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??fe,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await H(this.executingContext,this.source.syntax)}}async function k(n,e,t){return e.preparsed===!0?t(n,null,e.arguments):t(n,e,await q(n,e))}async function u(n,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"UpdateExpression":return await Ue(n,e);case"AssignmentExpression":return await De(n,e);case"TemplateLiteral":return await Qe(n,e);case"Identifier":return await X(n,e);case"MemberExpression":return await _e(n,e);case"Literal":return e.value;case"CallExpression":return await Je(n,e);case"UnaryExpression":return await ze(n,e);case"BinaryExpression":return await Xe(n,e);case"LogicalExpression":return await Ye(n,e);case"ArrayExpression":return await He(n,e);case"ObjectExpression":return await Oe(n,e);default:throw new l(n,s.Unrecognized,e)}}catch(t){throw ne(n,e,t)}}async function b(n,e){e.breakpoint&&await e.breakpoint();try{switch(e.type){case"ImportDeclaration":return await Te(n,e);case"ExportNamedDeclaration":return await Ve(n,e);case"VariableDeclaration":return await le(n,e,0);case"BlockStatement":return await H(n,e);case"FunctionDeclaration":return await qe(n,e);case"ReturnStatement":return await Ge(n,e);case"IfStatement":return await Ze(n,e);case"ExpressionStatement":return await Pe(n,e);case"ForStatement":return await Ee(n,e);case"WhileStatement":return await ke(n,e);case"ForInStatement":return await Le(n,e);case"BreakStatement":return x;case"EmptyStatement":return f;case"ContinueStatement":return E;default:throw new l(n,s.Unrecognized,e)}}catch(t){throw ne(n,e,t)}}async function Oe(n,e){const t=[];for(let i=0;i<e.properties.length;i++){const c=e.properties[i],p=await u(n,c.value),d=c.key.type==="Identifier"?c.key.name:await u(n,c.key);t[i]={key:d,value:p}}const r={},o=new Map;for(let i=0;i<t.length;i++){const c=t[i];if(S(c.value))throw new l(n,s.NoFunctionInDictionary,e);if(h(c.key)===!1)throw new l(n,s.KeyMustBeString,e);let p=c.key.toString();const d=p.toLowerCase();o.has(d)?p=o.get(d):o.set(d,p),c.value===f?r[p]=null:r[p]=c.value}const a=new R(r);return a.immutable=!1,a}async function ke(n,e){const t={testResult:!0,lastAction:f};if(t.testResult=await u(n,e.test),t.testResult===!1)return f;if(t.testResult!==!0)throw new l(n,s.BooleanConditionRequired,e);for(;t.testResult===!0&&(t.lastAction=await b(n,e.body),t.lastAction!==x)&&!(t.lastAction instanceof v);)if(t.testResult=await u(n,e.test),t.testResult!==!0&&t.testResult!==!1)throw new l(n,s.BooleanConditionRequired,e);return t.lastAction instanceof v?t.lastAction:f}async function ae(n,e,t){const r=await b(n,e.body);return t.lastAction=r,t.lastAction===x||t.lastAction instanceof v?(t.testResult=!1,t):(e.update!==null&&await u(n,e.update),t)}async function Be(n,e,t){if(e.test!==null){const r=await u(n,e.test);if(n.abortSignal?.aborted===!0)throw new l(n,s.Cancelled,e);if(t.testResult=r,t.testResult===!1)return t;if(t.testResult!==!0)throw new l(n,s.BooleanConditionRequired,e);return ae(n,e,t)}return ae(n,e,t)}function T(n,e,t,r,o,a){try{Be(n,e,t).then(()=>{try{t.testResult===!0?++a>L?(a=0,setTimeout(()=>{T(n,e,t,r,o,a)},0)):T(n,e,t,r,o,a):t.lastAction instanceof v?r(t.lastAction):r(f)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}async function Ee(n,e){try{return e.init!==null&&(e.init.type==="VariableDeclaration"?await b(n,e.init):await u(n,e.init)),await new Promise((t,r)=>{T(n,e,{testResult:!0,lastAction:f},o=>{t(o)},o=>{r(o)},0)})}catch(t){throw t}}function V(n,e,t,r,o,a,i,c,p,d){try{if(r<=a)return void c(f);o.value=i==="k"?t[a]:a,b(n,e.body).then(m=>{try{m instanceof v?c(m):m===x?c(f):++d>L?(d=0,setTimeout(()=>{V(n,e,t,r,o,a+1,i,c,p,d)},0)):V(n,e,t,r,o,a+1,i,c,p,d)}catch(U){p(U)}},m=>{p(m)})}catch(m){p(m)}}function W(n,e,t,r,o,a,i,c,p){try{if(t.length()<=o)return void i(f);r.value=a==="k"?t.get(o):o,b(n,e.body).then(d=>{d instanceof v?i(d):d===x?i(f):++p>L?(p=0,setTimeout(()=>{W(n,e,t,r,o+1,a,i,c,p)},0)):W(n,e,t,r,o+1,a,i,c,p)},d=>{c(d)})}catch(d){c(d)}}function _(n,e,t,r,o,a){try{if(a===void 0&&(a="i"),t.length===0)return void r.resolve(f);V(n,e,t,t.length,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function je(n,e,t,r,o,a){try{if(a===void 0&&(a="i"),t.length()===0)return void r.resolve(f);W(n,e,t,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Ke(n,e,t,r,o){try{_(n,e,t.keys(),r,o,"k")}catch(a){r.reject(a)}}function z(n,e,t,r,o,a,i,c){try{n.next().then(p=>{try{if(p===null)a(f);else{const d=$.createFromGraphicLikeObject(p.geometry,p.attributes,r,e.timeZone);d._underlyingGraphic=p,o.value=d,b(e,t.body).then(m=>{try{m===x?a(f):m instanceof v?a(m):++c>L?(c=0,setTimeout(()=>{z(n,e,t,r,o,a,i,c)},0)):z(n,e,t,r,o,a,i,c)}catch(U){i(U)}},m=>{i(m)})}}catch(d){i(d)}},p=>{i(p)})}catch(p){i(p)}}async function Le(n,e){return new Promise((t,r)=>{u(n,e.right).then(o=>{try{let a;a=e.left.type==="VariableDeclaration"?b(n,e.left):Promise.resolve(),a.then(()=>{try{const i=y(e.left.type==="VariableDeclaration"?e.left.declarations[0].id:e.left);let c=null;if(n.localScope!=null&&n.localScope[i]!==void 0&&(c=n.localScope[i]),c===null&&n.globalScope[i]!==void 0&&(c=n.globalScope[i]),c===null)return void r(new l(n,s.InvalidIdentifier,e));j(o)||h(o)?_(n,e,o,{reject:r,resolve:t},c):K(o)?je(n,e,o,{reject:r,resolve:t},c):o instanceof R||N(o)?Ke(n,e,o,{reject:r,resolve:t},c):Ae(o)?z(o.iterator(n.abortSignal),n,e,o,c,p=>{t(p)},p=>{r(p)},0):_(n,e,[],{reject:r,resolve:t},c)}catch(i){r(i)}},r)}catch(a){r(a)}},r)})}async function Ue(n,e){const t=e.argument;if(t.type==="CallExpression")throw new l(n,s.NeverReach,e);if(t.type==="MemberExpression"){const a=await u(n,t.object);let i,c;if(t.computed===!0)i=await u(n,t.property);else{if(t.property.type!=="Identifier")throw new l(n,s.Unrecognized,e);i=t.property.name}if(j(a)){if(!C(i))throw new l(n,s.ArrayAccessorMustBeNumber,e);if(i<0&&(i=a.length+i),i<0||i>=a.length)throw new l(n,s.OutOfBounds,e);c=w(a[i]),a[i]=e.operator==="++"?c+1:c-1}else if(a instanceof R){if(h(i)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(a.hasField(i)!==!0)throw new l(n,s.FieldNotFound,e,{key:i});c=w(a.field(i)),a.setField(i,e.operator==="++"?c+1:c-1)}else if(a instanceof M){if(h(i)===!1)throw new l(n,s.ModuleAccessorMustBeString,e);if(a.hasGlobal(i)!==!0)throw new l(n,s.ModuleExportNotFound,e);c=w(await a.global(i)),a.setGlobal(i,e.operator==="++"?c+1:c-1)}else{if(!N(a))throw K(a)?new l(n,s.Immutable,e):new l(n,s.InvalidParameter,e);if(h(i)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(a.hasField(i)!==!0)throw new l(n,s.FieldNotFound,e,{key:i});c=w(a.field(i)),a.setField(i,e.operator==="++"?c+1:c-1)}return e.prefix===!1?c:e.operator==="++"?c+1:c-1}const r=y(t);let o;if(n.localScope!=null&&n.localScope[r]!==void 0)return o=w(n.localScope[r].value),n.localScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(n.globalScope[r]!==void 0)return o=w(n.globalScope[r].value),n.globalScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new l(n,s.InvalidIdentifier,e)}function I(n,e,t,r,o){switch(e){case"=":return n===f?null:n;case"/=":return w(t)/w(n);case"*=":return w(t)*w(n);case"-=":return w(t)-w(n);case"+=":return h(t)||h(n)?O(t)+O(n):w(t)+w(n);case"%=":return w(t)%w(n);default:throw new l(o,s.UnsupportedOperator,r)}}async function De(n,e){const t=e.left;if(t.type==="MemberExpression"){const o=await u(n,t.object);let a;if(t.computed===!0)a=await u(n,t.property);else{if(t.property.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);a=t.property.name}const i=await u(n,e.right);if(j(o)){if(!C(a))throw new l(n,s.ArrayAccessorMustBeNumber,e);if(a<0&&(a=o.length+a),a<0||a>o.length)throw new l(n,s.OutOfBounds,e);if(a===o.length){if(e.operator!=="=")throw new l(n,s.OutOfBounds,e);o[a]=I(i,e.operator,o[a],e,n)}else o[a]=I(i,e.operator,o[a],e,n)}else if(o instanceof R){if(h(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,I(i,e.operator,o.field(a),e,n));else{if(e.operator!=="=")throw new l(n,s.FieldNotFound,e,{key:a});o.setField(a,I(i,e.operator,null,e,n))}}else if(o instanceof M){if(h(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(o.hasGlobal(a)!==!0)throw new l(n,s.ModuleExportNotFound,e);o.setGlobal(a,I(i,e.operator,await o.global(a),e,n))}else{if(!N(o))throw K(o)?new l(n,s.Immutable,e):new l(n,s.InvalidParameter,e);if(h(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,I(i,e.operator,o.field(a),e,n));else{if(e.operator!=="=")throw new l(n,s.FieldNotFound,e,{key:a});o.setField(a,I(i,e.operator,null,e,n))}}return f}const r=y(t);if(n.localScope!=null&&n.localScope[r]!==void 0){const o=await u(n,e.right);return n.localScope[r]={value:I(o,e.operator,n.localScope[r].value,e,n),valueset:!0,node:e.right},f}if(n.globalScope[r]!==void 0){const o=await u(n,e.right);return n.globalScope[r]={value:I(o,e.operator,n.globalScope[r].value,e,n),valueset:!0,node:e.right},f}throw new l(n,s.InvalidIdentifier,e)}async function Pe(n,e){const t=await u(n,e.expression);return t===f?f:new P(t)}async function Ze(n,e){const t=await u(n,e.test);if(t===!0)return b(n,e.consequent);if(t===!1)return e.alternate!==null?b(n,e.alternate):f;throw new l(n,s.BooleanConditionRequired,e)}async function H(n,e){return ie(n,e,0)}async function ie(n,e,t){if(t>=e.body.length)return f;const r=await b(n,e.body[t]);return r instanceof v||r===x||r===E||t===e.body.length-1?r:ie(n,e,t+1)}async function Ge(n,e){if(e.argument===null)return new v(f);const t=await u(n,e.argument);return new v(t)}async function qe(n,e){const t=y(e.id);return n.globalScope[t]={valueset:!0,node:null,value:new Ne(e,n)},f}async function Te(n,e){const t=y(e.specifiers[0].local),r=n.libraryResolver.loadLibrary(t);let o;return n.libraryResolver._moduleSingletons?.has(r.uri)?o=n.libraryResolver._moduleSingletons.get(r.uri):(o=new M(r),await o.loadModule(n),n.libraryResolver._moduleSingletons?.set(r.uri,o)),n.globalScope[t]={value:o,valueset:!0,node:e},f}async function Ve(n,e){if(await b(n,e.declaration),e.declaration.type==="FunctionDeclaration")n.exports[y(e.declaration.id)]="function";else if(e.declaration.type==="VariableDeclaration")for(const t of e.declaration.declarations)n.exports[y(t.id)]="variable";return f}async function le(n,e,t){return t>=e.declarations.length?f:(await We(n,e.declarations[t]),t===e.declarations.length-1||await le(n,e,t+1),f)}async function We(n,e){let t=null;if(t=e.init===null?null:await u(n,e.init),n.localScope!==null){if(t===f&&(t=null),e.id.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);const o=y(e.id);return void(n.localScope!=null&&(n.localScope[o]={value:t,valueset:!0,node:e.init}))}if(e.id.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);const r=y(e.id);t===f&&(t=null),n.globalScope[r]={value:t,valueset:!0,node:e.init}}async function _e(n,e){const t=await u(n,e.object);if(t===null)throw new l(n,s.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(t instanceof R||N(t))return t.field(e.property.name);if(t instanceof oe)return Q(t,e.property.name,n,e);if(t instanceof M){if(!t.hasGlobal(e.property.name))throw new l(n,s.InvalidIdentifier,e);return t.global(e.property.name)}throw new l(n,s.InvalidMemberAccessKey,e)}throw new l(n,s.InvalidMemberAccessKey,e)}let r=await u(n,e.property);if(t instanceof R||N(t)){if(h(r))return t.field(r);throw new l(n,s.InvalidMemberAccessKey,e)}if(t instanceof M){if(h(r))return t.global(r);throw new l(n,s.InvalidMemberAccessKey,e)}if(t instanceof oe){if(h(r))return Q(t,r,n,e);throw new l(n,s.InvalidMemberAccessKey,e)}if(j(t)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new l(n,s.OutOfBounds,e);return t[r]}throw new l(n,s.InvalidMemberAccessKey,e)}if(K(t)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length()+r),r>=t.length()||r<0)throw new l(n,s.OutOfBounds,e);return t.get(r)}throw new l(n,s.InvalidMemberAccessKey,e)}if(h(t)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new l(n,s.OutOfBounds,e);return t[r]}throw new l(n,s.InvalidMemberAccessKey,e)}throw new l(n,s.InvalidMemberAccessKey,e)}async function ze(n,e){const t=await u(n,e.argument);if(A(t)){if(e.operator==="!")return!t;if(e.operator==="-")return-1*w(t);if(e.operator==="+")return 1*w(t);if(e.operator==="~")return~w(t);throw new l(n,s.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*w(t);if(e.operator==="+")return 1*w(t);if(e.operator==="~")return~w(t);throw new l(n,s.UnsupportedUnaryOperator,e)}async function He(n,e){const t=[];for(let r=0;r<e.elements.length;r++)t.push(await u(n,e.elements[r]));for(let r=0;r<t.length;r++){if(S(t[r]))throw new l(n,s.NoFunctionInArray,e);t[r]===f&&(t[r]=null)}return t}async function Xe(n,e){const t=await u(n,e.left),r=await u(n,e.right);switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return xe(w(t),w(r),e.operator);case"==":return Z(t,r);case"!=":return!Z(t,r);case"<":case">":case"<=":case">=":return Se(t,r,e.operator);case"+":return h(t)||h(r)?O(t)+O(r):w(t)+w(r);case"-":return w(t)-w(r);case"*":return w(t)*w(r);case"/":return w(t)/w(r);case"%":return w(t)%w(r);default:throw new l(n,s.UnsupportedOperator,e)}}async function Ye(n,e){const t=await u(n,e.left);if(!A(t))throw new l(n,s.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":{if(t===!0)return t;const r=await u(n,e.right);if(A(r))return r;throw new l(n,s.LogicExpressionOrAnd,e)}case"&&":{if(t===!1)return t;const r=await u(n,e.right);if(A(r))return r;throw new l(n,s.LogicExpressionOrAnd,e)}default:throw new l(n,s.LogicExpressionOrAnd,e)}}async function X(n,e){const t=y(e);if(n.localScope!=null&&n.localScope[t]!==void 0){const r=n.localScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=u(n,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}if(n.globalScope[t]!==void 0){const r=n.globalScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=u(n,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}throw new l(n,s.InvalidIdentifier,e)}async function Je(n,e){if(e.callee.type==="MemberExpression"){const r=await u(n,e.callee.object);if(!(r instanceof M))throw new l(n,s.FunctionNotFound,e);const o=e.callee.computed===!1?e.callee.property.name:await u(n,e.callee.property);if(!r.hasGlobal(o))throw new l(n,s.FunctionNotFound,e);const a=await r.global(o);if(!S(a))throw new l(n,s.CallNonFunction,e);return a.call(n,e)}if(e.callee.type!=="Identifier")throw new l(n,s.FunctionNotFound,e);const t=y(e.callee);if(n.localScope!=null&&n.localScope[t]!==void 0){const r=n.localScope[t];if(S(r.value))return r.value.call(n,e);throw new l(n,s.CallNonFunction,e)}if(n.globalScope[t]!==void 0){const r=n.globalScope[t];if(S(r.value))return r.value.call(n,e);throw new l(n,s.CallNonFunction,e)}throw new l(n,s.FunctionNotFound,e)}async function Qe(n,e){let t="",r=0;for(const o of e.quasis)if(t+=o.value?o.value.cooked:"",o.tail===!1){if(e.expressions[r]){const a=await u(n,e.expressions[r]);if(S(a))throw new l(n,s.NoFunctionInTemplateLiteral,e);t+=O(a)}r++}return t}const g={};async function se(n,e,t,r){const o=await u(n,e.arguments[t]);if(Z(o,r))return u(n,e.arguments[t+1]);const a=e.arguments.length-t;return a===1?u(n,e.arguments[t]):a===2?null:a===3?u(n,e.arguments[t+2]):se(n,e,t+2,r)}async function ce(n,e,t,r){if(r===!0)return u(n,e.arguments[t+1]);if(e.arguments.length-t===3)return u(n,e.arguments[t+2]);const o=await u(n,e.arguments[t+2]);if(A(o)===!1)throw new l(n,s.ModuleExportNotFound,e.arguments[t+2]);return ce(n,e,t+2,o)}async function Y(n,e,t,r){const o=n.body;if(t.length!==n.params.length)throw new l(e,s.WrongNumberOfParameters,null);for(let i=0;i<t.length;i++){const c=n.params[i];c.type==="Identifier"&&e.localScope!=null&&(e.localScope[y(c)]={d:null,value:t[i],valueset:!0,node:null})}const a=await b(e,o);if(a instanceof v)return a.value;if(a===x)throw new l(e,s.UnexpectedToken,r);if(a===E)throw new l(e,s.UnexpectedToken,r);return a instanceof P?a.value:a}pe(g,F),de(g,F),he(g,F),ge(g,F),me(g,F),Ce({functions:g,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:F,standardFunctionAsync:k}),g.iif=async function(n,e){ee(e.arguments===null?[]:e.arguments,3,3,n,e);const t=await u(n,e.arguments[0]);if(A(t)===!1)throw new l(n,s.BooleanConditionRequired,e);return u(n,t?e.arguments[1]:e.arguments[2])},g.defaultvalue=async function(n,e){ee(e.arguments===null?[]:e.arguments,2,3,n,e);const t=await u(n,e.arguments[0]);if(e.arguments.length===3){const r=await u(n,e.arguments[1]),o=ye(t,r);return o!=null&&o!==""?o:u(n,e.arguments[2])}return t==null||t===""?u(n,e.arguments[1]):t},g.decode=async function(n,e){if(e.arguments.length<2)throw new l(n,s.WrongNumberOfParameters,e);if(e.arguments.length===2)return u(n,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new l(n,s.WrongNumberOfParameters,e);return se(n,e,1,await u(n,e.arguments[0]))},g.when=async function(n,e){if(e.arguments.length<3)throw new l(n,s.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new l(n,s.WrongNumberOfParameters,e);const t=await u(n,e.arguments[0]);if(A(t)===!1)throw new l(n,s.BooleanConditionRequired,e.arguments[0]);return ce(n,e,0,t)};const $e={fixSpatialReference:Ie,parseArguments:q,standardFunction:F,standardFunctionAsync:k,evaluateIdentifier:X};for(const n in g)g[n]={value:new D(g[n]),valueset:!0,node:null};const B=function(){};function ue(n,e,t){const r=new B;n==null&&(n={}),e==null&&(e={});const o=new R({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const a in e)r[a]={value:new D(e[a]),native:!0,valueset:!0,node:null};for(const a in n)r[a]={value:Fe(n[a])?$.createFromGraphic(n[a],t):n[a],valueset:!0,node:null};return r}function fe(n){console.log(n)}B.prototype=g,B.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},B.prototype.pi={value:Math.PI,valueset:!0,node:null};const en=$e;function we(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:F,standardFunctionAsync:k,evaluateIdentifier:X};for(let t=0;t<n.length;t++)n[t].registerFunctions(e);for(const t in e.functions)g[t]={value:new D(e.functions[t]),valueset:!0,node:null},B.prototype[t]=g[t];for(let t=0;t<e.signatures.length;t++)ve(e.signatures[t],"async")}async function nn(n,e){let t=e.spatialReference;t==null&&(t=new re({wkid:102100}));let r=null;n.usesModules&&(r=new J(new Map,n.loadedModules));const o=ue(e.vars,e.customfunctions,e.timeZone),a={spatialReference:t,services:e.services,exports:{},libraryResolver:r,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console??fe,timeZone:e.timeZone??null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},i=await H(a,n);if(i instanceof v||i instanceof P){const c=i.value;if(c===f)return null;if(S(c))throw new l(a,s.IllegalResult,null);return c}if(i===f)return null;throw i===x?new l(a,s.IllegalResult,null):i===E?new l(a,s.IllegalResult,null):new l(a,s.NeverReach,null)}we([be]);export{nn as executeScript,we as extend,en as functionHelper};
