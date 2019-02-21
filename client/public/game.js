const config = {
    type: Phaser.CANVAS,
    width: 600,
    height: 400,
    parent: "gameContainer",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let scaleRatio = window.devicePixelRatio / 3;

function preload() {
    // this.load.image("tiles", "assets/images/backgrounds/future_tiles.png");
    // this.load.tilemapTiledJSON("map", "assets/map.json");

    //blocky dungeon
    this.load.image("tiles", "assets/images/dungeon_sheet.png");
    this.load.tilemapTiledJSON("map", "assets/dungeonMap.json");
 
    // this.load.spritesheet('robot',
    //     'assets/images/sprites/daxbotsheet.png',
    //     { frameWidth: 64, frameHeight: 68 }
    // );

    this.load.spritesheet('robot',
        'assets/images/knightanim4.png',
        { frameWidth: 32, frameHeight: 32 }
    );
}

let player;
let cursors;

function create() {
    const map = this.make.tilemap({ key: "map" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    //const tileset = map.addTilesetImage("future", "tiles");
    const tileset = map.addTilesetImage("blocky_dungeon", "tiles");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    // const belowLayer = map.createStaticLayer("floor", tileset, 0, 0);
    // const topLayer = map.createStaticLayer("walls", tileset, 0, 0);

    const belowLayer = map.createStaticLayer("below", tileset, 0, 0);
    const topLayer = map.createStaticLayer("above", tileset, 0, 0);

    topLayer.setCollisionByProperty({ collides: true });

    belowLayer.setDisplaySize(400, 400);
    topLayer.setDisplaySize(400, 400);

    //checking which tiles have collision detection
    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // topLayer.renderDebug(debugGraphics, {
    //     tileColor: null, // Color of non-colliding tiles
    //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });

    player = this.physics.add.sprite(160, 256, "robot").setSize(10,15).setOffset(11,8);
    //player = this.physics.add.sprite(160, 256, "robot").setSize(20, 15).setOffset(20, 40);;
    player.setDisplaySize(40 * 40/20, 40 * 40/20);

    // This will watch the player and worldLayer every frame to check for collisions
    this.physics.add.collider(player, topLayer);

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //idle animation
    this.anims.create({
        key: 'idle',
        frames: [{ key: 'robot', frame: 0 }],
        frameRate: 20
    });

    //left animation
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('robot', { start: 24, end: 26 }),
        frameRate: 10,
        repeat: -1
    });

    //right animation
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('robot', { start: 8, end: 10 }),
        frameRate: 10,
        repeat: -1
    });

    //down animation
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('robot', { start: 16, end: 18 }),
        frameRate: 10,
        repeat: -1
    })

    //up animation
    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });
}

function update() {


    // Horizontal movement
    if (cursors.left.isDown) {
        player.body.setVelocityX(-100);
        player.body.setVelocityY(0);

        //flipping sprite left
        // if (!player.flipX) {
        //     player.flipX = true;
        // }

        player.anims.play("left", true);
    }
    else if (cursors.right.isDown) {
        player.body.setVelocityX(100);
        player.body.setVelocityY(0);

        //flipping sprite right
        // if (player.flipX) {
        //     player.flipX = false;
        // }

        player.anims.play('right', true);
    }

    // Vertical movement
    else if (cursors.up.isDown) {
        player.body.setVelocityY(-100);
        player.body.setVelocityX(0);
        player.anims.play("up", true);
    }
    else if (cursors.down.isDown) {
        player.body.setVelocityY(100);
        player.body.setVelocityX(0);
        player.anims.play("down", true);
    }

    else {
        // Stop any previous movement from the last frame
        player.body.setVelocity(0);
        player.anims.play("idle", true);
    }

    // Normalize and scale the velocity so that player can't move faster along a diagonal
    // player.body.velocity.normalize().scale(speed);
}