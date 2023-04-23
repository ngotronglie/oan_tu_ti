const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBtns");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "bua";
      break;
    case 2:
      computer = "keo";
      break;
    case 3:
      computer = "giay";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "Hoa roi =))";
  } else if (computer == "bua") {
    return player == "giay"
      ? "Ban da thang! xin chuc mung"
      : "Ban thua! hay thu lai";
  } else if (computer == "giay") {
    return player == "keo"
      ? "Ban da thang! xin chuc mung"
      : "Ban thua! hay thu lai";
  } else if (computer == "keo") {
    return player == "bua"
      ? "Ban da thang! xin chuc mung"
      : "Ban thua! hay thu lai";
  }
}
