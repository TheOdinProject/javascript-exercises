// Non regex
const palindromes = function (string) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'; 				//Create a variable that holds all the letters of the alphabet
	const cleanedString = string 						// Convert to lowercase, split, & filter only letters, rejoin as new const
		.toLowerCase()
		.split('')
		.filter((letter) => alphabet.includes(letter))
		.join('');
	const reversedString = cleanedString.split('').reverse().join(''); 	//Create a new const that holds reversed string
	return cleanedString === reversedString; 				//Compare cleanedString & reversedString which returns true/false
};

// Do not edit below this line
module.exports = palindromes;
