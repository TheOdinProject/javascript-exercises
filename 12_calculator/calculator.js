const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0
  for (let num of arr){
    total += arr
  }
    return total;
};

const multiply = function(arr) {
  let total = 1
  for (let num of arr){
    total *= arr
  }
    return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
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
  factorial
};
