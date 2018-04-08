let bodyPos;
let upperArmAngle = 0;
let lowerArmAngle = 0;

function setup(){
    createCanvas(800, 600);
    rectMode(CENTER);
    angleMode(DEGREES);

    bodyPos = createVector(width / 2, height - 100);
}

function draw(){
    background(0); 
    handleInput();

    drawBody();
}

function drawBody(){
    push();

    translate(bodyPos.x, bodyPos.y);
    fill("Yellow");
    rect(0, 0, 50, 50);

    drawUpperArm();

    pop();
}

function drawUpperArm(){
    push();
 
    translate(20, -20);
    rotate(upperArmAngle);
    fill("green");
    rect(25, 0, 50, 10);     

    drawLowerArm();

    pop();
}

function drawLowerArm(){
    push();
 
    translate(50, 0);
    rotate(lowerArmAngle);
    fill("blue");
    rect(25, 0, 50, 10);     

    pop();
}

function handleInput(){
    if (keyIsDown(LEFT_ARROW) && bodyPos.x > 50){
        bodyPos.x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW) && bodyPos.x < width - 50){
        bodyPos.x += 5;
    }

    if (keyIsDown(UP_ARROW)){
        upperArmAngle -= 5;
    }    

    if (keyIsDown(DOWN_ARROW)){
        upperArmAngle += 5;
    }
    
    if (keyIsDown(90)){
        lowerArmAngle -= 5;
    }    

    if (keyIsDown(88)){
        lowerArmAngle += 5;
    } 
}
