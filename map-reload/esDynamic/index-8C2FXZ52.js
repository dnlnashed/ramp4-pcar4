import{F as o,f6 as l,f7 as s}from"./main-DB4i4A8K.js";const d={en:{"layer-reorder.title":"Reorder Layers","layer-reorder.nolayers":"No Layers","layer-reorder.loading":"Loading","layer-reorder.expand":"Expand Sublayers","layer-reorder.expanded":"{name} sublayers expanded","layer-reorder.collapse":"Collapse Sublayers","layer-reorder.collapsed":"{name} sublayers collapsed","layer-reorder.move.up":"Move up","layer-reorder.move.down":"Move down","layer-reorder.layermoved":"{name} moved to index {index}"},fr:{"layer-reorder.title":"R\xE9organiser les couches","layer-reorder.nolayers":"Aucune couche","layer-reorder.loading":"Chargement","layer-reorder.expand":"D\xE9velopper les sous-couches","layer-reorder.expanded":"Sous-couches {name} d\xE9velopp\xE9es","layer-reorder.collapse":"R\xE9duire les sous-couches","layer-reorder.collapsed":"Sous-couches {name} r\xE9duites","layer-reorder.move.up":"D\xE9placer vers le haut","layer-reorder.move.down":"D\xE9placer vers le bas","layer-reorder.layermoved":"{name} d\xE9plac\xE9 vers l'index {index}"}};class n extends o{toggleLayerReorder(r){const a=this.$iApi.panel.get("layer-reorder");this.$iApi.panel.toggle(a,r)}}class t extends n{added(){this.$iApi.panel.register({"layer-reorder":{screens:{"layer-reorder-screen":()=>l(import("./screen-CMVkmDwN.js"))},style:{width:"350px"},button:{tooltip:"layer-reorder.title",icon:'<svg class="flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" /></svg>'},alertName:"layer-reorder.title"}},{i18n:{messages:d}}),this.handlePanelTeleports(["layer-reorder"])}removed(){this.$iApi.fixture.exists("appbar")&&s(this.$vApp.$pinia).removeButton("layer-reorder"),this.$iApi.panel.remove("layer-reorder")}}export{t as default};
