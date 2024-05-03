const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];
  
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// A more advanced approach
// const sumAll = function(min, max) {
//  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//  if (min < 0 || max < 0) return "ERROR";
//  create an array of consecutive integers from min to max
//  create an array that of length equal to the difference between min and max, every element is "undefined"
//  return Array.from({ length: max - min })
//              // we name the variable _ because we aren't using it, we only
//              // use it to acces i (index), this is a convention
//              .map((_, i) => (i + 1) + min).reduce((a, b) => a + b, 0) // add all numbers
// }

module.exports = sumAll;
