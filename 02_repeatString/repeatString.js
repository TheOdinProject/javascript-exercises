const repeatString = function (string, num) {

    var localString = "";

    for (i = 0; i < num; i++) {
        localString = localString + string;
    }
    return localString;
};

// Do not edit below this line
module.exports = repeatString;
