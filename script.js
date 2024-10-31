
let rbtn = document.querySelector("#rock");
let pbtn = document.querySelector("#paper");
let sbtn = document.querySelector("#scissor");
let ywon = document.querySelector(".ywon");
let cchose = document.querySelector(".cchose")
let ywons =ywon.style;
let cwon = document.querySelector(".cwon");
let cwons = cwon.style
let yscore = 0;
let cscore = 0;
let myscore = document.querySelector("#myscore");
let cpuscore = document.querySelector("#cpuscore");

let choice = Math.random()*3;

function choiceR(){
    const ra = Math.floor(Math.random()*3)
    if(1 <= ra ){
        alert("tie")
        ywons.opacity = "0";
        cwons.opacity = "0";
        cchose.innerText = "Computer choseed Rock"

    }else if ( 1< ra <=2 ){
        cwons.opacity = "1";
        ywons.opacity = "0";
        cscore++
        cpuscore.innerText = cscore;
        cchose.innerText = "Computer choseed paper"
    }else{
        ywons.opacity = "1";
        cwons.opacity = "0";
        yscore++
        myscore.innerText = yscore;
        cchose.innerText = "Computer choseed scissor"
    }
}
function choiceP(){
    const ra = Math.floor(Math.random()*3)
    if( 1<= ra){
        ywons.opacity = "1";
        cwons.opacity = "0";
        yscore++
        myscore.innerText = yscore;
        cchose.innerText = "Computer choseed Rock"
    }else if(1< ra <=2){
        alert("tie");
        ywons.opacity = "0";
        cwons.opacity = "0";
        cchose.innerText = "Computer choseed paper"
    }else{
        cwons.opacity = "1";
        ywons.opacity = "0";
        cscore++
        cpuscore.innerText = cscore;
        cchose.innerText = "Computer choseed scissor"
    }
}
function choiceS(){
    const ra = Math.floor(Math.random()*3)
    if(  1 <= ra  ){
        cscore++
        cwons.opacity = "1";
        ywons.opacity = "0";
        cpuscore.innerText = cscore;
        cchose.innerText = "Computer choseed Rock"
    }else if( 1 < ra <= 2 ){
        yscore++
        ywons.opacity = "1";
        cwons.opacity = "0";
        myscore.innerText = yscore;
        cchose.innerText = "Computer choseed paper"
    }else{
        alert("tie");
        ywons.opacity = "0";
        cwons.opacity = "0";
        cchose.innerText = "Computer choseed scissor"
    }
}
rbtn.addEventListener ("click",(choiceR));
pbtn.addEventListener ("click",(choiceP));
sbtn.addEventListener ("click",(choiceS));