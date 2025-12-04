# Exercise 18 - contains

Write a function that searches for a value in a nested object. It returns true if the object contains that value.

Objects are compared by reference.

Examples:

```javascript
contains({ foo: "foo" }, "bar") // false
contains({ foo: { bar: "bar" } }, "bar") // true
```
