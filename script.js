
const gridSizePx = 800; 
const grid = document.querySelector("#grid");
const resize = document.querySelector("#resize");
const reset = document.querySelector("#reset");
let gridSize = 16;

drawGrid(gridSize);

resize.addEventListener("click", () => {
    gridSize = prompt("Enter a grid size between 1 and 100");
    if(gridSize > 100){gridSize = 100;}
    if(gridSize < 1){gridSize = 1;}
    drawGrid(gridSize);
});
reset.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    for(let square of squares){
        square.style.backgroundColor = "white";
    }
})

function drawGrid(gridSize) {

    // Remove existing squares
    let oldSquares = document.querySelectorAll(".square");
    for(let oldSquare of oldSquares){
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