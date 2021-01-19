var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4;
var cars;


function setup(){
  canvas = createCanvas(displayWidth-200, displayHeight-750);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  console.log(displayWidth);
  console.log(displayHeight);
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
