const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
    let totalSum = 0;
    if (num1 < num2) {
        let i = num1;
        while (i <= num2) {
            totalSum += i;
            i++;
        }
    } else {
        let i = num2;
        while (i <= num1) {
            totalSum += i;
            i++;
        }
    }
    return totalSum;
}

// Do not edit below this line
module.exports = sumAll;
