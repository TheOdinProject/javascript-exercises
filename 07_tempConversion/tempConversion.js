const ftoc = function(fnum) {
  //formula to convert f to c
  let cnum = (fnum - 32) * 5 % 9;
  //round to one decimal
  let roundCnum = parseInt(cnum.toFixed(1));
  return roundCnum;
};

const ctof = function() {
  //formula to convert c to f
  let fnum = (cnum * 9/5) + 32;
  //round to one decimal
  let roundFnum = parseInt(fnum.toFixed(0));
  return roundFnum;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
