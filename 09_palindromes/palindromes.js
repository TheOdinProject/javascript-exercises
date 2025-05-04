const palindromes = (words) => {
	const pattern = /[a-zA-Z_0-9]/g;
	const string = words.toLowerCase().match(pattern).join("");
	const reversedString = string.split("").reverse().join("");
	return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
