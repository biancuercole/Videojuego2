export default class Menu extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("menu");
    }

    init() {}
    preload() {
        this.load.image("fondo", "./public/images/menu.png");
        this.load.image("jugar", "./public/images/boton.png");
        this.load.image("moncho", "./public/images/moncho.png");
    }
    create() {
        this.add.image(400, 300, "fondo").setScale(0.24);
        const button = this.add.image(400, 330, "jugar").setScale(0.20).setInteractive();
        this.add.image(400, 275, "moncho");
        button.on("pointerover", () => {
            this.game.canvas.style.cursor = "pointer"
        });

        button.on("pointerout", () => {
            this.game.canvas.style.cursor = "default";
        });
        
        button.on("pointerdown", () => {
            this.game.canvas.style.cursor = "default";
            this.scene.start("instrucciones");
        });
    }

    update() {
    }
}