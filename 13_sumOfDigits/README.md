```markdown
# Exercise 13 - Sum of Digits of a Number

### Description
Implement a function that calculates the sum of the digits of a given number.

For example:

```javascript
sumOfDigits(123) // returns 6 because 1 + 2 + 3 = 6
sumOfDigits(987) // returns 24 because 9 + 8 + 7 = 24
```

### Steps:
1. Implement a function `sumOfDigits(num)` that takes a positive integer `num` as an argument.
2. Loop through each digit of the number and add it to a sum variable.
3. Return the sum of the digits.
4. The function should handle any integer input.

### Example:
```javascript
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
```

### Test Cases:
This implementation has been tested using Jest to verify its correctness. Below are a few test cases:

- **Test Case 1**: `sumOfDigits(123)` returns `6`
- **Test Case 2**: `sumOfDigits(987)` returns `24`
- **Test Case 3**: `sumOfDigits(7)` returns `7` (single digit)
- **Test Case 4**: `sumOfDigits(0)` returns `0`
- **Test Case 5**: `sumOfDigits(123456789)` returns `45`

### Running the Tests:
To run the tests, make sure Jest is installed in your project. You can install Jest by running:

```bash
npm install --save-dev jest
```

Once installed, you can run the tests with the following command:

```bash
npm test
```

### Example Output:
When running `npm test`, Jest will execute the test cases and output the result. For example:

```bash
PASS  ./sumOfDigits.test.js
  sumOfDigits
    ✓ should return the sum of digits of a positive number (3 ms)
    ✓ should return the sum of digits of a larger number (1 ms)
    ✓ should return the sum of digits of a single digit number (1 ms)
    ✓ should return 0 for 0 (1 ms)
    ✓ should handle very large numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.412 s, estimated 2 s
```

### Requirements:

1. **Node.js** should be installed to run the JavaScript code and tests.
2. **Jest** is required to run the test cases. Install Jest with the following command:

```bash
npm install --save-dev jest
```

3. Run tests using:

```bash
npm test
```
