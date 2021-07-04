let playerWon = false;
let currentPlayer = 0;

const fields = document.querySelectorAll('.table > .field');
const resetButton = document.querySelector(".reset-btn");
const fieldSelector = document.querySelectorAll('.field');

resetButton.addEventListener("click", resetGame);
function resetGame() {
  playerWon = false
  currentPlayer = 0
  for(let a = 0; a<fieldSelector.length; a++) {
    fieldSelector[a].innerHTML = ("");
  }
}

class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

const players = [ ];
const playerOne = new Player("Delano", "X")
const playerTwo = new Player("Max", "O")
players.push(playerOne, playerTwo);

for(let i = 0; i<fieldSelector.length; i++) {
  fieldSelector[i].addEventListener('click', function() {
    if (playerWon === false) {
      addSymbolToField(fieldSelector[i]);
      checkWinner();
    }
  });
}

function addSymbolToField(field) {
  const fieldContent = field.textContent;
  if (fieldContent === 'X' || fieldContent === 'O') {
    alert('niet dit veld gebruiken');
    return;
  }

  if(currentPlayer == 0) {
    field.innerHTML = playerOne.symbol;
    currentPlayer++;
  }
  else if(currentPlayer == 1) {
    field.innerHTML = playerTwo.symbol;
    currentPlayer --;
  }
}

function checkWinner() {
  let winner = false;
 
  if (fields[0].textContent+fields[1].textContent+fields[2].textContent === "XXX" ||
      fields[0].textContent+fields[1].textContent+fields[2].textContent === "OOO") {
    winner = true;
  } else if (fields[3].textContent+fields[4].textContent+fields[5].textContent === "XXX" ||
            fields[3].textContent+fields[4].textContent+fields[5].textContent === "OOO") {
    winner = true;
  } else if (fields[6].textContent+fields[7].textContent+fields[8].textContent === "XXX" ||
             fields[6].textContent+fields[7].textContent+fields[8].textContent === "OOO") {
    winner = true;				
  } else if (fields[0].textContent+fields[3].textContent+fields[6].textContent === "XXX" ||
             fields[0].textContent+fields[3].textContent+fields[6].textContent === "OOO") {
    winner = true;
  } else if (fields[1].textContent+fields[4].textContent+fields[7].textContent === "XXX" ||
             fields[1].textContent+fields[4].textContent+fields[7].textContent === "OOO") {
    winner = true;
  } else if (fields[2].textContent+fields[5].textContent+fields[8].textContent === "XXX" ||
             fields[2].textContent+fields[5].textContent+fields[8].textContent === "OOO") {
    winner = true;
  } else if (fields[0].textContent+fields[4].textContent+fields[8].textContent === "XXX" ||
             fields[0].textContent+fields[4].textContent+fields[8].textContent === "OOO") {
    winner = true;
  }else if (fields[2].textContent+fields[4].textContent+fields[6].textContent === "XXX" ||
            fields[2].textContent+fields[4].textContent+fields[6].textContent === "OOO") {
    winner = true;
  }

  if (!winner) {
    let filledfields = 0;
    for (let i = 0; i < fields.length; i++) {
	  if (fields[i].textContent === "X" || fields[i].textContent === "O") {
	    filledfields++;
  	  }
    }

    if (filledfields === 9) {
	  alert('Draw');
      return;
    }
  } else {
    alert('Winner');
    playerWon = true;
    return;
  }
}