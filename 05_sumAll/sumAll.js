const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0 ||
    num1 % 1 > 0 ||
    num2 % 1 > 0
  ) {
    return "ERROR";
  }
  const start = Math.min(num1, num2);
  const end = Math.max(num1, num2);
  if ((end + start) % 2 === 0) {
    const midpoint = (end + start) / 2;
    return ((end - start) / 2) * (start + end) + midpoint;
  }
  //find the midpoint
  return (end / 2) * (start + end);
};

// Do not edit below this line
module.exports = sumAll;
