const add = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return
  }
  return num1 + num2
};

const subtract = function(num1, num2) {
	if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return
  }
  return (num1 > num2)?num1 - num2:num2 - num1
};

const sum = function(args) {
  return Number(args.reduce((prev, curr)=>prev+curr,0))
};

const multiply = function(args) {
  return args.reduce((prev,curr)=>prev * curr)
};

const power = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)){
    return
  }
  return num1**num2
};

const factorial = function(num) {
  if (num === 0){return 1}
  return num * factorial(num-1)
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
