# Exercise 05 - joinStrings

## Step 1: Learn
First, look at the example code in `joinStrings-example.js`. Try and predict what the `console.log` output will be. When you're ready, run the test:
```bash
npm test joinStrings-example.spec.js
```
If you saw anything unexpected, feel free to review the code again.

## Step 2: Do
After understanding the example code, you will recreate the snippet on your own using the following instructions (in `joinStrings.js`):

1. Create 4 variables: `firstName`, `lastName`, `thisYear`, and `birthYear`

2. Create a 5th variable, `greeting`, that is constructed from the previous 4 variables
- It should contain a greeting that includes the person's full name and age

Note: To make the tests pass, you will need to use exact values and wording (as you will see described in `joinStrings.js`). If the tests fail, look at the feedback in your terminal then check your spacing, capitalization, and punctuation.

## Step 3: Optimize
You will edit your code to make it easier to read using the following instructions:

1. Create 2 new variables: `fullName` and `age`
- Do NOT simply type the full name and age into the new variables
- Instead, use the pre-existing variables, with the calculations that are currently inside of `greeting`

2. Edit the `greeting` string to use `fullName` and `age` instead of the other 4 variables
- `greeting` should look something like:
```js
"Hello! My name is " + fullName
```

Run all the tests one last time to ensure that the output remains unchanged:
```bash
npm test joinStrings.spec.js
```

## Hints

- Look at the docs for JavaScript variables for a quick reference.

- Refer back to the [Variables and Operators lesson](https://www.theodinproject.com/lessons/foundations-variables-and-operators) if you are still stuck.
