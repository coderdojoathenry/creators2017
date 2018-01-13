let groundHeight = 100;
let bird;
let GRAVITY=0.4;
let gameStarted=false;

function setup(){
    createCanvas(800, 600);
    bird = new Bird(width/4, height/2, 20);
}

function draw(){
    drawBackground(); 
    bird.move();   
    bird.show();
}

function keyPressed(){
    if(key==' '){
        gameStarted=true;
        bird.flap();
    }
}

function drawBackground(){
    // draw sky and ground
    background('deepskyblue');
    fill('green');
    rect(0, height-groundHeight, width, groundHeight);
}


