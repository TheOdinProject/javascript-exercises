const palindromes = function(word) {
	const wordArr = word.split('');
	const reversedArray = wordArr.reverse();

	newArray = [];

	for (var i = 0; i < wordArr.length; i++) {
		if (wordArr[i] === reversedArray[i]) {
			newArray.push(wordArr[i])
		} else {
			newArray = ['Not a palindrome'];
		}
	}
	return true ? newArray.join('') === word : false;
}

module.exports = palindromes
