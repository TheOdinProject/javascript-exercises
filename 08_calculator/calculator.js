const add = function(numOne, numTwo) {
	return numOne + numTwo
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo
};

const sum = function (arraySum) {
  resultSum = 0
  arraySum.forEach(number => resultSum += number);
  return resultSum
};

const multiply = function(...args) {
  resultMul = 1
  arrayMul = [...args]
  arrayMul.forEach(number => resultMul *= number)
  return resultMul
};

const power = function (num, pow) {
  powSum = 1
  for (i = 0; i < pow; i++) {
    powSum *= num
  }
  return powSum
};

const factorial = function(factorial) {
  factorialSum = 1; 

  if (factorial === 0) {
    return 1;
  }
  for (i = factorial; i > 0; i--) {
    factorialSum *= i
  }
  return factorialSum
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
