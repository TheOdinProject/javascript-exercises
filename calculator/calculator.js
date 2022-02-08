const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
    return array.length
      ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
      : 0;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

/* 
 * If you want to write a handmade power() function by yourself,
 * Here's a simple example. 
 * Only work with integer as input. 
 */
const intPower = function(base, exponent) {
  if (exponent === 0) return 1;
  if (base === 0) return (exponent > 0)? 0 : Infinity;
  let result = 1;
  if (exponent > 0) {
    while (exponent-- > 0) result *= base;
  } else {
    while (exponent++ < 0) result /= base;
  }
  return result;
};

const factorial = function(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
const recursiveFactorial = function(n) {
  if (n < 0) return undefined;
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial (n-1);
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
