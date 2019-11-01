const palindromes = function(word) {
	const wordArr = word.replace(/\W/g, '').toLowerCase().split('');
	const reversedArray = wordArr.reverse();

	newArray = [];

	for (var i = 0; i < wordArr.length; i++) {
		if (wordArr[i] === reversedArray[i]) {
			newArray.push(wordArr[i])
		} else {
			break;
		}
	}
	return true ? newArray.join('') === word.replace(/\W/g, '').toLowerCase() : false;
}

module.exports = palindromes
