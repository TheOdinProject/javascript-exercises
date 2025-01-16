const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'
    else {
        finalString = '';
        for (let iter = 0; iter < num; iter++){
            finalString = finalString + string;
        };
    return finalString;
    };
};

// Do not edit below this line
module.exports = repeatString;
