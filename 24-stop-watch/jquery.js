


$(function(){

    var mode = 0;
    var timeCounter = 0;
    var lapCounter = 0;
    var action;
    var lapNumber = 0;
    
    var timeMin , timeSec, timeCentisec, lapMin , lapSec, lapCentisec ;

  hideshowButton("#startbutton","#lapbutton");

  $("#startbutton").click(function(){
    mode = 1;
    hideshowButton("#stopbutton","#lapbutton");
    startAction();
  });



  $("#stopbutton").click(function(){
    hideshowButton("#resumebutton","#resetbutton");
    clearInterval(action);
  });


  $("#resumebutton").click(function(){
    hideshowButton("#stopbutton","#lapbutton");
    startAction();
  });


  $("#resetbutton").click(function(){
    location.reload();
  });


  $("#lapbutton").click(function(){
    if(mode){
      clearInterval(action);
      lapCounter = 0;
      addLap();
      startAction();
    }
  })




  function hideshowButton(x,y){
    $(".controls").hide();
    $(x).show();
    $(y).show();
  }


  function startAction(){
    action = setInterval(function(){
      timeCounter++;
      if(timeCounter == 60*100*100){
        timeCounter = 0;
      }
      lapCounter++;
      if(lapCounter == 60*100*100){
        lapCounter = 0;
      }
      updateTime();
    },10);
  }



  function updateTime(){
    timeMin = Math.floor(timeCounter/6000);
    timeSec = Math.floor((timeCounter%6000)/100);
    timeCentisec = (timeCounter%6000)%100;

    $("#timemin").text(format(timeMin));
    $("#timesec").text(format(timeSec));
    $("#timecentisec").text(format(timeCentisec));

    lapMin = Math.floor(lapCounter/6000);
    lapSec = Math.floor((lapCounter%6000)/100);
    lapCentisec = (lapCounter%6000)%100;

    $("#lapmin").text(format(lapMin));
    $("#lapsec").text(format(lapSec));
    $("#lapcentisec").text(format(lapCentisec));

  }


  function format(number){
    if(number <10){
      return '0' + number;
    }else{
      return number;
    }
  }



  function addLap(){
    lapNumber++;
    var myLapDetails = '<div class="lap">' + '<div class="lapcount">'+'Lap' + lapNumber +'</div>'+ '<div class="laptime">'+'<span>'+format(lapMin)+'</span>'+ ':<span>'+format(lapSec)+'</span>'+ ':<span>'+format(lapCentisec)+'</span>'+ '</div>' + '</div>'
    $(myLapDetails).prependTo("#lapnote")
  }


});