import{cb as _,s as I,am as D,cc as Q,an as v,cd as Z,H as A,n as P,bj as G,U as M,aY as R}from"./main-C4ZPumQG.js";import{o as N,r as z,e as U,n as H,t as B}from"./featureConversionUtils-LdW16brD.js";import{m as J}from"./FeatureStore-DhQKwxMn.js";import{x as E,j as b}from"./queryUtils-Dp50zn3i.js";import{V as L}from"./QueryEngine-DQ4vVrfS.js";import{I as V,N as W,E as Y}from"./geojson-BvNV3aQf.js";import{l as K,a as X,u as ee}from"./clientSideDefaults-Dh-LjPkO.js";import{j as te,p as T,d as w,f as F,y as O}from"./sourceUtils-sxy4JfSj.js";import{Z as $}from"./FieldsIndex-jN3YBTwx.js";import{i as ie}from"./fieldType-BGU0IjZn.js";import"./preload-helper-ExcqyqRp.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-e_CD74Md.js";import"./PooledRBush-CCyanJtn.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-CruEGZMh.js";import"./optimizedFeatureQueryEngineAdapter-D48vGi77.js";import"./projection-8-uxS4CM.js";import"./projectBuffer-C2AmViVa.js";import"./normalizeUtils-BMfhrx7f.js";import"./normalizeUtilsCommon-B9uFJkC2.js";import"./utils-DHaZre0y.js";import"./utils-BznvvgVb.js";import"./json-Wa8cmqdu.js";import"./LRUCache-B-ly6QT3.js";import"./WhereClause-DXHkoRkS.js";import"./TimeOnly-CiYrmlkW.js";import"./UnknownTimeZone-Bz_c8bba.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-CLSylvtw.js";import"./utils-LO313OPB.js";import"./TimeExtent-gaoR-i0M.js";import"./heatmapUtils-UHUpWU7e.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-JC-NWZD8.js";import"./Basemap-tUxNVV8f.js";import"./loadAll-uCCJvqur.js";import"./PortalItem-DWC4iI6A.js";import"./writeUtils-BHvBwqoN.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CLl-Rp5L.js";import"./utils-kfq8xdbG.js";import"./ClassBreaksDefinition-BEz7DYbr.js";import"./Scheduler-DvNqGkgQ.js";import"./signal-C_doicED.js";import"./date-Dw3OHnFv.js";import"./capabilities-Y9lFlGVh.js";const se={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class tt{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const s=[],[i]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),r=V(i,{geometryType:e.geometryType}),l=e.fields||r.fields||[],p=e.hasZ!=null?e.hasZ:r.hasZ,d=r.geometryType;let c=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const h=e.spatialReference||_;let a=e.timeInfo;l===r.fields&&r.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});const o=new $(l);let u=o.get(c);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,c=u.name):(u={alias:c,name:c,type:r.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},l.unshift(u));const y={};for(const n of l){if(n.name==null&&(n.name=n.alias),n.alias==null&&(n.alias=n.name),!n.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:n});if(!ie.jsonValues.includes(n.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n});if(n.name!==u.name){const g=D(n);g!==void 0&&(y[n.name]=g)}n.length==null&&(n.length=Q(n))}if(a){if(a.startTimeField){const n=o.get(a.startTimeField);n?(a.startTimeField=n.name,n.type="esriFieldTypeDate"):a.startTimeField=null}if(a.endTimeField){const n=o.get(a.endTimeField);n?(a.endTimeField=n.name,n.type="esriFieldTypeDate"):a.endTimeField=null}if(a.trackIdField){const n=o.get(a.trackIdField);n?a.trackIdField=n.name:(a.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:a}}))}a.startTimeField||a.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:a}}),a=null)}const m=d?ee(d):void 0,j=o.dateFields.length?{timeZoneIANA:v}:null,f={warnings:s,featureErrors:[],layerDefinition:{...se,drawingInfo:m??void 0,templates:K(y),extent:void 0,geometryType:d,objectIdField:c,fields:l,hasZ:!!p,timeInfo:a,dateFieldsTimeReference:j}};this._queryEngine=new L({fieldsIndex:$.fromLayerJSON({fields:l,timeInfo:a,dateFieldsTimeReference:j}),geometryType:d,hasM:!1,hasZ:p,objectIdField:c,spatialReference:h,timeInfo:a,featureStore:new J({geometryType:d,hasM:!1,hasZ:p})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=X(y,c);const x=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const k=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(k);const{fullExtent:C,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=C,S){const{start:n,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[n,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([te(t,s),E(e.adds,t),E(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=Z(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const r=this._normalizeFeatures(i);r&&this._queryEngine.featureStore.addMany(r)},i=>{this._queryEngine.featureStore.clear(),A(i)||P.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:s}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:s,objectIdField:i}=this._queryEngine,r=W(e,{geometryType:t,hasZ:s,objectIdField:i});if(!G(this._queryEngine.spatialReference,_))for(const l of r)l.geometry!=null&&(l.geometry=N(b(z(l.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:s}=this._loadOptions,i=(await M(t??"",{responseType:"json",query:{...s},signal:e})).data;return Y(i),i}_normalizeFeatures(e,t){const{objectIdField:s,fieldsIndex:i}=this._queryEngine,r=[];for(const l of e){const p=this._createDefaultAttributes(),d=T(i,p,l.attributes,!0);d?t?.push(d):(this._assignObjectId(p,l.attributes,!0),l.attributes=p,l.objectId=p[s],r.push(l))}return r}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(r,t),s?.length&&this._applyUpdateEdits(r,s),i?.length){for(const d of i)r.deleteResults.push(w(d));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:l,timeExtent:p}=await this._queryEngine.fetchRecomputedExtents();return{extent:l,timeExtent:p,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:r,hasZ:l,objectIdField:p,spatialReference:d,featureStore:c,fieldsIndex:h}=this._queryEngine,a=[];for(const o of t){if(o.geometry&&i!==R(o.geometry)){s.push(F("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),y=T(h,u,o.attributes);if(y)s.push(y);else{if(this._assignObjectId(u,o.attributes),o.attributes=u,o.uid!=null){const m=o.attributes[p];e.uidToObjectId[o.uid]=m}if(o.geometry!=null){const m=o.geometry.spatialReference??d;o.geometry=b(O(o.geometry,m),m,d)}a.push(o),s.push(w(o.attributes[p]))}}c.addMany(U([],a,i,l,r,p))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:r,objectIdField:l,spatialReference:p,featureStore:d,fieldsIndex:c}=this._queryEngine;for(const h of t){const{attributes:a,geometry:o}=h,u=a?.[l];if(u==null){e.push(F(`Identifier field ${l} missing`));continue}if(!d.has(u)){e.push(F(`Feature with object id ${u} missing`));continue}const y=H(d.getFeature(u),s,r,i);if(o!=null){if(s!==R(o)){e.push(F("Incorrect geometry type."));continue}const m=o.spatialReference??p;y.geometry=b(O(o,m),m,p)}if(a){const m=T(c,y.attributes,a);if(m){e.push(m);continue}}d.add(B(y,s,r,i,l)),e.push(w(u))}}_createObjectIdGenerator(e,t){const s=e.fieldsIndex.get(e.objectIdField);if(s.type==="esriFieldTypeString")return()=>s.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;e[i]=s&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await E(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{tt as default};
