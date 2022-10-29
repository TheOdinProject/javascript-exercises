const reverseString = function(string) {
    let enteredWord = string.split("").reverse().join("");
    return enteredWord
};
reverseString("hello")
reverseString("hello there")
reverseString('!abc 123!')
reverseString('')
// Do not edit below this line
module.exports = reverseString;
