let displayValue = 0;
let operator = 0;
let num1 = 0;
let num2 = 0;
let answer = 0;
const specialChars = ['!', '^', '*', '/', '+', '-'];
const decimal = ['.'];

const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
  let sum = num1 - num2;
	return sum;
};

// const sum = function(array) {
//   let sum = 0;
//   if (array.length > 0) {
//   	for (i = 0; i < array.length; i++ ) {
//       sum += array[i];
//     }
//   } else {
//     let sum = 0;
//     return sum;
//   }
//   return sum;
// };

const multiply = function(num1, num2) {
  let sum = 1;
  sum = num1 * num2;
  return sum;

};

const divide = function(num1, num2) {
  let sum = num1 / num2;
  return sum;
}

const power = function(num1, num2) {
  let sum = 1;
	for (i = 0; i < num2; i++) {
    sum = sum * num1;
  }
  return sum;
};

const factorial = function(num) {
  let sum = 1;
	for (i = num; i > 0; i--) {
    sum = sum * i;
  }
  return sum;
};

const operate = function(op, num1, num2) {
  switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '^':
      return power(num1, num2);
    case '!':
      return factorial(num1);
  }
}
function updateDisplay(id) {
  switch (id) {
    case '!':
      operator = id;
      num1 = display.textContent;
      answer = operate(operator, num1)
      display.textContent = answer;
      displayValue = answer;
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '^':
    case '.':
      let includesSpec = specialChars.some(char => display.textContent.includes(char));
      let includesDec = display.textContent.includes('.');
      if (includesDec && id === '.') {
        break;
      }
      if (includesSpec) {
        let num2 = display.textContent.split(/[\/+^!-*-]/);
        num1 = num2[0];
        num1 = parseFloat(num1);
        num2 = num2[1];
        num2 = parseFloat(num2);
        let currentAnswer = operate(operator, num1, num2);
        operator = id;
        display.textContent = currentAnswer + id;
        displayValue = display.textContent;
        break;

      }
      else {
        num1 = display.textContent;
        num1 = parseFloat(num1);
        operator = id;
        display.textContent += id;
        displayValue = display.textContent;
        break;
      }
    case '1':
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case '7':
    case '8':
    case '9':
    case '0':
      if (displayValue === 0) {
        display.textContent = '';
        display.textContent = id;
        displayValue = display.textContent;
      }
      else {
        display.textContent += id;
        displayValue = display.textContent;
      };
      break;
    case 'back':
      let newString = display.textContent.slice(0, -1);
      display.textContent = newString
      displayValue = display.textContent;
      break;
    case 'equals':
      let num2 = display.textContent.split(/[\/+^!-*-]/);
      if (!num2[1]) {
        break;
      }
      num1 = num2[0];
      num1 = parseFloat(num1);
      num2 = num2[1];
      num2 = parseFloat(num2);
      answer = operate(operator, num1, num2)
      if (answer === Infinity) {
        display.style.fontSize = '40px';
        display.textContent = 'To infinity, and beyond!';
        break;
      }
      display.textContent = answer;
      displayValue = answer;
      break;
    case 'clear':
      display.textContent = '0';
      displayValue = 0;
      break;
  }
}

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // operate(button.id);
        display.style.fontSize = '2em';
        updateDisplay(button.id);
    });
  });

// let answer = operate("multiply", 1, 2);

// console.log(answer);