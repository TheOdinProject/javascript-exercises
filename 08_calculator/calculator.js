const add = function(n , m) {
  return n + m;
};

const subtract = function(n , m) {
	return n - m;
};

const sum = function(myArray) {
	let s = 0;
  for(let i = 0 ;i < myArray.length ; i++){
    s += myArray[i];
  }
  return s;
};

const multiply = function(myArray) {
  let m = 1;
  for(let i = 0 ;i < myArray.length ; i++){
    m *= myArray[i];
  }
  return m;
};

const power = function(n , m) {
	return Math.pow(n , m);
};

const factorial = function(n) {
	if(n < 2) return 1;
  return n * factorial(n - 1);
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
