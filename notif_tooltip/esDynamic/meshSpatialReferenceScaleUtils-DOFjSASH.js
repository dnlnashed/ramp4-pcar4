import{s as e,bq as n}from"./main-C2GI9Q3q.js";import{N as u}from"./MeshTransform-kNCIfMlz.js";const t="upload-assets",r=()=>new Error;class p extends e{constructor(){super(`${t}:unsupported`,"Layer does not support asset uploads.",r())}}let d=class extends e{constructor(){super(`${t}:no-glb-support`,"Layer does not support glb.",r())}};class c extends e{constructor(){super(`${t}:no-supported-source`,"No supported external source found",r())}}class l extends e{constructor(){super(`${t}:not-base-64`,"Expected gltf data in base64 format after conversion.",r())}}class i extends e{constructor(){super(`${t}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",r())}}class m extends e{constructor(o,a){super(`${t}:bad-response`,`Bad response. Uploaded ${o} items and received ${a} results.`,r())}}class f extends e{constructor(o,a){super(`${t}-layer:upload-failed`,`Failed to upload mesh file ${o}. Error code: ${a?.code??"-1"}. Error message: ${a?.messages??"unknown"}`,r())}}class $ extends e{constructor(o){super(`${t}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${o}, but it does not list it in its supported formats.`,r())}}class x extends e{constructor(){super(`${t}:convert3D-failed`,"convert3D failed.")}}class b extends e{constructor(){super("invalid-input:no-model","No supported model found")}}class v extends e{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}function g(s){const o=1/n(s,1);return o!==1?new u({scale:[o,o,o]}):void 0}export{m as a,d as b,$ as c,f as d,b as i,x as l,v as m,c as n,i as p,p as r,g as t,l as u};
