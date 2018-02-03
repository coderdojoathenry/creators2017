class Snake {
    constructor(pos, size){
        this.pos = pos;
        this.size = size;

        this.positions = [];
        this.positions.push(pos.copy());
        this.length = 7;

        this.direction = 0;

        this.crashed = false;
    }

    show(){
        fill('green');
        rectMode(CENTER);

        for (let i = 0; i < this.positions.length; i++) {
            rect(this.positions[i].x, this.positions[i].y, 
                 this.size, this.size);
        }
    }

    move(){
        if (this.crashed == true) {
            return;
        }

        if (this.positions.length >= this.length){
            this.positions.splice(0, 1);
        }

        this.updatePos();
        this.positions.push(this.pos.copy());

        this.crashed = this.isCrashed();
    }

    updatePos(){
        if (this.direction == 0){
            this.pos.add(createVector(this.size, 0));
        }
        else if (this.direction == 1) {
            this.pos.add(createVector(0, -this.size));
        }
        else if (this.direction == 2) {
            this.pos.add(createVector(-this.size, 0));
        }
        else if (this.direction == 3) {
            this.pos.add(createVector(0, this.size));
        }
    }

    turnLeft(){
      if (this.direction == 3) {
          this.direction = 0;
      }
      else {
          this.direction++;
      }
    }

    turnRight(){
        if (this.direction == 0) {
            this.direction = 3;
        }
        else {
            this.direction--;
        }
    }

    isCrashed(){
        // Check edge
        if (this.pos.x < 0 || this.pos.x > width || 
            this.pos.y < 0 || this.pos.y > height){
            return true;
        }

        // Check if we've hit ourselves (but don't check against the 
        // very last point which is the head itself)
        for (let i = 0; i < this.positions.length - 1; i++){
            if (this.positions[i].equals(this.pos)){
                return true;
            }
        }

        return false;
    }
}