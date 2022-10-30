const add = function(num1, num2) {
  let total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
	let total = num1 - num2;
  return total;
};

const sum = function() {
	  let total = 0;

    for (i = 0; i < numList.length; i++) {
        total += parseInt(numList[i]);
    }
    
    return total;
};

const multiply = function(num1, num2) {
  let total = num1 * num2;
  return total;
};

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
