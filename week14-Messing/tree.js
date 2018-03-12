class Tree {
    constructor(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;
    }

    show(){
        push();

        translate(this.x, this.y);
        scale(this.scale, this.scale);

        fill("brown");
        rectMode(CENTER);
        rect(0, -10, 5, 20);

        fill("green");
        triangle(-10, -20, 10, -20, 0, -80);

        pop();
    }
}