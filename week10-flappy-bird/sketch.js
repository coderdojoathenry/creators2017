let groundHeight = 20;
let bird;
let GRAVITY=0.4;
let gameStarted = false;
let gameOver = false;
let pipe1;
let pipe2;
let PIPE_GAP_SIZE=150;
let BIRD_SPEED=2;
let score=0;

function setup(){
    createCanvas(800, 600);
    bird = new Bird(width/4, height/2, 20);
    let gapTopY = random(100, height-PIPE_GAP_SIZE);
    pipe1 = new Pipe(width, 50, gapTopY, gapTopY + PIPE_GAP_SIZE);
    pipe2 = new Pipe(width * 1.5, 50, gapTopY, gapTopY + PIPE_GAP_SIZE);
}

function draw(){
    drawBackground(); 
    
    // Move stuff only if the game is running
    if(gameStarted==true && gameOver==false){
       bird.move();   
       pipe1.move();
       pipe2.move();     
    }
 
    // show the bird
    bird.show();

    // Show pipes
    pipe1.checkScore(bird);
    pipe1.checkDeath(bird);
    pipe1.show();
    pipe2.checkScore(bird);
    pipe2.checkDeath(bird);
    pipe2.show();    

    // show score
    textAlign(CENTER);
    textSize(50);
    stroke(0);
    fill(255, 100);
    text(score, width/2, height/2);

    // show the messages
    if(gameStarted == false){
        text("Click Space to Start", width/2, height/4);        
    }

    if(gameOver == true){
        text("Game Over", width/2, height/4);        
    }    
}

function keyPressed(){
    if(key==' '){
        gameStarted=true;
        bird.flap();
    }
}

function mouseClicked(){
    gameStarted=true;
    bird.flap();
}

function drawBackground(){
    // draw sky and ground
    background('deepskyblue');
    fill('green');
    rect(0, height-groundHeight, width, groundHeight);
}


