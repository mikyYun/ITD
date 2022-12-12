let number = 0;
let total = 0;
let operator;
let initNumber = false;
let endCalculate = false;

// ELEMENTS
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const resultArea = document.getElementById("result");

// METHODS

/** INIT CALCULATOR */
function clear() {
  number = 0;
  total = 0;
  updateOperator();
  resultArea.value = total;
}

function updateNumber(e) {
  // number in button
  const num = e.target.innerText;
  if (endCalculate) {
    clear();
    endCalculate = false;
  }
  if (initNumber) {
    total += Number(number);
    console.log(total, number, num);
    number = 0;
    initNumber = false;
  }

  number = (number === 0) ? num : number + num;
  resultArea.value = Number(number);
}

// equal button clicked
function getResult() {
  if (operator) {
    if (operator === "+") {
      total += Number(number);
    }
    if (operator === "-") {
      total -= Number(number);
    }
    if (operator === "*") {
      total *= number;
    }
    if (operator === "/") {
      total /= number;
    }
    number = 0;
    updateOperator();
    initNumber = true;
    resultArea.value = total;
    endCalculate = true;
  }
}

// operator button clicked
function updateOperator(type) {
  if (type) {
    initNumber = true;
    endCalculate = false;
    
    if (type === "plus") {
      operator = "+";
    } else if (type === "minus") {
      operator = "-";
    } else if (type === "multiply") {
      operator = "*";
    } else if (type === "divide") {
      operator = "/";
    }
  } else {
    operator = undefined;
  }
}

// EVENTS
// UPDATE NUMBER EVENT
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", updateNumber);
}

// OPERATOR EVENTS
for (let i = 0; i < operatorButtons.length; i++) {
  const target = operatorButtons[i];
  const type = operatorButtons[i].getAttribute("class").split(" ")[1];

  switch (type) {
    case "clear":
      target.addEventListener("click", clear);
      break;
    case "equal":
      target.addEventListener("click", getResult);
      break;
    default:
      target.addEventListener("click", () => updateOperator(type));
      break;
  }
}