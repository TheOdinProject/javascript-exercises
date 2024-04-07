const recursiveCalculator = require('./recursiveCalculator-solution');

describe('recursiveCalculator', () => {
  test('Adds two numbers', () => {
    expect(recursiveCalculator('2 + 4')).toBe(6);
  });
  test('Respects order of operation', () => {
    expect(recursiveCalculator('1 - -5 * 4')).toBe(21);
  });
  test('Works with parentheses', () => {
    expect(recursiveCalculator('(1 - 7) * 4')).toBe(-24);
  });
  test('Works with a long calculation', () => {
    expect(recursiveCalculator('4 / 5 * (4 * 5 - 4 / 5) + 55')).toBe(70.36);
  });
  test('Division by zero returns undefined', () => {
    expect(recursiveCalculator('1 / 0')).toBe(undefined);
  });
});
