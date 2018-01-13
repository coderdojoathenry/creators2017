//
// The snowflake object is a fluffy thing
// that falls to the ground! It has size and a 
// location and the bigger ones fall slowly.  When
// if falls, if wiggles a bit
//
class Snowflake {
    constructor(x, y, size){
       this.x = x; 
       this.y = y;
       this.size = size;  
       // Calculate the speed
       // Big snowflakes are faster than small ones
       this.speed = this.size / 10;
    }

    move(){
        // Make the snowflake fall
        this.y = this.y + this.speed;
        // Wiggle it a little
        this.x = this.x + random(-1,1);

        // If it's off the screen, make it appear at a random place
        // on the top of the screen
        if(this.y > height + this.size/2){
            this.y = -1 * this.size/2;
            this.x = random(width);
        }
    }

    show(){
        // fill (the small ones are more transparent)
        fill(255, 135 + this.size*4);
        noStroke();        
        ellipse(this.x, this.y, this.size, this.size);        
    }

}