const palindromes = function (string) {

    allLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    normalString = Array.from(string.toLowerCase())
        .filter(function (letter) {
            return allLetters.includes(letter)
        })
        .join(",")
    reverseString = Array.from(string.toLowerCase())
        .filter(function (letter) {
            return allLetters.includes(letter)
        })
        .reverse()
        .join(",")
    
    console.log(normalString)
    console.log(reverseString)
    
    
    return normalString === reverseString ? true : false 
};

// Do not edit below this line
module.exports = palindromes;
