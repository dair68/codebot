const config = {
    type: Phaser.CANVAS,
    width: 720,
    height: 480,
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
    //blocky dungeon
    // this.load.image("tiles", "assets/tilesets/dungeon_sheet.png");
    // this.load.tilemapTiledJSON("map", "assets/tilemaps/dungeonMap.json");

    this.load.image("tiles", "assets/tilesets/dungeon_48x48.png");
    this.load.tilemapTiledJSON("map", "assets/tilemaps/small_map.json");

    //robot sprites
    this.load.spritesheet('robot',
        'assets/sprites/knight_96x96.png',
        { frameWidth: 96, frameHeight: 96 }
    );
}

let player;
let cursors;
const scale = 16 / 16;

function create() {
    const map = this.make.tilemap({ key: "map" });

    // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    // Phaser's cache (i.e. the name you used in preload)
    //const tileset = map.addTilesetImage("blocky_dungeon", "tiles");
    const tileset = map.addTilesetImage("smallmap_tiles", "tiles");

    // Parameters: layer name (or index) from Tiled, tileset, x, y
    // const belowLayer = map.createStaticLayer("floor", tileset, 0, 0);
    // const topLayer = map.createStaticLayer("walls", tileset, 0, 0);

    const belowLayer = map.createStaticLayer("below", tileset, 0, 0);
    const topLayer = map.createStaticLayer("above", tileset, 0, 0);

    topLayer.setCollisionByProperty({ collides: true });

    belowLayer.setDisplaySize(belowLayer.width * scale, belowLayer.height * scale);
    topLayer.setDisplaySize(topLayer.width * scale, topLayer.height * scale);

    //checking which tiles have collision detection
    // const debugGraphics = this.add.graphics().setAlpha(0.75);
    // topLayer.renderDebug(debugGraphics, {
    //     tileColor: null, // Color of non-colliding tiles
    //     collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
    //     faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    // });

    //creating player character
    const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn Point");
    player = this.physics.add.sprite(spawnPoint.x * scale, spawnPoint.y * scale, "robot");
    player.setSize(34, 40).setOffset(30, 30);
    //player.setDisplaySize(40 * scale, 40 * scale);

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
    const speed = 100;
    const prevVelocity = player.body.velocity.clone();

    // Stop any previous movement from the last frame
    player.body.setVelocity(0);

    // Horizontal movement
    if (cursors.left.isDown) {
        player.body.setVelocityX(-speed);
        player.body.setVelocityY(0);
        player.anims.play("left", true);
    }
    else if (cursors.right.isDown) {
        player.body.setVelocityX(speed);
        player.body.setVelocityY(0);
        player.anims.play('right', true);
    }
    // Vertical movement
    else if (cursors.up.isDown) {
        player.body.setVelocityY(-speed);
        player.body.setVelocityX(0);
        player.anims.play("up", true);
    }
    else if (cursors.down.isDown) {
        player.body.setVelocityY(speed);
        player.body.setVelocityX(0);
        player.anims.play("down", true);
    }
    //idle sprite
    else {
        player.anims.stop();

        //selecting idle frame based on previous movement
        if (prevVelocity.x < 0) {
            player.setTexture("robot", 24);
        }
        else if (prevVelocity.x > 0) {
            player.setTexture("robot", 8);
        }
        else if (prevVelocity.y < 0) {
            player.setTexture("robot", 0);
        }
        else if (prevVelocity.y > 0) {
            player.setTexture("robot", 16);
        }
    }
}
