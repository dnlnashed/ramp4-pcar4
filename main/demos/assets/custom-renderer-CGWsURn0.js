import{g as e,d as r}from"./main-BvP2mMJi.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let s={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],caption:{mapCoords:{formatter:"WEB_MERCATOR"},scaleBar:{imperialScale:!0}},lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:e.defaultLODs(e.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:e.defaultLODs(e.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0},{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseNrCan",name:"Canada Base Map - Transportation (CBMT)",description:"The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"The Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseSimple",name:"Canada Base Map - Simple",description:"Canada Base Map - Simple",altText:"Canada base map - Simple",layers:[{id:"SMR",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBME_CBCE_HS_RO_3978",name:"Canada Base Map - Elevation (CBME)",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Elevation (CBME)",layers:[{id:"CBME_CBCE_HS_RO_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBMT_CBCT_GEOM_3978",name:"Canada Base Map - Transportation (CBMT)",description:" The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT_CBCT_GEOM_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",attribution:{text:{disabled:!0},logo:{disabled:!0}}},{id:"baseEsriPhysical",name:"World Physical Map",description:"This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.",altText:"World Physical Map",layers:[{id:"World_Physical_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriRelief",name:"World Shaded Relief",description:"This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.",altText:"World Shaded Relief",layers:[{id:"World_Shaded_Relief",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriStreet",name:"World Street Map",description:"This worldwide street map presents highway-level data for the world.",altText:"ESWorld Street Map",layers:[{id:"World_Street_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTerrain",name:"World Terrain Base",description:"This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.",altText:"World Terrain Base",layers:[{id:"World_Terrain_Base",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTopo",name:"World Topographic Map",description:"This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.",altText:"World Topographic Map",layers:[{id:"World_Topo_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"}],initialBasemapId:"baseEsriWorld"},layers:[{id:"FeatureSimple",layerType:"esri-feature",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9",customRenderer:{type:"simple",label:"Super Simple",symbol:{type:"esriSMS",style:"esriSMSCross",color:[255,225,0,255],size:8,angle:0,xoffset:0,yoffset:0,outline:{color:[255,225,0,255],width:4}}},state:{opacity:1,visibility:!1}},{id:"FeatureUniqueValue",layerType:"esri-feature",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9",customRenderer:{type:"uniqueValue",field1:"Category",uniqueValueInfos:[{value:"Clean Air",label:"The Cleanest Airs",symbol:{type:"esriSMS",style:"esriSMSDiamond",color:[225,152,234,255],size:12,angle:0,xoffset:0,yoffset:0,outline:{color:[255,255,255,255],width:.5}}}]},state:{opacity:1,visibility:!1}},{id:"FeatureClassBreaks",layerType:"esri-feature",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9",customRenderer:{type:"classBreaks",field:"OBJECTID",minValue:0,classBreakInfos:[{classMaxValue:100,symbol:{type:"esriSMS",style:"esriSMSCircle",color:[122,250,255,255],size:10,outline:{color:[0,0,0,255],width:1}},label:"OID 0 to 100"},{classMaxValue:300,symbol:{type:"esriSMS",style:"esriSMSCircle",color:[55,169,255,255],size:14,outline:{color:[0,0,0,255],width:1}},label:"OID 100 to 300"},{classMaxValue:1e3,symbol:{type:"esriSMS",style:"esriSMSCircle",color:[0,27,209,255],size:18,outline:{color:[0,0,0,255],width:1}},label:"OID 300 to 1000"}]},state:{opacity:1,visibility:!0}},{id:"WFSSimple",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on",xyInAttribs:!0,customRenderer:{type:"simple",label:"Ultra Simple",symbol:{type:"esriSMS",style:"esriSMSTriangle",color:[61,255,166,255],size:8,angle:0,xoffset:0,yoffset:0,outline:{color:[255,255,255,255],width:.5}}},state:{opacity:1,visibility:!1}},{id:"WFSUniqueValue",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on",xyInAttribs:!0,customRenderer:{type:"uniqueValue",field1:"joined__rejoint",defaultSymbol:{type:"esriSMS",style:"esriSMSCircle",color:[255,255,255,255],size:8,angle:0,xoffset:0,yoffset:0,outline:{color:[0,0,0,255],width:2}},defaultLabel:"Other",uniqueValueInfos:[{value:0,symbol:{type:"esriSMS",style:"esriSMSDiamond",color:[142,0,0,255],size:10,angle:20,xoffset:0,yoffset:0,outline:{color:[0,0,0,255],width:.5}},label:"Not Joined"},{value:1,symbol:{type:"esriSMS",style:"esriSMSDiamond",color:[0,142,77,255],size:10,angle:65,xoffset:0,yoffset:0,outline:{color:[255,255,255,255],width:.5}},label:"Joined"}]},state:{opacity:1,visibility:!0}},{id:"WFSClassBreaks",layerType:"ogc-wfs",url:"https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on",xyInAttribs:!0,customRenderer:{type:"classBreaks",field:"OBJECTID",defaultSymbol:{type:"esriSMS",style:"esriSMSCross",color:[0,0,0,255],size:8,angle:45,xoffset:0,yoffset:0,outline:{color:[0,0,0,255],width:4}},defaultLabel:"Other",minValue:0,classBreakInfos:[{classMaxValue:50,symbol:{type:"esriSMS",style:"esriSMSCross",color:[255,190,124,255],size:8,angle:45,xoffset:0,yoffset:0,outline:{color:[255,190,124,255],width:4}},label:"OID 0 to 50"},{classMaxValue:100,symbol:{type:"esriSMS",style:"esriSMSCross",color:[190,124,255,255],size:8,angle:45,xoffset:0,yoffset:0,outline:{color:[190,124,255,255],width:4}},label:"OID 50 to 100"}]},fixtures:{legend:{toggleSymbology:!1}},state:{opacity:1,visibility:!1}},{id:"MILSimple",layerType:"esri-map-image",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:18,state:{opacity:.7,visibility:!0},customRenderer:{type:"simple",label:"Extra Simple",symbol:{type:"esriSMS",style:"esriSMSCircle",color:[169,255,112,255],size:6,outline:{color:[71,0,24,255],width:.4}}}},{index:1,state:{opacity:.7,visibility:!0},customRenderer:{type:"simple",label:"Very Simple",symbol:{type:"esriSMS",style:"esriSMSCircle",color:[127,112,255,255],size:6,outline:{color:[71,0,24,255],width:.4}}}}]},{id:"MILUniqueValue",layerType:"esri-map-image",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:18,state:{opacity:.8,visibility:!1},customRenderer:{type:"uniqueValue",field1:"GridColumn3",defaultSymbol:{type:"esriSMS",style:"esriSMSTriangle",color:[255,128,179,255],size:8,outline:{color:[71,0,24,255],width:1}},defaultLabel:"Other",uniqueValueInfos:[{value:"Saskatchewan",symbol:{type:"esriSMS",style:"esriSMSTriangle",color:[255,102,51,255],size:12,angle:180,outline:{color:[71,0,24,255],width:1}},label:"Saskatchewan"},{value:"Quebec",symbol:{type:"esriSMS",style:"esriSMSTriangle",color:[255,234,0,255],size:12,angle:180,outline:{color:[71,0,24,255],width:1}},label:"Quebec"}]}}]},{id:"MILClassBreaks",layerType:"esri-map-image",url:"https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:18,state:{opacity:.7,visibility:!1},customRenderer:{type:"classBreaks",field:"Longitude",defaultSymbol:{type:"esriSMS",style:"esriSMSSquare",color:[0,0,0,255],size:6,outline:{color:[255,255,255,255],width:1}},defaultLabel:"Other",minValue:-130,classBreakInfos:[{classMaxValue:-85,symbol:{type:"esriSMS",style:"esriSMSSquare",color:[255,61,126,255],size:6,outline:{color:[0,0,0,255],width:1}},label:"Longitude -130 to -85"},{classMaxValue:-40,symbol:{type:"esriSMS",style:"esriSMSSquare",color:[234,77,255,255],size:6,outline:{color:[0,0,0,255],width:1}},label:"Longitude -85 to -40"}]}}]}],fixtures:{legend:{root:{children:[{name:"Feature Layer",exclusive:!0,children:[{layerId:"FeatureSimple",name:"Simple"},{layerId:"FeatureUniqueValue",name:"Unique Value"},{layerId:"FeatureClassBreaks",name:"Class Breaks"}]},{name:"(fake) File Layer",exclusive:!0,children:[{layerId:"WFSSimple",name:"Simple"},{layerId:"WFSUniqueValue",name:"Unique Value"},{layerId:"WFSClassBreaks",name:"Class Breaks"}]},{name:"Map Image Layer",exclusive:!0,children:[{name:"Simple",children:[{layerId:"MILSimple",name:"Sulfur Oxide Emissions",sublayerIndex:18},{layerId:"MILSimple",name:"Water Quantity",sublayerIndex:1}]},{layerId:"MILUniqueValue",name:"Unique Value",sublayerIndex:18},{layerId:"MILClassBreaks",name:"Class Breaks",sublayerIndex:18}]}]}},appbar:{items:["legend"]},mapnav:{items:["fullscreen","help","home","basemap"]}},system:{animate:!0}}}},i={loadDefaultFixtures:!1,loadDefaultEvents:!0};const a=r(document.getElementById("app"),s,i);a.fixture.addDefaultFixtures().then(()=>{a.panel.open("legend")});window.debugInstance=a;
