import{h as p}from"./GeometryUtils-CMLlJrY6.js";var h;(function(l){l[l.moveTo=1]="moveTo",l[l.lineTo=2]="lineTo",l[l.close=7]="close"})(h||(h={}));class f{constructor(e,t,o=0){this.values={},this._geometry=void 0,this._pbfGeometry=null,this.featureIndex=o;const s=t.keys,u=t.values,a=e.asUnsafe();for(;a.next();)switch(a.tag()){case 1:this.id=a.getUInt64();break;case 2:{const i=a.getMessage().asUnsafe(),r=this.values;for(;!i.empty();){const n=i.getUInt32(),c=i.getUInt32();r[s[n]]=u[c]}i.release();break}case 3:this.type=a.getUInt32();break;case 4:this._pbfGeometry=a.getMessage();break;default:a.skip()}}getGeometry(e){if(this._geometry!==void 0)return this._geometry;if(!this._pbfGeometry)return null;const t=this._pbfGeometry.asUnsafe();let o,s;this._pbfGeometry=null,e?e.reset(this.type):o=[];let u,a=h.moveTo,i=0,r=0,n=0;for(;!t.empty();){if(i===0){const c=t.getUInt32();a=7&c,i=c>>3}switch(i--,a){case h.moveTo:r+=t.getSInt32(),n+=t.getSInt32(),e?e.moveTo(r,n):o&&(s&&o.push(s),s=[],s.push(new p(r,n)));break;case h.lineTo:r+=t.getSInt32(),n+=t.getSInt32(),e?e.lineTo(r,n):s&&s.push(new p(r,n));break;case h.close:e?e.close():s&&!s[0].equals(r,n)&&s.push(s[0].clone());break;default:throw t.release(),new Error("Invalid path operation")}}return e?u=e.result():o&&(s&&o.push(s),u=o),t.release(),this._geometry=u,u}}class g{constructor(e){this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=e.clone();const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(g._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null}}export{g as e,f as s};