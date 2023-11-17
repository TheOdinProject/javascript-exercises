const sumAll = function (num1, num2) {
  let sum = 0;

  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
  } else if (num1 < 0 || num2 < 0) {
    sum = "ERROR";
  } else if (typeof num1 != "number" || typeof num2 != "number") {
    sum = "ERROR";
  } else if (isNaN(num1) || isNaN(num2)) {
    sum = "ERROR";
  } else {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
