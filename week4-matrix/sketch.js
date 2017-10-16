let squareSize = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('green');
}

function draw() {
    drawSquares();
}

function drawSquares()
{
    fill(pickColour());
    rect(random(width), random(height), squareSize, squareSize);
}

function pickColour() {
  // pick between green, darkgreen and forestgreen
  let choice = random();
  
  if (choice < 0.1)
    return 'green';
  else if (choice < 0.2)
    return 'darkgreen';
  else if (choice < 0.3)
    return 'forestgreen';
  else 
    return 'black';
}