const sumAll = function (min, max) {
  let sum = 0;

  if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
  if (min < 0 || max < 0) return 'ERROR';

  if (min > max) [min, max] = [max, min];
  // alternative way to swap the values of min and max
  //  if (min > max) {
  //    const temp = min;
  //    min = max;
  //    max = temp;
  //  }

  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
