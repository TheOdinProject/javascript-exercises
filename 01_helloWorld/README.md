# Exercise 01 - Hello World

The main purpose of this exercise is to walk you through the process of running the tests and make sure everything is set up and running correctly.

In this directory you will find 2 other files:
  1. `helloWorld.js`
  2. `helloWorld.spec.js`

This setup should be the same for all of the exercises.  The plain javascript file is where you'll write your code, and the `spec` file contains the tests that verify your code is functional.

Let's look at the spec file first:
```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```
At the very top of the file we use `require()` to import the code from the javascript file (`helloWorld.js`) so that we can test it.

The next block (`describe()`) is the body of the test.  Basically, all it's doing is running your code and testing to see if the output is correct.  The `test()` function describes what should be happening in plain english and then includes the `expect()` function.  For this simple example it should be pretty simple to read.

For now you do not need to worry about how to write tests, but you should try to get comfortable enough with the syntax to figure out what the tests are asking you to do.  Go ahead and run the tests by entering `npm test helloWorld.spec.js` in the terminal and watch it fail.  The output from that command should tell you exactly what went wrong with your code.  In this case, running the `helloWorld()` function should return the phrase 'Hello, World!' but instead it returns an empty string...

so let's look at the javascript file:
```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld
```
In this file we have a simple function called helloWorld that returns an empty string... which is exactly what our test was complaining about.  The `module.exports` on the last line is how we export the function so that it can be imported with `require()` in the spec file.

Go ahead and see if you can make the test pass by editing the return value of the function, and then running the test file again.

Just to make sure, in case you're confused at this point, the test is telling you that running the function `helloWorld` should return the phrase `Hello, World!`.  Punctuation and capitalization definitely matter here, so double check that if the test still isn't passing.

this is what the final function should look like:
```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld
```

For the most part we've set up these tests in such a way that you only have to write the code being tested.  You should not have to worry about importing or exporting anything at this stage.. so just work around that bit of the code and write what it takes to make them pass!
