const sumAll = function(firstNum, secondNum) {
  
  if ((!Number.isInteger(firstNum)) || (!Number.isInteger(secondNum)) ||
    (firstNum < 0) || (secondNum < 0)) {
    return 'ERROR';
  }
  let low = 0;
  let high = 0;
  
  if (firstNum > secondNum) {
    high = firstNum;
    low = secondNum;
  }
  else {
    high = secondNum;
    low = firstNum;
  }
  let sum = 0;

  for (let i = low; i <= high; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
