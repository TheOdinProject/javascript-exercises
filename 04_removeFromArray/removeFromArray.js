const removeFromArray = function (arr, num) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === num) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
