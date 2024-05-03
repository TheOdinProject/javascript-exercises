const mergeSort = require('./mergeSort-solution');

describe('mergeSort', () => {
  test('sorts an array of numbers', () => {
    expect(mergeSort([4, 1, 3, 9, 7])).toEqual([1, 3, 4, 7, 9]);
  });

  test('returns an empty array when called with an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('sorts an array with duplicate elements', () => {
    expect(mergeSort([5, 3, 8, 3, 2])).toEqual([2, 3, 3, 5, 8]);
  });

  test('sorts an array of negative numbers', () => {
    expect(mergeSort([-3, -1, -7, -4])).toEqual([-7, -4, -3, -1]);
  });

  test('sorts an array with negative and positive numbers', () => {
    expect(mergeSort([-1, 2, -3, 4, -5])).toEqual([-5, -3, -1, 2, 4]);
  });

  test('sorts an array with one element', () => {
    expect(mergeSort([10])).toEqual([10]);
  });

  test('sorts an already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an array in descending order', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts a large array', () => {
    const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = [...largeArray].sort((a, b) => a - b);
    expect(mergeSort(largeArray)).toEqual(sortedArray);
  });

  test('handles array with all the same elements', () => {
    expect(mergeSort([7, 7, 7, 7, 7])).toEqual([7, 7, 7, 7, 7]);
  });
});
