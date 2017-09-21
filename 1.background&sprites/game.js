var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});

var player;
var floor;

function preload()
{
  game.load.image("background", "asset/gray.jpg");
  game.load.image("player",     "asset/man.gif");
  game.load.image("platform",   "asset/platform.jpg");

}

function create()
{
  game.add.tileSprite(0, 0, game.width, game.height, "background");
  player = game.add.sprite(game.width/2, game.height/2, "player");
  floor = game.add.sprite(game.width/2, 500, "platform");
  floor.width = 600;
  floor.height = 40;

  floor.anchor.set(0.5,0.5);
  player.anchor.set(0.5,0.5);

}

function update()
{

}



