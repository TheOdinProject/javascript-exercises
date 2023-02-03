const add = function(a, b) {
	let addition = a + b;
  return addition;
};

const subtract = function(a, b) {
  let sub = a - b;
  return sub;
	
};

const sum = function(array) {
  let sum = 0;
  array.forEach(item => {
    sum += item;
  });
  return sum;
}


const multiply = function(array) {
  
  var sum = 1;
  for (var i = 0; i < array.length; i++) {
      sum = sum * array[i];
  } 
  return sum;
}



const power = function(a, b) {
  let expo = a ** b;
  return expo;
};

const factorial = function(input) {
if (input === 0 || input === 1)
  return 1;
for (let i = input - 1; i >= 1; i--) {
  input *= i;
}
return input;
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
