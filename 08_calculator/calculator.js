const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sumArray = 0;
  if (array.length == 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sumArray += array[i];
    }
    return sumArray;
  }
};

const multiply = function(numbers) {
  let multiplyNum = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplyNum *= numbers[i];
  }
  return multiplyNum;
};

const power = function(num, power) {
  powerNum = 1;
  for (let i = 0; i < power; i++) {
     powerNum *= num;
  }
  return powerNum;
};

const factorial = function(fact) {
  factNum = 1;
	for (let i = fact; i > 0; i--) {
    factNum *= i;
  }
  return factNum;
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
