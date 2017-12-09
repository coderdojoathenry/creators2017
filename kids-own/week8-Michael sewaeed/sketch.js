let bugs=[];

function setup(){
    createCanvas(innerWidth, innerHeight);
    //background(random(255), random(255), random(255));
    background("darkblue");
}

function draw(){
    //background("darkblue");     
    for(let x=0; x<bugs.length; x++){
        bugs[x].move();
        bugs[x].show();
    }      
}

function mouseClicked(){
    bugs.push(new Crawler(mouseX, height, 3, 10));
}
 