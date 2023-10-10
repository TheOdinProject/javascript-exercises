const repeatString = function (string, num) {
	if (num < 0) return 'ERROR';

	let phrase = '';
	for (let i = 0; i < num; i++) {
		phrase += string;
	}
	return phrase;
};

// Do not edit below this line
module.exports = repeatString;
