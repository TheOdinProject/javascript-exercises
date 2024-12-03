const analyzeNumber = require('./analyzeNumber');

test('returns "positive" for positive numbers', () => {
  expect(analyzeNumber(5)).toBe('positive');
});

test('returns "negative" for negative numbers', () => {
  expect(analyzeNumber(-3)).toBe('negative');
});

test('returns "zero" for zero', () => {
  expect(analyzeNumber(0)).toBe('zero');
});
