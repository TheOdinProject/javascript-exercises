const factorial = require("./factorial");

describe('factorial', () => {
  test('4th factorial number is 24', () => {
    expect(factorial(4)).toBe(24);
  });
  test.skip('6th factorial number is 720', () => {
    expect(factorial(6)).toBe(720);
  });
  test.skip('10th factorial number is 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });
  test.skip('15th factorial number is 1307674368000', () => {
    expect(factorial(15)).toBe(1307674368000);
  });
  test.skip('18th factorial number is 6.402373705728e+15', () => {
    expect(factorial(18)).toBe(6.402373705728e15)
  });
  test.skip('0th factorial number is 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test.skip("doesn't accept negatives", () => {
    expect(factorial(-25)).toBe(undefined);
  });
  test.skip("doesn't accept floats", () => {
    expect(factorial(5.4)).toBe(undefined);
  });
  test.skip("doesn't accept a number as a string", () => {
    expect(factorial('5')).toBe(undefined);
  });
  test.skip("doesn't accept strings", () => {
    expect(factorial('foo')).toBe(undefined);
  });
  test.skip("doesn't accept arrays", () => {
    expect(factorial([5])).toBe(undefined);
  });
});
