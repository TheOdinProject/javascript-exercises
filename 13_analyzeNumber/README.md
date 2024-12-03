# Exercise 13 - analyzeNumber

Description of the exercise goes here.

## Task

Write a function `analyzeNumber` that takes a single number as an argument and returns an object with two properties:

1. `type`: A string indicating whether the number is `"positive"`, `"negative"`, or `"zero"`.
2. `parity`: A string indicating whether the number is `"even"` or `"odd"`.

### Examples

```javascript
analyzeNumber(5); // { type: "positive", parity: "odd" }
analyzeNumber(-8); // { type: "negative", parity: "even" }
analyzeNumber(0); // { type: "zero", parity: "even" }


---

### 2. **`analyzeNumber.js`**

```javascript
function analyzeNumber(number) {
  let type;

  if (number > 0) {
    type = 'positive';
  } else if (number < 0) {
    type = 'negative';
  } else {
    type = 'zero';
  }

  const parity = number % 2 === 0 ? 'even' : 'odd';

  return { type, parity };
}

module.exports = analyzeNumber;
