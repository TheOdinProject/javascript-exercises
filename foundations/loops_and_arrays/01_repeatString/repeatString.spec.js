const repeatString = require('./repeatString')

describe('repeatString', () => {
  test('repeats the string', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test.skip('repeats the string many times', () => {
    expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');
  });
  test.skip('repeats the string 1 time', () => {
    expect(repeatString('hi', 1)).toEqual('hi');
  });
  test.skip('repeats the string 0 times', () => {
    expect(repeatString('bye', 0)).toEqual('');
  });
  test.skip('handles any non-negative integer for repeat count', function () {
    /* This test ensures your function is "generic", meaning the previous
      tests were not completed by hardcoding values for their respective numbers */
    const number = Math.floor(Math.random() * 1000);
    expect(repeatString('hey', number)).toBe('hey'.repeat(number));
  });
  test.skip('does not use the built-in String repeat method', () => {
    /* Even though there is a built-in String repeat method,
      in this exercise specifically, we want you to practise using loops */
    jest.spyOn(String.prototype, 'repeat').mockName('Built-in String repeat method');
    repeatString("don't use the built-in repeat method!", 1);
    expect(String.prototype.repeat).not.toHaveBeenCalled();
  });
  test.skip('returns ERROR with negative numbers', () => {
    expect(repeatString('goodbye', -1)).toEqual('ERROR');
  });
  test.skip('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
