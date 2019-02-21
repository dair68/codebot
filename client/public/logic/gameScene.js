import Player from "./player.js";

//defining the preload, create, and update properties of the scene
class GameScene extends Phaser.Scene {
    preload() {
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
    
    create() {
        const scale = 16 /16;
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
        this.player = new Player(this, spawnPoint.x, spawnPoint.y);
    
        // This will watch the player and worldLayer every frame to check for collisions
        this.physics.add.collider(this.player.sprite, topLayer);
    }
    
    update() {
        this.player.update();
    }
}

export default GameScene;