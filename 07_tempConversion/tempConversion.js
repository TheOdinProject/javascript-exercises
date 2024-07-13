const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit-32)*(5/9))*10)/10;
};

const convertToFahrenheit = function(celsius) {
  return Math.round(((celsius*(9/5))+32)*10)/10 ;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// ```

// Because we are human, we want the result temperature to be rounded to one decimal place