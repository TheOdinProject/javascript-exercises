const sumAll = function (...args) {
  for (let arg of args) {
    if (typeof arg !== "number" || arg < 0) {
      return "ERROR";
    }
  }
  if (args[0] > args[1]) {
    args.reverse();
  }
  let sum = 0;
  for (let i = args[0]; i <= args[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
