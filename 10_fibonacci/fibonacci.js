const fibonacci = function (findNum) {

    /* Perform checks to validate input */
    if (findNum === 0 || findNum === 1) {
        return 1;
    } else if (findNum < 0) {
        return "OOPS";
    } else if (typeof findNum === "string") {
        findNum = Number(findNum)
    }

    const fibArray = [1, 1];
    for (i = 2; i < findNum; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2])
    }
    return fibArray[findNum - 1]
};

// Do not edit below this line
module.exports = fibonacci;
