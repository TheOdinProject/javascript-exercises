const caesar = function(value, addBy) {

	const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const specialChars = [' ', '!', ','];
	
	const valueArray = value.split('');
	var newArr = [];

	for (var i = 0; i < valueArray.length; i++) {
		
		if (lowerCaseAlphabet.includes(valueArray[i])) {
			let letterIndex = lowerCaseAlphabet.indexOf(valueArray[i]);
			var finalIndex;
			if (addBy < 0) {
				// var finalIndex = letterIndex - addBy;
				finalIndex = letterIndex - parseInt(addBy);
				return finalIndex;
			} else {
				finalIndex = letterIndex + addBy;
			}

			newArr.push(lowerCaseAlphabet[finalIndex]);
		} else if (upperCaseAlphabet.includes(valueArray[i])) {
			let letterIndex = upperCaseAlphabet.indexOf(valueArray[i]);
			let finalIndex = letterIndex + addBy;

			newArr.push(upperCaseAlphabet[finalIndex]);
		} else if (specialChars.includes(valueArray[i])) {
			newArr.push(valueArray[i]);
		} else {
			return valueArray[i];
		}
	}
	return newArr.join('');
}

module.exports = caesar;
