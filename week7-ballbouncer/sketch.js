let canvasSize = [800, 600];
let ball0;

function setup() {
    createCanvas(canvasSize[0], canvasSize[1]);

    ball0 = new ball(width / 2, height / 2, 30, 'green', 5, 5);

}

function draw() {
    background(0);

    ball0.draw();
    ball0.move();
}

class ball {
    constructor(x, y, radius, colour, speedx, speedy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.speedx = speedx;
        this.speedy = speedy;
    }

    draw() {
        fill(this.colour);
        ellipse(this.x, this.y, this.radius);
    }

    move() {
        if (this.x < 0 || this.x > canvasSize[0]) {
            this.speedx = this.speedx * -1;
        }

        if (this.y < 0 || this.y > canvasSize[1]) {
            this.speedy = this.speedy * -1;
        }

        this.x = this.x + this.speedx;
        this.y = this.y + this.speedy;
    }
}