let squareSize = 20;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background('green');
    frameRate(5);
}

function drawSquares() {
    let x = 0;
    let y = 0;

    let keepDrawing = true;

    while (keepDrawing) {
        
        fill(getColour());
        rect(x + 1, y + 1, squareSize - 2, squareSize - 2);
        x += squareSize;

        if (x > windowWidth) {
            x = 0;
            y += squareSize;
        }

        if (y > windowHeight) {
            keepDrawing = false;
        }
    }
}

function drawSquares2() {
    let numCols = windowWidth / squareSize;
    let numRows = windowHeight / squareSize;
     
    for( let col = 0; col < numCols; col++)
    {
        for( let row = 0; row < numRows; row++)
        {
            let x = col * squareSize;
            let y = row * squareSize;

            fill(getColour());
            rect(x + 1, y + 1, squareSize - 2, squareSize - 2);
        }
    }
}

function getColour() {
    let chooser = random();
    let choice = color('black');

    if (chooser < 0.1)
        choice = color('green');
    else if (chooser < 0.2)
        choice = color('darkgreen');
    else if (chooser < 0.3)
        choice = color('forestgreen');

    return choice;
}

function draw() {
  drawSquares2();

}
