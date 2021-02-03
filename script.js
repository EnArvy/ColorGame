
var t=new Array();                                          //array for each button
var counter=3;                                              //number of tries
var backgroundcolor = document.getElementById("header").style.background;
var sec = 20;

for (var i=1; i<7; i++)                                    //assigning array to buttons
  t[i]=document.getElementById(i);

var correctColor;

function getRandomColor() {                                //function that generates random colour
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) 
    color += letters[Math.floor(Math.random() * 16)];
  return color;
}



function newGame() {                                       //initialising values upon reload
  console.log(1)
  for ( var i=1; i<7; i++)
    t[i].style.background = getRandomColor();  
  x = Math.floor(Math.random() * 6 + 1);
  correctColor=t[x].style.background;
  document.getElementById("clue").innerHTML = correctColor;
  counter = 3;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("header").style.background = backgroundcolor;
}

var NewGame = document.getElementById("NewGame");            //new game button
NewGame.addEventListener("click", function(){ location.reload();})



for ( let j=1; j<7; j++){                                        //clicking buttons and logic
  t[j].addEventListener("click", function(){
    if(t[j].style.background == correctColor && counter!=0)
    {
      document.getElementById("header").style.background = correctColor;
      document.getElementById("headerClue").style.background = correctColor;
      document.getElementById("NewGame").style.background = correctColor;
      document.getElementById("Timer").style.background = correctColor;
      document.getElementById("status").innerHTML = "You Won, Click New Game to play again";
      counter=0;
      document.getElementById("counter").innerHTML="";
      
      sec=NaN;
    }
    else{
      counter--;
      t[j].style.background = "black";
      this.removeEventListener("click",arguments.callee);
      sec=20;
      if(counter==0){
        document.getElementById("status").innerHTML = "You Lost, Click New Game to play again";
        document.getElementById("counter").innerHTML="";
        sec=NaN;
      }  
      
    }
    document.getElementById("counter").innerHTML = counter;

  if(counter==-1)
    document.getElementById("body").onclick=location.reload();
  }
  );
 
} 
     

window.onload = function(){                    //Timer
  newGame();
  setInterval(function(){
    document.getElementById("sec").innerHTML = sec;
    sec--;
    if(sec == 0){
      sec = 20;
      counter--;
      document.getElementById("counter").innerHTML=counter;
      if(counter == 0) location.reload();
    }
  },1000);
}
