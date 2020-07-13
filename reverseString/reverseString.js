
const reverseString = function(string1) {
	let reverseText=""
	for (var i = string1.length -1 ; i >= 0  ; i--)
	{
		reverseText +=string1[i];
		
		}
    return reverseText;
}

module.exports = reverseString
