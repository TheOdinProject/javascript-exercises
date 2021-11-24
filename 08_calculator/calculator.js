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

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
