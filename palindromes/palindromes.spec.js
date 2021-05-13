const palindromes = require('./palindromes')

describe('palindromes', function() {
  it('works with single words', function() {
    expect(palindromes('racecar')).toEqual(true);
  });
  xit('works with punctuation ', function() {
    expect(palindromes('racecar!')).toEqual(true);
  });
  xit('works with upper-case letters ', function() {
    expect(palindromes('Racecar!')).toEqual(true);
  });
  xit('works with multiple words', function() {
    expect(palindromes('A car, a man, a maraca.')).toEqual(true);
  });
  xit('works with multiple words', function() {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toEqual(true);
  });
  xit('doesn\'t just always return true', function() {
    expect(palindromes('ZZZZ car, a man, a maraca.')).toEqual(false);
  });
});
