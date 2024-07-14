const palindromes = function (text) {
    let tempText = cleanText(text);
    let reversedHalf = tempText.split("").reverse().join("");
    return tempText == reversedHalf;
};

function cleanText(text) {
    let punctuationRegex = /[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g;
    return text.replace(punctuationRegex,"").trim().toLowerCase();
}

module.exports = palindromes;
