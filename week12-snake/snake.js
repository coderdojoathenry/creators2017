class Snake {
    constructor(pos, size){
        this.pos = pos;
        this.size = size;

        this.positions = [];
        this.positions.push(pos.copy());
        this.length = 7;

        this.direction = 0;
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
        if (this.positions.length >= this.length){
            this.positions.splice(0, 1);
        }

        this.updatePos();
        this.positions.push(this.pos.copy());
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
}