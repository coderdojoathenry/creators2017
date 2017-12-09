
class Snowflake {
    constructor(x, y,size){
    	this.x = x;
    	this.y = y;
    	this.stepSize = map(size,10,20,10,20);
    	this.size = size;
    }  

	move(){
		this.y = this.y + this.stepSize;
		if (this.y > height){
			this.y = 0;this.x = random(width)
		}

	}

	show(){
		stroke(("blue"))
		strokeWeight(this.stepSize/10)
		line(this.x,this.y,this.x,this.y + this.size);
	}
}
	    
	











