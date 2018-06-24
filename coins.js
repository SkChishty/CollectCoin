// The following loop 1st, creates divs with a special id and class coin.
// Then randomly assigns co-ordiantes to the created coins
if(score < numberOfCoins){
for(var i = 0; i < numberOfCoins; i++){
    $("body").append("<div class = 'coin' id = '"+i+"'>"+i+"</div>");
    coins[i] = $("#"+i);
    coins[i].css("top",randomPixels(heightOfScreen));
    coins[i].css("left",randomPixels(widthOfScreen));
    }
}



// to check if startingX of coin is inside player rectanlge
function isCoinStartXInPlayer(playerStartX,playerEndX,coinStartX){
  return (coinStartX >= playerStartX && coinStartX <= playerEndX);
}

// to check if startingX of player is inside coin rectanlge
function isPlayerStartXInCoin(coinStartX,coinEndX,playerStartX){
  return (playerStartX >= coinStartX && playerStartX <= coinEndX);
}

// to check if endingX of coin is inside player rectanlge
function isCoinEndXInPlayer(playerStartX,playerEndX, coinEndX){
  return (coinEndX >= playerStartX && coinEndX <= playerEndX);
}

// to check if endingX of player is inside coin rectanlge
function isPlayerEndXInCoin(coinStartX,coinEndX, playerEndX){
  return (playerEndX <= coinEndX && playerEndX >= coinStartX);
}


// to check if startingY of coin is inside player rectanlge
function isCoinStartYInPlayer(playerStartY, playerEndY, coinStartY){
  return (coinStartY >= playerStartY && coinStartY <= playerEndY);
}


// to check if endingY of coin is inside player rectanlge
function isCoinEndYInPlayer(playerStartY, playerEndY, coinEndY){
  return (coinEndY >= playerStartY && coinEndY <= playerEndY);
}

function initCoordinates(){
  playerStartY = Math.floor(player.offset().top);
  playerEndY = Math.floor(player.offset().top + player.outerHeight(true));
  playerStartX = Math.floor(player.offset().left);
  playerEndX = Math.floor(player.offset().left + player.outerWidth(true));
}

// Following function goes to the win scene if we have collected all the coins
function goToNextScene(){
  if(score >= numberOfCoins){
    window.location.href = "win.html"
  }
}

function playerString(){
  return "player: (left X, right X) : "+ "("+playerStartX+","+playerEndX+")"+"--"+
  "(top Y, bottom Y) : "+ "("+playerStartY+","+playerEndY+")";
}

/*
All coin collection stuff happens here.
## Detecting collision
## Updating SCORE
## Removing Coin if it collides with the player
## Goes to the next scene if we have collected all the coins
*/
var collectCoin = function(){
  updateScoreLabel(); // call to update the score after collecting a coin

  // Initializes player's x and y boundaries to check the collision with the coins
  initCoordinates(player, playerStartX, playerStartY, playerEndX, playerEndY);


  // Following loop goes over all the available coins in the coins array and checks for collision with player all the time.
  for(var i = 0; i < coins.length; i++){
    var coinStartY = coins[i].offset().top; // Storing current coin's starting Y cordinate. As coins have height. StartY acts like the top boundary
    var coinEndY = coins[i].offset().top + coins[i].outerHeight(true); // Storing current coin's ending Y cordinate. As coins have height. EndY acts like the lower boundary
    var coinStartX = coins[i].offset().left; // Storing current coin's starting X cordinate. As coins have width. StartX acts like the left boundary
    var coinEndX = coins[i].offset().left + coins[i].outerWidth(true); // Storing current coin's ending X cordinate. As coins have width. EndX acts like the right boundary

    
     // Following code checks if any coin's starting x or ending x is in players entire x boundary and vice versa.
     var isCoinXInPlayer = isCoinStartXInPlayer(playerStartX, playerEndX, coinStartX) ||
     isCoinEndXInPlayer(playerStartX, playerEndX, coinEndX) || (isPlayerStartXInCoin(coinStartX,coinEndX,playerStartX)
     || isPlayerEndXInCoin(coinStartX,coinEndX,playerEndX)
   );


     // Following code checks if any coin's starting y or ending y is in players entire y boundary.

     var isCoinYInPlayer = isCoinStartYInPlayer(playerStartY,playerEndY,coinStartY)||
     isCoinEndYInPlayer(playerStartY,playerEndY,coinEndY);

     // checking if both x and y of the coin is touching some part of the player
     if( isCoinXInPlayer &&  isCoinYInPlayer )
          {
         coins[i].css("left",-500);   // removing coin from the scene
         coins[i] = coins[coins.length - 1]; // swaping removed coin with the last coin in the list
         coins.length--;  // decreasing the length of the array as one coin has been collected and removed
         score++;   // increasing the value of score varibale by 1.
         localStorage.setItem("storageName",score); // keeping score in the memory to print it in the next scene
         goToNextScene(); // This function only goes to the next scene if we have collected all 20 coins

      }
  }
};
