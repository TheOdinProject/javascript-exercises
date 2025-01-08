const helloWorld = require('./helloWorld-solution'); // Import the function

describe('Hello World', function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
