# Exercise 03 - numberChecker

Modify the code so it returns `true` when the number is greater than or equal to 10, and `false` if it is less than 10.

Currently, the code returns `true` if the number is `6`, otherwise, it returns `false`.

You may also notice that in this exercise, there are multiple tests (in the file `numberChecker.spec.js`). Only the first test is currently enabled. So after making sure that the first test passes, enable the next one by deleting the `.skip` portion from the `test.skip()` function. It is usually easier if you enable only one test a time, then edit your code so that it passes. You can keep enabling only one at a time until slowly but surely, they all pass!

- If running `npm test numberChecker.spec.js` returns results similar to what is shown below, make sure that you have enabled the rest of the tests, as described in the instructions above.

```
Test Suites: 1 passed, 1 total
Tests:       3 skipped, 1 passed, 4 total
```

## Hints

- You only need to edit line 2.

- Look at the docs for comparison operators in JavaScript for a quick reference.
