
var t=new Array();
var counter;
var backgroundcolor = document.getElementById("header").style.background;

for (var i=1; i<7; i++)
  t[i]=document.getElementById(i);

var correctColor;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) 
    color += letters[Math.floor(Math.random() * 16)];
  return color;
}

function newGame() {
  for ( var i=1; i<7; i++)
    t[i].style.background = getRandomColor();  
  x = Math.floor(Math.random() * 6 + 1);
  correctColor=t[x].style.background;
  document.getElementById("headerClue").innerHTML = correctColor;
  counter = 2;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("header").style.background = backgroundcolor;
}

var NewGame = document.getElementById("NewGame");
NewGame.addEventListener("click", function(){ newGame();})



for ( let j=1; j<7; j++){
  t[j].addEventListener("click", function () {
    if( t[j].style.background == correctColor){
      document.getElementById("header").style.background = correctColor;
      document.getElementById("counter").innerHTML = "You Won, Click New Game to play again";
    }  
    else{
      document.getElementById("header").style.background = "black";
      counter--;
    }
    document.getElementById("counter").innerHTML = counter;
    if(counter==0)
      document.getElementById("counter").innerHTML = "You Lost, Click New Game to play again";
    if(counter==-1)
      document.getElementById("body").onclick=newGame();
    
   }  
  )
}
      
