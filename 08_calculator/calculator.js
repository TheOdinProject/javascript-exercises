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
    //console.log(`total: ${myNum}, index: ${num}, value: ${nums[num]}, is number ${typeof myNum}`);
    myNum = myNum * nums[num];
  }
return myNum;
};

const power = function(num1, num2) {
	return (num1 ** num2);
};

const factorial = function(num1) {
	var myArray = [];
  if (num1 === 0){
    myVar = 1;
  } else {
      for (var i = num1; i >= 1; i--){
        myArray.push(i);
      }
      myVar = num1;
      for (num of myArray) {
        if (num === 1) {break};
          myVar *= num-1;    
      }
  }      
return myVar;
};

var test1 = factorial(0);
console.log(test1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
