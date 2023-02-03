const convertToCelsius = function(input) {
  let celcius = `${(input - 32) * 5/9}`;
  let newNumber = parseFloat(Number(celcius).toFixed(1));
  return newNumber;
}


const convertToFahrenheit = function(input) {
  let fahrenheit = `${(input * 9/5) + 32}`;
  let newFahrenheit = parseFloat(Number(fahrenheit).toFixed(1));
  return newFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
