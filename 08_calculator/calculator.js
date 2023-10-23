const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let result = 0;
  array.map((i) => {
    result += i;
  });
  return result;
};

const multiply = function (array) {
  let result = 0;
  array.reduce((acc, val) => {
    return (result = acc * val);
  });
  return result;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  } else if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
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
