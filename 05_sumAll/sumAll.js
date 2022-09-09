const sumAll = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number'
      || a < 0 || b < 0) {
    return 'ERROR';
  }
  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  let sum = 0;
  for (i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
