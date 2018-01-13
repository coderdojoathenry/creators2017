function setup(){
  createCanvas(800, 600); 
}

function draw(){
    fill('blue');

    //rect(800/2, 600/2,50, 50);
    
    //push();
    fill('red');

    translate(10,0);
    rotate(45);
    rect(800/2, 600/2,80, 40);
    //pop();

    //push();
    fill('yellow');
    translate(10,0);
    rotate(-45);

    rect(800/2, 600/2,40, 80);
    //pop();
}
