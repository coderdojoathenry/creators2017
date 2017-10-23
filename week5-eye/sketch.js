let eyeCenterX;
let eyeCenterY;
let pupilCenterX;
let pupilCenterY;
let eyeSpeed = 2;

function setup(){
    createCanvas(800, 600);

    // The eye is in the middle of the screen and the pupil
    // is in the middle of the eye
    eyeCenterX = width/2;
    eyeCenterY = height/2;
    pupilCenterX = eyeCenterX;
    pupilCenterY = eyeCenterY;
}

function draw(){
    background(0);

    // Draw the eye    
    strokeWeight(5);
    stroke('black');
    fill('white');
    ellipse(eyeCenterX, eyeCenterY, 300, 300);
    
    // Draw the pupil
    fill('blue');
    ellipse(pupilCenterX, pupilCenterY, 100, 100);
    fill('black');
    ellipse(pupilCenterX, pupilCenterY, 50, 50);    

    // draw the "reflection" on the pupil
    strokeWeight(8);
    stroke('white');
    point(pupilCenterX + 20, pupilCenterY + 20); 
    
    // Work out the distances from the pupil to the mouse
    let mouseToPupilX = mouseX - pupilCenterX;
    let mouseToPupilY = mouseY - pupilCenterY;

    // Work out a suggested location for the pupil that moves
    // towards the mouse (start at the current position)
    let newPupilX = pupilCenterX;
    let newPupilY = pupilCenterY;

    // Check if the mouse is right or left of the eye
    if (mouseToPupilX > 0)
    {
        // Move right
        newPupilX = pupilCenterX + eyeSpeed;
    }
    else if (mouseToPupilX < 0)
    {
        // Move left
        newPupilX = pupilCenterX - eyeSpeed;
    }
    
    // Check if the mouse is below or above of the eye
    if (mouseToPupilY > 0)
    {
        // Move down
        newPupilY = pupilCenterY + eyeSpeed;
    }
    else if (mouseToPupilY < 0)
    {
        // Move up
        newPupilY = pupilCenterY -eyeSpeed;
    }
    
    // Before we use this new pupil position, check  it's not too far
    // from the centre of the eye (should stay in the white)
    if(dist(newPupilX, newPupilY, eyeCenterX, eyeCenterY) < 80) {
        pupilCenterX = newPupilX;
        pupilCenterY = newPupilY;
    }
}

