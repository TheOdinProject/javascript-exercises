const add = function(num1, num2) {
	total = num1 + num2;
	console.log(total);
	return total;
};

const subtract = function(num1, num2) {
	total = num1 - num2;
	console.log(total);
	return total;
};

const sum = function(arg) {
	const array = arg;
	console.log(array);
	let total = 0;
	for (i = 0; i < array.length; i++) {
		total += array[i];
	}
	console.log(total);
	return total;
};

const multiply = function(arg) {
	const array = arg;
	console.log(array);
	let total = 1;
	for (i = 0; i < array.length; i++) {
		total = total * array[i];
	}
	console.log(total);
	return total;
};
//multiply([-4,4])

const power = function(num, factor) {
	total = Math.pow(num, factor);

	console.log(total);
	return total;
};
//  power(2,2)

const factorial = function(num) {
	if (num === 0 || num === 1) {
		console.log('1');
		return 1;
	} else {
		for (var i = num - 1; i >= 1; i--) {
			num *= i;
		}
	}
	console.log(num);
	return num;
};
factorial(6);

//add(2, 4);
//subtract ( 1, -10)
//sum([ 1, 3, 2 ]);
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
