const addNumbers = require('./addNumbers-solution')

describe('addNumbers', () => {
  test('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});
