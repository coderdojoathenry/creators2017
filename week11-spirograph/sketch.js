let spiros = [];

function setup(){
    createCanvas(800, 600);
    background(0); 

    angleMode(DEGREES);
}

function draw(){
    for (let i = 0; i < spiros.length; i++){
        spiros[i].draw();
    }
}

function mouseClicked() {
    let r0 = random(10, 100);
    let s0 = random(0.1, 5);
    let r1 = random(10, 100);
    let s1 = random(0.1, 5);
    let colour = color(random(255), random(255), random(255));
    spiros.push(new Spirograph(createVector(mouseX, mouseY), r0, s0, r1, s1, colour))
}
