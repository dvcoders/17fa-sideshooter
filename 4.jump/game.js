var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});

//constants
var PLAYER_SPEED = 5;
var PLAYER_GRAVITY = 800;
var PLAYER_JUMP = -620;

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

	//physics - gravity
	player.body.allowGravity = true;
	player.body.gravity.y = PLAYER_GRAVITY;

	//floor is immovable
	game.physics.enable(floor, Phaser.Physics.ARCADE);
	floor.body.immovable = true;

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

	game.physics.enable(floor1, Phaser.Physics.ARCADE);
	floor1.body.immovable = true;
	game.physics.enable(floor2, Phaser.Physics.ARCADE);
	floor2.body.immovable = true;
	game.physics.enable(floor3, Phaser.Physics.ARCADE);
	floor3.body.immovable = true;

}//create

function update()
{
	// collsion
	collision();

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

	

	//Challenge!!!*
	//player.body.velocity.x
	//player.body.acceleration.x
	//*


}//movePlayer

function collision()//*
{

  // collide(sprite1,sprite2) function do collision
  // But also, it returns true if those two sprites are in contact
  // using this, we allow player to jump only when making contact
  // with floors

  // also, let's say
  // player = '0', floor = '-' then

  // -
  // 0

  // player is making contact, and will therefore, jump
  // player can ONLY jump when touching floor under
  // therefore we also check if player is touching
  // anything underneath

  //PS: don't forget PLAYER_JUMP has to be negative value

	if(game.physics.arcade.collide(player, floor) ||
		game.physics.arcade.collide(player, floor1) ||
		game.physics.arcade.collide(player, floor2) ||
		game.physics.arcade.collide(player, floor3) )
	{
		//jump
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && 
				player.body.touching.down)
		{
			player.body.velocity.y = PLAYER_JUMP;
		}
	}

}
//*


