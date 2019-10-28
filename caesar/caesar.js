const caesar = function(value, addBy) {

	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const specialChars = [' ', '!', ','];
	const valueLowerCase = value.toLowerCase();
	const valueArray = valueLowerCase.split('');

	var newArr = [];

	for (var i = 0; i < valueArray.length; i++) {
		
		if (alphabet.includes(valueArray[i])) {
			let letterIndex = alphabet.indexOf(valueArray[i]);
			let finalIndex = letterIndex + addBy;

			newArr.push(alphabet[finalIndex]);
		} else if (specialChars.includes(valueArray[i])) {
			newArr.push(valueArray[i]);
		} else {
				// return 'is not a part of the alphabet';
			return 'Hello'
		}
	}
	return newArr.join('');
}

module.exports = caesar;

/* Pseudocode
1 Take input and place in an array - then we have an array of letters
2 If not a letter then ignore - DONE
3 If a space or ! then return space or ! - DONE
4 If it is a letter, it comes to the end then keep going around 
5 
6 
7 Factor in minus


*/ 
