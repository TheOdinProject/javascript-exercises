const add = function (numA, numB) {
	return numA + numB;
};

const subtract = function (numA, numB) {
	return numA - numB;
};

const sum = function (array) {
	return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (array) {
	return array.reduce((acc, curr) => acc * curr, 1)
};

const power = function (base, exponent) {
	return base ** exponent
};

const factorial = function (number) {
	if (number < 0) {
		return 'ERROR';
	}
	let result = 1;
	for (let i = number; i > 0; i--) {
		result *= i;
	}
	return result
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
