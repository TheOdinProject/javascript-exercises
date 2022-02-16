const reverseString = function(string) {
	let arr = string.split('');
	arr.reverse();
	let word = arr.join('');
	return word;
};

// Do not edit below this line
module.exports = reverseString;
