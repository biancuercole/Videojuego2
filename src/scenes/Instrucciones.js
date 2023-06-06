export default class Instrucciones extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("instrucciones");
    }

    init() {}
    preload() {
        this.load.image("instrucciones", "./public/images/instrucciones.png");
        this.load.image("comenzar", "./public/images/comenzar.png");
    }
    create() {
        this.add.image(400, 300, "instrucciones").setScale(0.24);
        const button= this.add.image(400, 445, "comenzar").setScale(0.22).setInteractive();
        
        button.on("pointerover", () => {
            this.game.canvas.style.cursor = "pointer"
        });

        button.on("pointerout", () => {
            this.game.canvas.style.cursor = "default";
        });
        
        button.on("pointerdown", () => {
            this.game.canvas.style.cursor = "default";
            this.scene.start("precarga");
        });
    }   
    update() {}
}
