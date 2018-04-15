let fanAngle = 20;

function setup() {
    createCanvas(innerWidth - 50, innerHeight - 50);
    angleMode(DEGREES);
}

function draw() {
    background('lightblue');

    // draw the tree
    drawBranch(width / 2, height, 150, 0);

    handleInput();

    // add instructions 
    stroke('white');
    fill('white');
    textSize(20);
    textAlign(CENTER);
    text("Use left and right arrows", width/2, 40);        
}

function drawBranch(x, y, length, angle) {
    if (length > 5) {
        push();
        if(length > 30) {
            stroke('saddlebrown');
        } else {
            stroke('green')
        }
        strokeWeight(length/10);
        translate(x, y);
        rotate(angle);
        line(0, 0, 0, -length)
        drawBranch(0, -length, length * 0.75, fanAngle);
        drawBranch(0, -length, length * 0.75, -fanAngle);        
        pop();
    }
}

function handleInput(){
    if(keyIsDown(RIGHT_ARROW)){
        fanAngle+=0.1;
    }
    if(keyIsDown(LEFT_ARROW)){
        fanAngle-=0.1;
    }        
}