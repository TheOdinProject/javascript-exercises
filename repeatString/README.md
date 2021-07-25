# Exercise 02 - repeatString

Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

You will notice in this exercise that there are multiple tests (see in file `repeatString.spec.js`). Only the first test is currently enabled. So after making sure that this first one passes, enable the others one by one by deleting the `.skip` from the `test.skip()` function.


## Hints

- Take note of the above function call- how exactly is it being called?

- You're going to want to use a loop for this one.

- Create a variable to hold the string you're going to return, create a loop that repeats the given number of times and add the given string to the result on each loop.

- If running `npm test repeatString.spec.js` returns results similar to the below:

```
Test Suites: 1 passed, 1 total
Tests:       6 skipped, 1 passed, 7 total
```

- Make sure you have enabled the rest of the tests (see above).
