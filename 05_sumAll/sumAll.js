const sumAll = function (number1, number2) {
  let number1State = !Number.isInteger(number1) || (number1 < 0);
  let number2State = !Number.isInteger(number2) || (number2 < 0);
  if (number1State || number2State) {
    return "ERROR";
  } else {
    let max = number1 >= number2 ? number1 : number2;
    let min = number1 >= number2 ? number2 : number1;
    let result =0

    for (i=min;i<=max;i++) {
        result += i
    }
    return result
}
};

// Do not edit below this line
module.exports = sumAll;
