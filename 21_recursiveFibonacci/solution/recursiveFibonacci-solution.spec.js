const recursiveFibonacci = require('./recursiveFibonacci-solution');

describe('recursiveFibonacci', () => {
  test('Gets 1 fibonacci number', () => {
    expect(recursiveFibonacci(1)).toEqual([1]);
  });
  
  test('Gets 2 fibonacci numbers', () => {
    expect(recursiveFibonacci(2)).toEqual([1, 1]);
  });
  
  test('Gets 3 fibonacci numbers', () => {
    expect(recursiveFibonacci(3)).toEqual([1, 1, 2]);
  });
  
  test('Gets 4 fibonacci numbers', () => {
    expect(recursiveFibonacci(4)).toEqual([1, 1, 2, 3]);
  });
  
  test('Gets 5 fibonacci numbers', () => {
    expect(recursiveFibonacci(5)).toEqual([1, 1, 2, 3, 5]);
  });
  
  test('Gets 6 fibonacci numbers', () => {
    expect(recursiveFibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
  });
  
  test('Gets 10 fibonacci numbers', () => {
    expect(recursiveFibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
  
  test('Gets 12 fibonacci numbers', () => {
    expect(recursiveFibonacci(12)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  });
  
  test('Gets 15 fibonacci numbers', () => {
    expect(recursiveFibonacci(15)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);
  });
  
  test('Gets 20 fibonacci numbers', () => {
    expect(recursiveFibonacci(20)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765
    ]);
  });
});

