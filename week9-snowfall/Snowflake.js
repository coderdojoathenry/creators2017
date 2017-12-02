class Snowflake {
    constructor(x, y, size){
       this.x = x; 
       this.y = y;
       this.size = size;  
       this.speed = this.size / 10;
    }

    move(){
        this.y = this.y + this.speed;
        this.x = this.x + random(-1,1);
        if(this.y > height+this.size/2){
            this.y = -1 * this.size/2;
            this.x = random(width);
        }
    }

    show(){
        fill(255, 225 + this.size);
        noStroke();        
        ellipse(this.x, this.y, this.size, this.size);        
    }

}