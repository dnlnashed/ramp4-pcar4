import{dM as c,dN as b,dR as d,dV as g,dW as s,dU as i,ea as o,d$ as a,e0 as u,dX as n}from"./main-Czl6u6q4.js";const m={class:"flex flex-row justify-center items-center mt-16"},f={class:"mt-16"},h=c({__name:"p2-screen-1",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(t){const{t:r}=b();return(x,e)=>{const p=d("panel-screen");return i(),g(p,{panel:t.panel},{header:s(()=>e[2]||(e[2]=[o(" Gazebo/Panel 2/Screen A ")])),content:s(()=>[o(a(u(r)("gz.hello"))+" ",1),n("div",m,[n("button",{type:"button",onClick:e[0]||(e[0]=l=>t.panel.show({screen:"p-2-screen-2",props:{greeting:"Howdy?"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"}," Go back to B "),n("button",{type:"button",onClick:e[1]||(e[1]=l=>t.panel.show("p-2-screen-3")),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," Go to C ")]),n("p",f,a(t.greeting),1)]),_:1},8,["panel"])}}});export{h as default};
