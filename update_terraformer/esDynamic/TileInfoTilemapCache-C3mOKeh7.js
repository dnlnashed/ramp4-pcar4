import{O as n,s as h,E as r}from"./main-jlUEdDH5.js";class c{constructor(t,e=0,i=t.lods[t.lods.length-1].level){this.tileInfo=t,this.minLOD=e,this.maxLOD=i,t.lodAt(e)||(this.minLOD=t.lods[0].level),t.lodAt(i)||(this.maxLOD=t.lods[t.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(t,e,i){const l=this.tileInfo?.lodAt(t);return!l||t<this.minLOD||t>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&e>=l.rows[0]&&e<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(t,e,i,l){await n(l);const s=this.getAvailability(t,e,i);if(s==="unavailable")throw new h("tile-map:tile-unavailable","Tile is not available",{level:t,row:e,col:i});return s}async fetchAvailabilityUpsample(t,e,i,l,s){await n(s),l.level=t,l.row=e,l.col=i;const o=this.tileInfo;return o.updateTileInfo(l),this.fetchAvailability(t,e,i,s).catch(a=>{if(r(a))throw a;if(o.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,s);throw a})}}export{c as e};
