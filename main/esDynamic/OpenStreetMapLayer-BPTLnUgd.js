import{k as t,o as l,A as a,bv as i,B as r,au as p}from"./main-Czl6u6q4.js";import{I as u}from"./WebTileLayer-DMxHHoxs.js";import{z as s,p as e}from"./TileInfo-BbPwst0_.js";import c from"./PortalItem-Csm1bfzR.js";let o=class extends u{constructor(...n){super(...n),this.portalItem=null,this.isReference=null,this.tileInfo=new s({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new i({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:r.WebMercator}),spatialReference:r.WebMercator,lods:[new e({level:0,scale:591657527591555e-6,resolution:156543.033928}),new e({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new e({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new e({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new e({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new e({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new e({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new e({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new e({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new e({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new e({level:10,scale:577790.554289,resolution:152.874056570411}),new e({level:11,scale:288895.277144,resolution:76.4370282850732}),new e({level:12,scale:144447.638572,resolution:38.2185141425366}),new e({level:13,scale:72223.819286,resolution:19.1092570712683}),new e({level:14,scale:36111.909643,resolution:9.55462853563415}),new e({level:15,scale:18055.954822,resolution:4.77731426794937}),new e({level:16,scale:9027.977411,resolution:2.38865713397468}),new e({level:17,scale:4513.988705,resolution:1.19432856685505}),new e({level:18,scale:2256.994353,resolution:.597164283559817}),new e({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new p(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,r.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};t([l({type:c,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"portalItem",void 0),t([l({type:Boolean,json:{read:!1,write:!1}})],o.prototype,"isReference",void 0),t([l({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"refreshInterval",null),t([l({type:s,json:{write:!1}})],o.prototype,"tileInfo",void 0),t([l({type:["show","hide"]})],o.prototype,"listMode",void 0),t([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"subDomains",void 0),t([l({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],o.prototype,"fullExtent",void 0),t([l({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"urlTemplate",void 0),t([l({type:["OpenStreetMap"]})],o.prototype,"operationalLayerType",void 0),t([l({json:{read:!1}})],o.prototype,"type",void 0),t([l({json:{read:!1,write:!1}})],o.prototype,"copyright",void 0),t([l({json:{read:!1,write:!1}})],o.prototype,"wmtsInfo",void 0),o=t([a("esri.layers.OpenStreetMapLayer")],o);const w=o;export{w as default};
