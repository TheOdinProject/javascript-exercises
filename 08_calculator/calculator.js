const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(num => {
    sum = num + sum
  });
  return sum
};

const multiply = function(nums) {
	let result = 1;
  nums.forEach(num => {
    result = num * result
  });
  return result
};

const power = function(x , y) {
	let result = x;
  for(i = 1; i < y; i++){
    result = x * result
  }
  return result
};

const factorial = function(x) {
	let result = 1
  for(let i = 1; i <= x; i++){
    result = result * i
  }
  return result
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
