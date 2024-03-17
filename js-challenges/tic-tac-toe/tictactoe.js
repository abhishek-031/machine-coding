const TicTacToe = {
  init(container) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    let turnElement = document.createElement("p");
    turnElement.classList.add("turn");
    turnElement.innerHTML = "Let's play, <strong>X's</strong> turn"
    let matrix = [];
    let elementsMatrix = [];
    for(let i=0;i<3;i++) {
      let row = document.createElement("div");
      row.classList.add("row");
      let matrixRow = [];
      let matrixElementsRow = [];
      for(let j=0;j<3;j++) {
        matrixRow.push("");
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.i = i;
        cell.dataset.j = j;
        matrixElementsRow.push(cell)
        row.appendChild(cell);
      }
      matrix.push(matrixRow);
      elementsMatrix.push(matrixElementsRow);
      grid.appendChild(row);
    }
    grid.addEventListener("click", this.handleTouch.bind(this));
    let resetButton = document.createElement("button");
    resetButton.innerText = "Reset"
    resetButton.classList.add("reset");
    resetButton.addEventListener("click", this.resetGrid.bind(this));

    container.appendChild(turnElement)
    container.appendChild(grid);
    container.appendChild(resetButton);

    this.grid = grid;
    this.container = container;
    this.resetButton = resetButton;
    this.matrix = matrix;
    this.elementsMatrix = elementsMatrix;
    this.currentTurn = "X";
    this.turnElement = turnElement;
    this.turnCount = 0;
  },
  switchTurn() {
    if(this.currentTurn == "X") {
      this.currentTurn = "O";
    } else {
      this.currentTurn = "X";
    }
    this.turnElement.innerHTML = `Let's play, <strong>${this.currentTurn}'s<strong> turn`;
  },
  handleTouch(e) {
    const target = e.target;
    let i = target.dataset.i;
    let j = target.dataset.j;
    if(i && j && !target.dataset.clicked && this.turnCount <=8 ) {
      this.matrix[i][j] = this.currentTurn;
      this.elementsMatrix[i][j].innerText = this.currentTurn;
      this.elementsMatrix[i][j].dataset.clicked = true;
      this.elementsMatrix[i][j].classList.add("clicked");
      if(this.didSomeoneWin()) {
        this.gameOver(this.currentTurn);
        return;
      }
      if(this.turnCount === 8) {
        this.gameOver();
      } else {
        this.switchTurn();
      }
      this.turnCount++;
    }
  },
  resetGrid() {
    for(let i=0;i<3;i++) {
      for(let j=0;j<3;j++) {
        this.matrix[i][j] = "";
        this.elementsMatrix[i][j].innerText = "";
        this.elementsMatrix[i][j].dataset.clicked = "";
        this.elementsMatrix[i][j].classList.remove("clicked");
        this.currentTurn = "O";
        this.grid.classList.remove("game-over");
        this.turnCount = 0;
        this.switchTurn();
      }
    }
  },
  gameOver(whoWon) {
    let text = "";
    if(!whoWon) {
      text = `It's a <strong>tie</strong>, reset to play again`
    } else {
      text = `<b>${whoWon}</b> wins, reset to play again`;
    }
    this.grid.classList.add("game-over");
    this.turnElement.innerHTML = text;
  },
  didSomeoneWin() {
    let currentPlayer = this.currentTurn;
    for(let i=0;i<3;i++) {
      let count1 = 0;
      let count2 = 0;
      for(let j=0;j<3;j++) {
        if(this.matrix[i][j] === currentPlayer) {
          count1++;
          if(count1 === 3) return true;
        }

        if(this.matrix[j][i] === currentPlayer) {
          count2++;
          if(count2 === 3) return true;
        }
      }
    }

    let i=0, j=0, count=0;
    while(i<3 && j<3) {
      if(this.matrix[i++][j++] === currentPlayer) {
        count++;
      }
    }
    if(count === 3) return true;

    i=0, j=2, count=0;
    while(i<3 && j>=0) {
      if(this.matrix[i++][j--] === currentPlayer) {
        count++;
      }
    }
    if(count === 3) return true;
  }
}

function initGame(container) {
  const ticTacToe = Object.create(TicTacToe);
  ticTacToe.init(container);
}

export {
  initGame
}