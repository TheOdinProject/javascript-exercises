<<<<<<< HEAD
const reverseString = function(sourceString) {
=======
const reverseString = function(inputString) {

    let stringLength = inputString.length;
    let revString = ''

    for (let i = stringLength; i >= 0; i--) {
        if (revString === 'undefined') {
            revString = ''
        }
        revString = revString + inputString[i];
    }

    return revString;
>>>>>>> master

    let revString = '';

    for (let i = sourceString.length - 1; i >= 0; i--) {
        revString += sourceString[i];
    }

    return revString;
}

module.exports = reverseString