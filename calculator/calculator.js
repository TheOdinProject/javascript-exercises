function add(value1, value2) {
  return value1 + value2;
}

function subtract(value1, value2) {
  return value1 - value2;
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}

function power(value1, value2) {
  return Math.pow(value1, value2);
}

function factorial(value) {
  if (value == 0) {
    return 1;
  } else {
    return value * factorial(value - 1);
  }
}
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
