const expect = require('expect');
const helloWorld = require('./helloWorld');

// describe('Hello World', function() {
//   it('says hello world', function() {
//     expect(helloWorld()).toEqual('Hello, World!');
//   });
// });

describe('helloWorld', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toBe("Hello, World!");
  })
});
