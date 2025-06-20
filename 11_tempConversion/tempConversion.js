const convertToFahrenheit = function(tempInFahrenheit) {

  //Conveeting from Celsius to Fahrenheit

  tempInFahrenheit = Math.round(((tempInFahrenheit * (9/5)) + 32) * 10) / 10;

  return tempInFahrenheit;
};

const convertToCelsius = function(tempInCelsius) {

  // Converting from Fahrenheit to Celsius
  tempInCelsius = Math.round(((tempInCelsius - 32) * (5/9)) * 10) / 10;
  
  return tempInCelsius;

};

convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
