import{P as m,$ as c}from"./utils-Be5H-wR2.js";import{l as u,a as y,i as f,f as s}from"./portalItemUtils-BN58xHVo.js";const n="Stream Service",p="Feed",d="stream-layer-save",v="stream-layer-save-as";function l(t){return{isValid:t.type==="stream"&&!!t.url&&!t.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function i(t){const e=t.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(t,e){const{parsedUrl:a,title:o,fullExtent:r}=t;e.url=a.path,e.title||=o,e.extent=null,r!=null&&(e.extent=await u(r)),y(e,s.METADATA),f(e,s.SINGLE_LAYER)}async function A(t,e){return m({layer:t,itemType:n,additionalItemType:p,validateLayer:l,createItemData:i,errorNamePrefix:d},e)}async function I(t,e,a){return c({layer:t,itemType:n,validateLayer:l,createItemData:i,errorNamePrefix:v,newItem:e,setItemProperties:x},a)}export{A as save,I as saveAs};
