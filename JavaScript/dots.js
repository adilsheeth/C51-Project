class Dots{
    constructor(x,y,r){
        this.dot = createSprite(x,y,r);
        this.x = x;
        this.y = y;
        this.r = r;
        this.display();
    }
    
    display(){
        ellipse(this.x, this.y, this.r);
    }
}