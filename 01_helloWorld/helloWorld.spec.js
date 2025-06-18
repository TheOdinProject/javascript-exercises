//imports code from another file
const helloWorld = require("./helloWorld");

describe(//body of the test

"Hello World", function () {
  test('says "Hello, World!"', function () { //test description
    expect(helloWorld()).toEqual("Hello, World 123!");
  });

  test('does not say meow "', function () { //test description
    expect(helloWorld()).not().toEqual("meow");
  });
});
