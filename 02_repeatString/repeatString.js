const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let result = '';
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
