let snowFlakes=[];
let message = "Happy Christmas Creators!"

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0);
    for(let i=0; i<300; i++){
        snowFlakes.push(new Snowflake(random(width), random(height), random(10,30)));
    }
}

function draw(){
    background(0);

    // Draw Message
    stroke(255);
    strokeWeight(5);
    fill('red');
    textSize(width/15);
    textAlign(CENTER);
    text(message, width/2, height/2);

    // Draw snowflakes
    for(flake of snowFlakes){
        flake.move();
        flake.show();
    }
}
