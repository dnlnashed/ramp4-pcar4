import{ch as P}from"./main-C2GI9Q3q.js";var M={};M.defaultNoDataValue=P(-1/0),M.decode=function(n,t){var r=(t=t||{}).encodedMaskData||t.encodedMaskData===null,e=E(n,t.inputOffset||0,r),d=t.noDataValue!=null?P(t.noDataValue):M.defaultNoDataValue,i=Y(e,t.pixelType||Float32Array,t.encodedMaskData,d,t.returnMask),l={width:e.width,height:e.height,pixelData:i.resultPixels,minValue:e.pixels.minValue,maxValue:e.pixels.maxValue,noDataValue:d};return i.resultMask&&(l.maskData=i.resultMask),t.returnEncodedMask&&e.mask&&(l.encodedMaskData=e.mask.bitset?e.mask.bitset:null),t.returnFileInfo&&(l.fileInfo=F(e,d),t.computeUsedBitDepths&&(l.fileInfo.bitDepths=X(e))),l};var Y=function(n,t,r,e,d){var i,l,c=0,u=n.pixels.numBlocksX,k=n.pixels.numBlocksY,y=Math.floor(n.width/u),v=Math.floor(n.height/k),x=2*n.maxZError;r=r||(n.mask?n.mask.bitset:null),i=new t(n.width*n.height),d&&r&&(l=new Uint8Array(n.width*n.height));for(var h,g,p=new Float32Array(y*v),b=0;b<=k;b++){var B=b!==k?v:n.height%k;if(B!==0)for(var D=0;D<=u;D++){var o=D!==u?y:n.width%u;if(o!==0){var U,a,f,w,s=b*n.width*v+D*y,V=n.width-o,m=n.pixels.blocks[c];if(m.encoding<2?(m.encoding===0?U=m.rawData:(S(m.stuffedData,m.bitsPerPixel,m.numValidPixels,m.offset,x,p,n.pixels.maxValue),U=p),a=0):f=m.encoding===2?0:m.offset,r)for(g=0;g<B;g++){for(7&s&&(w=r[s>>3],w<<=7&s),h=0;h<o;h++)7&s||(w=r[s>>3]),128&w?(l&&(l[s]=1),i[s++]=m.encoding<2?U[a++]:f):(l&&(l[s]=0),i[s++]=e),w<<=1;s+=V}else if(m.encoding<2)for(g=0;g<B;g++){for(h=0;h<o;h++)i[s++]=U[a++];s+=V}else for(g=0;g<B;g++)if(i.fill)i.fill(f,s,s+o),s+=o+V;else{for(h=0;h<o;h++)i[s++]=f;s+=V}if(m.encoding===1&&a!==m.numValidPixels)throw"Block and Mask do not match";c++}}}return{resultPixels:i,resultMask:l}},F=function(n,t){return{fileIdentifierString:n.fileIdentifierString,fileVersion:n.fileVersion,imageType:n.imageType,height:n.height,width:n.width,maxZError:n.maxZError,eofOffset:n.eofOffset,mask:n.mask?{numBlocksX:n.mask.numBlocksX,numBlocksY:n.mask.numBlocksY,numBytes:n.mask.numBytes,maxValue:n.mask.maxValue}:null,pixels:{numBlocksX:n.pixels.numBlocksX,numBlocksY:n.pixels.numBlocksY,numBytes:n.pixels.numBytes,maxValue:n.pixels.maxValue,minValue:n.pixels.minValue,noDataValue:t}}},X=function(n){for(var t=n.pixels.numBlocksX*n.pixels.numBlocksY,r={},e=0;e<t;e++){var d=n.pixels.blocks[e];d.encoding===0?r.float32=!0:d.encoding===1?r[d.bitsPerPixel]=!0:r[0]=!0}return Object.keys(r)},E=function(n,t,r){var e={},d=new Uint8Array(n,t,10);if(e.fileIdentifierString=String.fromCharCode.apply(null,d),e.fileIdentifierString.trim()!="CntZImage")throw"Unexpected file identifier string: "+e.fileIdentifierString;t+=10;var i=new DataView(n,t,24);if(e.fileVersion=i.getInt32(0,!0),e.imageType=i.getInt32(4,!0),e.height=i.getUint32(8,!0),e.width=i.getUint32(12,!0),e.maxZError=i.getFloat64(16,!0),t+=24,!r)if(i=new DataView(n,t,16),e.mask={},e.mask.numBlocksY=i.getUint32(0,!0),e.mask.numBlocksX=i.getUint32(4,!0),e.mask.numBytes=i.getUint32(8,!0),e.mask.maxValue=i.getFloat32(12,!0),t+=16,e.mask.numBytes>0){var l=new Uint8Array(Math.ceil(e.width*e.height/8)),c=(i=new DataView(n,t,e.mask.numBytes)).getInt16(0,!0),u=2,k=0;do{if(c>0)for(;c--;)l[k++]=i.getUint8(u++);else{var y=i.getUint8(u++);for(c=-c;c--;)l[k++]=y}c=i.getInt16(u,!0),u+=2}while(u<e.mask.numBytes);if(c!==-32768||k<l.length)throw"Unexpected end of mask RLE encoding";e.mask.bitset=l,t+=e.mask.numBytes}else e.mask.numBytes|e.mask.numBlocksY|e.mask.maxValue||(l=new Uint8Array(Math.ceil(e.width*e.height/8)),e.mask.bitset=l);i=new DataView(n,t,16),e.pixels={},e.pixels.numBlocksY=i.getUint32(0,!0),e.pixels.numBlocksX=i.getUint32(4,!0),e.pixels.numBytes=i.getUint32(8,!0),e.pixels.maxValue=i.getFloat32(12,!0),t+=16;var v=e.pixels.numBlocksX,x=e.pixels.numBlocksY,h=v+(e.width%v>0?1:0),g=x+(e.height%x>0?1:0);e.pixels.blocks=new Array(h*g);for(var p=1e9,b=0,B=0;B<g;B++)for(var D=0;D<h;D++){var o=0,U=n.byteLength-t;i=new DataView(n,t,Math.min(10,U));var a={};e.pixels.blocks[b++]=a;var f=i.getUint8(0);if(o++,a.encoding=63&f,a.encoding>3)throw"Invalid block encoding ("+a.encoding+")";if(a.encoding!==2){if(f!==0&&f!==2){if(f>>=6,a.offsetType=f,f===2)a.offset=i.getInt8(1),o++;else if(f===1)a.offset=i.getInt16(1,!0),o+=2;else{if(f!==0)throw"Invalid block offset type";a.offset=i.getFloat32(1,!0),o+=4}if(p=Math.min(a.offset,p),a.encoding===1)if(f=i.getUint8(o),o++,a.bitsPerPixel=63&f,f>>=6,a.numValidPixelsType=f,f===2)a.numValidPixels=i.getUint8(o),o++;else if(f===1)a.numValidPixels=i.getUint16(o,!0),o+=2;else{if(f!==0)throw"Invalid valid pixel count type";a.numValidPixels=i.getUint32(o,!0),o+=4}}var w;if(t+=o,a.encoding!=3){if(a.encoding===0){var s=(e.pixels.numBytes-1)/4;if(s!==Math.floor(s))throw"uncompressed block has invalid length";w=new ArrayBuffer(4*s),new Uint8Array(w).set(new Uint8Array(n,t,4*s));for(var V=new Float32Array(w),m=0;m<V.length;m++)p=Math.min(p,V[m]);a.rawData=V,t+=4*s}else if(a.encoding===1){var A=Math.ceil(a.numValidPixels*a.bitsPerPixel/8),I=Math.ceil(A/4);w=new ArrayBuffer(4*I),new Uint8Array(w).set(new Uint8Array(n,t,A)),a.stuffedData=new Uint32Array(w),t+=A}}}else t++,p=Math.min(p,0)}return e.pixels.minValue=p,e.eofOffset=t,e},S=function(n,t,r,e,d,i,l){var c,u,k,y=(1<<t)-1,v=0,x=0,h=Math.ceil((l-e)/d),g=4*n.length-Math.ceil(t*r/8);for(n[n.length-1]<<=8*g,c=0;c<r;c++){if(x===0&&(k=n[v++],x=32),x>=t)u=k>>>x-t&y,x-=t;else{var p=t-x;u=(k&y)<<p&y,u+=(k=n[v++])>>>(x=32-p)}i[c]=u<h?e+u*d:l}return i};const T=M.decode;class O{_decode(t){const r=T(t.buffer,t.options);return Promise.resolve({result:r,transferList:[r.pixelData.buffer]})}}function Z(){return new O}export{Z as default};
