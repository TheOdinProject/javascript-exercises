const sumAll = function (num1, num2) {
  let result = 0;
  //   if (num1.typeof !== "number" || num2.typeof !== "number") return "ERROR";
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

  if (num1 < 0 || num2 < 0) {
    result = "ERROR";
  } else if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      result += i;
    }
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      result += i;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
