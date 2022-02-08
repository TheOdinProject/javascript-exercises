const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test.skip('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test.skip('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test.skip('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test.skip('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test.skip('doesn\'t just always return true', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
});
