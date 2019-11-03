const palindromes = function(word) {
	const wordArr = word.replace(/\W/g, '').toLowerCase().split('');
	const reversedArr = wordArr.slice().reverse();

	let status;

	for (let i = 0; i < wordArr.length; i++) {
		if (wordArr[i] === reversedArr[i]) {
			status = true;
		} else {
			status = false;
			break;
		}
	}
	return status;
}

module.exports = palindromes;
