//
//
//   <------------------------------   Select elements in the game  ------------------------------>
//
//

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
//buttons
let xBox = document.getElementById("playerXbox");
let oBox = document.getElementById("playerObox");
let xTxt = document.getElementById("playerXtxt");
let oTxt = document.getElementById("playerOtxt");
let winnerText = document.getElementById("winnerText");

//
//
//   <------------------------------   I added all buttons in one array   ------------------------------>
//
//

const fieldArray = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

//
//
//   <------------------------------   Create const with player data  ------------------------------>
//
//

const playerX = {
  simbol: "X",
};
const playerO = {
  simbol: "O",
};
let currentPlayer = playerX;
// this variabel contanes curent player;

//
//
//   <------------------------------   Handler game functions  ------------------------------>
//
//

function changeTurneForPlayer() {
  if (currentPlayer == playerX) {
    currentPlayer = playerO;
    xBox.style.background = "#D1D5DB";
    xTxt.style.color = "#D1D5DB";

    oBox.style.background = "black";
    oTxt.style.color = "white";
  } else {
    currentPlayer = playerX;
    oBox.style.background = "#D1D5DB";
    oTxt.style.color = "#D1D5DB";

    xBox.style.background = "black";
    xTxt.style.color = "white";
  }
} // this functions change current player;

function marckFieldHandler(btn) {
  btn.addEventListener("click", function () {
    if (
      btn.innerText !== "X" &&
      btn.innerText !== "O" &&
      btn.innerText !== " "
    ) {
      btn.innerText = currentPlayer.simbol;
      changeTurneForPlayer();
      winHandler();
    }
    // ths statment dos not allow to change simbol after added;
  });
}
// this functions change button simbol;

function addHandlerToAllButtons(array) {
  for (let i = 0; array.length; i++) {
    let currentBtn = array[i];
    marckFieldHandler(currentBtn);
  }
  // this function add handler to al buttons present in array
}
addHandlerToAllButtons(fieldArray);
// clling function for buttons;

//
//
//   <------------------------------   Functions that decides the winner  ------------------------------>
//
//

function checkIfLineCompleted(a, b, c) {
  if (
    a.innerText !== currentPlayer.simbol &&
    a.innerText !== "" &&
    b.innerText !== currentPlayer.simbol &&
    b.innerText !== "" &&
    c.innerText !== currentPlayer.simbol &&
    c.innerText !== ""
  ) {
    a.style.backgroundColor = "red";
    b.style.backgroundColor = "red";
    c.style.backgroundColor = "red";
    xBox.style.background = "#D1D5DB";
    xTxt.style.color = "#D1D5DB";
    oBox.style.background = "#D1D5DB";
    oTxt.style.color = "#D1D5DB";
    // display winner message;
    currentPlayer.simbol === "X"
      ? (winnerText.innerText = "The winner is playerO")
      : (winnerText.innerText = "The winner is playerX");

    return true;
  }
} // Check if player is winner and display message;

function winHandler() {
  checkIfLineCompleted(btn1, btn4, btn7);
  checkIfLineCompleted(btn2, btn5, btn8);
  checkIfLineCompleted(btn3, btn6, btn9); // rows;
  checkIfLineCompleted(btn1, btn2, btn3);
  checkIfLineCompleted(btn4, btn5, btn6);
  checkIfLineCompleted(btn7, btn8, btn9); // colums;
  checkIfLineCompleted(btn1, btn5, btn9);
  checkIfLineCompleted(btn7, btn5, btn3); // diagonal;
}
winHandler();
