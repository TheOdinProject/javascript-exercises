# Exercise 17 - flatten

Write a function that takes in an array and an optional depth argument which defaults to `Infinity` if not specified.
The function returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```javascript
flatten([[1, 2], [3, 4]]); // Output: [1, 2, 3, 4]
flatten([[1, [8, 9]], [3, 4]], 2); // Output: [1, [8, 9], 3, 4]
flatten([2, 4, 6]); // Output: [2, 4, 6]
```
