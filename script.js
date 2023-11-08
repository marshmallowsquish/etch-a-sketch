/* DECLARE VARIABLES - selectors*/

//selectors:
const gridContainer = document.getElementById("grid-container");
const squares = document.getElementsByClassName("square")

/* DECLARE FUNCTIONS */

/* DECLARE EVENT HANDLERS */

/* DECLARE NAMESPACES */
const INIT = {
  createGrid: function(givenNumber) {
    for (let i = 1; i <= givenNumber**2; i++) {
      const square = document.createElement("div");
      const side = (1 / givenNumber) * 100;
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
INIT.createGrid(16);
INIT.createMouseoutEvent();