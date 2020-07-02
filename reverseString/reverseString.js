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

}

module.exports = reverseString