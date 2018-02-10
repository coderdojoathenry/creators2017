function setup(){
    createCanvas(innerWidth, innerHeight);
    background(0); 
   //noLoop();  
}

let xSpeed = 0.02;
let xStart = 0;

function draw(){
    background(0);
    xStart = xStart + xSpeed;
    let xOff=xStart;
    fill('blue')
    beginShape();
    vertex(0, height);
    for(let x=0; x<width; x++){
        // Completely random
        // let y = random(height*0.25, height * 0.75);                

        // Gaussian Random - will tend to be in the center
        // let y = randomGaussian(height/2, 20); 

        // Noise Random
        let y = noise(xOff) * height/4 + height/2;
        xOff = xOff + 0.006;  

        stroke('yellow');
        strokeWeight(5);
        vertex(x,y);
    }
    vertex(width, height);    
    endShape(CLOSE);
}
