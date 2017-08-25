var leapYears = require('./leapYears')

describe('leapYears', function() {
  it('works with non century years', function() {
    expect(leapYears(1994)).toEqual(true);
  });
  xit('works with non century years', function() {
    expect(leapYears(1997)).toEqual(false);
  });
  xit('works with ridiculously futuristic non century years', function() {
    expect(leapYears(34992)).toEqual(true);
  });
  xit('works with century years', function() {
    expect(leapYears(1900)).toEqual(false);
  });
  xit('works with century years', function() {
    expect(leapYears(1400)).toEqual(true);
  });
  xit('works with century years', function() {
    expect(leapYears(700)).toEqual(false);
  });
});
