# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests (see in file reverseString.spec.js). Only the first test is currently enabled. So after making sure that this first one passes, enable the others one by one by deleting the .skip from the test.skip() function.


## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.
