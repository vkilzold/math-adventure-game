class playGame extends Phaser.Scene {
    constructor(){
        super("playGame");
    }
    create(){
        this.add.text(20,20, "Playing game", {font: "25px Arial", fill: "yellow"});
        
    }
    
}