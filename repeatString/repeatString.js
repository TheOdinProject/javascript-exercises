const repeatString = function(word, times) {
	let arr = [];

	if (times < 0) {
		return 'ERROR';
	} else {
		for (let i = 0; i < times; i++) {
			arr.push(word);
		}
	}

	return arr.join('');
}

module.exports = repeatString
