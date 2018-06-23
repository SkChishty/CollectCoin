var seconds = 60;
var i = 0;
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
