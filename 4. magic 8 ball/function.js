let answers = [
  // affirmative answers
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  //five negative answers
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
  //five non-committal answers
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again."
];

let getAnswer = document.getElementById("getAnswer");
let reset = document.getElementById("reset");

document.querySelector("input").addEventListener("keyup", function () {
  let question = this.value;
  if (question.length > 2) {
    getAnswer.style.opacity = "1";
    getAnswer.style.pointerEvents = "initial";
  }
})


getAnswer.addEventListener("click", function () {
  let getRandomNumber = Math.floor(Math.random() * 20);
  document.getElementById("showAnswer").textContent = answers[getRandomNumber];
  document.getElementById("answer").style.opacity = "1";
  if (getRandomNumber < 14) {
    this.style.pointerEvents = "none";
    this.style.opacity = "0.8";
  }
  reset.style.opacity = "1";
  reset.style.pointerEvents = "initial";
})

reset.addEventListener("click", function () {
  window.location.reload();
})