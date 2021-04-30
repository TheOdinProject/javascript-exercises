const {ftoc, ctof} = require('./tempConversion')

describe('ftoc', () => {
  test('works', () => {
    expect(ftoc(32)).toEqual(0);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(ftoc(100)).toEqual(37.8);
  });
  test.skip('works with negatives', () => {
    expect(ftoc(-100)).toEqual(-73.3);
  });
});

describe('ctof', () => {
  test.skip('works', () => {
    expect(ctof(0)).toEqual(32);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(ctof(73.2)).toEqual(163.8);
  });
  test.skip('works with negatives', () => {
    expect(ctof(-10)).toEqual(14);
  });
});
