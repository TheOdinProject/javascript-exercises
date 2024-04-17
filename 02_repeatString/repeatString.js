const repeatString = function( inputText, inputNumber) {
    if (inputNumber < 0) {
        return 'ERROR'
    }
    let words = '';
    for ( let i = 0; i <inputNumber; i++ ) {
        words += inputText;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
