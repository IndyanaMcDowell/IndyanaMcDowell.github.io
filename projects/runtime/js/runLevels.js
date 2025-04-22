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
    createSawBlade(800, groundY - 25)
    createSawBlade(1000, groundY - 75)


    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX -= 1;
      enemy.rotationalVelocity = 0.5;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-20)
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      }
    }
    createEnemy(400, groundY - 10);
    createEnemy(800, groundY - 10);
    createEnemy(1200, groundY - 10);

    function createReward(x, y, health, image, scale, offsetX, offsetY) {
      var reward = game.createGameItem("reward", 25); // creates reward game item and adds it to game and stores it in the variable reward
      var purpleSquare = draw.bitmap(image); // creates a red square and stores it in the variable red square
      purpleSquare.x = offsetX; // offsets the image from the hitzone by -25 pixels
      purpleSquare.y = offsetY; // offsets the image from the hitzone by -25 pixels
      reward.addChild(purpleSquare); //add the red square as a child to our reward variable
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // adds reward to game  
      reward.velocityX -= 3; // makes the reward move
      // reward.rotationalVelocity = 1; // rotates reward
      purpleSquare.scaleX = scale; // scales enemy X
      purpleSquare.scaleY = scale; // sclaes enemy Y
     
      reward.onPlayerCollision = function () {
        game.changeIntegrity(health) // adds a certain amount of health to hallebots HUD
        reward.fadeOut();
      };
    }
    
    createReward(700, groundY-103, 50); // calls a reward
    createReward(1100, groundY-103, 15); // calls a reward
    createReward(1500, groundY-103, 5); // calls a reward
    


    function createMarker() {
      
    }
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
