import{g as d,h as p,k as s,o as l,q as v,u as a,v as y,Y as m,$ as w,z as g,A as f}from"./main-jlUEdDH5.js";var o;const h=d()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=h.jsonValues.slice();p(u,"orthometric");const n=d()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let i=o=class extends y{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return h.write(e,t,r)}readHeightModel(e,t,r){return h.read(e)||(r?.messages&&r.messages.push(S(e,{context:r})),null)}readHeightUnit(e,t,r){return n.read(e)||(r?.messages&&r.messages.push(c(e,{context:r})),null)}readHeightUnitService(e,t,r){return m(e)||n.read(e)||(r?.messages&&r.messages.push(c(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new o({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=w(t);return new o({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new o;return t.read(e,{origin:"web-scene"}),t}};function c(e,t){return new g("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function S(e,t){return new g("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}s([l({type:h.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal"}}}})],i.prototype,"heightModel",void 0),s([v("web-scene","heightModel")],i.prototype,"writeHeightModel",null),s([a(["web-scene","service"],"heightModel")],i.prototype,"readHeightModel",null),s([l({type:n.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:n.jsonValues,write:n.write}}}})],i.prototype,"heightUnit",void 0),s([a("web-scene","heightUnit")],i.prototype,"readHeightUnit",null),s([a("service","heightUnit")],i.prototype,"readHeightUnitService",null),s([l({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],i.prototype,"vertCRS",void 0),s([a("service","vertCRS",["vertCRS","ellipsoid","geoid"])],i.prototype,"readVertCRS",null),i=o=s([f("esri.geometry.HeightModelInfo")],i);const M=i;export{M as v};
