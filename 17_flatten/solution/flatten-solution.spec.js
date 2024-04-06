const flatten = require('./flatten-solution');

describe('flatten', () => {
  test('Works', () => {
    expect(flatten([[1, [2, 3]], 4], 1)).toEqual([1, [2, 3], 4])
  })
  test('Works with a depth argument', () => {
    expect(flatten([ [1, 2], [3, 4, [[1, [8, 9]], [3, 4]], 2] ], 2)).toEqual([1, 2, 3, 4, [1, [ 8, 9 ]], [3, 4], 2]);
  });
  
  test('Works with no depth argument', () => {
    expect(flatten([[[1, 2], [3, 4]], 1, [[[[[[[[1]]]]], 4, [[[[[[5, 4]]]]]], 1]]]])).toEqual([1, 2, 3, 4, 1, 1, 4, 5, 4, 1]);
  });
  test('Works with an empty array', () => {
    expect(flatten([])).toEqual([]);
  });
});
