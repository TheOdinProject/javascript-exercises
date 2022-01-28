const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array1) {
	var mySum = 0;
  for (var i = 0; i < array1.length; i++) {
    mySum = mySum + array1[i];
  }
  return mySum;
};

const multiply = function(...nums) {
  var myNum = 1;
  for (var num in nums) {
    console.log(`total: ${myNum}, index: ${num}, value: ${nums[num]}, is number ${typeof myNum}`);
    myNum = myNum * nums[num];
  }
return myNum;
};

var test1 = multiply(2, 4, 6, 8, 10, 12, 14);
console.log(test1);

const power = function(num1, num2) {
	return (num1 ^ num2);
};

const factorial = function(num1) {
	
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
