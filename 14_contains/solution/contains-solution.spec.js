const contains = require('./contains-solution');

describe('contains', () => {
  const nestedObject = {
    data: {
      banana: NaN,
      info: {
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

  test('true if property is number', () => {
    expect(contains(nestedObject, 44)).toBe(true);
  });

  test('true if property is string', () => {
    expect(contains(nestedObject, 'foo')).toBe(true);
  });

  test('does not do type conversions', () => {
    expect(contains(nestedObject, '44')).toBe(false);
  });

  test('false if property is not in object', () => {
    expect(contains(nestedObject, 'bar')).toBe(false);
  });

  test('true if property is duplicated', () => {
    expect(contains(nestedObject, NaN)).toBe(true);
  });

  test('false if property exists but is not primitive', () => {
    expect(contains(nestedObject, [42])).toBe(false);
  });
});
