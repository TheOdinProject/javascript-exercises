const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sumWithInitial;
};

const multiply = function (array) {
  const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator * currentValue);
  return sumWithInitial;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (position) {
  let result = 1;
  for (let num = position; num > 0; num--) {
    result *= num;
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
