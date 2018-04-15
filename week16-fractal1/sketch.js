function setup(){
    createCanvas(innerWidth-50, innerHeight-50);
    noLoop();
}

function draw(){
    background('lightblue');
    drawShape(width/2, height/2, 255);    
}

function drawShape(x, y, size){
    if(size > 5){
        stroke(random(255), random(255), random(255));
        fill(size, 50);
        ellipse(x, y, size, size);
        drawShape(x+size/2, y, size/2);
        drawShape(x-size/2, y, size/2);        
        drawShape(x, y+size/2, size/2);        
        //drawShape(x, y-size/2, size/2);         
    }
}
