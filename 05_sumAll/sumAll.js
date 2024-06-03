const sumAll = function (num1, num2) {
  // Check if parameters are numbers and positive integers
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2)
  ) {
    return "ERROR";
  }

  if (num1 > num2) {
    let swap = num1;
    num1 = num2;
    num2 = swap;
  }

  let finalSum = 0;
  for (let i = num1; i <= num2; i++) {
    finalSum += i;
  }
  return finalSum;
};

console.log(sumAll(10, 1));

// Do not edit below this line
module.exports = sumAll;
