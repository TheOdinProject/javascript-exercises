const {convertToCelsius, convertToFahrenheit} = require('./tempConversion')

describe('convertToCelsius', () => {
  test('works', () => {
    expect(convertToCelsius(32)).toEqual(0);
  });
  test('rounds to 1 decimal', () => {
    expect(convertToCelsius(100)).toEqual(37.8);
  });
  test('works with negatives', () => {
    expect(convertToCelsius(-100)).toEqual(-73.3);
  });
});

describe('convertToFahrenheit', () => {
  test.skip('works', () => {
    expect(convertToFahrenheit(0)).toEqual(32);
  });
  test.skip('rounds to 1 decimal', () => {
    expect(convertToFahrenheit(73.2)).toEqual(163.8);
  });
  test.skip('works with negatives', () => {
    expect(convertToFahrenheit(-10)).toEqual(14);
  });
});
