const expect = require('expect');
const caesar = require('./caesar')

describe('caesar', function() {
  test('works with single letters', function() {
    expect(caesar('A', 1)).toBe('B');
  });
  test.skip('works with words', function() {
    expect(caesar('Aaa', 1)).toBe('Bbb');
  });
  test.skip('works with phrases', function() {
    expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
  test.skip('works with negative shift', function() {
    expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
  });
  test.skip('wraps', function() {
    expect(caesar('Z', 1)).toBe('A');
  });
  test.skip('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
  });
  test.skip('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
  });
});
