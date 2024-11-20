// const { factorial } = require("./solution/calculator-solution");

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = arr.reduce((sum, current) => sum + current, 0);
  return sum;
};

const multiply = function (arr) {
  let multiply = arr.reduce((accumulator, current) => accumulator * current, 1);
  return multiply;
};

const power = function (a, b) {
  let value = Math.pow(a, b);
  return value;
};

const factorial = function (num) {
  if (num < 0) return -1;
  if (num === 0) return 1;
  else return num * factorial(num - 1);
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
