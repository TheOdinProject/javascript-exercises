const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	if (a > b) return a - b
  else return b - a;
};

const sum = function(array) {
  let totalSum = 0;
	array.forEach((number) => {
    totalSum += number
  });
  return totalSum;
};

const multiply = function(array) {
  let multiplyTotal = 1;
  array.forEach((number) => {
    multiplyTotal *= number;
  });
  return multiplyTotal;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let totalFact = 1;

  if (number === 1 || number === 0) totalFact;
  else{
    for (let factorialNum = number; factorialNum >= 1; factorialNum--) {
      totalFact *= factorialNum;
    }
  }
  return totalFact;
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
