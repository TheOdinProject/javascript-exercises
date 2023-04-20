const add = function(a, b) {

	return a + b;

};

const subtract = function(a, b) {

	return a - b;

};

const sum = function(array) {

	let suma = 0;

  if (array.length == 0) {

    return 0;

  } else {

    array.forEach(item => {
      suma += item
    });

    return suma;
  }
};

const multiply = function(array) {

  let product = 1;

  if (array.length == 0) {

    return 0;

  } else {

    array.forEach(item => {
      product *= item;
    });
    
    return product;
  }

};

const power = function(a, b) {

	return Math.pow(a, b);

};

const factorial = function(a) {

	if (a < 0) {

    return -1;

  } else if (a == 0) {

    return 1;

  } else {

    return a * factorial(a - 1);

  }
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
