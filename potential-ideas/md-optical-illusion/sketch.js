let numberOfPoints = 9;
let radius=300;
let rotationAngle=0;
let offSetAngle;

function setup(){
    createCanvas(innerWidth, innerHeight);
    angleMode(DEGREES);
    offSetAngle = 360/numberOfPoints;
}

function draw(){
    if(!keyIsPressed){
       background(255);
    }
    translate(width/2, height/2);
    fill(150);
    stroke(255);
    rotationAngle++;
    for(let i=0; i<numberOfPoints; i++){
        ellipse(radius * sin(rotationAngle - offSetAngle*i) * cos(offSetAngle*i), radius * sin(rotationAngle - offSetAngle*i) * sin(offSetAngle*i), 30, 30);
    }      
}
