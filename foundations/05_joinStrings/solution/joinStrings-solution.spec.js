const values = require('./joinStrings-solution')

describe('follow', () => {
  test('firstName is Carlos', () => {
    expect(values.firstName).toEqual('Carlos');
  });
  test('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Stevenson');
  });
  test('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(1965);
  });
  test('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
  test('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(18);
  });
});
