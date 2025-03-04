import{ax as N,k as h,o as d,b1 as G,u as z,q as T,b2 as S,B as x,A as q,v as F,b3 as P,f as j,a9 as v}from"./main-DB4i4A8K.js";import{y as J}from"./Field-C2PC_YqP.js";var R;const w=new N({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=R=class extends F{constructor(n){super(n),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(n,a){const r=x.fromJSON(a.spatialReference),e=[];for(let s=0;s<n.length;s++){const o=n[s],i=G.fromJSON(o),m=o.geometry?.spatialReference;i.geometry==null||m||(i.geometry.spatialReference=r);const f=o.aggregateGeometries,t=i.aggregateGeometries;if(f&&t!=null)for(const y in t){const l=t[y],p=f[y],g=p?.spatialReference;l==null||g||(l.spatialReference=r)}e.push(i)}return e}writeGeometryType(n,a,r,e){if(n)return void w.write(n,a,r,e);const{features:s}=this;if(s){for(const o of s)if(o?.geometry!=null)return void w.write(o.geometry.type,a,r,e)}}readQueryGeometry(n,a){if(!n)return null;const r=!!n.spatialReference,e=P(n);return e&&!r&&a.spatialReference&&(e.spatialReference=x.fromJSON(a.spatialReference)),e}writeSpatialReference(n,a){if(n)return void(a.spatialReference=n.toJSON());const{features:r}=this;if(r){for(const e of r)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(a.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new R(this.cloneProperties())}cloneProperties(){return j({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(n){const a=this.write();if(a.features&&Array.isArray(n)&&n.length>0)for(let r=0;r<a.features.length;r++){const e=a.features[r];if(e.geometry){const s=n?.[r];e.geometry=s?.toJSON()||e.geometry}}return a}quantize(n){const{scale:[a,r],translate:[e,s]}=n,o=t=>Math.round((t-e)/a),i=t=>Math.round((s-t)/r),m=this.features,f=this._getQuantizationFunction(this.geometryType,o,i);for(let t=0,y=m.length;t<y;t++)f?.(m[t].geometry)||(m.splice(t,1),t--,y--);return this.transform=n,this}unquantize(){const{geometryType:n,features:a,transform:r}=this;if(!r)return this;const{translate:[e,s],scale:[o,i]}=r,m=p=>p*o+e,f=p=>s-p*i;let t=null,y=null;if(this.hasZ&&r?.scale?.[2]!=null){const{translate:[,,p],scale:[,,g]}=r;t=u=>u*g+p}if(this.hasM&&r?.scale?.[3]!=null){const{translate:[,,,p],scale:[,,,g]}=r;y=u=>u==null?u:u*g+p}const l=this._getHydrationFunction(n,m,f,t,y);for(const{geometry:p}of a)p!=null&&l&&l(p);return this.transform=null,this}_quantizePoints(n,a,r){let e,s;const o=[];for(let i=0,m=n.length;i<m;i++){const f=n[i];if(i>0){const t=a(f[0]),y=r(f[1]);t===e&&y===s||(o.push([t-e,y-s]),e=t,s=y)}else e=a(f[0]),s=r(f[1]),o.push([e,s])}return o.length>0?o:null}_getQuantizationFunction(n,a,r){return n==="point"?e=>(e.x=a(e.x),e.y=r(e.y),e):n==="polyline"||n==="polygon"?e=>{const s=v(e)?e.rings:e.paths,o=[];for(let i=0,m=s.length;i<m;i++){const f=s[i],t=this._quantizePoints(f,a,r);t&&o.push(t)}return o.length>0?(v(e)?e.rings=o:e.paths=o,e):null}:n==="multipoint"?e=>{const s=this._quantizePoints(e.points,a,r);return s&&s.length>0?(e.points=s,e):null}:n==="extent"?e=>e:null}_getHydrationFunction(n,a,r,e,s){return n==="point"?o=>{o.x=a(o.x),o.y=r(o.y),e&&(o.z=e(o.z))}:n==="polyline"||n==="polygon"?o=>{const i=v(o)?o.rings:o.paths;let m,f;for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];p>0?(m+=u[0],f+=u[1]):(m=u[0],f=u[1]),u[0]=a(m),u[1]=r(f)}}if(e&&s)for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=e(u[2]),u[3]=s(u[3])}}else if(e)for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=e(u[2])}}else if(s)for(let t=0,y=i.length;t<y;t++){const l=i[t];for(let p=0,g=l.length;p<g;p++){const u=l[p];u[2]=s(u[2])}}}:n==="extent"?o=>{o.xmin=a(o.xmin),o.ymin=r(o.ymin),o.xmax=a(o.xmax),o.ymax=r(o.ymax),e&&o.zmax!=null&&o.zmin!=null&&(o.zmax=e(o.zmax),o.zmin=e(o.zmin)),s&&o.mmax!=null&&o.mmin!=null&&(o.mmax=s(o.mmax),o.mmin=s(o.mmin))}:n==="multipoint"?o=>{const i=o.points;let m,f;for(let t=0,y=i.length;t<y;t++){const l=i[t];t>0?(m+=l[0],f+=l[1]):(m=l[0],f=l[1]),l[0]=a(m),l[1]=r(f)}if(e&&s)for(let t=0,y=i.length;t<y;t++){const l=i[t];l[2]=e(l[2]),l[3]=s(l[3])}else if(e)for(let t=0,y=i.length;t<y;t++){const l=i[t];l[2]=e(l[2])}else if(s)for(let t=0,y=i.length;t<y;t++){const l=i[t];l[2]=s(l[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[G],json:{write:!0}})],c.prototype,"features",void 0),h([z("features")],c.prototype,"readFeatures",null),h([d({type:[J],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],c.prototype,"geometryType",void 0),h([T("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasZ",void 0),h([d({types:S,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([z("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:x,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([T("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=R=h([q("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const O=c;export{O as d};
