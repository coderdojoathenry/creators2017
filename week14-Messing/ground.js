class Ground {
    constructor(y){
        this.y = y;
    }

    show() {
        rect(0, this.y, width, height - this.y);
    }
}