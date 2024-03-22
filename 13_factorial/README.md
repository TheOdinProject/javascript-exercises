# Exercise 13 - Factorial

Create a function that takes an input integer greater than or equal to 1 and returns the product of all its predecessing integers. If 0 is input it returns 1. It should accept strings that when converted to a number are valid inputs. For invalid inputs it returns `undefined`.

For example:

```javascript
factorial(2); // 2 * 1, Output: 2
factorial('4'); // 4 * 3 * 2 * 1, Output: 24
factorial(5); // 5 * 4 * 3 * 2 * 1, Output: 120
factorial(7.2); // Output: undefined
factorial(0); // Output: 1
```
