const ftoc = function (temprF) {
	let temprC = ((temprF - 32) * 5) / 9;
	return Math.round(temprC * 10) / 10;
};

const ctof = function (temprC) {
	let temprF = (temprC * 9) / 5 + 32;
	return Math.round(temprF * 10) / 10;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
