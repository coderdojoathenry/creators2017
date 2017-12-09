class Crawler {
    constructor(x, y, stepSize, size){
        this.x = x;
        this.y = y;
        this.stepSize = stepSize;
        this.size = size;        
    }

    move(){
        // pick a direction
        let dir = random();
        if(dir<0.25){
            this.x = this.x + this.stepSize;
        } 
        else if (dir < 0.5){
            this.x = this.x - this.stepSize;
        }
        else if (dir < 0.75){
            this.y = this.y + this.stepSize;
        }
        else {
            this.y = this.y - this.stepSize;            
        }

    }
    show(){
        fill(random(255), random(255), random(255), 50);
        ellipse(this.x, this.y,this.size, this.size);
    }
}