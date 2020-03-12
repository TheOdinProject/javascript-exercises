function add (a, b) {
	return a+b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	if (arr.length <1){return 0}
	if (arr.length == 1) { return arr[0] }
	return arr.reduce((a,b) => a+b);
}

function multiply(arr) {
	return arr.reduce((a, b) => a * b);
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	return a < 2 ? 1 : a * factorial(a - 1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}