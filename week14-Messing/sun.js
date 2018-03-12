class Sun {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    show(){
        push();

        fill("yellow");
        strokeWeight(4);
        stroke("Orange");
        ellipse(this.x, this.y, 50, 50);

        pop();
    }
}