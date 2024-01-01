const convertToCelsius = function(num) {
  // °C = (°F − 32) x 5/9
  let celcius = (num-32)*5/9
  return Math.round(celcius * 10)/10
};

const convertToFahrenheit = function(num) {
  //°F = (°C × 9/5) + 32
  let fahrenheit = (num*9/5)+32
  return Math.round(fahrenheit * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
