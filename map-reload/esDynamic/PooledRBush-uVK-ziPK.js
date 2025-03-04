import{bX as g,bY as F,bZ as I}from"./main-DB4i4A8K.js";import{t as J}from"./quickselect-DHTstthl.js";class N{constructor(t=9,n){this._compareMinX=A,this._compareMinY=D,this._toBBox=i=>i,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&(typeof n=="function"?this._toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),d.prune(),M.prune(),m.prune(),B.prune()}all(t){y(this._data,t)}search(t,n){let i=this._data;const e=this._toBBox;if(Y(t,i))for(d.clear();i;){for(let a=0,s=i.children.length;a<s;a++){const r=i.children[a],o=i.leaf?e(r):r;Y(t,o)&&(i.leaf?n(r):E(t,o)?y(r,n):d.push(r))}i=d.pop()}}collides(t){let n=this._data;const i=this._toBBox;if(!Y(t,n))return!1;for(d.clear();n;){for(let e=0,a=n.children.length;e<a;e++){const s=n.children[e],r=n.leaf?i(s):s;if(Y(t,r)){if(n.leaf||E(t,r))return!0;d.push(s)}}n=d.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,e=t.length;i<e;i++)this.insert(t[i]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){const i=this._data;this._data=n,n=i}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(t){if(!t)return this;let n,i=this._data,e=null,a=0,s=!1;const r=this._toBBox(t);for(m.clear(),B.clear();i||m.length>0;){if(i||(i=m.pop(),e=m.data[m.length-1],a=B.pop()??0,s=!0),i.leaf&&(n=F(i.children,t,i.children.length,i.indexHint),n!==-1))return i.children.splice(n,1),m.push(i),this._condense(m),this;s||i.leaf||!E(i,r)?e?(a++,i=e.children[a],s=!1):i=null:(m.push(i),B.push(a),a=0,e=i,i=i.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,n,i,e){const a=i-n+1;let s=this._maxEntries;if(a<=s){const l=new w(t.slice(n,i+1));return f(l,this._toBBox),l}e||(e=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/s**(e-1)));const r=new S([]);r.height=e;const o=Math.ceil(a/s),c=o*Math.ceil(Math.sqrt(s));H(t,n,i,c,this._compareMinX);for(let l=n;l<=i;l+=c){const u=Math.min(l+c-1,i);H(t,l,u,o,this._compareMinY);for(let p=l;p<=u;p+=o){const v=Math.min(p+o-1,u);r.children.push(this._build(t,p,v,e-1))}}return f(r,this._toBBox),r}_insert(t,n,i){const e=this._toBBox,a=i?t:e(t);m.clear();const s=O(a,this._data,n,m);for(s.children.push(t),_(s,a);n>=0&&m.data[n].children.length>this._maxEntries;)this._split(m,n),n--;q(a,m,n)}_split(t,n){const i=t.data[n],e=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,e);const s=this._chooseSplitIndex(i,a,e);if(!s)return;const r=i.children.splice(s,i.children.length-s),o=i.leaf?new w(r):new S(r);o.height=i.height,f(i,this._toBBox),f(o,this._toBBox),n?t.data[n-1].children.push(o):this._splitRoot(i,o)}_splitRoot(t,n){this._data=new S([t,n]),this._data.height=t.height+1,f(this._data,this._toBBox)}_chooseSplitIndex(t,n,i){let e,a,s;e=a=1/0;for(let r=n;r<=i-n;r++){const o=x(t,0,r,this._toBBox),c=x(t,r,i,this._toBBox),l=Z(o,c),u=b(o)+b(c);l<e?(e=l,s=r,a=u<a?u:a):l===e&&u<a&&(a=u,s=r)}return s}_chooseSplitAxis(t,n,i){const e=t.leaf?this._compareMinX:A,a=t.leaf?this._compareMinY:D;this._allDistMargin(t,n,i,e)<this._allDistMargin(t,n,i,a)&&t.children.sort(e)}_allDistMargin(t,n,i,e){t.children.sort(e);const a=this._toBBox,s=x(t,0,n,a),r=x(t,i-n,i,a);let o=X(s)+X(r);for(let c=n;c<i-n;c++){const l=t.children[c];_(s,t.leaf?a(l):l),o+=X(s)}for(let c=i-n-1;c>=n;c--){const l=t.children[c];_(r,t.leaf?a(l):l),o+=X(r)}return o}_condense(t){for(let n=t.length-1;n>=0;n--){const i=t.data[n];if(i.children.length===0)if(n>0){const e=t.data[n-1],a=e.children;a.splice(F(a,i,a.length,e.indexHint),1)}else this.clear();else f(i,this._toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this._compareMinX=new Function("a","b",n.join(t[0])),this._compareMinY=new Function("a","b",n.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function O(h,t,n,i){for(;i.push(t),t.leaf!==!0&&i.length-1!==n;){let e,a=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const c=t.children[r],l=b(c),u=z(h,c)-l;u<s?(s=u,a=l<a?l:a,e=c):u===s&&l<a&&(a=l,e=c)}t=e||t.children[0]}return t}function y(h,t){let n=h;for(M.clear();n;){if(n.leaf===!0)for(const i of n.children)t(i);else M.pushArray(n.children);n=M.pop()??null}}function q(h,t,n){for(let i=n;i>=0;i--)_(t.data[i],h)}function f(h,t){x(h,0,h.children.length,t,h)}function x(h,t,n,i,e){e||(e=new w([])),e.minX=1/0,e.minY=1/0,e.maxX=-1/0,e.maxY=-1/0;for(let a,s=t;s<n;s++)a=h.children[s],_(e,h.leaf?i(a):a);return e}function _(h,t){h.minX=Math.min(h.minX,t.minX),h.minY=Math.min(h.minY,t.minY),h.maxX=Math.max(h.maxX,t.maxX),h.maxY=Math.max(h.maxY,t.maxY)}function A(h,t){return h.minX-t.minX}function D(h,t){return h.minY-t.minY}function b(h){return(h.maxX-h.minX)*(h.maxY-h.minY)}function X(h){return h.maxX-h.minX+(h.maxY-h.minY)}function z(h,t){return(Math.max(t.maxX,h.maxX)-Math.min(t.minX,h.minX))*(Math.max(t.maxY,h.maxY)-Math.min(t.minY,h.minY))}function Z(h,t){const n=Math.max(h.minX,t.minX),i=Math.max(h.minY,t.minY),e=Math.min(h.maxX,t.maxX),a=Math.min(h.maxY,t.maxY);return Math.max(0,e-n)*Math.max(0,a-i)}function E(h,t){return h.minX<=t.minX&&h.minY<=t.minY&&t.maxX<=h.maxX&&t.maxY<=h.maxY}function Y(h,t){return t.minX<=h.maxX&&t.minY<=h.maxY&&t.maxX>=h.minX&&t.maxY>=h.minY}function H(h,t,n,i,e){const a=[t,n];for(;a.length;){const s=a.pop(),r=a.pop();if(s-r<=i)continue;const o=r+Math.ceil((s-r)/i/2)*i;J(h,o,r,s,e),a.push(r,o,o,s)}}const d=new g,M=new g,m=new g,B=new g({deallocator:void 0});class R{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class j extends R{constructor(){super(...arguments),this.height=1,this.indexHint=new I}}class w extends j{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends j{constructor(t){super(),this.children=t,this.leaf=!1}}export{R as E,N as h};
