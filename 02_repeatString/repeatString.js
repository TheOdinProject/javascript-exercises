const repeatString = function(string, num) {
    let newString = '';

    for (i = 0; i < num; i++) {
        newString += string; 
    }
    return newString;
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
