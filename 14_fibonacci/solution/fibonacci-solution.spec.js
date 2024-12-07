const fibonacci = require('./fibonacci-solution')

describe('fibonacci', () => {
  test('4th fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test('6th fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test('10th fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test('15th fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test('25th fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test('0th fibonacci number is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('doesn\'t accept negatives', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test('DOES accept strings', () => {
    expect(fibonacci("0")).toBe(0);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("1")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("2")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("8")).toBe(21);
  });
});