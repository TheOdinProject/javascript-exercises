const palindromes = function (string) {
    let newString = '';
    // strip string of all puncuation and whitespace
    let cleanString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s+]/g, '');
    cleanString = cleanString.toLowerCase();
    // reverse string
    for (i = cleanString.length - 1; i>=0; i--) {
        newString += cleanString[i];
    }
    // check if palindrome
    if (newString === cleanString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
