function setup(){
    createCanvas(innerWidth, innerHeight); 
}

function draw(){
    background('lightblue');
    if(dist(mouseX, mouseY, width/2, height/2) > 50){
        fill('red')
    } else {
        fill('green');
    }
    ellipse(width/2, height/2, 100, 100);
}
