let displayNumber = 0;
let total = 0;
let operator;
let initNumber = false;
let endCalculate = false;

// TO GET ELEMENTS OF HTML, script must be read after html loaded. I used <script..... defer>
// OR YOU CAN PUT <script> tag at bottom of html
// ELEMENTS
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const resultArea = document.getElementById("result");

// METHODS
/** INIT CALCULATOR */
function clear() {
  displayNumber = 0;
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
    total += Number(displayNumber);
    displayNumber = 0;
    initNumber = false;
  }

  displayNumber = (displayNumber === 0) ? num : displayNumber + num;
  resultArea.value = displayNumber;
}

// equal button clicked
function getResult() {
  if (operator) {
    const type = operator.getAttribute("class").split(" ")[1];
    if (type === "plus") {
      total += Number(displayNumber);
    }
    if (type === "subtract") {
      total -= Number(displayNumber);
    }
    if (type === "multiply") {
      total *= displayNumber;
    }
    if (type === "divide") {
      total /= displayNumber;
    }
    number = 0;
    updateOperator();
    initNumber = true;
    resultArea.value = total;
    endCalculate = true;
  }
}

// operator button clicked
function updateOperator(target) {
  // if clicked button is operator
  if (target) {
    if (operator) {
      operator.removeAttribute("id");
    }
    operator = target;
    target.setAttribute("id", "selected");
    initNumber = true;
    endCalculate = false;

    // clicked button is operator but not for clculator(clear, equal)
  } else {
    operator.removeAttribute("id");
    operator = undefined;
  }
}

// ADD EVENTS
// UPDATE NUMBER EVENT
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", updateNumber);
}

// OPERATOR EVENTS
for (let i = 0; i < operatorButtons.length; i++) {
  const target = operatorButtons[i];
  const type = operatorButtons[i].getAttribute("class").split(" ")[1];

  // switch is a method like IF~ELSE statement
  switch (type) {
    case "clear":
      target.addEventListener("click", clear);
      break;
    case "equal":
      target.addEventListener("click", getResult);
      break;
    default:
      target.addEventListener("click", () => updateOperator(target));
      break;
  }
}