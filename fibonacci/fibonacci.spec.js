const fibonacci = require('./fibonacci')

describe('fibonacci', function() {
  it('works', function() {
    expect(fibonacci(4)).toEqual(3);
  });
  it('works', function() {
    expect(fibonacci(6)).toEqual(8);
  });
  it('works', function() {
    expect(fibonacci(10)).toEqual(55);
  });
  it('works', function() {
    expect(fibonacci(15)).toEqual(610);
  });
  it('works', function() {
    expect(fibonacci(25)).toEqual(75025);
  });
  it('doesn\'t accept negatives', function() {
    expect(fibonacci(-25)).toEqual("OOPS");
  });
  it('DOES accept strings', function() {
    expect(fibonacci("8")).toEqual(21);
  });
});
