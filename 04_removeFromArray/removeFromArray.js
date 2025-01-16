const removeFromArray = function(arrayToRemove, elementToRemove) {
    arrayToRemove.splice(arrayToRemove.indexOf(elementToRemove), 1);
    return arrayToRemove
};

// Do not edit below this line
module.exports = removeFromArray;
