import{i}from"./themeUtils-DG1y3jns.js";function c(e,n,o){if(!i())return;const t=u(e);return new t(n,o)}function u(e){class n extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,r){return this.observedEntry.push({target:t,options:r}),super.observe(t,r)}unobserve(t){const r=this.observedEntry.filter(s=>s.target!==t);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),r.forEach(s=>this.observe(s.target,s.options))}}return function(){return e==="intersection"?window.IntersectionObserver:e==="mutation"?n:window.ResizeObserver}()}export{c};
