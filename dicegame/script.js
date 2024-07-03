
function onclicking(){
var random1=Math.random();
random1=Math.floor(random1*6)+1;
var random2=Math.random();
random2=Math.floor(random2*6)+1;
console.log(random1);
console.log(random2)
if(random1===1){
    document.getElementById("img1").setAttribute("src","dice1.png");
}
else if(random1===2){
    document.getElementById("img1").setAttribute("src","dice2.png");
}
else if(random1===3){
    document.getElementById("img1").setAttribute("src","dice3.png");
}
else if(random1===4){
    document.getElementById("img1").setAttribute("src","dice4.png");
}
else if(random1===5){
    document.getElementById("img1").setAttribute("src","dice5.png");
}
else if(random1===6){
    document.getElementById("img1").setAttribute("src","dice6.png");
}


if(random2===1){
    document.getElementById("img2").setAttribute("src","dice1.png");
}
else if(random2===2){
    document.getElementById("img2").setAttribute("src","dice2.png");
}
else if(random2===3){
    document.getElementById("img2").setAttribute("src","dice3.png");
}
else if(random2===4){
    document.getElementById("img2").setAttribute("src","dice4.png");
}
else if(random2===5){
    document.getElementById("img2").setAttribute("src","dice5.png");
}
else if(random2===6){
    document.getElementById("img2").setAttribute("src","dice6.png");
}
var h=document.getElementById("heading1");
if(random1>random2){
    h.innerText="Player 1 Wins";
}
else if(random1<random2){
    h.innerText="Player 2 Wins";
}
else if(random1===random2){
    h.innerText="It is a draw";
}
}
var my=document.getElementById("b1");
my.addEventListener("click",onclicking);

