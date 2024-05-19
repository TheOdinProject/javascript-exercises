const repeatString = function(str, nb) {

    let result = '';
    if (nb < 0) {
        return ("ERROR");
    }
    for (let i = 0 ; i < nb ; i++) {
        result += str;
    }

    return (result);
};

// Do not edit below this line
module.exports = repeatString;
