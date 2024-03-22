const factorial = require("./factorial-solution");

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
  test.skip('15th factorial number is 1.3076744e+12', () => {
    expect(factorial(15)).toBe(1.3076744e12);
  });
  test.skip('25th factorial number is 1.551121e+25', () => {
    expect(factorial(25)).toBe(1.551121e25);
  });
  test.skip('0th factorial number is 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test.skip('doesn\'t accept negatives', () => {
    expect(factorial(-25)).toBe(undefined);
  });
  test.skip('doesn\'t accept floats', () => {
    expect(factorial(5.4)).toBe(undefined);
  });
  test.skip('DOES accept strings', () => {
    expect(factorial("0")).toBe(1);
  });
  test.skip('DOES accept strings', () => {
    expect(factorial("1")).toBe(1);
  });
  test.skip('DOES accept strings', () => {
    expect(factorial("2")).toBe(2);
  });
  test.skip('DOES accept strings', () => {
    expect(factorial("8")).toBe(40320);
  });
});
