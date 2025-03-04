import{eK as Q,B as T,eA as W}from"./main-Czl6u6q4.js";import{a as X,b as Z}from"./MeshLocalVertexSpace-hUXWSwed.js";import{f as ee,l as te}from"./vec3-D9RuG3bg.js";import"./vec4f64-hf2nxvhQ.js";import"./sphere-9j7Y4k8P.js";import"./I3SUtil-CitrRiB-.js";var L,D;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(L||(L={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(D||(D={}));function ne(){return R||(R=new Promise(e=>import("./i3s-BX0wo_Kt.js").then(t=>t.i).then(({default:t})=>{const n=t({locateFile:re,onRuntimeInitialized:()=>e(n)});delete n.then})).catch(e=>{throw e})),R}function re(e){return Q(`esri/libs/i3s/${e}`)}let R;var B,p,j,k,H;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(B||(B={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(p||(p={})),function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(j||(j={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(k||(k={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(H||(H={}));async function oe(e){o=await b();const t=[e.geometryBuffer];return{result:J(o,e,t),transferList:t}}async function ie(e){o=await b();const t=[e.geometryBuffer],{geometryBuffer:n}=e,a=n.byteLength,i=o._malloc(a),l=new Uint8Array(o.HEAPU8.buffer,i,a);l.set(new Uint8Array(n));const s=o.dracoDecompressPointCloudData(i,l.byteLength);if(o._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const f=s.featureIds?.length>0?s.featureIds.slice():null,d=s.positions.slice();return f&&t.push(f.buffer),t.push(d.buffer),{result:{positions:d,featureIds:f},transferList:t}}async function ae(e){await b(),V(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function se(e){await b(),Y(e)}async function fe(e){o=await b(),o.setLegacySchema(e.context,e.jsonSchema)}async function ce(e){const{localMatrix:t,origin:n,positions:a,vertexSpace:i}=e,l=T.fromJSON(e.inSpatialReference),s=T.fromJSON(e.outSpatialReference);let f;const[{projectBuffer:d},{initializeProjection:N}]=await Promise.all([import("./projectBuffer-C__A7xtx.js").then(c=>c.p),import("./projection-DnAe0_Kh.js").then(c=>c.p)]);await N(l,s);const g=[0,0,0];if(!d(n,l,0,g,s,0))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(f=new Float64Array(a.length),!d(a,l,0,f,s,0,f.length/3))throw new Error("Failed to project")}else{const c=i.type==="georeferenced"?X.fromJSON(i):Z.fromJSON(i),{projectMeshVertexPositions:u}=await import("./projectMeshVertexPositions-DtvL2oDU.js"),m=u({vertexAttributes:{position:a},transform:t?{localMatrix:t}:void 0,vertexSpace:c,spatialReference:l},s);if(!m)throw new Error("Failed to project");f=m}const S=f.length,[w,I,E]=g;for(let c=0;c<S;c+=3)f[c]-=w,f[c+1]-=I,f[c+2]-=E;return{result:{projected:f,original:a,projectedOrigin:g},transferList:[f.buffer,a.buffer]}}async function le({normalMatrix:e,normals:t}){const n=new Float32Array(t.length);return ee(n,t,e),W(e)&&te(n,n),{result:{transformed:n,original:t},transferList:[n.buffer,t.buffer]}}function ue(e){z(e)}let U,o;function Y(e){if(!o)return;const t=e.modifications,n=o._malloc(8*t.length),a=new Float64Array(o.HEAPU8.buffer,n,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];o.setModifications(e.context,n,t.length,e.isGeodetic),o._free(n)}function J(e,t,n){const{context:a,globalTrafo:i,mbs:l,obbData:s,elevationOffset:f,geometryBuffer:d,geometryDescriptor:N,indexToVertexProjector:g,vertexToRenderProjector:S}=t,w=e._malloc(d.byteLength),I=33,E=e._malloc(I*Float64Array.BYTES_PER_ELEMENT),c=new Uint8Array(e.HEAPU8.buffer,w,d.byteLength);c.set(new Uint8Array(d));const u=new Float64Array(e.HEAPU8.buffer,E,I);F(u,[NaN,NaN,NaN]);let m=u.byteOffset+3*u.BYTES_PER_ELEMENT,A=new Float64Array(u.buffer,m);F(A,i),m+=16*u.BYTES_PER_ELEMENT,A=new Float64Array(u.buffer,m),F(A,l),m+=4*u.BYTES_PER_ELEMENT,s&&(A=new Float64Array(u.buffer,m),F(A,s));const x=N,$={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:x.featureIndex},r=e.process(a,!!t.obbData,w,c.byteLength,x,$,E,f,g,S,t.normalReferenceFrame);if(e._free(E),e._free(w),r.error.length>0)throw new Error(`i3s.wasm: ${r.error}`);if(r.discarded)return null;const M=r.componentOffsets.length>0?r.componentOffsets.slice():null,P=r.featureIds.length>0?r.featureIds.slice():null,G=r.anchorIds.length>0?Array.from(r.anchorIds):null,K=r.anchors.length>0?Array.from(r.anchors):null,O=r.interleavedVertedData.slice().buffer,_=r.indicesType===L.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2).slice():new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4).slice(),v=r.positions.slice(),C=r.positionIndicesType===L.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2).slice():new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4).slice(),q={layout:t.layouts[0],interleavedVertexData:O,indices:_,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:v,indices:C}};return P&&n.push(P.buffer),M&&n.push(M.buffer),n.push(O),n.push(_.buffer),n.push(v.buffer),n.push(C.buffer),{componentOffsets:M,featureIds:P,anchorIds:G,anchors:K,transformedGeometry:q,obb:r.obb,globalTrafo:i}}function de(e){return e===0?p.Unmodified:e===1?p.PotentiallyModified:e===2?p.Culled:p.Unknown}function V(e){if(!o)return;const{context:t,buffer:n}=e,a=o._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,l=new Float64Array(o.HEAPU8.buffer,a,i),s=new Float64Array(n);l.set(s),o.filterOBBs(t,a,i),s.set(l),o._free(a)}function z(e){o&&o.destroy(e)===0&&(o=null)}function F(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}async function me(){o||await b()}function b(){return o?Promise.resolve(o):(U||(U=ne().then(e=>(o=e,U=null,o))),U)}const he={transform:(e,t)=>o&&J(o,e,t),destroy:z};export{ue as destroyContext,ie as dracoDecompressPointCloudData,ae as filterObbsForModifications,V as filterObbsForModificationsSync,me as initialize,de as interpretObbModificationResults,oe as process,ce as project,fe as setLegacySchema,se as setModifications,Y as setModificationsSync,he as test,le as transformNormals};
