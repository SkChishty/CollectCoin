// This script just takes care of the timer which is set to 60 and counts down to 0. If it reaches 0 we reset the seconds variable and reload the page

var seconds = 60;
setInterval(function(){
  if(seconds <= 0){
    location.reload();
    seconds = 60;
  }
  else{
      updateTimerLabel(seconds);
      seconds--;

  }
},1000);
