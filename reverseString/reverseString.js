const reverseString = function(string) {

    let revString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        revString += string.charAt(i);
    }

    return revString;
}



module.exports = reverseString