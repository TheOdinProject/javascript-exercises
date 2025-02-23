let firstNum = null;
let operator = null;
let newNumFlag = true;
let display = '0';
let output = document.querySelector('.output-box');

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? 'ERROR' : a / b;
    default:
      return b;
  }
}

// Handle number input
function handleNumber(num) {
  if (newNumFlag) {
    display = num;
    newNumFlag = false;
  } else {
    display = display + num;
  }
  if (display.length >= 8) {
    display = display.slice(0, 9);
    return;
  }
  if (display.includes('.')) {
    disableDotButton();
  } else {
    enableDotButton();
  }
  console.log('Display:', display);
}

// Handle operator input
function handleOperator(op) {
  const currentNum = parseFloat(display);
  if (firstNum === null) {
    firstNum = currentNum;
  } else if (operator) {
    const result = operate(operator, firstNum, currentNum);
    if (typeof result === 'string') {
      display = '𝙴𝚛𝚛𝚘𝚛!';
    } else if (typeof result === 'number') {
      display = result % 1 != 0 ? result.toFixed(2) : String(result).slice(0, 9);

      firstNum = result;
      console.log('Result:', result);
    }
  }

  operator = op;
  newNumFlag = true;
  enableDotButton();
}

function handleEquals() {
  if (operator && firstNum !== null) {
    const currentNum = parseFloat(display);
    const result = operate(operator, firstNum, currentNum);
    display = String(result).slice(0, 9);
    firstNum = null;
    operator = null;
    newNumFlag = true;
  }
}

function disableDotButton() {
  const dotButton = document.querySelector('.dot');
  if (dotButton) {
    dotButton.disabled = true;
  }
}

function enableDotButton() {
  const dotButton = document.querySelector('.dot');
  if (dotButton) {
    dotButton.disabled = false;
  }
}

const btn = document.querySelectorAll('button');

btn.forEach((node) => {
  let pattern = /[0-9.]/g;
  let operatorPattern = /[+\-*/%]/;

  node.addEventListener('click', function (e) {
    // Check the user input button
    const button = e.target.closest('button');
    const userInput = button.value;
    const matches = userInput.match(pattern); // Holds the matched results
    const matchedText = matches ? matches.join('') : ''; // Holds the joined matched text

    // Check the operator selected
    const operatorText = userInput.match(operatorPattern);
    const matchedOperators = operatorText ? operatorText.join('') : userInput;

    if (userInput === 'backspace' && display !== '0' && userInput !== undefined) {
      display = display.substring(0, display.length - 1);
    } else if (userInput === 'AC' && display !== '0' && userInput !== undefined) {
      if (confirm('¿𝙲𝚕𝚎𝚊𝚛 𝚎𝚟𝚎𝚛𝚢𝚝𝚑𝚒𝚗𝚐? 𝚈𝚊 𝚜𝚞𝚛𝚎?')) {
        display = '0';
        firstNum = null;
        operator = null;
        newNumFlag = true;
      } else {
        display = display;
      }
    } else if (userInput === '%') {
      display = parseFloat(display) / 100;
    } else if (userInput === '+/-' && display !== '0') {
      display = parseFloat(display) * -1;
    } else if (matchedText) {
      handleNumber(matchedText);
    } else if (matchedOperators) {
      handleOperator(matchedOperators);
    } else if (userInput === '=') {
      handleEquals();
    }

    output.innerText = display;
  });
});

window.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key.match(/[0-9+\-*/.=%]/)) {
    let button = document.querySelector(`[data-key="${key}"]`);
    if (button) button.click(); // Simulate a button click
  } else if (key === 'Escape') {
    let acButton = document.querySelector(`[data-key="AC"]`);
    if (acButton) acButton.click();
  } else if (key === 'Enter') {
    let equalButton = document.querySelector(`[data-key="="]`);
    if (equalButton) equalButton.click();
  } else if (key === 'Backspace' || key === 'Delete') {
    let backspaceButton = document.querySelector(`[data-key="Backspace"]`);
    if (backspaceButton) backspaceButton.click();
  }
});
