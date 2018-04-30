function setup(){
    createCanvas(innerWidth, innerHeight);  
}

function draw(){
    background('lightblue');
    drawFrog(width/2, height/2, 100, 200, 500);
}

function drawFrog(x, y, headHeight, bodyWidth, bodyHeight){
    fill('green');
    rectMode(CENTER);
    rect(x, y, bodyWidth, bodyHeight);
    ellipse(x, y-(bodyHeight/2 + headHeight/2), headHeight, headHeight);
}
