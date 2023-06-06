// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Fin extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("fin");
  }

  init(data) {

    console.log(data);
    this.cantidadEstrellas = data.cantidadEstrellas;
  }

  preload() {}
  create() {
    this.add.image(400, 300, "fin").setScale(0.24);
    const button = this.add.image(400, 340, "reintentar").setScale(0.20).setInteractive();
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
    this.cantidadEstrellasTexto = this.add.text(
      15,
      15,
      "Estrellas recolectadas: " + this.cantidadEstrellas,
      { fontSize: "15px", fill: "#FFFFFF" }
    );
  }
}
