const ftoc = function(f) {
  c = (f - 32) * (5/9);
  let rounded = Math.round(c * 10) / 10;
  return rounded;
};

const ctof = function(c) {
  f = (c * (9/5) + 32);
  let rounded = Math.round(f * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
