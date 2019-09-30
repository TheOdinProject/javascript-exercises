const calculator = require ('./calculator.js');

describe('add', function() {
	it('adds 0 and 0', function() {
		expect(calculator.add(0,0)).toEqual(0);
	});

	it('adds 2 and 2', function() {
		expect(calculator.add(2,2)).toEqual(4);
	});

	it('adds positive numbers', function() {
		expect(calculator.add(2,6)).toEqual(8);
	});
});

describe('subtract', function() {
	it('subtracts numbers', function() {
		expect(calculator.subtract(10,4)).toEqual(6);
	});
});

describe('sum', function() {
	it('computes the sum of an empty array', function() {
		expect(calculator.sum([])).toEqual(0);
	});

	it('computes the sum of an array of one number', function() {
		expect(calculator.sum([7])).toEqual(7);
	});

	it('computes the sum of an array of two numbers', function() {
		expect(calculator.sum([7,11])).toEqual(18);
	});

	it('computes the sum of an array of many numbers', function() {
		expect(calculator.sum([1,3,5,7,9])).toEqual(25);
	});
});

describe('multiply', function() {
	it('multiplies two numbers', function() {
		expect(calculator.multiply([2,4])).toEqual(8);
	});

	it('multiplies several numbers', function() {
		expect(calculator.multiply([2,4,6,8,10,12,14])).toEqual(645120);
	});
});

describe('power', function() {
	it('raises one number to the power of another number', function() {
		expect(calculator.power(4,3)).toEqual(64); // 4 to third power is 64
	});
});

describe('factorial', function() {
	it('computes the factorial of 0', function() {
		expect(calculator.factorial(0)).toEqual(1); // 0! = 1
	});

	it('computes the factorial of 1', function() {
		expect(calculator.factorial(1)).toEqual(1);
	});

	it('computes the factorial of 2', function() {
		expect(calculator.factorial(2)).toEqual(2);
	});

	it('computes the factorial of 5', function() {
		expect(calculator.factorial(5)).toEqual(120);
	});

	it('computes the factorial of 10', function() {
		expect(calculator.factorial(10)).toEqual(3628800);
	});
});
