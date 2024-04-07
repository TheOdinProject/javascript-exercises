# Exercise 18 - recursiveCalculator

Write a function that accepts a string which is formatted as a mathematical expression and evaluates it.

The input string will only contain `*`, `-`, `+`, `()` and `/` operators

You do not have to worry about order of precedence at all, the tests will have every expression wrapped inside of many parentheses, which will be able to be evaluated one after the other.
A clear example can be seen below, technically the outermost parentheses around the multiplication are not required, however we have wrapped it in parentheses to make it so you don't have to worry about order of precedence.

```javascript
recursiveCalculator('4 - ((3 / 9) * (3 + -6))') // -1
```
We have also provided a function for you to use, `evaluate`, that will take an input string that is an expression with a single operator and two operands. The input may be wrapped in parentheses or contain spaces. Examples:
```javascript
evaluate('1*4')
evaluate('(4 * 5)')
```

The `evaluate` function definition while being possible to create without, uses several regular expressions.
These expressions are explained in detail if you are curious. Regular expressions can be a powerful way to deal with strings however they are hard to read and so, should be used sparingly and when they are used, it is important to comment on what the expression does. 

More often than not, code that does not use regular expressions is more readable and easier to debug and reason about, even if being several times longer.

Despite the fact, knowing at least the basics won't hurt as you are likely to encounter code that uses them at some point in you career, but do not worry if you don't get it, for the purposes of this course you should not worry about them.

For learning reasons, we have also included a commented out version of `evaluate` that does not use regular expressions, so you can compare them.
