const fibonacci = require('./fibonacci-solution')

describe('fibonacci', () => {
  test('4th fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test.skip('6th fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test.skip('10th fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test.skip('15th fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test.skip('25th fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test.skip('0th fibonacci number is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test.skip('doesn\'t accept negatives', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test.skip('doesn\'t accept strings', () => {
    expect(fibonacci("0")).toBe("OOPS");
  });
  test.skip('doesn\'t accept NaN', () => {
    expect(fibonacci(NaN)).toBe("OOPS");
  });
  test.skip('doesn\'t accept undefined', () => {
    expect(fibonacci(undefined)).toBe("OOPS");
  });
  test.skip('doesn\'t accept null', () => {
    expect(fibonacci(null)).toBe("OOPS");
  });
  test.skip('doesn\'t accept Boolean', () => {
    expect(fibonacci(true)).toBe("OOPS");
  });
  test.skip('doesn\'t accept Boolean', () => {
    expect(fibonacci(false)).toBe("OOPS");
  });
  test.skip('doesn\'t accept Array', () => {
    expect(fibonacci([1])).toBe("OOPS");
  });
  test.skip('doesn\'t accept Object', () => {
    expect(fibonacci({num: 1})).toBe("OOPS");
  });
})
