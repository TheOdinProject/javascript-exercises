# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests (in the file `reverseString.spec.js`). Currently, only the first test is enabled. After ensuring that the first test passes, enable the remaining tests one by one by removing the `.skip` from the `test.skip()` function.


## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.
