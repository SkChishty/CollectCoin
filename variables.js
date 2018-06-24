var d = 100; // This variable represents small "d" key value in javascript. User will be pressing this key to move right.
var s = 115; // This variable represents small "s" key value in javascript. User will be pressing this key to move down.
var a = 97;  // This variable represents small "a" key value in javascript.  User will be pressing this key to move left.
var w = 119; // This variable represents small "w" key value in javascript. User will be pressing this key to move up.

var xPos = 0;   // Represents current x-position of the player
var yPos = 0;   // Represents current y-position of the player

var speed = 30; // Holds the value of the speed of the player in all direction

var player = $(".player");  // Stores the CSS class of the player
var widthOfScreen = $(document).width() - 40;  // Holds the width of the screen to help us to not allow player move out of the screen
var heightOfScreen = $(document).height() - 40; // Holds the height of the screen to help us to not allow player move out of the screen
var playerWidth = 20;     // Stores player width according to css value of .player
var playerHeight = 14;    // Stores player height according to css value of .player
var duration = 250;       // This variable holds the number of seconds delay in the animate function used in all the move functions
var p = document.getElementById('p');   // Stores reference of the player div using javascript and not jquery function. This variable is mainly used to keep the view/camera focusing on the div. We used scrollIntoView("id") which is javascript's function and not jquery's
var stars = [];           // Array of stars to be painted on screen
var colors = ["red","green","aqua","white","pink"];   // Possible colours of stars
var score = 0;            // This variable keeps track of player score, starting from 0. We created the score variable here as it is a part of the design as well.
var offsetAtLeft = 40;    // Used to create a distance for the score label from the end of the screen at right
var coins = [];           // This array will hold all the coins in the level
var numberOfCoins = 20;   // This variable stores the number of coins we want to have in our level

// The following variables are used to detect collision
var playerStartY;     // A Variable to store player's current start of Y coordinate
var playerEndY;       // A Variable to store player's current end of Y coordinate
var playerStartX;     // A Variable to store player's current start of X coordinate
var playerEndX;       // A Variable to store player's current end of Y coordinate
// End of collision variable declaration
