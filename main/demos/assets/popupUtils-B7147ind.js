import{cT as r,b2 as c}from"./main-BvP2mMJi.js";async function h(e,d=e.popupTemplate){if(d==null)return[];const t=await d.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:p,typeIdField:a,globalIdField:u,relationships:i}=e;if(t.includes("*"))return["*"];const o=n?r(e):[],l=c(e.fieldsIndex,[...t,...o]);return a&&l.push(a),l&&p&&e.fieldsIndex?.has(p)&&!l.includes(p)&&l.push(p),l&&u&&e.fieldsIndex?.has(u)&&!l.includes(u)&&l.push(u),i&&i.forEach(f=>{const{keyField:s}=f;l&&s&&e.fieldsIndex?.has(s)&&!l.includes(s)&&l.push(s)}),l}function m(e,d){return e.popupTemplate?e.popupTemplate:d!=null&&d.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{h as n,m as p};
