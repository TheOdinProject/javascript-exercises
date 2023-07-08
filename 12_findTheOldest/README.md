# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

The objects follow this format:
```javascript
const people = [
      {
        name: "nameA",
        yearOfBirth: 1880,
        yearOfDeath: 1920,
      },
      {
        name: "nameB",
        yearOfBirth: 1950,
        yearOfDeath: 2000,
      },
      {
        name: "nameC",
        yearOfBirth: 2000,
        yearOfDeath: 2021,
      },
    ]
```

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
