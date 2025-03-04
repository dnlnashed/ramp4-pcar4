import{go as k,dQ as m,dU as O,dY as S,dT as _,fM as C,dX as f,d_ as V,gp as M,eb as N,gq as B,gj as w,gi as D,dM as H,e3 as x,gd as K,e7 as T,gr as I,e9 as U,ea as $,d$ as z,dV as A,e0 as E,fN as Q}from"./main-jlUEdDH5.js";var j={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(a){return n=>["number","string","boolean"].indexOf(typeof n)!==-1||n==null},required:!1},modelValue:{validator:function(a){return n=>["number","string","boolean"].indexOf(typeof n)!==-1||n==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(a,n){const t=function(d,c,u){const{value:i,modelValue:r,falseValue:l,trueValue:e,disabled:b}=k(d),o=r&&r.value!==void 0?r:i,h=m(()=>o.value===e.value),y=p=>{c.emit("input",p),c.emit("update:modelValue",p),c.emit("change",p)},q=()=>{y(e.value)},L=()=>{y(l.value)};return[null,void 0,!1,0,"0","off"].indexOf(o.value)!==-1&&[l.value,e.value].indexOf(o.value)===-1&&L(),[!0,1,"1","on"].indexOf(o.value)!==-1&&[l.value,e.value].indexOf(o.value)===-1&&q(),{externalValue:o,checked:h,update:y,check:q,uncheck:L,handleInput:p=>{y(p.target.checked?e.value:l.value)},handleClick:()=>{b.value||(h.value?L():q())}}}(a,n),g=function(d,c,u){const{trueValue:i,falseValue:r,onLabel:l,offLabel:e}=k(d),b=u.checked,o=u.update;return{label:m(()=>{let h=b.value?l.value:e.value;return h||(h="&nbsp;"),h}),toggle:()=>{o(b.value?r.value:i.value)},on:()=>{o(i.value)},off:()=>{o(r.value)}}}(a,0,{checked:t.checked,update:t.update}),s=function(d,c,u){const i=k(d),r=i.disabled,l=u.checked,e=m(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...i.classes.value}));return{classList:m(()=>({container:e.value.container,toggle:[e.value.toggle,r.value?l.value?e.value.toggleOnDisabled:e.value.toggleOffDisabled:l.value?e.value.toggleOn:e.value.toggleOff],handle:[e.value.handle,r.value?l.value?e.value.handleOnDisabled:e.value.handleOffDisabled:l.value?e.value.handleOn:e.value.handleOff],label:e.value.label}))}}(a,0,{checked:t.checked}),v=function(d,c,u){const{disabled:i}=k(d),r=u.check,l=u.uncheck,e=u.checked;return{handleSpace:()=>{i.value||(e.value?l():r())}}}(a,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...s,...g,...v}}};const W=["tabindex","aria-checked","aria-describedby","aria-labelledby"],X=["id","name","value","checked","disabled"],Y=["innerHTML"],F=["checked"];j.render=function(a,n,t,g,s,v){return O(),S("div",B({class:a.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":a.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch"},t.aria,{onKeypress:n[1]||(n[1]=w(D((...d)=>a.handleSpace&&a.handleSpace(...d),["prevent"]),["space"]))}),[_(f("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:a.checked,disabled:t.disabled},null,8,X),[[C,!1]]),f("div",{class:V(a.classList.toggle),onClick:n[0]||(n[0]=(...d)=>a.handleClick&&a.handleClick(...d))},[f("span",{class:V(a.classList.handle)},null,2),M(a.$slots,"label",{checked:a.checked,classList:a.classList},()=>[f("span",{class:V(a.classList.label),innerHTML:a.label},null,10,Y)]),t.required?(O(),S("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:a.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,F)):N("v-if",!0)],2)],16,W)},j.__file="src/Toggle.vue";const G={class:"flex flex-row rv-label"},J={class:"flex items-center"},P=["innerHTML"],R=H({__name:"toggle-switch-control",props:{config:{type:Object,required:!0},name:String,icon:String,ariaLabel:String},emits:["toggled"],setup(a,{emit:n}){const t=n,g=a,s=x(g.config.value),v=x(!!g.config.disabled),d=x(0),c=K([]),u=x(null);c.push(T(I(g,"config"),(l,e)=>{s.value=l.value,v.value=!!l.disabled,d.value+=v.value!==e.disabled?1:0},{deep:!0}),T(u,l=>{l&&r()}));const i=()=>{v.value||(s.value=!s.value,t("toggled",s.value))},r=()=>{if(u.value){const l=u.value.querySelector('input[type="checkbox"]');l&&g.ariaLabel&&l.setAttribute("aria-label",g.ariaLabel)}};return U(()=>{c.forEach(l=>l())}),(l,e)=>(O(),S("div",G,[f("div",J,[f("div",{innerHTML:a.icon,class:"p-8 pl-0"},null,8,P),$(" "+z(a.name),1)]),e[2]||(e[2]=f("div",{class:"flex-1"},null,-1)),f("div",{ref_key:"toggleWrapper",ref:u},[(O(),A(E(j),{onChange:e[0]||(e[0]=b=>t("toggled",b)),onKeyupCapture:[w(D(i,["stop"]),["enter"]),w(D(i,["stop"]),["space"])],disabled:v.value,key:d.value,modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=b=>s.value=b),classes:{container:"inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30",toggle:"flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",toggleOn:"bg-blue-500 border-blue-500 justify-start text-white",toggleOff:"bg-gray-200 border-gray-200 justify-end text-gray-700",toggleOnDisabled:"bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed",toggleOffDisabled:"bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed",handle:"inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all",handleOn:"left-full transform -translate-x-full",handleOff:"left-0",handleOnDisabled:"bg-gray-100 left-full transform -translate-x-full",handleOffDisabled:"bg-gray-100 left-0",label:"text-center w-8 border-box whitespace-nowrap select-none"}},null,8,["onKeyupCapture","disabled","modelValue"]))],512)]))}}),Z=Q(R,[["__scopeId","data-v-f2650ee4"]]);export{Z as T};
