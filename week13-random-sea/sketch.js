function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0); 
   //noLoop();  
}

let xSpeed = 0.03;
let xStart = 0;
let yOff = 0;
let ySpeed = 0.007;

function draw(){
    background(0);

    // draw the sea
    xStart = xStart + xSpeed;
    let xOff=xStart;
    yOff = yOff + ySpeed; 
    fill('blue')
    beginShape();
    vertex(0, height);
    for(let x=0; x<width; x++){
        // Noise Random
        let y = noise(xOff, yOff) * height/4 + height/2;
        xOff = xOff + 0.006;  

        stroke('white');
        strokeWeight(5);
        vertex(x,y);
    }
    vertex(width, height);    
    endShape(CLOSE);
    fill(200);

    // put in a ship
    ellipse(width/2, height/3, 50, 10);
    if(keyIsDown(LEFT_ARROW)){
        xSpeed = xSpeed - 0.001;
    }

    if(keyIsDown(RIGHT_ARROW)){
        xSpeed = xSpeed + 0.001;
    }    

    noStroke();
    fill(255);
    textSize(20);
    text("Speed: " + Math.round(xSpeed * 1000),10,30)
}


