const convertToCelsius = function(degress) {
  const degreesC= (degress-32)*5/9;
  return Math.round(degreesC*10)/10;
  
};

const convertToFahrenheit = function(degrees) {
 const degreesF= (degrees*9/5)+32;
  return Math.round(degreesF*10)/10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
