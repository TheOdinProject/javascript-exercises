# Exercise 1 - Factorial

Write a recursive [factorial](https://simple.wikipedia.org/wiki/Factorial) function that takes a non-negative integer, and returns the product of all positive integers less than or equal to the input integer. An input of `0` should return `1`. The function should only accept numbers, so `'4'` should not be accepted as it is a string. All invalid inputs should return `undefined`.

For example:

```javascript
factorial(5); // 5 * 4 * 3 * 2 * 1, Output: 120
factorial(0); // Output: 1
factorial(7.2); // Output: undefined
factorial('4'); // Output: undefined
```
