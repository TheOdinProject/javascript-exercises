const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
  let sum = num1 - num2;
	return sum;
};

const sum = function(array) {
  let sum = 0;
  if (array.length > 0) {
  	for (i = 0; i < array.length; i++ ) {
      sum += array[i];
    }
  } else {
    let sum = 0;
    return sum;
  }
  return sum;
};

const multiply = function(array) {
  let sum = 1;
  for (i = 0; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;

};

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
    case 'add':
      return add(num1, num2);
    case 'subtract':
      return subtract(num1, num2);
    case 'multiply':
      return multiply(num1, num2);
    case 'power':
      return power(num1, num2);
    case 'factorial':
      return factorial(num1);
  }
}

let answer = operate("multiply", 1, 2);

console.log(answer);