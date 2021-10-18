let secretNumber= Math.floor(Math.random()*100)+1;
let score=100;
let highscore=0;
document.querySelector("#check").addEventListener("click", function(){
const guess =Number (document.querySelector("#guess").value);
console.log(guess, typeof guess);
if (!guess){
    document.querySelector(".message").textContent=" No Number!";
}else if(guess===secretNumber){
    document.querySelector(".message").textContent= "🎉🎉🎉 Congrats you got it";
    document.querySelector(".number").textContent= secretNumber;

    document.querySelector("body").style.backgroundColor="#6e5b53";
    document.querySelector(".number").style.width="140px";
    if(score > highscore){
    highscore=score;
    document.querySelector(".highscore").textContent=highscore;
}
}else if(guess > secretNumber){
    if(score>1){
        document.querySelector(".message").textContent= "Too high";
        score--;
        document.querySelector("#score").textContent=score;}
    else{
 document.querySelector(".message").textContent= "You lost!!";
    }
}else if(guess < secretNumber){
    if(score>1){
        document.querySelector(".message").textContent= "Too low";
        score--;
        document.querySelector("#score").textContent=score;
    
    }else{
        document.querySelector(".message").textContent= "You lost! Try Again";
 
    }
    }
  });
document.querySelector("#again").addEventListener("click", function(){
    score=100;
    document.querySelector("#score").textContent=score;
    document.querySelector(".message").textContent="start playing...";
    secretNumber= Math.floor(Math.random()*100)+1;
    document.querySelector(".number").textContent="?";
    document.querySelector("#guess").value="";
    
    document.querySelector(".number").style.width="70px";


});
