const factorial = function(n) {
  // a negative number will always contain a '-'
  // a non-integer will always contain a '.'
  // the [-.] regex literal will match strings that contain a '-' or a '.'
  // n + '' converts n to a string, which is required for the Regex.prototype.test method 
  if (/[-.]/.test(n + '')) return;

  // +n converts n to a number
  if (+n === 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;
