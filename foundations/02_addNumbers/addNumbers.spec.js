const addNumbers = require('./addNumbers')

describe('addNumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});
