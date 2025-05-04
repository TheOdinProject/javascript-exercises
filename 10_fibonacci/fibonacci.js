const fibonacci = (n) => {
	const output = [0, 1];

	const number = Number(n);
	if (n < 0) return "OOPS";
	for (let i = 1; i < number; i++) {
		output.push(output[i] + output[i - 1]);
	}
	return output[number];
};

// Do not edit below this line
module.exports = fibonacci;
