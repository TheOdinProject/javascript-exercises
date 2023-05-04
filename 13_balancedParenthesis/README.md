# Exercise 13 - Balanced Parenthesis

Write a JavaScript function that takes a string as input and returns true if it contains a balanced set of parentheses and false otherwise. The function should, for example, return true for the following strings:

- "()"
- "{()}"
- "()[]"

and return false for following string:

- "(()"
- "{}}}"
- "[(])}"

## Hint:

To solve this problem, you can use a stack data structure to keep track of when parenthesis open and close.

- Each opening parenthesis in the string is pushed onto the stack by looping through it.
- If you encounter a closing parenthesis, take the top element from the stack and see if it matches. Continue iterating over the string if they match. Return false if they do not match.
- If the stack is empty at the end of the loop, return true; otherwise, return false.