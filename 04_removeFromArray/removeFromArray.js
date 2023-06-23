const removeFromArray = function (array, ...args) {

    /* 
    - Array is used to filter over each number
    - Each number is compared to the ...args Array
    - If there is no match between Number and args Array, we push that number
    [I checked solution: did not know includes excisted, and re-ording of it]
    */

    var newArray = [];
    array.filter(function (number) {
        if (!args.includes(number)) {
            newArray.push(number)
        }
    })

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
