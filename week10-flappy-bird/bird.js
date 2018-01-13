class Bird {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedY = 0;
        this.jumpSpeed = -10;
    }

    flap(){
        this.speedY = this.jumpSpeed;
    }

    move(){
        if(gameStarted==true && this.y < height - groundHeight) {
            this.speedY = this.speedY + GRAVITY;
            this.y = this.y + this.speedY;            
        }
    }

    show(){
        fill('yellow');
        rect(this.x, this.y, this.size, this.size);
    }
}