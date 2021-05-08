const expect = require('expect');const { expect } = require('@jest/globals');
const helloWorld = require('./helloWorld');

// describe('Hello World', function() {
//   it('says hello world', function() {
//     expect(helloWorld()).toEqual('Hello, World!');
//   });
// });

test('says "Hello, World!"', () => {
  expect(helloWorld()).toBe("Hello, World!");
});
