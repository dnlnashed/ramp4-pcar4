import{az as h,q as i,u as s,b4 as R,C as w,A as S,h as r}from"./main-C4ZPumQG.js";import{b as v}from"./Query-BfP97GzT.js";import{p as j}from"./TimeExtent-gaoR-i0M.js";import"./preload-helper-ExcqyqRp.js";import"./Field-D4mxNajT.js";import"./fieldType-BGU0IjZn.js";var m;const c=new h({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),d=new h({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let e=m=class extends S{constructor(t){super(t),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(t={}){const{where:n,geometry:a,spatialRelationship:o,timeExtent:l,objectIds:p,units:u,distance:y}=this;return new v({geometry:r(a),objectIds:r(p),spatialRelationship:o,timeExtent:r(l),where:n,units:u,distance:y,...t})}clone(){const{where:t,geometry:n,spatialRelationship:a,timeExtent:o,objectIds:l,units:p,distance:u}=this;return new m({geometry:r(n),objectIds:r(l),spatialRelationship:a,timeExtent:r(o),where:t,units:p,distance:u})}};i([s({type:String,json:{write:!0}})],e.prototype,"where",void 0),i([s({types:R,json:{write:!0}})],e.prototype,"geometry",void 0),i([s({type:c.apiValues,json:{name:"spatialRel",read:{reader:c.read},write:{allowNull:!1,writer:c.write,overridePolicy(){return{enabled:this.geometry!=null}}}}})],e.prototype,"spatialRelationship",void 0),i([s({type:Number,json:{write:{overridePolicy(t){return{enabled:t!=null&&this.geometry!=null}}}}})],e.prototype,"distance",void 0),i([s({type:[Number],json:{write:!0}})],e.prototype,"objectIds",void 0),i([s({type:d.apiValues,json:{read:d.read,write:{writer:d.write,overridePolicy(t){return{enabled:t!=null&&this.geometry!=null}}}}})],e.prototype,"units",void 0),i([s({type:j,json:{write:!0}})],e.prototype,"timeExtent",void 0),e=m=i([w("esri.layers.support.FeatureFilter")],e);const f=e;export{f as default};
