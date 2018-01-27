class Spirograph {
    constructor(center, r0, s0, r1, s1, colour) {
        this.center = center;
        this.r0 = r0;
        this.s0 = s0;
        this.r1 = r1;
        this.s1 = s1;
        this.colour = colour;

        this.pos = createVector(0, 0);
        this.last = createVector(0, 0);
        this.first = true;

        this.angle0 = 0;
        this.angle1 = 0;
    }

    draw() {
        this.calculatePos();

        stroke(this.colour);

        if (this.first == false) {
            line(this.pos.x, this.pos.y, this.last.x, this.last.y);
        }
        else {
            this.first = false;
        }

        this.last = this.pos;
    }

    calculatePos(){
        this.pos = this.center.copy();
        this.pos.add(this.r0 * cos(this.angle0), this.r0 * sin(this.angle0));
        this.pos.add(this.r1 * cos(this.angle1), this.r1 * sin(this.angle1));

        this.angle0 += this.s0;
        this.angle1 += this.s1;
    }
}