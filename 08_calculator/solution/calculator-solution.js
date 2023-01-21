const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
const recursiveFactorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
