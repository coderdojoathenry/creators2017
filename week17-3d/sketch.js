function setup(){
    createCanvas(innerWidth, innerHeight, WEBGL);  
    angleMode(DEGREES);
}

function draw(){
    camera(0, -200, 700, 0, 0, 0, 0, 1, 0);    
    background(75);
    push();
    noStroke();
    rotateY(frameCount/2);    
    translate(0, 0, 0);

    pointLight(255, 255, 255, 0, 0, 0);
    pointLight(255, 255, 255, 0, 0, 0);
    pointLight(255, 255, 255, 0, 0, 0);        
    pointLight(255, 255, 255, 0, 0, 0);    
    pointLight(255, 255, 255, 0, 0, 0);        
    pointLight(255, 255, 255, 0, 0, 0);       

    // draw sun
    fill('yellow');
    sphere(75);

    // draw earth
    translate(300, 0, 0);
    push();
    rotateY(frameCount * 6);    
    specularMaterial('blue');   
    sphere(30);
    translate(50,0,0);
    specularMaterial('white');   
    sphere(10);    
    pop();    
    pop();

}