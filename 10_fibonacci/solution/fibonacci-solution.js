const fibonacci = function(count) {
	if (count < 0) return "OOPS"
	const fibPart = [0, 1];
	for (let index = 1; index < count; index++) {
		fibPart.push(fibPart[index] + fibPart[index -1]);
	}
	return fibPart[count];
};

module.exports = fibonacci;
