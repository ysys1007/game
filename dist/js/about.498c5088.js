"use strict";(self["webpackChunkgame"]=self["webpackChunkgame"]||[]).push([[594],{9488:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var i=n(6768),s=n(4232);const l={class:"container"},o=(0,i.Lk)("div",{class:"name"},"Get the TeamLog!",-1),r={class:"player-container"},a={id:"score"},c={id:"timer"},d={id:"game-container"},h=(0,i.Lk)("img",{src:"https://avatars.githubusercontent.com/u/26594715?s=200&v=4",alt:"TeamLog"},null,-1),m=[h],u={key:0,class:"custom-alert"},v=(0,i.Lk)("div",{class:"overlay"},null,-1),k={class:"alert-box"},g=(0,i.Lk)("h2",null,"Congratulations!",-1),w=(0,i.Lk)("p",null,"You caught TeamLog!",-1);function C(e,t,n,h,C,L){const p=(0,i.g2)("CustomAlert");return(0,i.uX)(),(0,i.CE)("div",l,[o,(0,i.Lk)("div",r,[(0,i.eW)("Score Board "),(0,i.Lk)("div",a,(0,s.v_)(C.score),1),(0,i.Lk)("div",c,(0,s.v_)(C.timer),1)]),(0,i.Lk)("div",d,[(0,i.Lk)("div",{class:"circle",onClick:t[0]||(t[0]=(...e)=>L.handleClick&&L.handleClick(...e))},m),(0,i.bF)(p,{score:C.score,"v-show":C.showModal,onClose:L.closeModal},null,8,["score","v-show","onClose"])]),C.showAlert?((0,i.uX)(),(0,i.CE)("div",u,[v,(0,i.Lk)("div",k,[g,w,(0,i.Lk)("p",null,"최종 점수: "+(0,s.v_)(C.score),1),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>L.hideAlert&&L.hideAlert(...e))},"Close")])])):(0,i.Q3)("",!0)])}var L={name:"ClickGame",data(){return{score:0,timer:30,countdown:null,showModal:!1,showAlert:!1}},mounted(){this.regenerateCircle(),this.startTimer(),window.addEventListener("resize",this.regenerateCircle)},methods:{handleClick(){this.score++,this.regenerateCircle()},regenerateCircle(){const e=document.getElementById("game-container");e.innerHTML="";const t=document.createElement("div");t.classList.add("circle");const n=window.innerWidth||document.documentElement.clientWidth,i=window.innerHeight||document.documentElement.clientHeight,s=.7*Math.min(n,i),l=Math.random()*(s-70),o=(n-l)/2,r=(i-l)/2;let a=Math.random()*(.8*o)+.1*o,c=Math.random()*(.8*r)+.1*r;a=Math.max(0,Math.min(a,n-l)),c=Math.max(0,Math.min(c,i-l)),t.style.left=a+"px",t.style.top=c+"px",t.style.width=l+"px",t.style.height=l+"px";const d=document.createElement("img");d.src="https://avatars.githubusercontent.com/u/26594715?s=200&v=4",d.alt="TeamLog",t.appendChild(d),e.appendChild(t),t.addEventListener("click",this.handleClick)},startTimer(){this.countdown=setInterval((()=>{if(this.timer--,0===this.timer){clearInterval(this.countdown);const e=document.querySelector(".circle");e.removeEventListener("click",this.handleClick),this.showFireworks=!0,this.showAlert=!0}}),1e3)},closeModal(){this.showModal=!1},hideAlert(){this.showAlert=!1}}},p=n(1241);const M=(0,p.A)(L,[["render",C]]);var E=M}}]);
//# sourceMappingURL=about.498c5088.js.map