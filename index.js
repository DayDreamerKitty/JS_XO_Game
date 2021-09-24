// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills
  document.getElementById(index).innerHTML = text;
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// Delete this code once you are done testing

/**
 *
 * THE MAIN FUNUCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let board = ["", "", "", "", "", "", "", "", ""];
let win = Boolean(false);
let turn = 0;
let sign;
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  if (board[index - 1] === "") {
    turn++;
    sign = checkPlayer();
    fillButton(index, sign);
    board[index - 1] = sign;
    checkWinner();
  }
}

// in this function you should check if the player is X or O
function checkPlayer() {
  if (turn % 2 === 0) {
    return "O";
  } else {
    return "X";
  }
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner

// function restart game

// premade a function. You can use this function to present an alert to say somene wins
const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

function checkWinner() {
  // if (
  //   board[winningCombinations[0][0] - 1] === "X" &&
  //   board[winningCombinations[0][1] - 1] === "X" &&
  //   board[winningCombinations[0][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[0][0] - 1] === "O" &&
  //   board[winningCombinations[0][1] - 1] === "O" &&
  //   board[winningCombinations[0][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[1][0] - 1] === "X" &&
  //   board[winningCombinations[1][1] - 1] === "X" &&
  //   board[winningCombinations[1][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[1][0] - 1] === "O" &&
  //   board[winningCombinations[1][1] - 1] === "O" &&
  //   board[winningCombinations[1][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[2][0] - 1] === "X" &&
  //   board[winningCombinations[2][1] - 1] === "X" &&
  //   board[winningCombinations[2][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[2][0] - 1] === "O" &&
  //   board[winningCombinations[2][1] - 1] === "O" &&
  //   board[winningCombinations[2][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[3][0] - 1] === "X" &&
  //   board[winningCombinations[3][1] - 1] === "X" &&
  //   board[winningCombinations[3][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[3][0] - 1] === "O" &&
  //   board[winningCombinations[3][1] - 1] === "O" &&
  //   board[winningCombinations[3][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[4][0] - 1] === "X" &&
  //   board[winningCombinations[4][1] - 1] === "X" &&
  //   board[winningCombinations[4][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[4][0] - 1] === "O" &&
  //   board[winningCombinations[4][1] - 1] === "O" &&
  //   board[winningCombinations[4][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[5][0] - 1] === "X" &&
  //   board[winningCombinations[5][1] - 1] === "X" &&
  //   board[winningCombinations[5][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[5][0] - 1] === "O" &&
  //   board[winningCombinations[5][1] - 1] === "O" &&
  //   board[winningCombinations[5][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[6][0] - 1] === "X" &&
  //   board[winningCombinations[6][1] - 1] === "X" &&
  //   board[winningCombinations[6][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[6][0] - 1] === "O" &&
  //   board[winningCombinations[6][1] - 1] === "O" &&
  //   board[winningCombinations[6][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[7][0] - 1] === "X" &&
  //   board[winningCombinations[7][1] - 1] === "X" &&
  //   board[winningCombinations[7][2] - 1] === "X"
  // ) {
  //   win = true;
  // } else if (
  //   board[winningCombinations[7][0] - 1] === "O" &&
  //   board[winningCombinations[7][1] - 1] === "O" &&
  //   board[winningCombinations[7][2] - 1] === "O"
  // ) {
  //   win = true;
  // } else {
  // }

  for (let i = 0; i < 8; i++) {
    if (
      board[winningCombinations[i][0] - 1] === "X" &&
      board[winningCombinations[i][1] - 1] === "X" &&
      board[winningCombinations[i][2] - 1] === "X"
    ) {
      win = true;
    } else if (
      board[winningCombinations[i][0] - 1] === "O" &&
      board[winningCombinations[i][1] - 1] === "O" &&
      board[winningCombinations[i][2] - 1] === "O"
    ) {
      win = true;
    } else {
    }
  }
  if (win) {
    if (sign === "O") {
      winningAlert("Player1");
    } else {
      winningAlert("Player2");
    }
  }
  if (
    board[0] !== "" &&
    board[1] !== "" &&
    board[2] !== "" &&
    board[3] !== "" &&
    board[4] !== "" &&
    board[5] !== "" &&
    board[6] !== "" &&
    board[7] !== "" &&
    board[8] !== "" &&
    !win
  ) {
    tieAlert();
  }
}
function tieAlert() {
  alert(`It's a tie!`);
  restartGame();
}

function winningAlert(winner) {
  alert(`Horraaay, ${winner} wins!`);
  restartGame();
}
function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = 0;
  win = Boolean(false);
  for (let i = 1; i < 10; i++) {
    fillButton(i, "");
  }
}
