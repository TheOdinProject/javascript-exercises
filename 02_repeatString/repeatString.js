const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    } else {
    let result = str.repeat(num)
    return result
    }
};

// Do not edit below this line
module.exports = repeatString;
