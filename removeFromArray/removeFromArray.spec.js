const removeFromArray = require('./removeFromArray')

describe('removeFromArray', () => {
  test('removes a single value', () => {
    expect(removeFromArray([1, 2, 3, 4], 3)).toBe([1, 2, 4]);
  });
  test.skip('removes multiple values', () => {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toBe([1, 4]);
  });
  test.skip('ignores non present values', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toBe([1, 2, 3, 4]);
  });
  test.skip('ignores non present values, but still works', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toBe([1, 3, 4]);
  });
  test.skip('can remove all values', () => {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toBe([]);
  });
  test.skip('works with strings', () => {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toBe([2, "ho"]);
  });
  test.skip('only removes same type', () => {
    expect(removeFromArray([1, 2, 3], "1", 3)).toBe([1, 2]);
  });
});
