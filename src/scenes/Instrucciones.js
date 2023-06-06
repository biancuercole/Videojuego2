export default class Instrucciones extends Phaser.Scene {
    constructor() {
      // key of the scene
      // the key will be used to start the scene by other scenes
      super("instrucciones");
    }

    init() {}
    preload() {}
    create() {
        this.add.text(400, 300, "hola");
    }
    update() {}
}
