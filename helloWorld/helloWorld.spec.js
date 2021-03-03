const helloWorld = require('./helloWorld');

test('says "Hello, World!"', function() {
  expect(helloWorld()).toBe("Hello, World!");
});
