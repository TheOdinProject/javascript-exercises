const convertToCelsius = function(temp) {
  let Ftemp = temp;
  let intoCelsius = (Ftemp - 32)* 5/9 
  return Math.round(intoCelsius*10)/10;
};

const convertToFahrenheit = function(temp) {
  let cTemp = temp;
  let intoFahrenheit = (cTemp * 9/5 + 32)  
  return Math.round(intoFahrenheit* 10) / 10;
};

convertToCelsius(32)
convertToFahrenheit(0)


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
