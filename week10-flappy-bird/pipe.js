class Pipe{
    constructor(x, pipeWidth, gapTopY, gapBottomY){
        this.x = x;
        this.pipeWidth = pipeWidth;
        this.gapTopY = gapTopY;
        this.gapBottomY = gapBottomY;
        this.hasScored = false;
    }

    move(){
        this.x = this.x - BIRD_SPEED;
        if(this.x<0-this.pipeWidth) {
           this.resetPipe();
        }
    }

    resetPipe(){
        // move to the right
        this.x = width;

        // create a new random gap
        this.gapTopY = random(100, height-PIPE_GAP_SIZE);     
        this.gapBottomY = this.gapTopY + PIPE_GAP_SIZE;

        // let the pipe score again
        this.hasScored = false;
    }

    checkScore(bird){
        if(this.x+this.pipeWidth < bird.x && this.hasScored==false){
            score = score + 1;
            this.hasScored = true;
        }
    }

    checkDeath(bird){
        if(bird.x + bird.size > this.x && bird.x < this.x + this.pipeWidth){
            if(bird.y < this.gapTopY || bird.y + bird.size > this.gapBottomY) {
                gameOver = true;
            } 
        } 
    }

    show(){
        fill(100);
        // top
        rect(this.x, 0, this.pipeWidth, this.gapTopY);

        // bottom
        rect(this.x, this.gapBottomY, this.pipeWidth, 
            height-this.gapBottomY);
    }
}