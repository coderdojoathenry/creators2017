let bugs=[];

function setup(){
    createCanvas(innerWidth, innerHeight);
    background(50);
}

function draw(){
    // background(100);     
    for(let x=0; x<bugs.length; x++){
        bugs[x].move();
        bugs[x].show();
    }      
}

function mouseClicked(){
    bugs.push(new Crawler(mouseX, mouseY, 20, 20));
}
