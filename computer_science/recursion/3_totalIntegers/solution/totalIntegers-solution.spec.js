const totalIntegers = require('./totalIntegers-solution');

describe('totalIntegers', () => {
  test('Counts all integers in a simple array of only integers', () => {
    expect(totalIntegers([1, 2, 3])).toBe(3);
  });
  test('Ignores non-number values', () => {
    expect(totalIntegers([1, 2, '3', 4])).toBe(3);
  });
  test('Counts all integers in a plain object', () => {
    expect(totalIntegers({ a: 1, b: '2', c: 3 })).toBe(2);
  });
  test('Does not find any integers in nested empty arrays', () => {
    expect(totalIntegers([[], [], []])).toBe(0);
  });
  test('Counts integers in deeply nested arrays', () => {
    expect(totalIntegers([[[[[[[[[[[[[[4]]]]]], 246]]]]]]]])).toBe(2);
  });
  test('Counts negative integers', () => {
    expect(totalIntegers([5, 7, -7, [45, -1, -0], [4, 7, -4, -4, -4, [777777, -45674]], [-5477654]])).toBe(14);
  });
  test('Does not count non-integer numbers', () => {
    expect(totalIntegers([5, 7.7, 7, [45, 1, 0], [4.0, 7, [7.77777, 4567.4]], [5477.654]])).toBe(7);
  });
  test('Returns undefined for non-array/object arguments', () => {
    expect(totalIntegers('2')).toBe(undefined);
    expect(totalIntegers(() => {})).toBe(undefined);
    expect(totalIntegers(42)).toBe(undefined);
    expect(totalIntegers(NaN)).toBe(undefined);
  });
  test('Does not count NaN as an integer', () => {
    expect(totalIntegers([5, NaN, [NaN, NaN, 64], 4])).toBe(3);
  });
  test('Counts all integers even with deeply nested containing multiple types', () => {
    expect(totalIntegers([NaN, [[{}], 555 ], '444', [], 74.0, undefined, [[() => {}], [4], Infinity, [[[], -44.0], [null, '-4'], NaN [[]], 6]], () => {}, [[], [-Infinity, ['4'], [4.7, -46.7], NaN]]])).toBe(5);
  });
  test('Counts all integers when nested arrays and objects are mixed together', () => {
    expect(totalIntegers([4, 6, { a: 1, b: { a: [5, 10], b: 11 } }, 9])).toBe(7);
  });
});
