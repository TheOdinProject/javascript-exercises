function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function percentage(num) {
  return num / 100;
}

let displayText = '';
let firstNum = '';
let secondNum = '';
let equals = false;
let shouldClearDisplay = false;
let currentOperator;
let total = null;
let hasTotal = false;
function operator(operator, a, b) {
  return operator(a, b);
}

const btn = document.querySelectorAll('button');
const digitBtn = document.querySelector('.digit');

function logOutput() {
  const output = document.querySelector('.output-box');
  output.innerText = displayText;
}

btn.forEach((node) => {
  let pattern = /[0-9_.]/g;
  let operatorPattern = /[+\-*/%]/;
  let operators;
  let dbClicked = false;

  node.addEventListener('click', function (e) {
    const userInput = e.target.innerText;
    const matchText = userInput.toLowerCase().match(pattern);
    const checkText = matchText ? matchText.join('') : '';

    const matchOperators = e.target.value.match(operatorPattern);
    const checkOperators = e.target.value === '+/-' ? '+/-' : matchOperators ? matchOperators.join('') : e.target.value;

    if (dbClicked) {
      firstNum = total;
      secondNum = total;
    }

    if (hasTotal && !firstNum) {
      // User pressed an operator right after getting a result
      firstNum = total;
      secondNum = total; // Use total as both operands for the operation
    }

    if (shouldClearDisplay) {
      displayText = '';
    }

    if (e.target.value === 'AC' || e.target.value.match(operatorPattern)) {
      operators = checkOperators;
      currentOperator = operators;
      equals = true;
    }

    if (userInput.match(pattern) && equals == false) {
      shouldClearDisplay = false;
      displayText += checkText;
      firstNum += Number(checkText);
    }

    if (equals && userInput.match(pattern)) {
      displayText = '';
      displayText += checkText;
      secondNum += Number(checkText);
    }

    console.log(Number(firstNum), 'fn');
    console.log(Number(secondNum), 'sn');

    if (e.target.value) {
      displayText = '';
      shouldClearDisplay = true;
      function logResult() {
        switch (currentOperator) {
          case '+':
            return (total = operator(add, Number(firstNum), Number(secondNum))), (displayText = total);
          case '-':
            return (total = operator(subtract, Number(firstNum), Number(secondNum))), (displayText = total);
          case '*':
            return (total = operator(multiply, Number(firstNum), Number(secondNum))), (displayText = total);
          case '/':
            return (total = operator(divide, Number(firstNum), Number(secondNum))), (displayText = total);
          case '%':
            return (total = operator(percentage, Number(firstNum))), (displayText = total);
        }
      }
      logResult();
      firstNum = '';
      secondNum = '';
      equals = false;
      hasTotal = true;
    }

    logOutput();
  });

  node.addEventListener('dblclick', function (e) {
    if (['+', '-', '*', '/', '%'].includes(e.target.value)) {
      dbClicked = true;
    }
    console.log(total);
  });
});

// window.addEventListener('keydown', (e) => {
//   console.log(e.key === digitBtn.value);
//   console.log();
// });

// case '+/-':
//           // Handle toggling the sign of the current number
//           return (firstNum *= -1);
//         case 'AC':
//           displayText = '';
//           firstNum = '';
//           secondNum = '';
//           checkOperators = '';
//           return;

// if (hasTotal && ['+', '-', '*', '/', '%'].includes(e.target.value)) {
//   firstNum = total;
//   secondNum = null;
//   currentOperator = e.target.value;

//   switch (currentOperator) {
//     case '+':
//       total = operator(add, Number(firstNum), Number(secondNum));
//       break;
//     case '-':
//       total = operator(subtract, Number(firstNum), Number(secondNum));
//       break;
//     case '*':
//       total = operator(multiply, Number(firstNum), Number(secondNum));
//       break;
//     case '/':
//       total = operator(divide, Number(firstNum), Number(secondNum));
//       break;
//     case '%':
//       total = operator(percentage, Number(firstNum));
//       break;
//   }

//   displayText = total;
//   hasTotal = true;
//   console.log(secondNum);
// }

// if (displayText.length > 1) {
//   Number(displayText.substring(1, 2));
//   Number(displayText.substring(2, 3));
// }
// console.log(total);
