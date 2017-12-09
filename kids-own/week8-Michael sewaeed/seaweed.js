    class Crawler {
        constructor(x, y, stepSize) {
            this.x = x;
            this.y = y;
            this.stepSize = stepSize;
            this.size = 10;
        }

        move() {
            // pick a direction
            let dir = random();
            if (dir < 0.25) {
                this.x = this.x + this.stepSize;
            } 
            else if (dir < 0.5) {
                this.x = this.x - this.stepSize;
            } 
            //else if (dir < 0.7){
            else if (dir < 0.7) {
                this.y = this.y + this.stepSize;
            } 
            else {
                this.y = this.y - this.stepSize;
            }

        }
        show() {
           // fill(random(255), random(255), random(255), 200);
            stroke("green");
            fill("green");
            ellipse(this.x, this.y, this.size, this.size);
        }
    }