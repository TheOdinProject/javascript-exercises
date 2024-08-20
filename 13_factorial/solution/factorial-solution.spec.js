const factorial = require("./factorial-solution");

describe('factorial', () => {
  test('4th factorial number is 24', () => {
    expect(factorial(4)).toBe(24);
  });
  test('6th factorial number is 720', () => {
    expect(factorial(6)).toBe(720);
  });
  test('10th factorial number is 3628800', () => {
    expect(factorial(10)).toBe(3628800);
  });
  test('15th factorial number is 1307674368000', () => {
    expect(factorial(15)).toBe(1307674368000);
  });
  test('25th factorial number is 1.5511210043330986e+25', () => {
    expect(factorial(25)).toBe(1.5511210043330986e+25);
  });
  test('0th factorial number is 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test('doesn\'t accept negatives', () => {
    expect(factorial(-25)).toBe(undefined);
  });
  test('doesn\'t accept floats', () => {
    expect(factorial(5.4)).toBe(undefined);
  });
  test('doesn\'t accept a number as a string', () => {
    expect(factorial('5')).toBe(undefined);
  });
  test('doesn\'t accept strings', () => {
    expect(factorial('foo')).toBe(undefined);
  });
  test('doesn\'t accept arrays', () => {
    expect(factorial([5])).toBe(undefined);
  });
});
