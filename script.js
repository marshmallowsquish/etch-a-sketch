/* DECLARE VARIABLES - selectors, working values */

//selectors:
const gridContainer = document.getElementById("grid-container");
const squares = document.getElementsByClassName("square")
const newGridButton = document.getElementById("new-grid-button")
const resetButton = document.getElementById("reset-button");
const colorButtons = document.getElementsByClassName("color-button");

//working values:
let currentColor = "black";
let gridSize = 16;
let mousedown = 0;

/* DECLARE FUNCTIONS */
function getNewSize() {
  gridSize = prompt("Enter a number between 4 and 100.", "");
  gridSize = parseInt(gridSize);
  if (!(gridSize >= 1 && gridSize <=100)) getNewSize();
}

function createGrid() {
  GRID.createGridSquares();
  GRID.createMousedownEvent();
  GRID.createMouseoutEvent();
}

/* DECLARE EVENT HANDLERS */
newGridButton.addEventListener("click", function() {
  getNewSize();
  createGrid();
})

resetButton.addEventListener("click", function() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "transparent";
  }
})

window.addEventListener("mousedown", () => mousedown++)
window.addEventListener("mouseup", () => mousedown--)

/* DECLARE NAMESPACES */
const INIT = {
  styleColorButtons: function() {
    for (let i = 0; i < colorButtons.length; i++) {
      const bgColor = colorButtons[i].getAttribute("id");
      colorButtons[i].style.backgroundColor = bgColor;
    }
  },
  createColorChangeEvent: function() {
    for (let i = 0; i < colorButtons.length; i++) {
      colorButtons[i].addEventListener("click", function() {
        const chosenColor = colorButtons[i].getAttribute("id");
        currentColor = chosenColor;
      })
    }
  }
}
const GRID = {
  createGridSquares: function() {
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
  createMousedownEvent: function() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("mousedown", function() {
        squares[i].style.backgroundColor = currentColor;
      })
    }
  },
  createMouseoutEvent: function() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("mouseenter", function() {
        if (mousedown) squares[i].style.backgroundColor = currentColor;
      })
    }
  },
}

/* SCRIPT */
INIT.styleColorButtons();
INIT.createColorChangeEvent();
createGrid();