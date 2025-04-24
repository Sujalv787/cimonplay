let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");
//press honne pe game start kar dega
document.addEventListener("keypress",function () {
    console.log("game started");
    if(started==false){
    
    started=true;
    levelup();
    }
    
})

 function levelup() {
   userseq=[];
    level++;
    h2.innerText=`Level ${level}`
   let randIdx=Math.floor(Math.random()*4);
   let randcolor=btns[randIdx];
   let randbtn=document.querySelector(`.${randcolor}`);
   gameseq.push(randcolor);
   console.log(gameseq);
   
    gameflash(randbtn);
 }
 
 function gameflash(btn) {
     btn.classList.add("flash");
     setTimeout(() => {
        btn.classList.remove("flash");
     },250);
 }
 function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
       btn.classList.remove("userflash");
    },250);
}
function checkans(idx) {
   
   if(userseq[idx]==gameseq[idx]){
      if(gameseq.length==userseq.length) {
      setTimeout(levelup,1000) } 
   }
      else{
         h2.innerHTML=`Game Over! Your Score was  <b>${level} </b> <br>Press any key to start`
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";

         }, 150);
         reset();
      }
      
}
 function btnPress() {
    console.log("butten pressed")
    let btn=this;
    userflash(btn);
  let   usercolor=btn.getAttribute("id")
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);


 }
 let allbtns=document.querySelectorAll(".btn");
 for ( btn of allbtns) {
    btn.addEventListener("click",btnPress)
 }
 function reset() {
   started=false;
   gameseq=[];
   userseq=[];
   level=0;
 }