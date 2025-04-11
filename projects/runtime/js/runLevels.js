var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y){
      var hitZoneSize = 25; //define the size of the hitzone and assign to a variable
      var damageFromObstacle = 10; //defines the amount of damage obstacle causes and assigns to a variable
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle hitzone using the size and damage as paramaters 
      sawBladeHitZone.x = x; //sets the x coordinate of the sawblade
      sawBladeHitZone.y = y; // sets the y coordinate of the sawblade
      game.addGameItem(sawBladeHitZone); // adds the sawblade hitzone to the game
      var obstacleImage = draw.bitmap("img/sawblade.png"); // draw the image bitmap and store it in obstacleImage
      sawBladeHitZone.addChild(obstacleImage); //attaches the image to the sawblade hitzone
      obstacleImage.x = -25; //position the image on the hitzone's x value by moving it left 25 pixels
      obstacleImage.y = -25; //position the image on the hitzone's y value by moving it up 25 pixels
    }
    createSawBlade(400, groundY - 50)
    createSawBlade(800, groundY - 50)
    createSawBlade(1000, groundY - 50)
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
