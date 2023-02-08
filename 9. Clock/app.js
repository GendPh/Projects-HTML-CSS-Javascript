relogio();



function relogio() {
  let atual = new Date();
  /* let hora = atual.getHours(); */
  var hora = atual.getHours(); // gives the value in 24 hours format
  let amHour = (hora % 12) || 12;
  let minuto = atual.getMinutes();
  let segundo = atual.getSeconds();
  let imprimirHora = hora + " : " + minuto + " : " + segundo;

  let degHour = hora * 30;
  let minDeg = minuto * 6;
  let secondsDeg = segundo * 6;

  document.getElementById("relogioAuto").innerHTML = imprimirHora;

  document.getElementById("hours").style.transform = "translate(50%, -50%) rotate(" + degHour + "deg)";
  document.getElementById("minutes").style.transform = "translate(50%, -50%) rotate(" + minDeg + "deg)";
  document.getElementById("seconds").style.transform = "translate(50%, -50%) rotate(" + secondsDeg + "deg)";
}



var loopRelogio = setInterval(relogio, 1000);

function mouseOver() {
  document.getElementById("relogioAuto").style.color = "red";
  document.getElementById("relogioAuto").style.fontSize = "56px";
}

function mouseOut() {
  document.getElementById("relogioAuto").style.color = "black";
  document.getElementById("relogioAuto").style.fontSize = "24px";
}