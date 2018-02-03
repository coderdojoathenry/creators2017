let snake;
let apples = [];
let numApples = 130;
let size = 10;

function setup(){
    createCanvas(800, 600);

    snake = new Snake(createVector(400, 300), size);

    for (let i = 0; i < numApples; i++){
        let numX = width / size;
        let numY = height / size;
        let x = floor(random(numX - 2) + 1) * size;
        let y = floor(random(numY - 2) + 1) * size;
        apples.push(new Apple(createVector(x, y), size));
    }

    frameRate(15);
}

function draw(){
    background('black');  

    snake.move();

    for (let i = 0; i < numApples; i++){
      apples[i].checkSnake(snake);
      apples[i].show();
    }

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