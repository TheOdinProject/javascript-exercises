const caesar = require('./caesar')

describe('caesar', function() {
  it('works with single letters', function() {
    expect(caesar('A', 1)).toEqual('B');
  });
  xit('works with words', function() {
    expect(caesar('Aaa', 1)).toEqual('Bbb');
  });
  xit('works with phrases', function() {
    expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
  });
  xit('works with negative shift', function() {
    expect(caesar('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
  });
  xit('wraps', function() {
    expect(caesar('Z', 1)).toEqual('A');
  });
  xit('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
  });
  xit('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
  });
});
