# Exercise 02 - repeatString

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

This function will take two arguments, `string` and `num`.

Use loops to implement `repeatString` rather than using the builtin `String.prototype.repeat` which has the same behaviour.

*Note:* The exercises after this one will not have arguments provided as this one does - you will need to provide them yourself from now on. So read each exercise's README carefully to see what kinds of arguments will be expected.

You will notice in this exercise that there are multiple tests (see in file `repeatString.spec.js`). Only the first test is currently enabled. So after making sure that this first one passes, enable the others one by one by deleting the `.skip` from the `test.skip()` function.


## Hints

- Take note of the above function call- how exactly is it being called?

- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.

- If running `npm test repeatString.spec.js` returns results similar to the below, make sure you have enabled the rest of the tests, as described in the instructions above.

```
Test Suites: 1 passed, 1 total
Tests:       6 skipped, 1 passed, 7 total
```
