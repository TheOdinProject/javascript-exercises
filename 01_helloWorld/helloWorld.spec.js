const greeting = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(greeting()).toEqual('Hello, World!');
  });
});
