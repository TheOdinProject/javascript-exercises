const ftoc = function(tempF) {
// [°C] = ([°F] − 32) × 5⁄9
let fToC = ((tempF - 32.0) * (5/9))
let fixed = fToC.toFixed(1)
return parseFloat(fixed)
};

const ctof = function(tempC) {
// [°F] = [°C] × 9⁄5 + 32
let cToF = ((tempC * (9/5)) + 32.0)
let fixed = cToF.toFixed(1)
return parseFloat(fixed)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
