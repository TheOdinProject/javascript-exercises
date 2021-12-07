const ftoc = function(value) {
  let convertedValue = (value - 32) * (5/9);
  let rounded = Math.round(convertedValue * 10) / 10
  return rounded;
};
//[°C] = ([°F] − 32) × 5⁄9
const ctof = function(value) {
  let convertedValue = value * (9/5) + 32;
  let rounded = Math.round(convertedValue * 10) / 10
  return rounded;
};
//	[°F] = [°C] × 9⁄5 + 32
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
