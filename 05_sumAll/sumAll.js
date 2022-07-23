const sumAll = function () {
    if (typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number' && arguments[0] >= 0 && arguments[1] >= 0) {
        let biggerNum = 0, smallerNum = 0;
        if (arguments[0] > arguments[1]) {
            biggerNum = arguments[0];
            smallerNum = arguments[1];
        } else {
            biggerNum = arguments[1];
            smallerNum = arguments[0];
        }

        let result = 0;

        for (let i = smallerNum; i <= biggerNum; i++) {
            result += i;
        }

        return result;
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
