const reverseString = function(string) {
	const arrayString = [...string];
	const joinString = arrayString.reverse().join("");
	return joinString;
}

module.exports = reverseString