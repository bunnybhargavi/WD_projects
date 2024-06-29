//if we are playing a game or not
  //if we are playing
    //reload the page
  //if we are not playing
    //set score to 0
    //show countdownbox
    //reduce the time by 1 sec
    //if timeleft?
      //yes-continue
      //no-gameover
    //change button to reset
    //generate new question

//if we click on the answer button
  //if we are playing
    //correct?
      //yes
        //increase the score by 1
        //show correct box
        //generate new question
      //no
        //try again box


var playing=false;
var score =0;
var correctAnswer;
function playGame(){
  if(playing==true){
    location.reload();
  }else{
    playing = true;
    score =0;
  }
  startCountdown();
  genarateQandA();
}


function startCountdown(){
  show("time");
  var remTime=60;
  var count=document.getElementById("timevalue");
  var countValue = setInterval(function(){
    remTime-- ; timevalue.innerHTML=remTime;
    if(remTime == 0)
      {
        closeInterval();
      }
  },1000);  
  var stoptime= setTimeout(function()
  {
    show("gameover");
    document.getElementById("gameover").innerHTML = "<p>Game Over!</p>" + "<p>Your Score Is " + score + "</p>";
    hide("time");
    hide("correct");
    hide("wrong");
    document.getElementById("startreset").innerHTML="Start Game";
  },60000);
}


function closeInterval(){
  clearInterval(countValue);
}


function hide(id){
  document.getElementById(id).style.display="none";
}

function show(id){
  document.getElementById(id).style.display="block";
}

function genarateQandA(){
  var num1= 1+Math.round(Math.random()*19);
  var num2= 1+Math.round(Math.random()*19);
  correctAnswer=num1*num2;
  var ques = document.getElementById("question").innerHTML=num1 +" x "+ num2;
  var play= document.getElementById("startreset").innerHTML="Reset Game";
  var correctPosition = 1+ Math.round(Math.random()*3);
  document.getElementById("box" + correctPosition).innerHTML=correctAnswer;
  var answer=[correctAnswer];
  for(i=1;i<5;i++){
    if(i != correctPosition){
      var wrongAnswer;
      do{
        wrongAnswer=((1+Math.round(Math.random()*19))*(1+Math.round(Math.random()*19)));
      }
      while(answer.indexOf(wrongAnswer)>-1)
      document.getElementById("box" + i).innerHTML=wrongAnswer;
    answer.push(wrongAnswer);
    }
  }
}



for (i=1;i<5;i++){
  document.getElementById("box"+i).onclick=function(){
    if(playing == true){
      if(this.innerHTML == correctAnswer){
        score += 1;
        document.getElementById("scorevalue").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
          hide("correct");
        },1000);
        genarateQandA();
      }else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
          hide("wrong");
        },1000);
      }
    }
  }
}
