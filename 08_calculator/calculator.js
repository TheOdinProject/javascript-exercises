const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
  nums.forEach((element) => {
    sum += element;
  })
  return sum;
};

const multiply = function(nums) {
  product = 1;
  nums.forEach((element) => {
    product *= element;
  });
  return product;
};

const power = function(base, power) {
  let product = 1;
  for (let i = 0; i < power; i++) {
    product *= base;
  }
	return product;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
	let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i;
  }
  return product;
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
