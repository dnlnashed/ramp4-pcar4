import{q as s,u as d,C as u,a_ as l}from"./main-BvP2mMJi.js";import{a}from"./OrderByInfo-Cg1MQJQq.js";function c(e,r,t){if(!e)return null;const i=e.find(o=>!!o.field);if(!i)return null;const n=new a;return n.read(i,t),[n]}function f(e,r,t,i){const n=e.find(o=>!!o.field);n&&l(t,[n.toJSON()],r)}const m={type:[a],json:{origins:{"web-scene":{write:!1,read:!1}},name:"layerDefinition.orderBy",read:{reader:c},write:{writer:f}}},w=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return s([d(m)],r.prototype,"orderBy",void 0),r=s([u("esri.layers.mixins.OrderedLayer")],r),r};export{m as c,w as p};
