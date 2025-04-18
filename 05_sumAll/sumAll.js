const sumAll = function(firstNum, secondNum) {

    const min = Math.min(firstNum)
    const max = Math.max(secondNum)
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
      }
      return sum;
};

// Do not edit below this line
module.exports = sumAll;
