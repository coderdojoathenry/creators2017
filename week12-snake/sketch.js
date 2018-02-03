let snake;
let apple;

function setup(){
    createCanvas(800, 600);

    snake = new Snake(createVector(400, 300), 10);
    apple = new Apple(createVector(100, 100), 10);

    frameRate(5);
}

function draw(){
    background('black');  

    snake.move();
    apple.checkSnake(snake);

    apple.show();
    snake.show();
}

function keyPressed() {
    if (keyCode == LEFT_ARROW){
        snake.turnLeft();
    }
    else if (keyCode == RIGHT_ARROW){
        snake.turnRight();
    }
}