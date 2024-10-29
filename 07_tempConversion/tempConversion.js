const convertToCelsius = function(fahr) {
  let result = (fahr - 32) * 5/9
  return Math.round(result*10)/10
};

const convertToFahrenheit = function(cels) {
  let result = (cels* 9/5)+32
  return Math.round(result*10)/10
};

convertToFahrenheit(0)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
