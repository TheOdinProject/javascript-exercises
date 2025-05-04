const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => {
	const initialValue = 0;
	const sumWithInitial = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);
	return sumWithInitial;
};

const multiply = (array) => {
	const sumWithInitial = array.reduce(
		(accumulator, currentValue) => accumulator * currentValue,
	);
	return sumWithInitial;
};

const power = (a, b) => a ** b;

const factorial = (position) => {
	let result = 1;
	for (let num = position; num > 0; num--) {
		result *= num;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
