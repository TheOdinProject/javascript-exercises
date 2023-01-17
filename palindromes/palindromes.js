//This is a method using Regular Expressions, and is probably the easiest if you know how to use them

// const palindromes = function (string) {
// 	const processedString = string.toLowerCase().replace(/[^a-z]/g, '');
// 	return processedString.split('').reverse().join('') == processedString;
// };

//there are many ways of checking the solution for palindromes without using regex. Here is one.
const palindromes = function (string) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'; //create a variable that holds all the letters of the alphabet

	//Take the input string, convert to lowercase, split, reverse, & filter only letters, before rejoining them together as the constant cleanedString.
	const cleanedString = string
		.toLowerCase()
		.split('')
		.filter((letter) => alphabet.includes(letter))
		.join('');

	//make a new const from the cleaned string, and reverse it.
	const reversedString = cleanedString.split('').reverse().join('');

	//we then finally compare cleanedString & reversedString which returns true/false
	return cleanedString === reversedString;
};

//check with console.log statements below in your editor/

// console.log(palindromes('A car, a man, a maraca.'));
// console.log(palindromes('ZZZZ car, a man, a maracazzzz.'));
// console.log(palindromes('this is not a paldindrome'));
// Do not edit below this line
module.exports = palindromes;
