const ftoc = function(fnum) {
  //formula to convert f to c
  let cnum = (fnum - 32) * 5 / 9;
  //round to one decimal
  return Math.round(cnum * 10) / 10;
};

const ctof = function(cnum) {
  //formula to convert c to f
  let fnum = (cnum * 9/5) + 32;
  //round to one decimal
  return Math.round(fnum * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
