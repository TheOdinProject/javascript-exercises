const sumAll = require('./sumAll')

describe('sumAll', function() {
  it('sums numbers within the range', function() {
    expect(sumAll(1, 4)).toEqual(10);
  });
  it('works with large numbers', function() {
    expect(sumAll(1, 4000)).toEqual(8002000);
  });
  it('works with larger number first', function() {
    expect(sumAll(123, 1)).toEqual(7626);
  });
  it('returns ERROR with negative numbers', function() {
    expect(sumAll(-10, 4)).toEqual('ERROR');
  });
  it('returns ERROR with non-number parameters', function() {
    expect(sumAll(10, "90")).toEqual('ERROR');
  });
  it('returns ERROR with non-number parameters', function() {
    expect(sumAll(10, [90, 1])).toEqual('ERROR');
  });
});
