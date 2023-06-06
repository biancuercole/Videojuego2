export default class Instrucciones extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("instrucciones");
    }

    init() {}
    preload() {}
    create() {
        this.add.image(400, 300, "instrucciones").setScale(0.24);
        const button= this.add.image(400, 470, "comenzar").setScale(0.22).setInteractive();
        
        button.on("pointerover", () => {
            this.game.canvas.style.cursor = "pointer"
        });

        button.on("pointerout", () => {
            this.game.canvas.style.cursor = "default";
        });
        
        button.on("pointerdown", () => {
            this.game.canvas.style.cursor = "default";
            this.scene.start("nivel1");
        });
    }   
    update() {}
}
