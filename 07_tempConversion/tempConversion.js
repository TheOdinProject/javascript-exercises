// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// ftoc(32) // fahrenheit to celsius, should return 0

// ctof(0) // celsius to fahrenheit, should return 32
// ```

// Because we are human, 
// we want the result temperature to be rounded to one decimal place: 
// i.e., `ftoc(100)` should return `37.8` and not `37.77777777777778`.

const ftoc = function(degF) {
  var degC =  (degF - 32) * (5/9);
  degC = Number.degC.toFixed(1);
  return degC;
};

const ctof = function(degC) {
  var degF = (degC*9/5) + 32;
  degF = Number.degF.toFixed(1);
  return degF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
