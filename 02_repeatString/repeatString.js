const repeatString = function(string, num) {
    let newString = '';

    if (num >= 0) {
        for (i = 0; i < num; i++) {
            newString += string; 
        }
    } 
    else {
        return 'ERROR';
    }

    return newString;
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
