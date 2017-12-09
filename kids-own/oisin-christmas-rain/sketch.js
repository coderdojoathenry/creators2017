
let snowflakes = [];
let numberOfFlakesToCreate = 1000;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background("black");




    for (let x = 0; x < numberOfFlakesToCreate; x++) {
        snowflakes.push(new Snowflake(random(width), random(height), random(10, 20)));
    }




}


function draw() {

    background("gray")

    // show message
    strokeWeight(5);
    textAlign(CENTER)
    textSize(width/12);
    text("Merry Irish Christmas!!!", width/2,height/2);
    

    // draw tree
    drawTree();

    // draw irish snow
    for (let x = 0; x < snowflakes.length; x++) {
        snowflakes[x].move();
        snowflakes[x].show();
    }

    // draw the ground
    fill(0, 70, 10);
    rect(0, height - 80, width, height)
}


function drawTree(){
    let xc = width/3;
    let h1 = height/10;
    let h2 = height/10;
    let h3 = height/10;
    let w1 = h1/2;
    let w2 = h2;
    let w3 = h3 * 1.5;
    let w4 = h3 * 2;
    let th = height/2;
    fill(0,50,0);
    stroke(0,50,0);
    
    // top triangle
    let t1Bot = height - th + h1;
    triangle(xc,height - th,xc-w1/2, t1Bot,xc + w1/2,t1Bot)

    // first middle triangle
    let t2Top = t1Bot - 20;
    let t2Bot = t2Top + h2;
    triangle(xc,t2Top,xc-w2/2,t2Bot,xc + w2/2,t2Bot)

    // second middle triangle triangle
    let t3Top = t2Bot - 30;
    let t3Bot = t3Top + h2;
    triangle(xc,t3Top,xc-w3/2,t3Bot,xc + w3/2,t3Bot)

    // bottom triangle
    let t4Top = t3Bot - 30;
    let t4Bot = t4Top + h2;
    triangle(xc,t4Top,xc-w4/2,t4Bot,xc + w4/2,t4Bot)

    fill(139,69,19);
    noStroke();
    // trunk

    rect(xc - w1/3,t4Bot,w1*2/3,height - 80);
}

