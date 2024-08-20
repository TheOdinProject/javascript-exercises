const pascal = require('./pascal');

describe('pascal', () => {
  test('Gets the first row of pascal', () => {
    expect(pascal(1)).toEqual([1]);
  });

  test.skip('Gets the second row of pascal', () => {
    expect(pascal(2)).toEqual([1, 1]);
  });

  test.skip('Gets the third row of pascal', () => {
    expect(pascal(3)).toEqual([1, 2, 1]);
  });

  test.skip('Gets the fourth row of pascal', () => {
    expect(pascal(4)).toEqual([1, 3, 3, 1]);
  });

  test.skip('Gets the fifth row of pascal', () => {
    expect(pascal(5)).toEqual([1, 4, 6, 4, 1]);
  });

  test.skip('Gets the sixth row of pascal', () => {
    expect(pascal(6)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  test.skip('Gets the seventh row of pascal', () => {
    expect(pascal(7)).toEqual([1, 6, 15, 20, 15, 6, 1]);
  });
});
