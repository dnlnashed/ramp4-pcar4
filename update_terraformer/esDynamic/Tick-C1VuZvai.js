import{dz as $}from"./main-jlUEdDH5.js";import{n as C,Y as H,aD as Z,P as w,R as Q,aE as z,r as P,aF as W,F as M,a8 as G,t as J,aG as ee,ap as q,aH as te,a5 as K}from"./Theme-BRUFeWdZ.js";class se extends z{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,s){this.processor&&this.processor.processRow(s),super._onSetIndex(e,t,s)}}class R extends Z{constructor(e,t,s){super(s),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class j extends C{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new se}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll(e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,e.type==="clear")w(t,s=>{s.dispose()}),t.length=0,this._onDataClear();else if(e.type==="push"){const s=new R(this,e.newValue,this._makeDataItem(e.newValue));t.push(s),this.processDataItem(s)}else if(e.type==="setIndex"){const s=t[e.index],i=this._makeDataItem(e.newValue);s.bullets&&s.bullets.length==0&&(s.bullets=void 0),Q(i).forEach(l=>{s.animate({key:l,to:i[l],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})}),s.dataContext=e.newValue}else if(e.type==="insertIndex"){const s=new R(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,s),this.processDataItem(s)}else if(e.type==="removeIndex")t[e.index].dispose(),t.splice(e.index,1);else{if(e.type!=="moveIndex")throw new Error("Unknown IStreamEvent type");{const s=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,s)}}this._afterDataChange()}))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},w(this.valueFields,e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})})),this.fields&&(this._fields=[],this._fieldsF={},w(this.fields,e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")}))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&w(this._valueFields,s=>{const i=this.get(this._valueFieldsF[s].fieldKey);t[s]=e[i],t[this._valueFieldsF[s].workingKey]=t[s]}),this._fields&&w(this._fields,s=>{const i=this.get(this._fieldsF[s]);t[s]=e[i]}),t}makeDataItem(e,t){let s=new R(this,t,e);return this.processDataItem(s),s}pushDataItem(e,t){const s=this.makeDataItem(e,t);return this._mainDataItems.push(s),s}disposeDataItem(e){}showDataItem(e,t){return $(this,void 0,void 0,function*(){e.set("visible",!0)})}hideDataItem(e,t){return $(this,void 0,void 0,function*(){e.set("visible",!1)})}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}function ie(n){return new Promise((e,t)=>{setTimeout(e,n)})}Object.defineProperty(j,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(j,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:C.classNames.concat([j.className])});let ae={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function k(n,e){return e==null&&(e=1),ae[n]*e}function N(n,e,t,s,i,l,o){if(!o||i){let h=0;switch(i||e=="millisecond"||(h=n.getTimezoneOffset(),n.setUTCMinutes(n.getUTCMinutes()-h)),e){case"day":let d=n.getUTCDate();if(t>1){if(l){l=N(l,"day",1);let D=n.getTime()-l.getTime(),b=Math.floor(D/k("day")/t),x=k("day",b*t);n.setTime(l.getTime()+x-h*k("minute"))}}else n.setUTCDate(d);n.setUTCHours(0,0,0,0);break;case"second":let r=n.getUTCSeconds();t>1&&(r=Math.floor(r/t)*t),n.setUTCSeconds(r,0);break;case"millisecond":if(t==1)return n;let m=n.getUTCMilliseconds();m=Math.floor(m/t)*t,n.setUTCMilliseconds(m);break;case"hour":let p=n.getUTCHours();t>1&&(p=Math.floor(p/t)*t),n.setUTCHours(p,0,0,0);break;case"minute":let u=n.getUTCMinutes();t>1&&(u=Math.floor(u/t)*t),n.setUTCMinutes(u,0,0);break;case"month":let a=n.getUTCMonth();t>1&&(a=Math.floor(a/t)*t),n.setUTCMonth(a,1),n.setUTCHours(0,0,0,0);break;case"year":let g=n.getUTCFullYear();t>1&&(g=Math.floor(g/t)*t),n.setUTCFullYear(g,0,1),n.setUTCHours(0,0,0,0);break;case"week":if(t>1&&l){l=N(l,"week",1);let D=n.getTime()-l.getTime(),b=Math.floor(D/k("week")/t),x=k("week",b*t);n.setTime(l.getTime()+x-h*k("minute"))}let y=n.getUTCDate(),_=n.getUTCDay();M(s)||(s=1),y=_>=s?y-_+s:y-(7+_)+s,n.setUTCDate(y),n.setUTCHours(0,0,0,0)}if(!i&&e!="millisecond"&&(n.setUTCMinutes(n.getUTCMinutes()+h),e=="day"||e=="week"||e=="month"||e=="year")){let d=n.getTimezoneOffset();if(d!=h){let r=d-h;n.setUTCMinutes(n.getUTCMinutes()+r)}}return n}{if(isNaN(n.getTime()))return n;let h=o.offsetUTC(n),d=n.getTimezoneOffset(),r=o.parseDate(n),m=r.year,p=r.month,u=r.day,a=r.hour,g=r.minute,y=r.second,_=r.millisecond,D=r.weekday,b=h-d;switch(e){case"day":if(t>1&&l){l=N(l,"day",1,s,i,void 0,o);let T=n.getTime()-l.getTime(),V=Math.floor(T/k("day")/t),I=k("day",V*t);n.setTime(l.getTime()+I),r=o.parseDate(n),m=r.year,p=r.month,u=r.day}a=0,g=b,y=0,_=0;break;case"second":g+=b,t>1&&(y=Math.floor(y/t)*t),_=0;break;case"millisecond":g+=b,t>1&&(_=Math.floor(_/t)*t);break;case"hour":t>1&&(a=Math.floor(a/t)*t),g=b,y=0,_=0;break;case"minute":t>1&&(g=Math.floor(g/t)*t),g+=b,y=0,_=0;break;case"month":t>1&&(p=Math.floor(p/t)*t),u=1,a=0,g=b,y=0,_=0;break;case"year":t>1&&(m=Math.floor(m/t)*t),p=0,u=1,a=0,g=b,y=0,_=0;break;case"week":M(s)||(s=1),u=D>=s?u-D+s:u-(7+D)+s,a=0,g=b,y=0,_=0}let x=(n=new Date(m,p,u,a,g,y,_)).getTimezoneOffset(),c=o.offsetUTC(n)-x;return c!=b&&n.setTime(n.getTime()+6e4*(c-b)),n}}class U extends j{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new z}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:C.new(this._root,{width:P,height:P,position:"absolute"})})}_afterNew(){this.valueFields.push("value","customValue"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll(e=>{if(e.type==="clear")this._handleBullets(this.dataItems);else if(e.type==="push")this._handleBullets(this.dataItems);else if(e.type==="setIndex")this._handleBullets(this.dataItems);else if(e.type==="insertIndex")this._handleBullets(this.dataItems);else if(e.type==="removeIndex")this._handleBullets(this.dataItems);else{if(e.type!=="moveIndex")throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}}))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){w(e,t=>{const s=t.bullets;s&&(w(s,i=>{i.dispose()}),t.bullets=void 0)}),this.markDirtyValues()}getDataItemById(e){return W(this.dataItems,t=>t.get("id")==e)}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each(t=>{this._makeBullet(e,t)}))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,s){const i=t(this._root,this,e);return i&&(i._index=s,this._makeBulletReal(e,i)),i}_makeBulletReal(e,t){let s=t.get("sprite");s&&(s._setDataItem(e),s.setRaw("position","absolute"),this.bulletsContainer.children.push(s)),t.series=this,e.bullets.push(t)}addBullet(e,t){e.bullets||(e.bullets=[]),t&&this._makeBulletReal(e,t)}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("name")&&this.updateLegendValue(),this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const s=this.getPrivate("baseValueSeries");s&&this._disposers.push(s.onPrivate("startIndex",()=>{this.markDirtyValues()}))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0,e!=0&&(this._psi=void 0))),this._psi==e&&this._pei==t&&!this.isPrivateDirty("adjustedStartIndex")||this._selectionAggregatesCalculated||(e===0&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let s=this.get("tooltip");s&&(s.hide(0),s.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let s;const i=this.get("legendDataItem");if(i&&(s=i.get("markerRectangle"),s&&this.isVisible())){if(this.isDirty("stroke")){let l=this.get("stroke");s.set("stroke",l)}if(this.isDirty("fill")){let l=this.get("fill");s.set("fill",l)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let s=this.startIndex(),i=this.endIndex();i<this.dataItems.length&&i++;for(let l=s;l<i;l++){let o=this.dataItems[l];o.bullets||this._makeBullets(o)}}}_adjustStartIndex(e){return e}_calculateAggregates(e,t){let s=this._valueFields;if(!s)throw new Error("No value fields are set for the series.");const i={},l={},o={},h={},d={},r={},m={},p={},u={};w(s,a=>{i[a]=0,l[a]=0,o[a]=0}),w(s,a=>{let g=a+"Change",y=a+"ChangePercent",_=a+"ChangePrevious",D=a+"ChangePreviousPercent",b=a+"ChangeSelection",x=a+"ChangeSelectionPercent",c="valueY";a!="valueX"&&a!="openValueX"&&a!="lowValueX"&&a!="highValueX"||(c="valueX");const T=this.getPrivate("baseValueSeries"),V=this.getPrivate("adjustedStartIndex",e);for(let I=V;I<t;I++){const v=this.dataItems[I];if(v){let f=v.get(a);f!=null&&(o[a]++,i[a]+=f,l[a]+=Math.abs(f),p[a]=i[a]/o[a],(h[a]>f||h[a]==null)&&(h[a]=f),(d[a]<f||d[a]==null)&&(d[a]=f),m[a]=f,r[a]==null&&(r[a]=f,u[a]=f,T&&(r[c]=T._getBase(c))),e===0&&(v.setRaw(g,f-r[c]),v.setRaw(y,(f-r[c])/r[c]*100)),v.setRaw(_,f-u[c]),v.setRaw(D,(f-u[c])/u[c]*100),v.setRaw(b,f-r[c]),v.setRaw(x,(f-r[c])/r[c]*100),u[a]=f)}}if(t<this.dataItems.length-1){const I=this.dataItems[t];if(I){let v=I.get(a);I.setRaw(_,v-u[c]),I.setRaw(D,(v-u[c])/u[c]*100),I.setRaw(b,v-r[c]),I.setRaw(x,(v-r[c])/r[c]*100)}}e>0&&e--,delete u[a];for(let I=e;I<V;I++){const v=this.dataItems[I];if(v){let f=v.get(a);u[a]==null&&(u[a]=f),f!=null&&(v.setRaw(_,f-u[c]),v.setRaw(D,(f-u[c])/u[c]*100),v.setRaw(b,f-r[c]),v.setRaw(x,(f-r[c])/r[c]*100),u[a]=f)}}}),w(s,a=>{this.setPrivate(a+"AverageSelection",p[a]),this.setPrivate(a+"CountSelection",o[a]),this.setPrivate(a+"SumSelection",i[a]),this.setPrivate(a+"AbsoluteSumSelection",l[a]),this.setPrivate(a+"LowSelection",h[a]),this.setPrivate(a+"HighSelection",d[a]),this.setPrivate(a+"OpenSelection",r[a]),this.setPrivate(a+"CloseSelection",m[a])}),e===0&&t===this.dataItems.length&&w(s,a=>{this.setPrivate(a+"Average",p[a]),this.setPrivate(a+"Count",o[a]),this.setPrivate(a+"Sum",i[a]),this.setPrivate(a+"AbsoluteSum",l[a]),this.setPrivate(a+"Low",h[a]),this.setPrivate(a+"High",d[a]),this.setPrivate(a+"Open",r[a]),this.setPrivate(a+"Close",m[a])})}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&w(e,t=>{const s=t.minValue||this.getPrivate(t.dataField+"Low")||0,i=t.maxValue||this.getPrivate(t.dataField+"High")||0;w(t.target._entities,l=>{const o=l.dataItem.get(t.dataField);if(!M(o)){t.neutral&&l.set(t.key,t.neutral);const h=l.states;if(h){const d=h.lookup("default");d&&t.neutral&&d.set(t.key,t.neutral)}if(!t.customFunction)return}if(t.customFunction)t.customFunction.call(this,l,s,i,o);else{let h,d;h=t.logarithmic?(Math.log(o)*Math.LOG10E-Math.log(s)*Math.LOG10E)/(Math.log(i)*Math.LOG10E-Math.log(s)*Math.LOG10E):(o-s)/(i-s),!M(o)||M(h)&&Math.abs(h)!=1/0||(h=.5),M(t.min)?d=t.min+(t.max-t.min)*h:t.min instanceof G?d=G.interpolate(h,t.min,t.max):t.min instanceof J&&(d=ee(h,t.min,t.max)),l.set(t.key,d);const r=l.states;if(r){const m=r.lookup("default");m&&m.set(t.key,d)}}})}),this.get("visible")){let t=this.dataItems.length,s=this.startIndex(),i=this.endIndex();i<t&&i++,s>0&&s--;for(let l=0;l<s;l++)this._hideBullets(this.dataItems[l]);for(let l=s;l<i;l++)this._positionBullets(this.dataItems[l]);for(let l=i;l<t;l++)this._hideBullets(this.dataItems[l])}}_positionBullets(e){e.bullets&&w(e.bullets,t=>{this._positionBullet(t);const s=t.get("sprite");t.get("dynamic")&&(s&&(s._markDirtyKey("fill"),s.markDirtySize()),s instanceof C&&s.walkChildren(i=>{i._markDirtyKey("fill"),i.markDirtySize(),i instanceof q&&i.text.markDirtyText()})),s instanceof q&&s.get("populateText")&&s.text.markDirtyText()})}_hideBullets(e){e.bullets&&w(e.bullets,t=>{let s=t.get("sprite");s&&s.setPrivate("visible",!1)})}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&w(t,s=>{s.dispose()})}_getItemReaderLabel(){return""}showDataItem(e,t){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return $(this,void 0,void 0,function*(){const i=[s.showDataItem.call(this,e,t)],l=e.bullets;l&&w(l,o=>{const h=o.get("sprite");h&&i.push(h.show(t))}),yield Promise.all(i)})}hideDataItem(e,t){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return $(this,void 0,void 0,function*(){const i=[s.hideDataItem.call(this,e,t)],l=e.bullets;l&&w(l,o=>{const h=o.get("sprite");h&&i.push(h.hide(t))}),yield Promise.all(i)})}_sequencedShowHide(e,t){return $(this,void 0,void 0,function*(){if(this.get("sequencedInterpolation"))if(M(t)||(t=this.get("interpolationDuration",0)),t>0){const s=this.startIndex(),i=this.endIndex();yield Promise.all(K(this.dataItems,(l,o)=>$(this,void 0,void 0,function*(){let h=t||0;(o<s-10||o>i+10)&&(h=0);let d=this.get("sequencedDelay",0)+h/(i-s);yield ie(d*(o-s)),e?yield this.showDataItem(l,h):yield this.hideDataItem(l,h)})))}else yield Promise.all(K(this.dataItems,s=>e?this.showDataItem(s,0):this.hideDataItem(s,0)))})}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const s=t.get("valueLabel");if(s){const l=s.text;let o="";s._setDataItem(e),o=this.get("legendValueText",l.get("text","")),s.set("text",o),l.markDirtyText()}const i=t.get("label");if(i){const l=i.text;let o="";i._setDataItem(e),o=this.get("legendLabelText",l.get("text","")),i.set("text",o),l.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function X(n,e){for(let t=0,s=e.length;t<s;t++){const i=e[t];if(i.length>0){let l=i[0];if(l.length>0){let o=l[0];n.moveTo(o.x,o.y);for(let h=0,d=i.length;h<d;h++)le(n,i[h])}}}}function le(n,e){for(let t=0,s=e.length;t<s;t++){const i=e[t];n.lineTo(i.x,i.y)}}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:j.classNames.concat([U.className])});class F extends H{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let s=e[0];this._display.moveTo(s.x,s.y),X(this._display,[[e]])}else if(t)X(this._display,t);else if(!this.get("draw")){let s=this.width(),i=this.height();this._display.moveTo(0,0),this._display.lineTo(s,i)}}}}function ne(n){return function(){return n}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:H.classNames.concat([F.className])});const L=Math.PI,E=2*L,O=1e-6,re=E-O;function Y(n){this._+=n[0];for(let e=1,t=n.length;e<t;++e)this._+=arguments[e]+n[e]}function oe(n){let e=Math.floor(n);if(!(e>=0))throw new Error(`invalid digits: ${n}`);if(e>15)return Y;const t=10**e;return function(s){this._+=s[0];for(let i=1,l=s.length;i<l;++i)this._+=Math.round(arguments[i]*t)/t+s[i]}}class he{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?Y:oe(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,s,i){this._append`Q${+e},${+t},${this._x1=+s},${this._y1=+i}`}bezierCurveTo(e,t,s,i,l,o){this._append`C${+e},${+t},${+s},${+i},${this._x1=+l},${this._y1=+o}`}arcTo(e,t,s,i,l){if(e=+e,t=+t,s=+s,i=+i,(l=+l)<0)throw new Error(`negative radius: ${l}`);let o=this._x1,h=this._y1,d=s-e,r=i-t,m=o-e,p=h-t,u=m*m+p*p;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(u>O)if(Math.abs(p*d-r*m)>O&&l){let a=s-o,g=i-h,y=d*d+r*r,_=a*a+g*g,D=Math.sqrt(y),b=Math.sqrt(u),x=l*Math.tan((L-Math.acos((y+u-_)/(2*D*b)))/2),c=x/b,T=x/D;Math.abs(c-1)>O&&this._append`L${e+c*m},${t+c*p}`,this._append`A${l},${l},0,0,${+(p*a>m*g)},${this._x1=e+T*d},${this._y1=t+T*r}`}else this._append`L${this._x1=e},${this._y1=t}`}arc(e,t,s,i,l,o){if(e=+e,t=+t,o=!!o,(s=+s)<0)throw new Error(`negative radius: ${s}`);let h=s*Math.cos(i),d=s*Math.sin(i),r=e+h,m=t+d,p=1^o,u=o?i-l:l-i;this._x1===null?this._append`M${r},${m}`:(Math.abs(this._x1-r)>O||Math.abs(this._y1-m)>O)&&this._append`L${r},${m}`,s&&(u<0&&(u=u%E+E),u>re?this._append`A${s},${s},0,1,${p},${e-h},${t-d}A${s},${s},0,1,${p},${this._x1=r},${this._y1=m}`:u>O&&this._append`A${s},${s},0,${+(u>=L)},${p},${this._x1=e+s*Math.cos(l)},${this._y1=t+s*Math.sin(l)}`)}rect(e,t,s,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${s=+s}v${+i}h${-s}Z`}toString(){return this._}}function ue(n){let e=3;return n.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const s=Math.floor(t);if(!(s>=0))throw new RangeError(`invalid digits: ${t}`);e=s}return n},()=>new he(e)}class S extends C{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(C.new(this._root,{width:P,height:P,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:C.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:P,height:P})})}}Object.defineProperty(S,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(S,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:C.classNames.concat([S.className])});class B extends S{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:C.new(this._root,{width:P,height:P,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new te})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll(t=>{if(t.type==="clear"){w(t.oldValues,l=>{this._removeSeries(l)});const s=this.get("colors");s&&s.reset();const i=this.get("patterns");i&&i.reset()}else if(t.type==="push")e.moveValue(t.newValue),this._processSeries(t.newValue);else if(t.type==="setIndex")e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="insertIndex")e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="removeIndex")this._removeSeries(t.oldValue);else{if(t.type!=="moveIndex")throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}}))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(B,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(B,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.classNames.concat([B.className])});class A extends F{}Object.defineProperty(A,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(A,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:F.classNames.concat([A.className])});export{U as D,N as I,B as R,A as U,ue as V,j as _,R as g,ne as k};
