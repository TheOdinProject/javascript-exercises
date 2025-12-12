const values = require('./joinStrings-example')

describe('joinStrings-example', () => {
  test('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(1947);
  });
  test('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(1965);
  });
  test('firstName is Carlos', () => {
    expect(values.firstName).toEqual('Carlos');
  });
  test('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Stevenson');
  });
  test('greeting is put together correctly', () => {
    expect(values.greeting).toEqual('Hello! My name is Carlos Stevenson and I am 18 years old.');
  });
});
