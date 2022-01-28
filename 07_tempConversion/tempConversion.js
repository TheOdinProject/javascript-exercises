const ftoc = function(faren) {
  // [°F] = [°C] × 9⁄5 + 32
  var toC = ((faren - 32) * (5/9));
  toC = Math.round(toC * 10) / 10;
  return toC;
};

const ctof = function(celsius) {
  // [°C] = ([°F] − 32) × 5⁄9
  var toF = ((celsius * 1.8) + 32);
  toF = Math.round(toF * 10) / 10;
  return toF;
};

var testVar = ftoc(32);
var testVar2 = ctof(0);
console.log(testVar);
console.log(testVar2);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
