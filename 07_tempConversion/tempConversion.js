const ftoc = function(f) {
	let cel = (f - 32) * 5 / 9;
	cel = cel.toFixed(1);
	console.log(parseFloat(cel));
	return parseFloat(cel);
};

const ctof = function(c) {
	let faren = c * 9 / 5 + 32;
	faren = faren.toFixed(1);
	console.log(parseFloat(faren));
	return parseFloat(faren);
};

ftoc(-21);
ctof(-10);
// Do not edit below this line
module.exports = {
	ftoc,
	ctof
};
