const add = function(num1, num2) {
  let result = 0;
  result = num1 + num2;

  return result;
	
};

const subtract = function(subtract1, subtract2) {

  let result = 0;

  result = subtract1 - subtract2;

  return result;
	
};

const sum = function(anArray) {

   let result = 0;
  for(let i = 0; i < anArray.length; i++){
    result += anArray[i];
  }

  return result;
	
};

const multiply = function(multiplyArray) {

  let result = 1;
  for(let i = 0; i < multiplyArray.length; i++){
    result *= multiplyArray[i];
  }

  return result;

};

const power = function(baseNum, powerNum) {
let result = 0;

result = Math.pow(baseNum, powerNum);

  return result;
	
};

const factorial = function(numFactor) {

  let results = 1;

  for(let i = 1; i <= numFactor; i++){
    results *= i;
  }

  return results;
	
};

add(0, 0);
add(2, 2);
add(2, 6);

subtract(10, 4);
subtract((-10) - (-4));
subtract((-8) - 7);

sum([]);
sum([7]);
sum([7, 11]);
sum([1, 3, 5, 7, 9]);

multiply([2, 4]);
multiply([[2, 4, 6, 8, 10, 12, 14]]);

power(4, 3);
power(3, 10);

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
