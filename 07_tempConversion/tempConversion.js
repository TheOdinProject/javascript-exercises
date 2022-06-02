const ftoc = function(fah) {
	return Math.round((5/9 * (fah-32))*10)/10;
};

const ctof = function(c) {
     return Math.round(((c * 9/5) + 32)*10)/10;

};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
