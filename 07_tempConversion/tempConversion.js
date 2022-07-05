const ftoc = function(fnum) {
  ctemp = Math.round(((fnum - 32) * (5/9)) * 10) / 10;
  return ctemp;
};

const ctof = function(cnum) {
  ftemp = Math.round(((cnum * (9/5)) + 32) * 10) / 10;
  return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
