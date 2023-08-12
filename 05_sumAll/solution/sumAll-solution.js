const sumAll = function (min, max) {
  // The Line of code below returns "ERROR" which is a string if min and max aren't numbers
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  // This line of code also returns "ERROR" is min and max are less than 0
  if (min < 0 || max < 0) return "ERROR";
  /* 
    The block of code below checks if min is greater than max
    And if that is true, a new variable called 'temp' is created
    The value of 'temp' will be equal to min and max will be equal to temp
  */
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  /* We're running a for loop below which
    Initializes the value of i to be that of min and we're checking if i is less than or equal to max
    And if those conditions are true, we'll be adding i to value of sum
   */
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
