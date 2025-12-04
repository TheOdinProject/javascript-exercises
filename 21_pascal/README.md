# Exercise 21 - pascal

The pascal's triangle is modelled as follows:
- The first row is `1`.
- Each row can be considered to have a hidden `0` to either sides of it. So the first row could also be said to be `0, 1, 0`
- To obtain the next row, we take each number and add it with its rightmost neighbor.

First row: `[1]`
Second row: `[0+1, 1+0]` or simply `[1, 1]`
Third row: `[0+1, 1+1, 1+0]` or simply `[1, 2, 1]`
Fourth row: `[0+1, 1+2, 2+1, 1+0]` or simply `[1, 3, 3, 1]`
... 

The pattern continues forever.

Your task is to create a *recursive* function, `pascal` - that will take an input `n` and output the `n`th pascal's row as an array of numbers.

For example, `pascal(3)` should return `[1, 2, 1]`.
