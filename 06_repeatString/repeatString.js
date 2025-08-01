const repeatString = function () {
    const [str, num] = arguments;

    if (num < 0) {
        return 'ERROR';
    }

    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
