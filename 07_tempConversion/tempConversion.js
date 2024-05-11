const convertToCelsius = function(num) {
  let convertedNum = Math.round(((num-32)*5/9) * 10)/10
  return convertedNum;
};

const convertToFahrenheit = function(num) {
  let convertedNum = Math.round(((num*9/5)+32) * 10)/10
  return convertedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
