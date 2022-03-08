const reverseString = function(string) {
	let backString = '';

	for (i = string.length - 1; i >= 0; i--) {
		backString += string[i];
	}
	console.log(backString);
	return backString;
};
reverseString('Howdy');

// Do not edit below this line
module.exports = reverseString;
