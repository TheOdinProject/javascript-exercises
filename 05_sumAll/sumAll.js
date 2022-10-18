const sumAll = function (pass1, pass2) {
	let sum = 0,
		start,
		end;

	if (Number.isInteger(pass1) && Number.isInteger(pass2)) {
		if (pass1 > 0 && pass2 > 0) {
			if (pass1 < pass2) {
				start = pass1;
				end = pass2;
			} else {
				start = pass2;
				end = pass1;
			}

			for (var a = start; a <= end; a++) {
				sum += a;
			}
			return sum;
		} else return "ERROR";
	} else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
