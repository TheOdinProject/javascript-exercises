const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i < array.length; i++){
        sum += array[i];
  }
  return sum;
};

const multiply = function(arr = []) {
  if (arr.length === 0) {
    return 1; // Default to 1 if no arguments are provided
  }
  
  return arr.reduce((acc, curr) => acc * curr, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(n) {

  if(n === 0){
    return 1; // Base case: 0! is 1
  }

  return n * factorial(n - 1); //Recursive call
  
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
