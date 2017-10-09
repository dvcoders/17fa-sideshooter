var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});

//constants
var PLAYER_SPEED = 5;
var PLAYER_GRAVITY = 800;

//variables
var player;
var floor;
var floor1;
var floor2;
var floor3;

// load images and resources
function preload() {

	game.load.image("gray",				"asset/gray.jpg");
	game.load.image("platform",		"asset/platform.jpg");
	game.load.image("player", 		"asset/man.gif");

}

function create() {

  //  Background
	game.add.tileSprite(0, 0, game.width, game.height, "gray");

	//player set up
	player = game.add.sprite(300, 400, "player");
	player.anchor.set(0.5,0.5);

	//floor set up
	floor = game.add.sprite(400,550, "platform");
	floor.width = 700;
	floor.height = 40;
	floor.anchor.set(0.5,0.5);

	//physics engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//apply physics to player sprite
	game.physics.enable(player, Phaser.Physics.ARCADE);

	//physics - gravity*
	player.body.allowGravity = true;
	player.body.gravity.y = PLAYER_GRAVITY;
	//*

	//floor is immovable*
	game.physics.enable(floor, Phaser.Physics.ARCADE);
	floor.body.immovable = true;
	//*


	floor1 = game.add.sprite(150, 350, "platform");
	floor1.width = 200;
	floor1.height = 40;
	floor1.anchor.set(0.5, 0.5);

	floor2 = game.add.sprite(650, 350, "platform");
	floor2.width = 200;
	floor2.height = 40;
	floor2.anchor.set(0.5, 0.5);
	
	floor3 = game.add.sprite(400, 200, "platform");
	floor3.width = 300;
	floor3.height = 40;
	floor3.anchor.set(0.5, 0.5);

	//challenge!*
	game.physics.enable(floor1, Phaser.Physics.ARCADE);
	floor1.body.immovable = true;
	game.physics.enable(floor2, Phaser.Physics.ARCADE);
	floor2.body.immovable = true;
	game.physics.enable(floor3, Phaser.Physics.ARCADE);
	floor3.body.immovable = true;
	//*


}//create

function update()
{
	// collsion*
	collision();
	//*

	// function for player movement
	movePlayer();

}//update

function movePlayer()
{
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
	{
		player.body.x -= PLAYER_SPEED;
	}
	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
	{
		player.body.x += PLAYER_SPEED;
	}

	// Challenge!!*
	if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
	{
		player.body.y = 250;
	}
	//*

	// Challenge!!*
	// if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
	// {
	// 	player.body.y -= 10;
	// }
	// if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
	// {
	// 	player.body.y += 10;
	// }
	//*

	//Challenge!!!*
	//player.body.velocity.x
	//player.body.acceleration.x
	//*


}//movePlayer

function collision()//*
{
	game.physics.arcade.collide(player, floor);

	//challenge*
	game.physics.arcade.collide(player, floor1);
	game.physics.arcade.collide(player, floor2);
	game.physics.arcade.collide(player, floor3);

}
//*


