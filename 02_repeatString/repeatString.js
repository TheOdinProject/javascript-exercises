const repeatString = function(word, num) {
	let out = '';
	if (num < 0) return 'ERROR';
	for (i = 0; i < num; i++) {
		out += word;
	}
	return out;
};

// Do not edit below this line
module.exports = repeatString;
