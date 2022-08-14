const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(num) {
	let sum = 0;
  for( let i = 0; i < num.length; i++){
    sum += num[i];
  }
  return sum;
};

const multiply = function(num) {
  let product = 1;
  for(let i = 0; i < num.length; i++){
  product = product * num[i];
  }
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let result = 1;
  if( num === 0 || num === 1 ){
    return result;
  } else{
    for(let i = num; i >= 1; i--){
      result = result * i;
    }
    return result;
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
