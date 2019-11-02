const palindromes = function(word) {
	const wordArr = word.replace(/\W/g, '').toLowerCase().split('');
	const reversedArr = wordArr.slice().reverse();

	var status = false;

	for (var i = 0; i < wordArr.length; i++) {
		if (wordArr[i] === reversedArr[i]) {
			status = true;
		} else {
			break;
		}
	}
	return status;
}

module.exports = palindromes;
