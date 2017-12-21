const MIN_LENGTH = 5;
let xOff = 0.01;
let xOffNoise;
let heightFactor = 0;

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0);
    angleMode(DEGREES);
}

function draw(){
    background(0);
    xOff+=0.01;
    if(heightFactor < 0.75){    
            heightFactor += 0.001;
        }
    xOffNoise = noise(xOff); 

    drawBranch(width/2, height, 90, 150);          
    drawBranch(width/6, height, 90, 100);       
}

function drawBranch(x, y, angle, length){
    push();

    translate(x, y);
    strokeWeight(length/20);
    let greenShade = map(length, 200, MIN_LENGTH, 255, 0);
    stroke(greenShade, 255, greenShade);
    if(length>MIN_LENGTH){
        let newX = length * cos(angle);
        let newY = -1 * length * sin(angle)
        line(0, 0, newX, newY);
        drawBranch(newX, newY, angle - 45*xOffNoise, length * heightFactor);
        drawBranch(newX, newY, angle + 45*xOffNoise, length * heightFactor);             
    }
    pop();
}
