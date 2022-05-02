class Game{
    constructor(){
        clear();
        this.array = null;
        console.log("Game!");
        this.getArray();
        this.createDots();
    }

    getArray(){
        database.ref("/array/").get().then(data=>{
            console.log(data.val());
            this.array = data.val();
        });
    }

    createDots(){
        dot1 = new Dots(Width/2 - 100, Height/2, 20);

    }
}