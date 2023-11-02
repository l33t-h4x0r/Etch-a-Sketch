
const gridSizePx = 800; 

const grid = document.querySelector("#grid");
const input = document.querySelector("button");

input.addEventListener("click", () => {
    console.log("button clicked");
    let gridSize = prompt("Enter a grid size between 1 and 100");
    drawGrid(gridSize);
});

function drawGrid(gridSize) {

    // Remove existing squares
    oldSquares = document.querySelectorAll(".square");
    for(oldSquare of oldSquares){
        grid.removeChild(oldSquare);
    }

    // Calculate size of new squares
    squareSize = gridSizePx/gridSize;

    // Create new squares
    for(let i = 0; i < gridSize**2; i++){
        let square = document.createElement("div");
        square.style.width = square.style.height = `${squareSize}px`;
        square.setAttribute("class", "square");
        
        square.addEventListener("mouseover", () => {
            console.log("mouseover");
            square.style.backgroundColor = "black";
        });

        grid.appendChild(square);
    }
}