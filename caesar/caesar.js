const caesar = function(value, addBy) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const newVal = value.toString().toLowerCase();

	if (alphabet.includes(newVal) === true) {
		var letterIndex = alphabet.indexOf(newVal);
		var finalIndex = letterIndex + addBy;

		return alphabet[finalIndex].toUpperCase();
	} else {
		return 'Value is not a part of the alphabet';
	}
}

module.exports = caesar;

/* Pseudocode






*/ 
