const add = function(num1, num2) {
  let total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
	let total = num1 - num2;
  return total;
};

const sum = function(numList) {
	  let total = 0;

    for (let i = 0; i < numList.length; i++) {
        total += parseInt(numList[i]);
    }
    
    return total;
};

const multiply = function(numList) {
  let total = 1;
  
  for (let i = 0; i < numList.length; i++) {
    total *= parseInt(numList[i]);
  }

  return total;
};

const power = function(num, power) {
	//empty variable for total
  let total = 1;
  //for loop to repeat num by power
  for (let i = 0; i < power; i++) {
    //multiply each num with empty variable 
    total *= num;
  }
  return total; 
};

const factorial = function(num) {
  //empty variable for total
  let total = 1;
  //for loop to continue until num is reached
  for (let i = 1; i <= num; i++) {
    //multiply total with the i variable, which starts at 1, and repeats until num 
    total *= i;
  }
  return total; 
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
