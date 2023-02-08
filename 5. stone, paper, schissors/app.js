let start = false;
let playerOption;
let pcFinalOption;
let playerPoints = 0;
let pcPoints = 0;
let optionChosen = document.getElementById("btnChosenPlayer");
let rounds = 0;


function playerChoice(choice, type) {
  let roundsDisplay = document.getElementById("roundsCount");
  if (start === false) {
    start = true;
    rounds++;
    roundsDisplay.textContent = rounds;
    playerOption = type;
    hideControls("true");
    optionChosen.classList.add(choice);
    pChoice();
    checkVictory();
  }
}

let optionPcChosen = document.getElementById("btnChosenPc");
let pcOption = 0;

function pChoice() {
  pcOption = Math.floor(Math.random() * 3) + 1;
  if (pcOption == 1) {
    optionPcChosen.classList.add("btn-stone");

    pcFinalOption = "stone";
  } else if (pcOption == 2) {
    optionPcChosen.classList.add("btn-paper");

    pcFinalOption = "paper";
  } else if (pcOption == 3) {
    optionPcChosen.classList.add("btn-scissors");

    pcFinalOption = "scissors";
  }
}

let phrase = document.getElementById("result");

function checkVictory() {
  let labelPlayerPoints = document.getElementById("playerOnePoints");
  let labelPcPoints = document.getElementById("pcPoints");
  if (playerOption == "stone" && pcFinalOption == "stone" || playerOption == "paper" && pcFinalOption == "paper" || playerOption == "scissors" && pcFinalOption == "scissors") {
    phrase.textContent = "Tied";
  } else if (playerOption == "stone" && pcFinalOption == "paper" || playerOption == "paper" && pcFinalOption == "scissors" || playerOption == "scissors" && pcFinalOption == "stone") {
    phrase.textContent = "Pc Won!";
    pcPoints++;
    labelPcPoints.textContent = pcPoints;
    changeBacGround("red", "white");
  } else if (playerOption == "stone" && pcFinalOption == "scissors" || playerOption == "paper" && pcFinalOption == "stone" || playerOption == "scissors" && pcFinalOption == "paper") {
    phrase.textContent = "Player Won!";
    playerPoints++;
    labelPlayerPoints.textContent = playerPoints;
    changeBacGround("green", "white");
  }
}

function resetBoard(classOne, classTwo, classThree) {
  start = false;
  optionChosen.classList.remove(classOne, classTwo, classThree);
  optionPcChosen.classList.remove(classOne, classTwo, classThree);
  pcOption = 0;
  phrase.textContent = "Choose";
  hideControls("false");
  changeBacGround("antiquewhite", "black");
}

function hideControls(chose) {
  let controls = document.getElementsByClassName("btn");
  let chosen = document.getElementsByClassName("chosen");
  for (let i = 0; i < controls.length; i++) {
    controls[i].setAttribute("aria-expanded", chose);
  }
  for (let i = 0; i < chosen.length; i++) {
    chosen[i].setAttribute("aria-expanded", chose);
  }
}

let displayBacGround = document.getElementById("display");
function changeBacGround(bgColor, tColor) {
  displayBacGround.style.backgroundColor = bgColor;
  displayBacGround.style.color = tColor;
}