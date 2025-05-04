const reverseString = (word) => {
	//  return string.split('').reverse().join('');
	let reverseWord = "";

	for (let i = word.length - 1; i >= 0; i--) {
		reverseWord += word.charAt(i);
	}
	return reverseWord;
};
// Do not edit below this line
module.exports = reverseString;
