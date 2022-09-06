const add = function (a, b) {
  let result = a + b;
  return result;
};

const subtract = function (a, b) {
  let result = a - b;
  return result;
};

const sum = function (array) {
  let result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (array) {
  let result = 1;
  for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function (a, b) {
  let result = a ** b;
  return result;
};

const factorial = function (val) {
  let result = 1;
  if (val == 0) {
    result = 1;
  } else {
    for (i = 1; i <= val; i++) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
