const sumOfDigits = require('./sumOfDigits-solution');

describe('sumOfDigits', () => {
  test('works with single digit numbers', () => {
    expect(sumOfDigits(5)).toBe(5);
  });

  test('works with multiple digit numbers', () => {
    expect(sumOfDigits(123)).toBe(6); // 1 + 2 + 3 = 6
  });

  test('works with large numbers', () => {
    expect(sumOfDigits(987654321)).toBe(45); // 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45
  });

  test('works with numbers containing zero', () => {
    expect(sumOfDigits(1001)).toBe(2); // 1 + 0 + 0 + 1 = 2
  });

  test('works with numbers that have multiple zeros', () => {
    expect(sumOfDigits(100000)).toBe(1); // 1 + 0 + 0 + 0 + 0 + 0 = 1
  });

  test('returns 0 for 0', () => {
    expect(sumOfDigits(0)).toBe(0); // 0 has no digits to sum, so result is 0
  });
});
