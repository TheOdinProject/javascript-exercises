const sumAll = function(num1, num2) {
	if (Math.sign(num1) === 1 && Math.sign(num2) === 1) {
		if (Number.isInteger(num1) && Number.isInteger(num2)) {
			let total = 0;
			for (let i = num1; i < num2 + 1; i++) {
			total += i;
			}
			return total;
		} else {
			return "ERROR";
		}
	} else {
		return "ERROR";
	}
}

module.exports = sumAll