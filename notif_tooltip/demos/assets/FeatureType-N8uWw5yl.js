import{b0 as a,A as p,q as s,u as i,z as m,v as l,C as d}from"./main-CxlHa1F_.js";import{i as u}from"./Field-C2GmeKVE.js";import{p as c}from"./FeatureTemplate-ChLKLK5W.js";let t=class extends a(p){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const e of Object.keys(o))r[e]=u(o[e]);return r}writeDomains(o,r){const e={};for(const n of Object.keys(o))o[n]&&(e[n]=o[n]?.toJSON());r.domains=e}};s([i({json:{write:!0}})],t.prototype,"id",void 0),s([i({json:{write:!0}})],t.prototype,"name",void 0),s([i({json:{write:!0}})],t.prototype,"domains",void 0),s([m("domains")],t.prototype,"readDomains",null),s([l("domains")],t.prototype,"writeDomains",null),s([i({type:[c],json:{write:!0}})],t.prototype,"templates",void 0),t=s([d("esri.layers.support.FeatureType")],t);const w=t;export{w as n};
