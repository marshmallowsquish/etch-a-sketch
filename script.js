/* DECLARE VARIABLES - selectors*/

//selectors:
const gridContainer = document.getElementById("grid-container");
const squares = document.getElementsByClassName("square")
const newGridButton = document.getElementById("new-grid-button")
const resetButton = document.getElementById("reset-button");
let gridSize = 16;

/* DECLARE FUNCTIONS */
function getNewSize() {
  gridSize = prompt("Enter a number between 4 and 100.", "");
  gridSize = parseInt(gridSize);
  if (!(gridSize >= 4 && gridSize <=100)) getNewSize();
}

/* DECLARE EVENT HANDLERS */
newGridButton.addEventListener("click", function() {
  getNewSize();
  INIT.createGrid();
  INIT.createMouseoutEvent();
})

/* DECLARE NAMESPACES */
const INIT = {
  createGrid: function() {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    
    for (let i = 1; i <= gridSize**2; i++) {
      const square = document.createElement("div");
      const side = (1 / gridSize) * 100;
      square.style.minHeight = `${side}%`;
      square.style.minWidth = `${side}%`;
      square.classList.add("square");
      gridContainer.appendChild(square);
    }
  },
  createMouseoutEvent: function() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("mouseout", function() {
        squares[i].style.backgroundColor = "black";
      })
    }
  }
}

/* SCRIPT */
INIT.createGrid();
INIT.createMouseoutEvent();