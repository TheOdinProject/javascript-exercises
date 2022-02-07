const calculator = require('./calculator');

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(calculator.add(0,0)).toBe(0);
	});

	test.skip('adds 2 and 2', () => {
		expect(calculator.add(2,2)).toBe(4);
	});

	test.skip('adds positive numbers', () => {
		expect(calculator.add(2,6)).toBe(8);
	});
});

describe('subtract', () => {
	test.skip('subtracts numbers', () => {
		expect(calculator.subtract(10,4)).toBe(6);
	});
});

describe('sum', () => {
	test.skip('computes the sum of an empty array', () => {
		expect(calculator.sum([])).toBe(0);
	});

	test.skip('computes the sum of an array of one number', () => {
		expect(calculator.sum([7])).toBe(7);
	});

	test.skip('computes the sum of an array of two numbers', () => {
		expect(calculator.sum([7,11])).toBe(18);
	});

	test.skip('computes the sum of an array of many numbers', () => {
		expect(calculator.sum([1,3,5,7,9])).toBe(25);
	});
});

describe('multiply', () => {
	test.skip('computes the product of an empty array', () => {
		expect(calculator.multiply([])).toBe(0);
	});
	test.skip('multiplies two numbers', () => {
		expect(calculator.multiply([2,4])).toBe(8);
	});
	test.skip('multiplies several numbers', () => {
		expect(calculator.multiply([2,4,6,8,10,12,14])).toBe(645120);
	});
});

/* 
 * Base facts:
 * 	=> x to the power of 0 is always 1.
 * 	=> with base of 0, the exponent must NOT be negative, otherwise the result will be Infinity.
 */
describe('power', () => {
	test.skip('raises one number to the power of another number', () => {
		expect(calculator.power(4,3)).toBe(64); // 4 to third power is 64
	});
	test.skip('to the negative exponent', () => {
		expect(calculator.power(2,-2)).toBe(0.25);
	});
	test.skip('with negative base', () => {
		expect(calculator.power(-2,2)).toBe(4);
	});
	test.skip('with negative base', () => {
		expect(calculator.power(-2,3)).toBe(-8);
	});
	test.skip('negative base to the negative exponent', () => {
		expect(calculator.power(-2,-2)).toBe(0.25);
	});
	test.skip('negative base to the negative exponent', () => {
		expect(calculator.power(-2,-3)).toBe(-0.125);
	});
	test.skip('to the power of 0', () => {
		expect(calculator.power(2,0)).toBe(1);
	});
	test.skip('to the power of 0', () => {
		expect(calculator.power(-2,0)).toBe(1);
	});
	test.skip('to the power of 0', () => {
		expect(calculator.power(0,0)).toBe(1);
	});
	test.skip('with base of 0', () => {
		expect(calculator.power(0,2)).toBe(0);
	});
	test.skip('with base of 0', () => {
		expect(calculator.power(0,-2)).toBe(Infinity);
	});
});

describe('factorial', () => {
	test.skip('factorial of negative number should be undefined', () => {
		expect(calculator.factorial(-1)).toBeUndefined();
	});
	test.skip('computes the factorial of 0', () => {
		expect(calculator.factorial(0)).toBe(1); // 0! = 1
	});

	test.skip('computes the factorial of 1', () => {
		expect(calculator.factorial(1)).toBe(1);
	});

	test.skip('computes the factorial of 2', () => {
		expect(calculator.factorial(2)).toBe(2);
	});

	test.skip('computes the factorial of 5', () => {
		expect(calculator.factorial(5)).toBe(120);
	});

	test.skip('computes the factorial of 10', () => {
		expect(calculator.factorial(10)).toBe(3628800);
	});
});
