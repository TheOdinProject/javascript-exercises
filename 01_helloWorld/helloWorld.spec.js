//imports code from another file 
const helloWorld = require('./helloWorld');

describe(
    //body of the test 

    'Hello World', function() {
    test('says "Hello, World!"' //test description
      , function() {
      expect(helloWorld()).toEqual('Hello, World 123!');
    });
  }


);
