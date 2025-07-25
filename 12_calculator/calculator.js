const add = function(...numbers) {
  let result = 0;
  for ( number of numbers){
    result += number
  }
	return result
};

const subtract = function(num, num2) {
  let result = num - num2;
  return result
};

const sum = function(array) {
  let result = 0;

  if (array.length == 0){
    return 0
  }

  for ( number of array){
    result += number
  }
  return result
  
};

const multiply = function(numbers) {
    const result = numbers.reduce( (total, currentNumber)=> {
        return total * currentNumber
      });

  return result
}

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
