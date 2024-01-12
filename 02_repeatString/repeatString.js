const repeatString = function(word, repeats) {
    if (repeats >= 0){
        let repeatedWord = "";
        for (let i = 0; i < repeats; i++) {
            repeatedWord += word;
        };
        return repeatedWord;
    } else {
        return "ERROR";
    }
}
// Do not edit below this line
module.exports = repeatString;
