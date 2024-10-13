const sumAll = function (start, end) {
  //   The function first checks if the inputs are valid numbers and positive. If not, it returns 'ERROR'
  if (
    start < 0 ||
    end < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(end)
  ) {
    return "ERROR";
  }

  // Ensure that start is always the smaller number
  if (start > end) {
    [start, end] = [end, start];
  }

  // Loop through numbers from start to end
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
