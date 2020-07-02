const reverseString = function(sourceString) {

    let revString = '';

    for (let i = sourceString.length - 1; i >= 0; i--) {
        revString += sourceString[i];
    }

    return revString;
}

module.exports = reverseString