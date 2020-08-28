const sumAll = function (a, b) {
  let max = a > b ? a : b,
    min = a < b ? a : b;

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number"
    ? "ERROR"
    : sum;
};

module.exports = sumAll;
