import GameScene from "./gameScene.js";

//configuring the game
const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 480,
    parent: "gameContainer",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: GameScene
};

const game = new Phaser.Game(config);