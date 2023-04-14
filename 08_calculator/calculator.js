const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let sums = 0;

	if (array.length == 0) {
    return sums
  } else if (array.length == 1) {
    return array[0]
  } else {
    array.forEach(element => {
      sums += element
    });

    return sums
  }
};

const multiply = function(array) {
  let value = 1;
  
  if (array.length == 0) {
    return 0
  } else if (array.length == 1) {
    return array[0]
  } else {
    array.forEach(element => {
      value = value * element
    });

    return value
  }
};

const power = function(num1, num2) {
  let value = 1;

  if (num2 == 0) { return 1 }
  if (num2 == 1) { return num1 }

	for (let i = 0; i < num2; i++) {
    value = value * num1
  }

  return value
};

const factorial = function(num) {
	let value = 1;

  if (num == 1) { return 1 }

  for (let i = 1; i <= num; i ++) {
    value = value * i
  }

  return value
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
