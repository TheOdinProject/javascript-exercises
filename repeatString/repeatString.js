const repeatString = function(str, num) {
    if (num < 0) { return 'ERROR'};
    return str.repeat(num);
}

module.exports = repeatString
