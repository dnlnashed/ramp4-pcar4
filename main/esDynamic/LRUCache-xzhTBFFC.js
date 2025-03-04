import{bX as d}from"./main-Czl6u6q4.js";const c=-3,f=c-1;var n;(function(_){_[_.ALL=0]="ALL",_[_.SOME=1]="SOME"})(n||(n={}));class g{get size(){return this._size}constructor(t=10485760){this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new d,this._users=new d}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace(e=>e[0]!==t)}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,-1),this._checkSize()}getSize(t,e){return this._db.get(t.id+e)?.size??0}put(t,e,s,h,r){e=t.id+e;const i=this._db.get(e);if(i&&(this._size-=i.size,t.size-=i.size,this._db.delete(e),i.entry!==s&&this._notifyRemove(e,i.entry,i.size,n.ALL)),h>this._maxSize)return void this._notifyRemove(e,s,h,n.ALL);if(s===void 0)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${e}`),void this._notifyRemove(e,s,0,n.ALL);const o=1+Math.max(r,f)-c;this._db.set(e,new S(s,h,o)),this._size+=h,t.size+=h,this._checkSize()}updateSize(t,e,s,h){e=t.id+e;const r=this._db.get(e);if(r&&r.entry===s){for(this._size-=r.size,t.size-=r.size;h>this._maxSize;){const i=this._notifyRemove(e,s,h,n.SOME);if(!(i!=null&&i>0))return void this._db.delete(e);h=i}r.size=h,this._size+=h,t.size+=h,this._checkSize()}}pop(t,e){e=t.id+e;const s=this._db.get(e);if(s)return this._size-=s.size,t.size-=s.size,this._db.delete(e),++this._hit,s.entry;++this._miss}get(t,e){e=t.id+e;const s=this._db.get(e);if(s!==void 0)return this._db.delete(e),s.lives=s.lifetime,this._db.set(e,s),++this._hit,s.entry;++this._miss}peek(t,e){const s=this._db.get(t.id+e);return s?++this._hit:++this._miss,s?.entry}get performanceInfo(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},s=new Array;this._db.forEach((i,o)=>{const a=i.lifetime;s[a]=(s[a]||0)+i.size,this._users.forAll(u=>{const{id:m,name:z}=u;if(o.startsWith(m)){const l=e[z]||0;e[z]=l+i.size}})});const h={};this._users.forAll(i=>{const o=i.name;if("hitRate"in i&&typeof i.hitRate=="number"&&!isNaN(i.hitRate)&&i.hitRate>0){const a=e[o]||0;e[o]=a,h[o]=Math.round(100*i.hitRate)+"%"}else h[o]="0%"});const r=Object.keys(e);r.sort((i,o)=>e[o]-e[i]),r.forEach(i=>t[i]=Math.round(e[i]/2**20)+"MB / "+h[i]);for(let i=s.length-1;i>=0;--i){const o=s[i];o&&(t["Priority "+(i+c-1)]=Math.round(o/this._size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll(t=>t.resetHitRate())}clear(t){const e=t.id;this._db.forEach((s,h)=>{h.startsWith(e)&&(this._size-=s.size,this._db.delete(h),this._notifyRemove(h,s.entry,s.size,n.ALL))}),t.size=0}clearAll(){this._db.forEach((t,e)=>this._notifyRemove(e,t.entry,t.size,n.ALL)),this._users.forAll(t=>t.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,s,h){let r;return this._removeFuncs.some(i=>{if(t.startsWith(i[0])){const o=i[1](e,h,s);return typeof o=="number"&&(r=o),!0}return!1}),r}_checkSize(){this._users.forAll(t=>this._checkSizeLimits(t)),this._checkSizeLimits()}_checkSizeLimits(t){const e=t??this;if(e.maxSize<0||e.size<=e.maxSize)return;const s=t?.id;let h=!0;for(;h;){h=!1;for(const[r,i]of this._db)if(i.lifetime===0&&(!s||r.startsWith(s))){if(this._purgeItem(r,i,t),e.size<=.9*e.maxSize)return;h||=this._db.has(r)}}for(const[r,i]of this._db)if((!s||r.startsWith(s))&&(this._purgeItem(r,i,t),e.size<=.9*e.maxSize))return}_purgeItem(t,e,s=this._users.find(h=>t.startsWith(h.id))){if(this._db.delete(t),e.lives<=1){this._size-=e.size,s&&(s.size-=e.size);const h=this._notifyRemove(t,e.entry,e.size,n.SOME);h!=null&&h>0&&(this._size+=h,s&&(s.size+=h),e.lives=e.lifetime,e.size=h,this._db.set(t,e))}else--e.lives,this._db.set(t,e)}}class S{constructor(t,e,s){this.entry=t,this.size=e,this.lifetime=s,this.lives=s}}class b{constructor(t,e){this._storage=new g,this.id="",this.name="",this.size=0,this._storage.maxSize=t,this._storage.register(this),e&&this._storage.registerRemoveFunc("",e)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,s=1){this._storage.put(this,t,e,s,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}export{b as e};
