//wrapper class that places a player into a scene

class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        const anims = this.scene.anims;

        //animations
        //idle animation
        anims.create({
            key: 'idle',
            frames: [{ key: 'robot', frame: 0 }],
            frameRate: 20
        });

        //left animation
        anims.create({
            key: 'left',
            frames: anims.generateFrameNumbers('robot', { start: 24, end: 26 }),
            frameRate: 10,
            repeat: -1
        });

        //right animation
        anims.create({
            key: 'right',
            frames: anims.generateFrameNumbers('robot', { start: 8, end: 10 }),
            frameRate: 10,
            repeat: -1
        });

        //down animation
        anims.create({
            key: 'down',
            frames: anims.generateFrameNumbers('robot', { start: 16, end: 18 }),
            frameRate: 10,
            repeat: -1
        })

        //up animation
        anims.create({
            key: 'up',
            frames: anims.generateFrameNumbers('robot', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        //spritework
        this.sprite = scene.physics.add.sprite(x, y, "robot");
        this.sprite.setSize(34, 40).setOffset(30, 30);
        //this.sprite.setDisplaySize(40, 40);

         //  Input Events
         this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    update() {
        const speed = 100;
        const player = this.sprite;
        const prevVelocity = player.body.velocity.clone();

        // Stop any previous movement from the last frame
        player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            player.body.setVelocityX(-speed);
            player.body.setVelocityY(0);
            player.anims.play("left", true);
        }
        else if (this.cursors.right.isDown) {
            player.body.setVelocityX(speed);
            player.body.setVelocityY(0);
            player.anims.play('right', true);
        }
        // Vertical movement
        else if (this.cursors.up.isDown) {
            player.body.setVelocityY(-speed);
            player.body.setVelocityX(0);
            player.anims.play("up", true);
        }
        else if (this.cursors.down.isDown) {
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
}

export default Player;