let playerOneName = "Player One";
let playerTwoName = "Player Two";
let getPlayerName = false;
let playerOnePoints = 0;
let playerTwoPoints = 0;
const fullNameRule = /^[a-zA-Z]+ [a-zA-Z]+$/;
const oneNameRule = '^[a-zA-Z]{3,16}$';

$("#playerOneData").on("blur", function () {
  if ($(this).val().match(fullNameRule) || $(this).val().match(oneNameRule)) {
    playerOneName = $(this).val();
    getPlayerName = true;
  } else {
    playerOneName = "Player One";
    getPlayerName = false;
  }
})
$("#playerTwoData").on("blur", function () {
  if ($(this).val().match(fullNameRule) || $(this).val().match(oneNameRule)) {
    playerTwoName = $(this).val();
    getPlayerName = true;
  } else {
    playerTwoName = "Player Two";
    getPlayerName = false;
  }
})

$("#btn-StartGame").click(function () {
  $("#playerOneName").text(playerOneName);
  $("#playerTwoName").text(playerTwoName);
  $("#playerOnePoints").text(playerOnePoints);
  $("#playerTwoPoints").text(playerTwoPoints);
  $("#gameStatus").text(playerOneName + " turn");
  const boardDisplay = $("#boardDisplay");
  const visibility = boardDisplay.attr("data-visible");
  if (visibility === "false") {
    boardDisplay.attr("data-visible", "true");
    $("#userData").attr("data-visible", "false");
  } else if (visibility === "true") {
    boardDisplay.attr("data-visible", "false");
    $("#userData").attr("data-visible", "true");
  }
});



let playerMove = 0;
let gameOn = true;
let boxPlayerOneConfirmed = [
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
];
let boxPlayerTwoConfirmed = [
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
  {
    box: false
  },
];



function game(isPlaying) {
  if (playerMove < 9 && gameOn === true) {
    if (playerMove % 2 == 0) {

      playerClick(isPlaying);
      $(isPlaying).removeClass('circle');
      $(isPlaying).addClass('cross');
      $("#gameStatus").text(playerTwoName + " turn");
      checkWinCondition(boxPlayerOneConfirmed, playerOnePoints, $("#playerOnePoints"), playerOneName);
      playerMove++;
    } else {

      playerClick(isPlaying);
      $(isPlaying).removeClass('cross');
      $(isPlaying).addClass('circle');
      $("#gameStatus").text(playerOneName + " turn");
      checkWinCondition(boxPlayerTwoConfirmed, playerTwoPoints, $("#playerTwoPoints"), playerTwoName);
      playerMove++;
    }
  }
  if (playerMove == 9 && gameOn === true) {
    $("#gameStatus").text("Tied, reset the board");
    $("#gameStatusLine").css("background-color", "red");
  }
}

function checkWinCondition(playerWin, playerPoints, pointFor, playerName) {

  if (playerWin[0].box === true && playerWin[1].box === true && playerWin[2].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxOne"), $("#lineBoxTwo"), $("#lineBoxThree"), "line-horizontal");
    changeBorderColor($(".boardGame .box:nth-child(1)"), $(".boardGame .box:nth-child(2)"), $(".boardGame .box:nth-child(3)"), "green");
    gameOn = false;
  } else if (playerWin[3].box === true && playerWin[4].box === true && playerWin[5].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxFour"), $("#lineBoxFive"), $("#lineBoxSix"), "line-horizontal");
    changeBorderColor($(".boardGame .box:nth-child(4)"), $(".boardGame .box:nth-child(5)"), $(".boardGame .box:nth-child(6)"), "green");
    gameOn = false;
  } else if (playerWin[6].box === true && playerWin[7].box === true && playerWin[8].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxSeven"), $("#lineBoxEight"), $("#lineBoxNine"), "line-horizontal");
    changeBorderColor($(".boardGame .box:nth-child(7)"), $(".boardGame .box:nth-child(8)"), $(".boardGame .box:nth-child(9)"), "green");
    gameOn = false;
  } else if (playerWin[0].box === true && playerWin[3].box === true && playerWin[6].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxOne"), $("#lineBoxFour"), $("#lineBoxSeven"), "line-Vertical");
    changeBorderColor($(".boardGame .box:nth-child(1)"), $(".boardGame .box:nth-child(4)"), $(".boardGame .box:nth-child(7)"), "green");
    gameOn = false;
  } else if (playerWin[1].box === true && playerWin[4].box === true && playerWin[7].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxTwo"), $("#lineBoxFive"), $("#lineBoxEight"), "line-Vertical");
    changeBorderColor($(".boardGame .box:nth-child(2)"), $(".boardGame .box:nth-child(5)"), $(".boardGame .box:nth-child(8)"), "green");
    gameOn = false;
  } else if (playerWin[2].box === true && playerWin[5].box === true && playerWin[8].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxThree"), $("#lineBoxSix"), $("#lineBoxNine"), "line-Vertical");
    changeBorderColor($(".boardGame .box:nth-child(3)"), $(".boardGame .box:nth-child(6)"), $(".boardGame .box:nth-child(9)"), "green");
    gameOn = false;
  } else if (playerWin[0].box === true && playerWin[4].box === true && playerWin[8].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxOne"), $("#lineBoxFive"), $("#lineBoxNine"), "line-PerpendicularLR");
    changeBorderColor($(".boardGame .box:nth-child(1)"), $(".boardGame .box:nth-child(5)"), $(".boardGame .box:nth-child(9)"), "green");
    gameOn = false;
  } else if (playerWin[2].box === true && playerWin[4].box === true && playerWin[6].box === true) {
    $("#gameStatus").text(playerName + " won");
    $("#gameStatusLine").css({ "background-color": "green", "color": "white" });
    if (playerPoints == playerOnePoints) {
      playerOnePoints++;
      pointFor.text(playerOnePoints);
    } else if (playerPoints == playerTwoPoints) {
      playerTwoPoints++;
      pointFor.text(playerTwoPoints);
    }
    showWinLine($("#lineBoxThree"), $("#lineBoxFive"), $("#lineBoxSeven"), "line-PerpendicularRL");
    changeBorderColor($(".boardGame .box:nth-child(3)"), $(".boardGame .box:nth-child(5)"), $(".boardGame .box:nth-child(7)"), "green")
    gameOn = false;
  }
}
function changeBorderColor(boxOne, boxTwo, boxThree, color) {
  boxOne.css("border-color", color);
  boxTwo.css("border-color", color);
  boxThree.css("border-color", color);
}
function showWinLine(boxOne, boxTwo, boxThree, lineDirection) {
  boxOne.addClass(lineDirection);
  boxTwo.addClass(lineDirection);
  boxTwo.css("animation-delay", " 0.3s");
  boxThree.addClass(lineDirection);
  boxThree.css("animation-delay", " 0.5s");
}
function playerClick(box) {
  let id = $(box).attr("id");
  if (playerMove % 2 == 0) {
    if (id == "boxOne") {
      boxPlayerOneConfirmed[0].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxTwo") {
      boxPlayerOneConfirmed[1].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxThree") {
      boxPlayerOneConfirmed[2].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxFour") {
      boxPlayerOneConfirmed[3].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxFive") {
      boxPlayerOneConfirmed[4].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxSix") {
      boxPlayerOneConfirmed[5].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxSeven") {
      boxPlayerOneConfirmed[6].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxEight") {
      boxPlayerOneConfirmed[7].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxNine") {
      boxPlayerOneConfirmed[8].box = true;
      $(box).addClass("pointerEvents");
    }
  } else {
    if (id == "boxOne") {
      boxPlayerTwoConfirmed[0].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxTwo") {
      boxPlayerTwoConfirmed[1].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxThree") {
      boxPlayerTwoConfirmed[2].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxFour") {
      boxPlayerTwoConfirmed[3].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxFive") {
      boxPlayerTwoConfirmed[4].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxSix") {
      boxPlayerTwoConfirmed[5].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxSeven") {
      boxPlayerTwoConfirmed[6].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxEight") {
      boxPlayerTwoConfirmed[7].box = true;
      $(box).addClass("pointerEvents");
    } else if (id == "boxNine") {
      boxPlayerTwoConfirmed[8].box = true;
      $(box).addClass("pointerEvents");
    }
  }
}

$("#resetGameBtn").click(function () {
  gameOn = true;
  playerMove = 0;
  $("#gameStatus").text(playerOneName + " turn");
  $("#gameStatusLine").css({ "background-color": "inherit", "color": "inherit" });
  const collection = document.getElementsByClassName("box");
  for (let i = 0; i < collection.length; i++) {
    collection[i].classList.remove("circle");
    collection[i].classList.remove("cross");
    collection[i].classList.remove("pointerEvents");
  }
  for (let i = 0; i < boxPlayerOneConfirmed.length; i++) {
    boxPlayerOneConfirmed[i].box = false;
  }
  for (let i = 0; i < boxPlayerTwoConfirmed.length; i++) {
    boxPlayerTwoConfirmed[i].box = false;
  }
  $("#gameStatusLine").css("background-color", "inherit");
  changeBorderColor($(".boardGame .box"), $(".boardGame .box"), $(".boardGame .box"), "darkblue");

  const boardLines = $(".line");

  for (let i = 0; i < boardLines.length; i++) {
    boardLines[i].classList.remove("line-Vertical");
    boardLines[i].classList.remove("line-horizontal");
    boardLines[i].classList.remove("line-PerpendicularRL");
    boardLines[i].classList.remove("line-PerpendicularLR");
  }
})

$("#resetPointsBtn").click(function () {
  playerOnePoints = 0;
  playerTwoPoints = 0;
  $("#playerOnePoints").text(playerOnePoints);
  $("#playerTwoPoints").text(playerTwoPoints);

})

