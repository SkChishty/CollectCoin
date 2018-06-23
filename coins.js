var coins = [];   // This array will hold all the coins in the level
var numberOfCoins = 20;   // This variable stores the number of coins we want to have in our level
var playerStartY;
var playerEndY;
var playerStartX;
var playerEndX;

// The following loop 1st, creates divs with a special id and class coin.
// Then randomly assigns co-ordiantes to the created coins
if(score < numberOfCoins){
for(var i = 0; i < numberOfCoins; i++){
    $("body").append("<div class = 'coin' id = '"+i+"'></div>");
    coins[i] = $("#"+i);
    coins[i].css("top",randomPixels(heightOfScreen));
    coins[i].css("left",randomPixels(widthOfScreen));
}
}




// to check if startingX of coin is inside player rectanlge
function isCoinStartXInPlayer(playerStartX,playerEndX,coinStartX){

  return (coinStartX >= playerStartX && coinStartX <= playerEndX);
}

// to check if endingX of coin is inside player rectanlge

function isCoinEndXInPlayer(playerStartX,playerEndX, coinEndX){

  return (coinEndX >= playerStartX && coinEndX <= playerEndX);
}

// to check if startingY of coin is inside player rectanlge
function isCoinStartYInPlayer(playerStartY, playerEndY, coinStartY){

  return (coinStartY >= playerStartY && coinStartY <= playerStartY);
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
var collectCoin = function(){
  updateScoreLabel(); // call to update the score after collecting a coin
  initCoordinates(player, playerStartX, playerStartY, playerEndX, playerEndY);
  for(var i = 0; i < coins.length; i++){
    var coinStartY = coins[i].offset().top;
    var coinEndY = coins[i].offset().top + coins[i].outerHeight(true);
    var coinStartX = coins[i].offset().left;
    var coinEndX = coins[i].offset().left + coins[i].outerWidth(true);

    var isCoinXInPlayer = isCoinStartXInPlayer(playerStartX, playerEndX, coinStartX) ||
     isCoinEndXInPlayer(playerStartX, playerEndX, coinEndX);

     var isCoinYInPlayer = isCoinStartYInPlayer(playerStartY,playerEndY,coinStartY)||
     isCoinEndYInPlayer(playerStartY,playerEndY,coinEndY);



     if( isCoinXInPlayer &&  isCoinYInPlayer )
          {
         coins[i].slideUp(200);
         coins[i].css("left",-500);
         coins[i] = coins[coins.length - 1];
         coins.length--;
         score++;
         if(score >= numberOfCoins){
           window.location.href = "win.html"

         }
      }
  }
};
