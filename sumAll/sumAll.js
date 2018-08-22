const sumAll = function(a, b) {
  const argsToArray = Array.from(arguments);
  argsToArray.sort(function(a, b){return a-b});
  let firstNum = argsToArray[0];
  let secondNum = argsToArray[1];
  let sum = 0;

  var isNegative = (element) => element < 0 
  var isNotNumber = (element) => typeof element != 'number'

  if (argsToArray.some(isNegative)) {
    return "ERROR";
  } else if (argsToArray.some(isNotNumber)) {
    return "ERROR";
  } else {
    while (firstNum <= secondNum) {
      sum += firstNum++;
    }
  return sum;
  }
}

module.exports = sumAll
