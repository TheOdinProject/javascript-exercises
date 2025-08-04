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

const power = function(...numbers) {
	return numbers[0] ** numbers[1]
};

const factorial = function(number) {
  /*let values = [];
  for (let i = number; i <= number;  i++){
   values.push(i)   
  }
  const result = values.reduce((accumulator, currentValue)=> {return accumulator * currentValue} )

	return result*/
  let result = 1;
  for (let i = number; i >= 1; i--){
    result *= i
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
