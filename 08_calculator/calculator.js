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

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	factorialToReturn = 1;
  if (num <= factorialToReturn){
    return factorialToReturn
  }
  do {
    factorialToReturn = factorialToReturn * num--; 
  }while (0 < num);
  return factorialToReturn;
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
