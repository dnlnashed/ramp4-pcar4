import{cj as o,ck as A,cl as F,cm as T,n as b}from"./main-DB4i4A8K.js";import{u as f}from"./Texture-DDOwYN6r.js";import{A as n,F as h,V as c,C as a}from"./enums-DBi1-Mm2.js";const E=()=>b.getLogger("esri.views.webgl.BufferObject");class r{static createIndex(t,e,s){return new r(t,n.ELEMENT_ARRAY_BUFFER,e,s)}static createVertex(t,e,s){return new r(t,n.ARRAY_BUFFER,e,s)}static createUniform(t,e,s){return new r(t,n.UNIFORM_BUFFER,e,s)}static createPixelPack(t,e=h.STREAM_READ,s){const i=new r(t,n.PIXEL_PACK_BUFFER,e);return s&&i.setSize(s),i}static createPixelUnpack(t,e=h.STREAM_DRAW,s){return new r(t,n.PIXEL_UNPACK_BUFFER,e,s)}static createTransformFeedback(t,e=h.STATIC_DRAW,s){const i=new r(t,n.TRANSFORM_FEEDBACK_BUFFER,e);return i.setSize(s),i}constructor(t,e,s,i){this._context=t,this.bufferType=e,this.usage=s,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(c.BufferObject,this),this._glName=this._context.gl.createBuffer(),f(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===n.ELEMENT_ARRAY_BUFFER){if(this._indexType===a.UNSIGNED_INT)return 4*this._size;if(this._indexType===a.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===n.ELEMENT_ARRAY_BUFFER||this.bufferType===n.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(c.BufferObject,this),this._context=null):this._glName&&E().warn("Leaked WebGL buffer object")}setSize(t,e=null){if(this.bufferType===n.ELEMENT_ARRAY_BUFFER&&e!=null)switch(this._indexType=e,e){case a.UNSIGNED_SHORT:t*=2;break;case a.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===n.ELEMENT_ARRAY_BUFFER&&(o(t)?this._indexType=a.UNSIGNED_BYTE:A(t)?(e/=2,this._indexType=a.UNSIGNED_SHORT):F(t)&&(e/=4,this._indexType=a.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const s=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;e!=null?i.bufferData(this.bufferType,e,this.usage):i.bufferData(this.bufferType,t,this.usage),f(i),this._isVAOAware&&this._context.bindVAO(s)}setSubData(t,e,s,i){if(!t)return;const u=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:_}=this._context;_.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,s,i-s),f(_),this._isVAOAware&&this._context.bindVAO(u)}getSubData(t,e=0,s,i){if(s<0||i<0)return;const u=l(t)?t.BYTES_PER_ELEMENT:1;if(u*((s??0)+(i??0))>t.byteLength)return;e+u*(i??0)>this.usedMemory&&E().warn("Potential problem getting subdata: requested data exceeds buffer size!");const _=this._context.gl;this.bufferType===n.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,n.TRANSFORM_FEEDBACK_BUFFER),_.getBufferSubData(n.TRANSFORM_FEEDBACK_BUFFER,e,t,s,i),this._context.unbindBuffer(n.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,n.COPY_READ_BUFFER),_.getBufferSubData(n.COPY_READ_BUFFER,e,t,s,i),this._context.unbindBuffer(n.COPY_READ_BUFFER))}async getSubDataAsync(t,e=0,s,i){await this._context.clientWaitAsync(),this.getSubData(t,e,s,i)}}function l(R){return T(R)}export{r as E};
