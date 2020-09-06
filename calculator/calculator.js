function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });

  return arr.length == 0 ? 0 : sum;
}

function multiply(arr) {
	let product = 1;
  arr.forEach((num) => {
    product *= num;
  });

  return arr.length == 0 ? 0 : product;
}

function power(num, pow) {
	let exponent = 1
	for (let i = 0; i < pow; i++) {
		exponent *= num;		
	}
	return exponent;
}

function factorial(n) {
	let facto = 1;
	for (let i = 0; i < n; i++) {
		facto = n * factorial(n-1);		
	}
	return n == 0 || n == 1 ? 1 : facto;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
