class Player{
    constructor(){
        this.name = myName;
        this.count = null;
        this.host = null;
        this.state = 1;
        this.index = null;
        this.listenUserCount();
        this.getUserCount();
        this.listenGameState();
        //Reading values from the database is laggy, so constructor2 will only be called once database is read.
    }

    constructor2(){
        if(this.count == 0){ 
            this.host = true;
            this.startGame = createButton("Start Game!");
            this.startGame.position(Width/2, 200);
        } else {
            this.host = false;
        }
        console.log(this.count, this.host);
        this.count++;
        this.index = this.count;
        this.createProfie();
        this.updateUserCount();
        gameState = this.state;
        this.loadWaitScreen();
    }

    listenUserCount(){
        database.ref("/userCount/").on('value', data=>{
            this.count = data.val();
        });
    }

    updateUserCount(){
        database.ref("/").update({
            userCount: this.count,
        });
    }

    getUserCount(){
        database.ref("/userCount/").get().then(data => {
            this.count = data.val();
            console.log(data.val());
            this.constructor2();
        });
    }

    listenGameState(){
        database.ref("/gameState/").on('value',data =>{
            if(data.val() == 2 && this.host == false){
                this.state = 2;
                gameState = 2;
                this.detach();
                game = new Game();
            }
        });
    }

    updateGameState(){
        database.ref("/").update({
            gameState: this.state,
        })
    }

    createProfie(){
        database.ref("/users/" + this.count + "/").set({
            name: this.name,
            score: 0,
        });
    }

    detach(){
        database.ref("/gamestate/").off();
        database.ref("/userCount/").off();
    }

    updateArray(arr){
        database.ref("/").update({
            array: arr,
        });
    }

    loadWaitScreen(){
        clear();
        text("Setting the game up!", Width/2, 150);
        if(this.host == true){
            console.log(this.count);
            text("Connected Users: " + this.count, Width/2, 200);
            this.startGame.mousePressed(()=>{
                if(this.count <= 1){
                    fill("Red");
                    gameState = null;
                    text("Too few users! Restarting Game.", Width/2, 300);
                    setTimeout(()=>{
                        reset();
                        window.location.reload();
                    },3000);
                    this.state = null;
                    return;
                }
                this.state = 2;
                gameState = 2;
                this.detach();
                this.updateGameState();
                let array = [];
                for(let i = 0; i < 50; i++){
                    array[i] = Math.round(random(1,9));
                }
                this.updateArray(array);
                game = new Game;
            });
        }
    }
}