import{b as Ie,h,p as ee,H as te,c as T,f as Fe,a as Ae,F as Le}from"./themeUtils-jLzjbO9h.js";import{l as ne,n as Me,o as z,p as He,r as Re,u as P,v as I,t as G,f as Ne,q as Se,x as ze}from"./dom-N58V0tYi.js";import{g as ie}from"./guid-Dls486Er.js";import{i as oe}from"./key-CZySMiwx.js";import{s as ae,a as se,c as re}from"./loadable-Rw7eZgqJ.js";import{d as ce}from"./action-3OaRYORV.js";import{d as le}from"./icon-BJzFFCIy.js";import{d as de}from"./loader-zygqGtqq.js";import{f as Ge,c as je,a as Ke,b as _e,r as Ue,F as ue}from"./floating-ui-DNdl4dMS.js";import{o as fe}from"./openCloseComponent-UvuUWVal.js";import{c as $e,d as qe}from"./locale-CGO1A2YC.js";import{u as We,c as Ye,s as Je,d as Qe}from"./t9n-U6csbz5f.js";import{c as Ve}from"./observers--YV3HoaK.js";import{F as Xe}from"./FloatingArrow-xF7o3wAo.js";import{g as Ze}from"./component-CWGf1hug.js";function et(e,t,n){return(t=nt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function he(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pe(Object(n),!0).forEach(function(r){et(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tt(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nt(e){var t=tt(e,"string");return typeof t=="symbol"?t:t+""}var ve={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var r=e.indexOf(t);r===-1||e.splice(r,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},it=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ot=function(e){return e?.key==="Escape"||e?.key==="Esc"||e?.keyCode===27},F=function(e){return e?.key==="Tab"||e?.keyCode===9},at=function(e){return F(e)&&!e.shiftKey},st=function(e){return F(e)&&e.shiftKey},me=function(e){return setTimeout(e,0)},be=function(e,t){var n=-1;return e.every(function(r,s){return t(r)?(n=s,!1):!0}),n},A=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return typeof e=="function"?e.apply(void 0,n):e},M=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},rt=[],ct=function(e,t){var n=t?.document||document,r=t?.trapStack||rt,s=he({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:at,isKeyBackward:st},t),a={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},m,v=function(i,o,c){return i&&i[o]!==void 0?i[o]:s[c||o]},g=function(i,o){var c=typeof o?.composedPath=="function"?o.composedPath():void 0;return a.containerGroups.findIndex(function(d){var l=d.container,u=d.tabbableNodes;return l.contains(i)||c?.includes(l)||u.find(function(f){return f===i})})},y=function(i){var o=s[i];if(typeof o=="function"){for(var c=arguments.length,d=new Array(c>1?c-1:0),l=1;l<c;l++)d[l-1]=arguments[l];o=o.apply(void 0,d)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var u=o;if(typeof o=="string"&&(u=n.querySelector(o),!u))throw new Error("`".concat(i,"` as selector refers to no known node"));return u},D=function(){var i=y("initialFocus");if(i===!1)return!1;if(i===void 0||!z(i,s.tabbableOptions))if(g(n.activeElement)>=0)i=n.activeElement;else{var o=a.tabbableGroups[0],c=o&&o.firstTabbableNode;i=c||y("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},O=function(){if(a.containerGroups=a.containers.map(function(i){var o=He(i,s.tabbableOptions),c=Re(i,s.tabbableOptions),d=o.length>0?o[0]:void 0,l=o.length>0?o[o.length-1]:void 0,u=c.find(function(p){return P(p)}),f=c.slice().reverse().find(function(p){return P(p)}),b=!!o.find(function(p){return I(p)>0});return{container:i,tabbableNodes:o,focusableNodes:c,posTabIndexesFound:b,firstTabbableNode:d,lastTabbableNode:l,firstDomTabbableNode:u,lastDomTabbableNode:f,nextTabbableNode:function(p){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,B=o.indexOf(p);return B<0?x?c.slice(c.indexOf(p)+1).find(function(w){return P(w)}):c.slice(0,c.indexOf(p)).reverse().find(function(w){return P(w)}):o[B+(x?1:-1)]}}}),a.tabbableGroups=a.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),a.tabbableGroups.length<=0&&!y("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(a.containerGroups.find(function(i){return i.posTabIndexesFound})&&a.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},U=function(i){var o=i.activeElement;if(o)return o.shadowRoot&&o.shadowRoot.activeElement!==null?U(o.shadowRoot):o},k=function(i){if(i!==!1&&i!==U(document)){if(!i||!i.focus){k(D());return}i.focus({preventScroll:!!s.preventScroll}),a.mostRecentlyFocusedNode=i,it(i)&&i.select()}},$=function(i){var o=y("setReturnFocus",i);return o||(o===!1?!1:i)},q=function(i){var o=i.target,c=i.event,d=i.isBackward,l=d===void 0?!1:d;o=o||M(c),O();var u=null;if(a.tabbableGroups.length>0){var f=g(o,c),b=f>=0?a.containerGroups[f]:void 0;if(f<0)l?u=a.tabbableGroups[a.tabbableGroups.length-1].lastTabbableNode:u=a.tabbableGroups[0].firstTabbableNode;else if(l){var p=be(a.tabbableGroups,function(N){var S=N.firstTabbableNode;return o===S});if(p<0&&(b.container===o||z(o,s.tabbableOptions)&&!P(o,s.tabbableOptions)&&!b.nextTabbableNode(o,!1))&&(p=f),p>=0){var x=p===0?a.tabbableGroups.length-1:p-1,B=a.tabbableGroups[x];u=I(o)>=0?B.lastTabbableNode:B.lastDomTabbableNode}else F(c)||(u=b.nextTabbableNode(o,!1))}else{var w=be(a.tabbableGroups,function(N){var S=N.lastTabbableNode;return o===S});if(w<0&&(b.container===o||z(o,s.tabbableOptions)&&!P(o,s.tabbableOptions)&&!b.nextTabbableNode(o))&&(w=f),w>=0){var Te=w===a.tabbableGroups.length-1?0:w+1,Z=a.tabbableGroups[Te];u=I(o)>=0?Z.firstTabbableNode:Z.firstDomTabbableNode}else F(c)||(u=b.nextTabbableNode(o))}}else u=y("fallbackFocus");return u},L=function(i){var o=M(i);if(!(g(o,i)>=0)){if(A(s.clickOutsideDeactivates,i)){m.deactivate({returnFocus:s.returnFocusOnDeactivate});return}A(s.allowOutsideClick,i)||i.preventDefault()}},W=function(i){var o=M(i),c=g(o,i)>=0;if(c||o instanceof Document)c&&(a.mostRecentlyFocusedNode=o);else{i.stopImmediatePropagation();var d,l=!0;if(a.mostRecentlyFocusedNode)if(I(a.mostRecentlyFocusedNode)>0){var u=g(a.mostRecentlyFocusedNode),f=a.containerGroups[u].tabbableNodes;if(f.length>0){var b=f.findIndex(function(p){return p===a.mostRecentlyFocusedNode});b>=0&&(s.isKeyForward(a.recentNavEvent)?b+1<f.length&&(d=f[b+1],l=!1):b-1>=0&&(d=f[b-1],l=!1))}}else a.containerGroups.some(function(p){return p.tabbableNodes.some(function(x){return I(x)>0})})||(l=!1);else l=!1;l&&(d=q({target:a.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(a.recentNavEvent)})),k(d||a.mostRecentlyFocusedNode||D())}a.recentNavEvent=void 0},Ce=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;a.recentNavEvent=i;var c=q({event:i,isBackward:o});c&&(F(i)&&i.preventDefault(),k(c))},Y=function(i){(s.isKeyForward(i)||s.isKeyBackward(i))&&Ce(i,s.isKeyBackward(i))},J=function(i){ot(i)&&A(s.escapeDeactivates,i)!==!1&&(i.preventDefault(),m.deactivate())},Q=function(i){var o=M(i);g(o,i)>=0||A(s.clickOutsideDeactivates,i)||A(s.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},V=function(){if(a.active)return ve.activateTrap(r,m),a.delayInitialFocusTimer=s.delayInitialFocus?me(function(){k(D())}):k(D()),n.addEventListener("focusin",W,!0),n.addEventListener("mousedown",L,{capture:!0,passive:!1}),n.addEventListener("touchstart",L,{capture:!0,passive:!1}),n.addEventListener("click",Q,{capture:!0,passive:!1}),n.addEventListener("keydown",Y,{capture:!0,passive:!1}),n.addEventListener("keydown",J),m},X=function(){if(a.active)return n.removeEventListener("focusin",W,!0),n.removeEventListener("mousedown",L,!0),n.removeEventListener("touchstart",L,!0),n.removeEventListener("click",Q,!0),n.removeEventListener("keydown",Y,!0),n.removeEventListener("keydown",J),m},Be=function(i){var o=i.some(function(c){var d=Array.from(c.removedNodes);return d.some(function(l){return l===a.mostRecentlyFocusedNode})});o&&k(D())},R=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Be):void 0,C=function(){R&&(R.disconnect(),a.active&&!a.paused&&a.containers.map(function(i){R.observe(i,{subtree:!0,childList:!0})}))};return m={get active(){return a.active},get paused(){return a.paused},activate:function(i){if(a.active)return this;var o=v(i,"onActivate"),c=v(i,"onPostActivate"),d=v(i,"checkCanFocusTrap");d||O(),a.active=!0,a.paused=!1,a.nodeFocusedBeforeActivation=n.activeElement,o?.();var l=function(){d&&O(),V(),C(),c?.()};return d?(d(a.containers.concat()).then(l,l),this):(l(),this)},deactivate:function(i){if(!a.active)return this;var o=he({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},i);clearTimeout(a.delayInitialFocusTimer),a.delayInitialFocusTimer=void 0,X(),a.active=!1,a.paused=!1,C(),ve.deactivateTrap(r,m);var c=v(o,"onDeactivate"),d=v(o,"onPostDeactivate"),l=v(o,"checkCanReturnFocus"),u=v(o,"returnFocus","returnFocusOnDeactivate");c?.();var f=function(){me(function(){u&&k($(a.nodeFocusedBeforeActivation)),d?.()})};return u&&l?(l($(a.nodeFocusedBeforeActivation)).then(f,f),this):(f(),this)},pause:function(i){if(a.paused||!a.active)return this;var o=v(i,"onPause"),c=v(i,"onPostPause");return a.paused=!0,o?.(),X(),C(),c?.(),this},unpause:function(i){if(!a.paused||!a.active)return this;var o=v(i,"onUnpause"),c=v(i,"onPostUnpause");return a.paused=!1,o?.(),O(),V(),C(),c?.(),this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return a.containers=o.map(function(c){return typeof c=="string"?n.querySelector(c):c}),a.active&&O(),C(),this}},m.updateContainerElements(e),m};function ge(e,t){const{el:n}=e,r=n;if(!r)return;const s={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:r,setReturnFocus:a=>(ne(a),!1),...t?.focusTrapOptions,document:n.ownerDocument,tabbableOptions:Me,trapStack:Ie};e.focusTrap=ct(r,s)}function j(e,t){e.focusTrapDisabled||e.focusTrap?.activate(t)}function H(e,t){e.focusTrap?.deactivate(t)}function Ee(e){e.focusTrap?.updateContainerElements(e.el)}function ye(e,t){return(e+t)%t}const we=(e,t)=>{const n=e.level?`h${e.level}`:"div";return delete e.level,h(n,{class:e.class,key:e.key},t)};class lt{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=t=>{const{registeredElements:n}=this,r=t.find(s=>n.has(s));return n.get(r)},this.togglePopovers=t=>{const n=t.composedPath(),r=this.queryPopover(n);r&&!r.triggerDisabled&&(r.open=!r.open),Array.from(this.registeredElements.values()).filter(s=>s!==r&&s.autoClose&&s.open&&!n.includes(s)).forEach(s=>s.open=!1)},this.keyDownHandler=t=>{t.defaultPrevented||(t.key==="Escape"?this.closeAllPopovers():oe(t.key)&&this.togglePopovers(t))},this.clickHandler=t=>{ze(t)||this.togglePopovers(t)}}registerElement(t,n){this.registeredElementCount++,this.registeredElements.set(t,n),this.registeredElementCount===1&&this.addListeners()}unregisterElement(t){this.registeredElements.delete(t)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(t=>t.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const E={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",headerContent:"header-content",heading:"heading"},dt="auto",ke="aria-controls",xe="aria-expanded",ut=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",ft=ut,Pe=new lt,pt=ee(class extends te{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=T(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=T(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=T(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=T(this,"calcitePopoverOpen",6),this.mutationObserver=Ve("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${ie()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?Ge(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),je(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:n,effectiveReferenceElement:r}=this;e&&n&&!r&&console.warn(`${t.tagName}: reference-element id "${n}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(xe,G(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(ke,t),Pe.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(ke),e.removeAttribute(xe)),Pe.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=Ke,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=dt,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?H(this):j(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){fe(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){We(this,this.effectiveLocale)}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),$e(this),Ye(this),ge(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await Je(this),ae(this)}componentDidLoad(){se(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&fe(this),this.hasLoaded=!0}disconnectedCallback(){this.mutationObserver?.disconnect(),this.removeReferences(),qe(this),Qe(this),_e(this,this.effectiveReferenceElement,this.el),H(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:n,placement:r,overlayPositioning:s,flipDisabled:a,filteredFlipPlacements:m,offsetDistance:v,offsetSkidding:g,arrowEl:y}=this;return Ue(this,{floatingEl:t,referenceEl:n,overlayPositioning:s,placement:r,flipDisabled:a,flipPlacements:m,offsetDistance:v,offsetSkidding:g,arrowEl:y,type:"popover"},e)}async setFocus(){await re(this),Fe(this.el),Ne(this.el)}async updateFocusTrapElements(){Ee(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?Se(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),j(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),H(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?h("div",{class:E.closeButtonContainer,key:E.closeButtonContainer},h("calcite-action",{appearance:"transparent",class:E.closeButton,onClick:this.hide,ref:n=>this.closeButtonEl=n,scale:this.scale,text:e.close},h("calcite-icon",{icon:"x",scale:Ze(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,n=e?h(we,{class:E.heading,level:t},e):null;return n?h("div",{class:E.header,key:E.header},n,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:n,open:r,pointerDisabled:s,floatingLayout:a}=this,m=e&&r,v=!m,g=s?null:h(Xe,{floatingLayout:a,key:"floating-arrow",ref:this.storeArrowEl});return h(Ae,{key:"a563d48090d6e6c0c138023e169667834f657c4c","aria-hidden":G(v),"aria-label":n,"aria-live":"polite","calcite-hydrated-hidden":v,id:this.getId(),role:"dialog"},h("div",{key:"73053dbdce2cfc68fcd42667089d611e81010955",class:{[E.container]:!0,[ue.animation]:!0,[ue.animationActive]:m},ref:this.setTransitionEl},g,h("div",{key:"1fbcd45ee42b10a67881ced74db2db051231c94d",class:{[E.hasHeader]:!!t,[E.headerContainer]:!0}},this.renderHeader(),h("div",{key:"522abe801b98787863aac14d990b948d2d286156",class:E.content},h("slot",{key:"022a8f690288acdbac4ec1b3eccf807ffe382d5d"})),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ft}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function K(){typeof customElements>"u"||["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,pt);break;case"calcite-action":customElements.get(e)||ce();break;case"calcite-icon":customElements.get(e)||le();break;case"calcite-loader":customElements.get(e)||de();break}})}K();const De={menu:"menu",defaultTrigger:"default-trigger"},_={tooltip:"tooltip",trigger:"trigger"},ht={menu:"ellipsis"},vt="data-active",mt=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}",bt=mt,gt=["ArrowUp","ArrowDown","End","Home"],Et=ee(class extends te{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=T(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${ie()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:n,label:r}=this,s=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==s&&(this.disconnectMenuButtonEl(),this.menuButtonEl=s,this.setTooltipReferenceElement(),s&&(s.active=n,s.setAttribute("aria-controls",t),s.setAttribute("aria-expanded",G(n)),s.setAttribute("aria-haspopup","true"),s.id||(s.id=e),s.label||(s.label=r),s.text||(s.text=r),s.addEventListener("click",this.menuButtonClick),s.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-action"));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n?.matches("calcite-tooltip"));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:n,open:r}=this;e&&(e.referenceElement=!t&&!r?n:null)},this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:r}=this,s=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=s),e.toggleAttribute(vt,t===r)},this.updateActions=e=>{e?.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).reduce((n,r)=>r?.matches("calcite-action")?(n.push(r),n):r?.matches("calcite-action-group")?n.concat(Array.from(r.querySelectorAll("calcite-action"))):n,[]);this.actionElements=t.filter(n=>!n.disabled&&!n.hidden)},this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:r,open:s}=this;if(n.length){if(oe(t)){if(e.preventDefault(),!s){this.toggleOpen();return}const a=n[r];a?a.click():this.toggleOpen(!1)}if(t==="Tab"){this.open=!1;return}if(t==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,t,n)}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,gt))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(t==="Home"||t==="ArrowDown")&&(this.activeMenuItemIndex=0),(t==="End"||t==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=n.length-1);const r=this.activeMenuItemIndex;t==="ArrowUp"&&(this.activeMenuItemIndex=ye(Math.max(r-1,-1),n.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=ye(r+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=e},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){ae(this)}componentDidLoad(){se(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await re(this),ne(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:r}=this;return h("slot",{name:_.trigger,onSlotchange:this.setMenuButtonEl},h("calcite-action",{appearance:e,class:De.defaultTrigger,icon:ht.menu,ref:this.setDefaultMenuButtonEl,scale:n,text:t,textEnabled:r}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:n,menuId:r,menuButtonEl:s,label:a,placement:m,overlayPositioning:v,flipPlacements:g}=this,y=e[t]?.id||null;return h("calcite-popover",{autoClose:!0,flipPlacements:g,focusTrapDisabled:!0,label:a,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:v,placement:m,pointerDisabled:!0,referenceElement:s},h("div",{"aria-activedescendant":y,"aria-labelledby":s?.id,class:De.menu,id:r,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},h("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return h(Le,{key:"d13aa4f3d43fb5651c0487ccfa456813f69955d2"},this.renderMenuButton(),this.renderMenuItems(),h("slot",{key:"b63d187516c766db6a1b1db3df34050fdec9e6ce",name:_.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find(n=>n===e)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return bt}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function Oe(){typeof customElements>"u"||["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,Et);break;case"calcite-action":customElements.get(e)||ce();break;case"calcite-icon":customElements.get(e)||le();break;case"calcite-loader":customElements.get(e)||de();break;case"calcite-popover":customElements.get(e)||K();break}})}Oe();export{we as H,_ as S,Oe as a,H as b,ge as c,K as d,j as e,Ee as u};
