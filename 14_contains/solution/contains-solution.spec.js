const contains = require('./contains-solution');

describe('contains', () => {
  const object = {
    data: {
      duplicate: 'e',
      info: {
          duplicate: 'e',
          magicNumber: 44,
          stuff: {
              thing: {
                banana: NaN,
                moreStuff: {
                    something: 'foo',
                    answer: [42]
                }
              }
          }
      }
    }
  }

  test('true if the provided number is a value within the object', () => {
    expect(contains(object, 44)).toBe(true);
  });

  test('true if the provided string is a value within the object', () => {
    expect(contains(object, 'foo')).toBe(true);
  });

  test('does not convert input string into a number when searching for a value within the object', () => {
    expect(contains(object, '44')).toBe(false);
  });

  test('false if the provided string is not a value within the object', () => {
    expect(contains(object, 'bar')).toBe(false);
  });

  test('true if provided string is within the object, even if duplicated', () => {
    expect(contains(object, 'e')).toBe(true);
  });

  test('false if the provided property exists but is not a primitive', () => {
    expect(contains(object, [42])).toBe(false);
  });

  test('true if NaN is a property within the object', () => {
    expect(contains(object, NaN)).toBe(true);
  });
});
