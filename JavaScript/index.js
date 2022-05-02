let database = firebase.database();
let form, Width, Height, gameState, host, myName, logo, logoImg, player, game;
let usrCnt =  database.ref("/usercount/");
let dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9;

//0 = start, 1 = wait, 2 = play, 3 = end.

function setup(){
    createCanvas(displayWidth,displayHeight);
    background("LightBlue")
    Width = displayWidth;
    Height = displayHeight - 50;
    devTools();
    // img = createImg("../Assets/logo.png", "logo");
    // img.position(Width/2, 10);
    form = new Form();
}

function preload(){
}

function draw(){
    console.log(gameState)
    if(gameState == 0){
        form.click();
    }
    if(gameState == 1){
        player.loadWaitScreen();
    }
    if(gameState == 2){

    }
}

function devTools(){
    let dev = createButton("Reset");
    dev.position(Width/2, Height - 100);
    dev.mousePressed(()=>{
        reset();
        window.location.reload();
    });
}

function reset(){
    database.ref("/").set({
        gameState: 0,
        userCount: 0,
        users: "",
    })
}