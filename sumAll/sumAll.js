const sumAll = function (numStart, numEnd) {
  // final sum variable
  let sum = 0;
  if (numStart < 0 || numEnd < 0 || typeof numStart != "number" || typeof numEnd != "number") {
    return "ERROR";
  } else if (numStart > numEnd) {
    [numStart, numEnd] = [numEnd, numStart];
  }
  for (let i = numStart; i <= numEnd; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
