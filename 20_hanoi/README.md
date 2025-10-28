# Exercise 20 - hanoi

Good job, you have come a very long way. You should be proud of yourself for making it this far! At this point, you hopefully feel comfortable with recursion, and so, this **final recursive exercise** should give you a proper challenge and take your abilities to the *next* level.

Tower of Hanoi is a classic challenge in which we have 3 towers. Tower 2 and tower 3 are empty. Tower 1 has `n` disks. The goal is to move all disks from tower 1 to tower 3 so that they are in the exact same order. For instance:

```javascript
[[3, 2, 1], [], []] 

// ...

[[], [], [3, 2, 1]]
```

The rules are as follows:
- Each disk has a length. For abstraction purposes, we will imagine each disk as an integer with that disk's length.
- We can only move 1 disk at a time between any of the towers
- The towers are modelled as stacks. We can move disks from the top of one stack to the top of another stack with the `Array.prototype.pop` and `Array.prototype.push` methods.
- **Disks can only be placed on top of disks that are smaller**. For instance, we cannot have the tower `[3, 4]` but `[4, 3]` is fine.

Your task is to create a function, `hanoi(n)`, that when given the number of disks in the starting tower (`n`), will return an array containing the steps that have to be taken in order to get from the initial state to the final state. Each step will be a string in the form:

```javascript
`Move disc ${discNumber} from tower ${fromTower} to tower ${toTower}`
```

The function **must** return a solution in the minimum number of moves. i.e. there will be no duplicates in the solution array returned.

For example, here is the expected output of `hanoi(3)`:

```javascript
[
  "Move disc 1 from tower 1 to tower 3",
  "Move disc 2 from tower 1 to tower 2",
  "Move disc 1 from tower 3 to tower 2",
  "Move disc 3 from tower 1 to tower 3",
  "Move disc 1 from tower 2 to tower 1",
  "Move disc 2 from tower 2 to tower 3",
  "Move disc 1 from tower 1 to tower 3",
]
```
