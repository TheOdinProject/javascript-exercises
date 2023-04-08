const palindromes = require('./palindromes-solution');

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(
      true
    );
  });
  test("doesn't just always return true", () => {
    expect(palindromes('ZZZZ car, a man, a maraca.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
});
