let message;
let messageX=0;
let messageSpeed=2;

function setup(){
    createCanvas(windowWidth, windowHeight);      
    console.log("hey there!");
    message = prompt("What are today's specials?", "Cheese is always great value!");
}

function draw(){
    background(0);
    stroke(255);
    fill(255, 0,0);
    textSize(50);
    text(message, messageX, 100);    
    messageX = messageX + messageSpeed;
    if(messageX > width){
        messageX = -1 * message.length * 25;
    }

}
