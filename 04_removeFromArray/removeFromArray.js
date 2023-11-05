const removeFromArray = function(array) {
    const removalChecks = [];
    for (i=0; i<arguments.length; ++i) {
        if (i !== 0) {
            removalChecks.push(arguments[i]);
        }
    }
    console.log(removalChecks)
    lenArray = array.length-1;
    for (i=0; i<removalChecks.length; i++) {
        valToCheck = removalChecks[i]
        for (i=lenArray; i>=0; --i) {
            if (array[i] == valToCheck) {
                array.splice(i, 1)
            }
        }
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
