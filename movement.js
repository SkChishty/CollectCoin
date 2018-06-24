
// A Function used to handle player's movement towards right by INCREASING left coordinate
var moveRight = function(pos,speed){

  if(player.offset().left < widthOfScreen){
     player.animate({left: "+="+speed+"px"}, {duration: duration, queue: false});
    faceTowardsX();
    //player.css("left",xPos+=speed);

  }

};
// A Function used to handle player's movement towards left by DECREASING left coordinate
var moveLeft = function(pos,speed){
  if(player.offset().left > 0){
     player.animate({left: "-="+speed+"px"}, {duration: duration, queue: false});
    faceTowardsX();
    //player.css("left",xPos-=speed);
  }
};

// A Function used to handle player's movement towards up by DECREASING top coordinate
var goUp = function(pos,speed){
  if(player.offset().top > 0){
     player.animate({top: "-="+speed+"px"}, {duration: duration, queue: false});
    faceTowardsY();
    //player.css("top",yPos-=speed);
  }
};

// A Function used to handle player's movement towards up by INCREASING top coordinate
var goDown = function(pos,speed){
  if(player.offset().top <= heightOfScreen){
     player.animate({top: "+="+speed+"px"}, {duration: duration, queue: false});
    faceTowardsY();
    //player.css("top",yPos+=speed);
  }
};

// we change height and width to give the impression of player chaning direction
var faceTowardsX = function(){
   player.css("width",playerWidth);     // makes player div face left/right
   player.css("height",playerHeight);  // makes player div face left/right

};

// we change height and width to give the impression of player chaning direction
var faceTowardsY = function() {
  player.css("width",playerHeight);   // makes player div face down/up
  player.css("height",playerWidth);  // makes player div face down/up

}


$("body").keypress(function(event){

    // makes sure we focus on the player div
    p.scrollIntoView({block: "center"});


    // if "d" key is pressed, player should be moving right
    if(event.which === d){
        moveRight(xPos,speed); collectCoin(); // each time we move we check for a coin
    }
    // else if "a" key is pressed, player should be moving left
    else if(event.which === a){
        moveLeft(xPos,speed); collectCoin(); // each time we move we check for a coin
    }
    // else if "w" key is pressed, player should be going up
    else if(event.which === w){
        goUp(yPos,speed); collectCoin(); // each time we move we check for a coin
    }
    // else if "s" key is pressed, player should be going down
    else if(event.which === s){
        goDown(yPos,speed); collectCoin(); // each time we move we check for a coin
    }


});
