let leftEye; 
let rightEye;

let monaimg;

function preload(){
    // Load the Mona Lisa
    monaimg = loadImage("./mona.jpg");
}


function setup(){
    createCanvas(800, 600);
    
    // Two eyes
    leftEye = new Eye(290, 230, 2, 0.15);
    rightEye = new Eye(390, 230, 2, 0.15);

    // Draw the background
    image(monaimg, 0, 0);
}

function draw(){
    leftEye.draw();
    rightEye.draw();
}

function Eye(centerX, centerY, speed, scale)
{
  this.eyeCenterX = centerX;
  this.eyeCenterY = centerY;
  this.pupilCenterX = centerX;
  this.pupilCenterY = centerY;
  this.eyeSpeed = speed;
  this.scale = scale;
}

Eye.prototype.draw = function(){
    // Draw the eye    
    strokeWeight(5 * this.scale);
    stroke('black');
    fill('white');
    ellipse(this.eyeCenterX, this.eyeCenterY, 300 * this.scale, 300 * this.scale);
    
    // Draw the pupil
    fill('blue');
    ellipse(this.pupilCenterX, this.pupilCenterY, 100 * this.scale, 100 * this.scale);
    fill('black');
    ellipse(this.pupilCenterX, this.pupilCenterY, 50 * this.scale, 50 * this.scale);    

    // draw the "reflection" on the pupil
    strokeWeight(8 * this.scale);
    stroke('white');
    point(this.pupilCenterX + 20 * this.scale, this.pupilCenterY + 20 * this.scale); 
    
    // Work out the distances from the pupil to the mouse
    let mouseToPupilX = mouseX - this.pupilCenterX;
    let mouseToPupilY = mouseY - this.pupilCenterY;

    // Work out a suggested location for the pupil that moves
    // towards the mouse (start at the current position)
    let newPupilX = this.pupilCenterX;
    let newPupilY = this.pupilCenterY;

    // Check if the mouse is right or left of the eye
    if (mouseToPupilX > 0)
    {
        // Move right
        newPupilX = this.pupilCenterX + this.eyeSpeed;
    }
    else if (mouseToPupilX < 0)
    {
        // Move left
        newPupilX = this.pupilCenterX - this.eyeSpeed;
    }
    
    // Check if the mouse is below or above of the eye
    if (mouseToPupilY > 0)
    {
        // Move down
        newPupilY = this.pupilCenterY + this.eyeSpeed;
    }
    else if (mouseToPupilY < 0)
    {
        // Move up
        newPupilY = this.pupilCenterY - this.eyeSpeed;
    }
    
    // Before we use this new pupil position, check  it's not too far
    // from the centre of the eye (should stay in the white)
    if(dist(newPupilX, newPupilY, this.eyeCenterX, this.eyeCenterY) < 80 * this.scale) {
        this.pupilCenterX = newPupilX;
        this.pupilCenterY = newPupilY;
    }
}

