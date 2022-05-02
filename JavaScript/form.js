class Form{
    constructor(){
        gameState = 0;
        fill("black");
        textSize(32)
        this.title = text("PatternGame",Width/2 - 120,50);
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.input.position(Width/2 - 100, 100);
        this.submit = createButton("Play!");
        this.submit.position(Width/2 - 50, 150)
    }

    click(){
        this.submit.mousePressed(()=>{
            myName = this.input.value();
            this.input.hide();
            this.submit.hide();
            player = new Player;
        });
    }
}