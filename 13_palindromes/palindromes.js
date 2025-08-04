const palindromes = function (word) {
    let cleanWord = word.toLowerCase();
    cleanWord = cleanWord.replace(/[^a-zA-Z0-9]/g, "");
    
    let letters = cleanWord.split("");
    letters.reverse();

    if (cleanWord === letters.join("")) return true

    return false
};

// Do not edit below this line
module.exports = palindromes;
