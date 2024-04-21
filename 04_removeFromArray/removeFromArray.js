const removeFromArray = function (array, ...args) {
    arrayResult = []

    for (character of array) {
        let keep = true;
        for (element of args) {
            if (character === element) {
                keep = false
                break
            }
        }
        if (keep) {
            arrayResult.push(character)
        }
    }

    return arrayResult
};

// Do not edit below this line
module.exports = removeFromArray;
