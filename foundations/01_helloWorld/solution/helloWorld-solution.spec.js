const helloWorld = require('./helloWorld-solution');

describe('Hello World', function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
