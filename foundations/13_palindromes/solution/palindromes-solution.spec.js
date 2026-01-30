const palindromes = require('./palindromes-solution');

describe('palindromes', () => {
  test('detects palindrome', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('detects palindrome with numbers', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test('detects palindrome with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('ignores punctuation', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('is case insensitive', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('detects non-palindromes', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('detects non-palindromes with numbers', () => {
    expect(palindromes('r3ace3car')).toBe(false);
  });
});
