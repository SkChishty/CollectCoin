
// function to generate random co-cordinates for the stars to be painted
var randomPixels = function(value){
  return Math.floor(Math.random() * value);
}


// following function creates a div with id score and class score to show a lable of scores on the scene
function initScoreLabel(){
  $("body").append("<div id = 'score' class = 'score'>SCORE: "+score+"</div>");
  $("#score").css("left",widthOfScreen - offsetAtLeft);

}
// following function updates score div accordingly to our score and replaces it with the previous score
function updateScoreLabel() {
  $("#score").replaceWith("<div id = 'score' class = 'score'>SCORE: "+score+"</div>");
  $("#score").css("left",widthOfScreen - offsetAtLeft);

}

function updateTimerLabel(seconds){
  $( "#time" ).html( "<h3 id = 'time'>TIME: "+seconds+"</h3>" );
    $("#time").css("left",widthOfScreen - offsetAtLeft);
}

/*
Following Loop creates divs of a certain id with "star" class.
Grabs each star div using the id and stores it in the stars array.
Assigns random pixels limited between zero and the height and width of the screen.
Assigns a random colour from the colors array.
*/
 for(var index = 1; index <= 500; index++){
   // creates star divs
   $("body").append($("<div class ='star' id = 'star"+index+"'></div>"));
     stars[index] = $("#star"+index+"");
   // sets the top at a random co-ordinate
   stars[index].css("top", randomPixels(heightOfScreen));
   // sets the left at a random co-ordinate
   stars[index].css("left", randomPixels(widthOfScreen));
   // sets the colour randomly from the colors array.
   stars[index].css("background-color",colors[
     Math.floor(Math.random()*colors.length)
   ]);
 }
initScoreLabel(); // A call to initialize the score label as we desing the level
updateScoreLabel();
