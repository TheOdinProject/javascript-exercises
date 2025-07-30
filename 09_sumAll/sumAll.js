const sumAll = function (start, end) {
  if (
    Number.isInteger(start) &&
    Number.isInteger(end) &&
    start > 0 &&
    end > 0
  ) {
    let sum = 0;
    if (start < end) {
      for (let i = start; i <= end; i++) {
        sum += i;
      }
      return sum;
    } else {
      for (let i = start; i >= end; i--) {
        console.log(i);
        sum += i;
      }
      return sum;
    }
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
