const add = function(firstVariable, secondVariable) {
	return firstVariable + secondVariable;
};

const subtract = function(firstVariable, secondVariable) {
	return firstVariable - secondVariable;
};

const sum = function(myArray) {
	return myArray.reduce((runningTotal, myVariable) => runningTotal + myVariable, 0);
};

const multiply = function(myArray) {
  return myArray.reduce((runningTotal, myVariable) => runningTotal * myVariable, 1);

};

const power = function(baseNum, power) {
	return baseNum ** power;
};

const factorial = function(myVariable) {
	if (myVariable < 0) {
    return -1;
  } else if (myVariable === 0) {
    return 1;
  } else {
    return (myVariable * factorial(myVariable - 1))
  }
};
//
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
