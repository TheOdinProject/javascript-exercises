const numberChecker = require('./script')

describe('numberChecker', () => {
  test('returns true when number is 1000', () => {
    expect(numberChecker(1000)).toEqual(true);
  });
  test('returns true when number is 10', () => {
    expect(numberChecker(10)).toEqual(true);
  });
});
