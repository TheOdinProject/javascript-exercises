const reverseString = function(string) {
    let num = string.length;
    let lastLetter = string.slice(-1);
    for (let i = 1; i <= num; i++) {

        lastLetter += string.slice(((-i)-1), (-i));

    }
    return lastLetter;

}

// Do not edit below this line
module.exports = reverseString;
