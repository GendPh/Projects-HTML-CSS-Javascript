let originalValue = 0;
$("body").ready(function () {
  $("#Text").text(originalValue);
})

let displayNumber = [];
let displayJoin;
let displayFloat;

function getNumber(number) {
  showDisplayNumber(number);
}

let startNumber = false;
let firstNumber = true;
let afterFirstNumber = false;

function showDisplayNumber(number) {
  if (firstNumber === true) {
    startNumber = true;
    displayNumber.push(number);
    displayJoin = displayNumber.join('');
    displayFloat = parseFloat(displayJoin);
    $("#Text").text(displayFloat);
  } else {
    addCommaStart = false;
    afterFirstNumber = true;
    equalOperation = true;
    displayNumber.push(number);
    displayJoin = displayNumber.join('');
    displayFloat = parseFloat(displayJoin);
    $("#Text").text(displayFloat);
  }

}

let addCommaStart = false;

function addComma(comma) {
  if (addCommaStart === false && startNumber === true) {
    showDisplayNumber(comma);
    $("#Text").text(displayFloat + ".");
    addCommaStart = true;
  }
}


function calculationOperation(plus, minus, multiply, divide) {
  if (plus === true) {
    detectOperation(true, false, false, false);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(true, false, false, false);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays + "+");
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays + "+");
    }
    firstNumber = false;
  } else if (minus === true) {
    detectOperation(false, true, false, false);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(false, true, false, false);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays + "-");
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays + "-");
    }
    firstNumber = false;
  } else if (multiply === true) {
    detectOperation(false, false, true, false);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(false, false, true, false);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays + "*");
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays + "*");
    }
    firstNumber = false;
  } else if (divide === true) {
    detectOperation(false, false, false, true);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(false, false, false, true);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays + "/");
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays + "/");
    }
    firstNumber = false;
  }
}
let calculationArrays = [];
function calculationOperationStart(plus, minus, multiply, divide) {
  if (afterFirstNumber === true) {
    if (plus === true) {
      sumArray(calculationArrays);
      $("#signal").text(calculationArrays + "+");
      afterFirstNumber = false;
    } else if (minus === true) {
      minusArray(calculationArrays);
      $("#signal").text(calculationArrays + "-");
      afterFirstNumber = false;
    } else if (multiply === true) {
      multiplyArray(calculationArrays);
      $("#signal").text(calculationArrays + "*");
      afterFirstNumber = false;
    } else if (divide === true) {
      divideArray(calculationArrays);
      $("#signal").text(calculationArrays + "/");
      afterFirstNumber = false;
    }
  }
}

let plusOperation = false;
let minusOperation = false;
let multiplyOperation = false;
let divideOperation = false;
let equalOperation = false;

function detectOperation(plus, minus, multiply, divide) {
  plusOperation = plus;
  minusOperation = minus;
  multiplyOperation = multiply;
  divideOperation = divide;
}
function equal() {
  if (plusOperation === true && equalOperation === true) {
    detectOperation(true, false, false, false);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(true, false, false, false);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays);
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays);
    }
    firstNumber = false;
    equalOperation = false;
  } else if (minusOperation === true && equalOperation === true) {
    detectOperation(false, true, false, false);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(false, true, false, false);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays);
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays);
    }
    firstNumber = false;
    equalOperation = false;
  } else if (multiplyOperation === true && equalOperation === true) {
    detectOperation(false, false, true, false);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(false, false, true, false);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays);
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays);
    }
    firstNumber = false;
    equalOperation = false;
  } else if (divideOperation === true && equalOperation === true) {
    detectOperation(false, false, false, true);
    $("#Text").text(" ");
    calculationArrays.push(displayFloat);
    displayNumber = [];
    calculationOperationStart(false, false, false, true);
    if (calculationArrays.length === 1) {
      $("#signal").text(calculationArrays);
    } else {
      let removedArray = calculationArrays.pop();
      $("#signal").text(calculationArrays);
    }
    firstNumber = false;
    equalOperation = false;
  }
}
function sumArray(array) {
  const plus = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  array.splice(0);
  array.push(plus);
  return plus;
}
function minusArray(array) {
  const minus = array.reduce(
    (accumulator, currentValue) => accumulator - currentValue
  );
  array.splice(0);
  array.push(minus);
  return minus;
}
function multiplyArray(array) {
  const multiply = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  );
  array.splice(0);
  array.push(multiply);
  return multiply;
}
function divideArray(array) {
  const divide = array.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );
  array.splice(0);
  array.push(divide);
  return divide;
}
function percentage() {
  let percentageVal;
  if (startNumber === true && firstNumber === true) {
    percentageVal = displayFloat / 100;
    displayNumber = [];
    calculationArrays.push(percentageVal);
    $("#Text").text(" ");
    $("#signal").text(percentageVal);
  } else if (startNumber === true && equalOperation === false) {
    percentageVal = calculationArrays / 100;
    displayNumber = [];
    calculationArrays = [];
    calculationArrays.push(percentageVal);
    $("#Text").text(" ");
    $("#signal").text(calculationArrays);
  }
}

function changePositiveToNegative() {
  let poNeNumber;
  if (startNumber === true && firstNumber === true) {
    poNeNumber = displayFloat;
    if (poNeNumber > 0) {
      poNeNumber = -Math.abs(displayFloat);
      displayFloat = poNeNumber;
      $("#Text").text(" ");
      $("#signal").text(poNeNumber);
    } else {
      poNeNumber = Math.abs(displayFloat);
      displayFloat = poNeNumber;
      $("#Text").text(" ");
      $("#signal").text(poNeNumber);
    }
  } else if (startNumber === true && equalOperation === false) {
    poNeNumber = calculationArrays;
    if (poNeNumber > 0) {
      poNeNumber = -Math.abs(calculationArrays);
      displayNumber = [];
      calculationArrays = [];
      calculationArrays.push(poNeNumber);
      $("#Text").text(" ");
      $("#signal").text(calculationArrays);
    } else {
      poNeNumber = Math.abs(calculationArrays);
      displayNumber = [];
      calculationArrays = [];
      calculationArrays.push(poNeNumber);
      $("#Text").text(" ");
      $("#signal").text(calculationArrays);
    }
  }
}

function clearCalculator() {
  $("#Text").text(originalValue);
  $("#signal").text(" ");
  displayNumber = [];
  calculationArrays = [];
  startNumber = false;
  firstNumber = true;
  afterFirstNumber = false;
  addCommaStart = false;
  plusOperation = false;
  minusOperation = false;
  multiplyOperation = false;
  divideOperation = false;
  equalOperation = false;
}



function calculation(r) {
  if (startNumber === true) {
    switch (r) {
      case 1:
        calculationOperation(true, false, false, false);
        break;
      case 2:
        calculationOperation(false, true, false, false);
        break;
      case 3:
        calculationOperation(false, false, true, false);
        break;
      case 4:
        calculationOperation(false, false, false, true);
        break;
      case 5:
        addCommaStart = true;
        equal()
        break;
      case 6:
        percentage();
        break;
      case 7:
        clearCalculator();
        break;
      case 8:
        changePositiveToNegative();
        break;
    }
  }
}
