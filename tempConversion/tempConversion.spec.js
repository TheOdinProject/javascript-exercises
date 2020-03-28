const {ftoc, ctof} = require('./tempConversion')

describe('ftoc', function() {
  it('works', function() {
    expect(ftoc(32)).toEqual(0);
  });
  it('rounds to 1 decimal', function() {
    expect(ftoc(100)).toEqual(37.8);
  });
  it('works with negatives', function() {
    expect(ftoc(-100)).toEqual(-73.3);
  });
});

describe('ctof', function() {
  it('works', function() {
    expect(ctof(0)).toEqual(32);
  });
  it('rounds to 1 decimal', function() {
    expect(ctof(73.2)).toEqual(163.8);
  });
  it('works with negatives', function() {
    expect(ctof(-10)).toEqual(14);
  });
});
