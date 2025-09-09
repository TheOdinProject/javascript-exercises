const removeFromArray = function(arr,...valuesToRemove) {
    return arr.filter (item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
