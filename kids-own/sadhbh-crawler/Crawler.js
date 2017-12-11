class Crawler {
    constructor(x, y, stepSize) {
        this.x = x;
        this.y = y;
        this.stepSize = stepSize;
        this.size = 10;


    }

    move() {
        console.log("going to move");
        let dir = random();
        if (dir < 0.25 && this.x < width) {
            this.x = this.x + this.stepSize
        }
        else if (dir < 0.5  && this.x > 0) {
            this.x = this.x - this.stepSize
        }
        else if (dir < 0.75 && this.y < height) {
            this.y = this.y + this.stepSize
        }
        else if(this.y > 0 ) {
            this.y = this.y - this.stepSize
        }
    }
    show() {
        fill(random(255), random(255), random(255), 200);
        ellipse(this.x, this.y, 15, 15)
        console.log("Showing...")
    }
}