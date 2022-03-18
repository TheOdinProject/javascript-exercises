const palindromes = function(str) {
	step1 = str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9s+]/g, '');
	result = step1.split('').reverse().join('');
	if (result == step1) {
		console.log(result);
		return true;
	} else {
		console.log('False');
	}
	return false;
};
// palindromes('123, 321');

// Do not edit below this line
module.exports = palindromes;
