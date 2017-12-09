let canvasSize = [800, 600];
let ball0


function setup() {
    createCanvas(canvasSize[0], canvasSize[1]);
    ball0 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "yellow", 20, 20);
    ball1 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "white", 30,30);
    ball2 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "blue", 5,5);
    ball3 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "red", 10,10);
    ball5 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "brown", 15,15);
    ball4 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "green", 40,40);
    ball6 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "pink", 25,25);
    ball7 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "lime", 12,12);
    ball8 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "orange", 12,12);
    ball9 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "yellow", 30, 25);
    ball10 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "white", 40,35);
    ball11 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "blue", 15,10);
    ball12 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "red", 20,15);
    ball13 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "brown", 25,20);
    ball14 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "green", 50,45);
    ball15 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "pink", 35,30);
    ball16 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "lime", 17,12);
    ball17 = new ball(canvasSize[0] / 2, canvasSize[1] / 2, 100, "orange", 22,17);
}

function draw() {
    background("black")
    ball0.draw(); ball0.move();
    ball1.draw(); ball1.move();
    ball2.draw(); ball2.move();
    ball3.draw(); ball3.move();
    ball4.draw(); ball4.move();
    ball5.draw(); ball5.move();
    ball6.draw(); ball6.move();
    ball7.draw(); ball7.move();
    ball8.draw(); ball8.move();
    ball9.draw(); ball9.move();
    ball10.draw(); ball10.move();
    ball11.draw(); ball11.move();
    ball12.draw(); ball12.move();
    ball13.draw(); ball13.move();
    ball14.draw(); ball14.move();
    ball15.draw(); ball15.move();
    ball16.draw(); ball16.move();
    ball17.draw(); ball17.move();
 }   
    
class ball {
    constructor(x, y, radius, colour,speedX,speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    draw() {
        fill(this.colour);
        ellipse(this.x, this.y, this.radius);
    }
    move() {
        if(this.x<0||this.x>canvasSize[0])
        {
            this.speedX = this.speedX * -1;
        }
        if(this.y<0||this.y>canvasSize[1])
        {
            this.speedY = this.speedY * -1;
        }

        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
    }

}      
    
 
   
    
   
   


