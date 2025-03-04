import{b1 as W,s as p,n as Y}from"./main-CxlHa1F_.js";import{C as M,A as z,c as T,P as a,B as x,G as d,M as f,U as G,L as E,D as k,V as F}from"./enums-Dk3osxpS.js";const K=()=>Y.getLogger("esri.views.webgl.checkWebGLError");function q(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const X=!!W("enable-feature:webgl-debug");function H(){return X}function ce(){return X}function D(t){if(H()){const e=t.getError();if(e){const r=q(t,e),n=new Error().stack;K().error(new p("webgl-error","WebGL error occurred",{message:r,stack:n}))}}}var O;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(O||(O={}));function j(t){switch(t){case M.BYTE:case M.UNSIGNED_BYTE:return 1;case M.SHORT:case M.UNSIGNED_SHORT:case M.HALF_FLOAT:return 2;case M.FLOAT:case M.INT:case M.UNSIGNED_INT:return 4}}function Z(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function le(t,e,r,n,i=0){const o=t.gl;t.bindBuffer(r);for(const s of n){const c=e.get(s.name);if(c==null){console.warn(`There is no location for vertex attribute '${s.name}' defined.`);continue}const _=i*s.stride;if(s.count<=4)o.vertexAttribPointer(c,s.count,s.type,s.normalized,s.stride,s.offset+_),o.enableVertexAttribArray(c),s.divisor>0&&t.gl.vertexAttribDivisor(c,s.divisor);else if(s.count===9)for(let l=0;l<3;l++)o.vertexAttribPointer(c+l,3,s.type,s.normalized,s.stride,s.offset+12*l+_),o.enableVertexAttribArray(c+l),s.divisor>0&&t.gl.vertexAttribDivisor(c+l,s.divisor);else if(s.count===16)for(let l=0;l<4;l++)o.vertexAttribPointer(c+l,4,s.type,s.normalized,s.stride,s.offset+16*l+_),o.enableVertexAttribArray(c+l),s.divisor>0&&t.gl?.vertexAttribDivisor(c+l,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count);if(H()){const l=Z(t),h=j(s.type),u=s.offset,m=Math.round(h/u)!==h/u?`. Offset not a multiple of stride. DataType requires ${h} bytes, but descriptor has an offset of ${u}`:"";l&&console.error(`Unable to bind vertex attribute "${s.name}" with baseInstanceOffset ${_}${m}:`,l,s)}}}function _e(t,e,r,n){const i=t.gl;t.bindBuffer(r);for(const o of n){const s=e.get(o.name);if(o.count<=4)i.disableVertexAttribArray(s),o.divisor&&o.divisor>0&&t.gl?.vertexAttribDivisor(s,0);else if(o.count===9)for(let c=0;c<3;c++)i.disableVertexAttribArray(s+c),o.divisor&&o.divisor>0&&t.gl?.vertexAttribDivisor(s+c,0);else if(o.count===16)for(let c=0;c<4;c++)i.disableVertexAttribArray(s+c),o.divisor&&o.divisor>0&&t.gl?.vertexAttribDivisor(s+c,0);else console.error("Unsupported vertex attribute element count: "+o.count)}t.unbindBuffer(z.ARRAY_BUFFER)}function J(t){switch(t){case d.ALPHA:case d.LUMINANCE:case d.RED:case d.RED_INTEGER:case a.R8:case a.R8I:case a.R8UI:case a.R8_SNORM:case x.STENCIL_INDEX8:return 1;case d.LUMINANCE_ALPHA:case d.RG:case d.RG_INTEGER:case a.RGBA4:case a.R16F:case a.R16I:case a.R16UI:case a.RG8:case a.RG8I:case a.RG8UI:case a.RG8_SNORM:case a.RGB565:case a.RGB5_A1:case x.DEPTH_COMPONENT16:return 2;case d.DEPTH_COMPONENT:case d.RGB:case d.RGB_INTEGER:case a.RGB8:case a.RGB8I:case a.RGB8UI:case a.RGB8_SNORM:case a.SRGB8:case x.DEPTH_COMPONENT24:return 3;case d.DEPTH_STENCIL:case d.DEPTH24_STENCIL8:case d.RGBA:case d.RGBA_INTEGER:case a.RGBA8:case a.R32F:case a.R11F_G11F_B10F:case a.RG16F:case a.R32I:case a.R32UI:case a.RG16I:case a.RG16UI:case a.RGBA8I:case a.RGBA8UI:case a.RGBA8_SNORM:case a.SRGB8_ALPHA8:case a.RGB9_E5:case a.RGB10_A2UI:case a.RGB10_A2:case x.DEPTH_STENCIL:case x.DEPTH_COMPONENT32F:case x.DEPTH24_STENCIL8:return 4;case x.DEPTH32F_STENCIL8:return 5;case a.RGB16F:case a.RGB16I:case a.RGB16UI:return 6;case a.RG32F:case a.RG32I:case a.RG32UI:case a.RGBA16F:case a.RGBA16I:case a.RGBA16UI:return 8;case a.RGB32F:case a.RGB32I:case a.RGB32UI:return 12;case a.RGBA32F:case a.RGBA32I:case a.RGBA32UI:return 16;case T.COMPRESSED_RGB_S3TC_DXT1_EXT:case T.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case T.COMPRESSED_RGBA_S3TC_DXT3_EXT:case T.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case T.COMPRESSED_R11_EAC:case T.COMPRESSED_SIGNED_R11_EAC:case T.COMPRESSED_RGB8_ETC2:case T.COMPRESSED_SRGB8_ETC2:case T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case T.COMPRESSED_RG11_EAC:case T.COMPRESSED_SIGNED_RG11_EAC:case T.COMPRESSED_RGBA8_ETC2_EAC:case T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}let Q=class{constructor(e=0,r=e){this.width=e,this.height=r,this.target=f.TEXTURE_2D,this.pixelFormat=d.RGBA,this.dataType=G.UNSIGNED_BYTE,this.samplingMode=E.LINEAR,this.wrapMode=k.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}};function ee(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:J(t.internalFormat))*(t.target===f.TEXTURE_CUBE_MAP?6:1))}class B extends Q{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case a.R16F:case a.R16I:case a.R16UI:case a.R32F:case a.R32I:case a.R32UI:case a.R8_SNORM:case a.R8:case a.R8I:case a.R8UI:this.pixelFormat=d.RED}}static validate(e,r){return new B(e,r)}}let te=class g{constructor(e,r=null,n=null){if(this.type=O.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,n=r;else{const i=B.validate(e,r);if(!i)throw new p("Texture descriptor invalid");this._descriptor=i}this._descriptor.target===f.TEXTURE_CUBE_MAP?this._setDataCubeMap(n):this.setData(n)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return ee(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(F.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){const n=this._descriptor;if(n.width!==e||n.height!==r){if(this._wasImmutablyAllocated)throw new p("Immutable textures can't be resized!");n.width=e,n.height=r,this._descriptor.target===f.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=f.TEXTURE_CUBE_MAP_POSITIVE_X;r<=f.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){const n=this._descriptor.context?.gl;if(!n)return;D(n),this._glName||(this._glName=n.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(F.Texture,this));const i=this._descriptor,o=r??i.target,s=S(o),c=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),P(i),this._configurePixelStorage(),D(n);const _=this._deriveInternalFormat();if(v(e)){let l="width"in e?e.width:e.codedWidth,h="height"in e?e.height:e.codedHeight;const u=1;e instanceof HTMLVideoElement&&(l=e.videoWidth,h=e.videoHeight),i.width&&i.height,s&&i.depth,i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,_,i.hasMipmap,l,h,u),this._texImage(o,0,_,l,h,u,e),D(n),i.hasMipmap&&(this.generateMipmap(),D(n)),i.width||(i.width=l),i.height||(i.height=h),s&&!i.depth&&(i.depth=u)}else{const{width:l,height:h,depth:u}=i;if(l==null||h==null)throw new p("Width and height must be specified!");if(s&&u==null)throw new p("Depth must be specified!");if(i.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(o,_,i.hasMipmap,l,h,u),U(e)){const m=e.levels,R=y(o,l,h,u),N=Math.min(R-1,m.length-1);n.texParameteri(i.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,N);const I=_;if(!ie(I))throw new p("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((A,b,w,V)=>{const $=m[Math.min(A,m.length-1)];this._compressedTexImage(o,A,I,b,w,V,$)},N)}else this._texImage(o,0,_,l,h,u,e),D(n),i.hasMipmap&&this.generateMipmap()}C(n,this._descriptor),L(n,this._descriptor),re(this._descriptor.context,this._descriptor),D(n),this._descriptor.context.bindTexture(c,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,n,i,o,s,c=0){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const _=this._descriptor,l=this._deriveInternalFormat(),{context:h,pixelFormat:u,dataType:m,target:R,isImmutable:N}=_;if(N&&!this._wasImmutablyAllocated)throw new p("Cannot update immutable texture before allocation!");const I=h.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||n<0||r+i>_.width||n+o>_.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:A}=h;c&&A.pixelStorei(A.UNPACK_SKIP_ROWS,c),v(s)?A.texSubImage2D(R,e,r,n,i,o,u,m,s):U(s)?A.compressedTexSubImage2D(R,e,r,n,i,o,l,s.levels[e]):A.texSubImage2D(R,e,r,n,i,o,u,m,s),c&&A.pixelStorei(A.UNPACK_SKIP_ROWS,0),h.bindTexture(I,g.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,n,i,o,s,c,_){_||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor,h=this._deriveInternalFormat(),{context:u,pixelFormat:m,dataType:R,isImmutable:N,target:I}=l;if(N&&!this._wasImmutablyAllocated)throw new p("Cannot update immutable texture before allocation!");S(I)||console.warn("Attempting to set 3D texture data on a non-3D texture");const A=u.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),(r<0||n<0||i<0||r+o>l.width||n+s>l.height||i+c>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:b}=u;if(U(_))_=_.levels[e],b.compressedTexSubImage3D(I,e,r,n,i,o,s,c,h,_);else{const w=_;b.texSubImage3D(I,e,r,n,i,o,s,c,m,R,w)}u.bindTexture(A,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new p("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,P(e)}e.samplingMode===E.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=E.LINEAR_MIPMAP_NEAREST):e.samplingMode===E.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=E.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,g.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new p("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,P(e)}e.samplingMode===E.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=E.LINEAR):e.samplingMode===E.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=E.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,P(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,r=e.context.gl;this._samplingModeDirty&&(C(r,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(L(r,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===d.DEPTH_STENCIL&&(this._descriptor.internalFormat=d.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case G.FLOAT:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=a.RGBA32F;case d.RGB:return this._descriptor.internalFormat=a.RGB32F;default:throw new p("Unable to derive format")}case G.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case d.RGBA:return this._descriptor.internalFormat=a.RGBA8;case d.RGB:return this._descriptor.internalFormat=a.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===d.DEPTH_STENCIL?d.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:n,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,r,n,i,o,s){const{gl:c}=this._descriptor.context;if(!se(r))throw new p("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const _=n?y(e,i,o,s):1;if(S(e)){if(s==null)throw new p("Missing depth dimension for 3D texture upload");c.texStorage3D(e,_,r,i,o,s)}else c.texStorage2D(e,_,r,i,o);this._wasImmutablyAllocated=!0}_texImage(e,r,n,i,o,s,c){const _=this._descriptor.context.gl,l=S(e),{isImmutable:h,pixelFormat:u,dataType:m}=this._descriptor;if(h){if(c!=null){const R=c;if(l){if(s==null)throw new p("Missing depth dimension for 3D texture upload");_.texSubImage3D(e,r,0,0,0,i,o,s,u,m,R)}else _.texSubImage2D(e,r,0,0,i,o,u,m,R)}}else{const R=c;if(l){if(s==null)throw new p("Missing depth dimension for 3D texture upload");_.texImage3D(e,r,n,i,o,s,0,u,m,R)}else _.texImage2D(e,r,n,i,o,0,u,m,R)}}_compressedTexImage(e,r,n,i,o,s,c){const _=this._descriptor.context.gl,l=S(e);if(this._descriptor.isImmutable){if(c!=null)if(l){if(s==null)throw new p("Missing depth dimension for 3D texture upload");_.compressedTexSubImage3D(e,r,0,0,0,i,o,s,n,c)}else _.compressedTexSubImage2D(e,r,0,0,i,o,n,c)}else if(l){if(s==null)throw new p("Missing depth dimension for 3D texture upload");_.compressedTexImage3D(e,r,n,i,o,s,0,c)}else _.compressedTexImage2D(e,r,n,i,o,0,c)}_forEachMipmapLevel(e,r=1/0){let{width:n,height:i,depth:o,hasMipmap:s,target:c}=this._descriptor;const _=c===f.TEXTURE_3D;if(n==null||i==null||_&&o==null)throw new p("Missing texture dimensions for mipmap calculation");for(let l=0;e(l,n,i,o),s&&(n!==1||i!==1||_&&o!==1)&&!(l>=r);++l)n=Math.max(1,n>>1),i=Math.max(1,i>>1),_&&(o=Math.max(1,o>>1))}};function P(t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function C(t,e){let r=e.samplingMode,n=e.samplingMode;r===E.LINEAR_MIPMAP_NEAREST||r===E.LINEAR_MIPMAP_LINEAR?(r=E.LINEAR,e.hasMipmap||(n=E.LINEAR)):r!==E.NEAREST_MIPMAP_NEAREST&&r!==E.NEAREST_MIPMAP_LINEAR||(r=E.NEAREST,e.hasMipmap||(n=E.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,n)}function L(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function re(t,e){const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function se(t){return t in a}function ie(t){return t in T}function U(t){return t!=null&&"type"in t&&t.type==="compressed"}function ae(t){return t!=null&&"byteLength"in t}function v(t){return t!=null&&!U(t)&&!ae(t)}function S(t){return t===f.TEXTURE_3D||t===f.TEXTURE_2D_ARRAY}function y(t,e,r,n=1){let i=Math.max(e,r);return t===f.TEXTURE_3D&&(i=Math.max(i,n)),Math.round(Math.log(i)/Math.LN2)+1}te.TEXTURE_UNIT_FOR_UPDATES=0;export{le as E,_e as _,J as a,H as b,ce as c,B as d,O as e,te as m,Z as o,Q as p,j as s,D as u};
