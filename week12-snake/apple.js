class Apple{
    constructor(pos, size){
        this.pos = pos;
        this.size = size;

        this.eaten = false;
    }

    show(){
        if (this.eaten == true){
            return;
        }

        fill('red');
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    checkSnake(snake){
        if (snake.pos.equals(this.pos)){
            snake.length++;
            this.eaten = true;
        }
    }
}