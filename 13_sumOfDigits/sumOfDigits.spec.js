// sumOfDigits.test.js
const sumOfDigits = require('./sumOfDigits');

describe('sumOfDigits', () => {
  test('should return the sum of digits of a positive number', () => {
    expect(sumOfDigits(123)).toBe(6);  // 1 + 2 + 3 = 6
  });

  test('should return the sum of digits of a larger number', () => {
    expect(sumOfDigits(987)).toBe(24);  // 9 + 8 + 7 = 24
  });

  test('should return the sum of digits of a single digit number', () => {
    expect(sumOfDigits(7)).toBe(7);  // Single digit, so sum is the number itself
  });

  test('should return 0 for 0', () => {
    expect(sumOfDigits(0)).toBe(0);  // 0 has no digits to sum
  });

  test('should handle very large numbers', () => {
    expect(sumOfDigits(123456789)).toBe(45);  // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
  });
});
