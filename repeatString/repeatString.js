const repeatString = function(word, times) {
	let arr = word.split(' ');
	
	for (let i = 1; i < times; i++) {
		arr.push(word);
	}

	return arr.join('');
}

module.exports = repeatString
