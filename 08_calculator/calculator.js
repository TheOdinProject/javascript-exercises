//basic math functions params are primitive num 
const add = function(value_x, value_y) {
	return value_x + value_y;
};

const subtract = function(value_x, value_y) {
	return value_x - value_y;
};

//Param is array
const sum = function(arr) {

  let sumToReturn = 0;
  for (let i = 0; i < arr.length; i++) {
    sumToReturn = sumToReturn + arr[i];   
  }
  return sumToReturn;
  
};
const multiply = function(arr) {
  if(arr === undefined) {
    return;
  }
  let numToReturn = 1 ;
  for (let i = 0; i < arr.length; i++) {
    numToReturn = numToReturn * arr[i];   
  }
  return numToReturn;
};


// adanced math functions

const power = function() {
	
};

const factorial = function() {
	
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


// The goal for this exercise is to create a calculator that does the following:

// add, subtract, get the sum, multiply, get the power, and find the factorial

// In order to do this please fill out each function with your solution. 
// Make sure to return the value so you can test it in Jest! To see the expected value
// take a look at the spec file that houses the Jest test cases.