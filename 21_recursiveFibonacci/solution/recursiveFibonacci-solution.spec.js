const recursiveFibonacci = require('./recursiveFibonacci-solution');

describe('recursiveFibonacci', () => {
  test('Gets 1 fibonacci number', () => {
    expect(recursiveFibonacci(1)).toBe([1]);
  });
  
  test('Gets 2 fibonacci number', () => {
    expect(recursiveFibonacci(2)).toBe([1, 1]);
  });
  
  test('Gets 3 fibonacci number', () => {
    expect(recursiveFibonacci(3)).toBe([1, 1]);
  });
  
  test('Gets 4 fibonacci number', () => {
    expect(recursiveFibonacci(4)).toBe([1, 1]);
  });
  
  test('Gets 6 fibonacci number', () => {
    expect(recursiveFibonacci(6)).toBe([1, 1]);
  });
  
  test('Gets 10 fibonacci number', () => {
    expect(recursiveFibonacci(10)).toBe([1, 1]);
  });
  
  test('Gets 12 fibonacci number', () => {
    expect(recursiveFibonacci(12)).toBe([1, 1]);
  });
  
  test('Gets 16 fibonacci number', () => {
    expect(recursiveFibonacci(16)).toBe([1, 1]);
  });
  
  test('Gets 20 fibonacci numbers', () => {
    expect(recursiveFibonacci(20)).toBe([1, 1]);
  });
  
  test('Gets 22 fibonacci numbers', () => {
    expect(recursiveFibonacci(22)).toBe([1, 1]);
  });
});
