let firstArray = [1, 2, 3, 4];

let secondArrays = [1, 2, 3, 4];

let fromSecondArray = [3, 2];

let thirdArray = [ 1, 2, 2, 3 ];

let fourthArray = [1, 2, 3, 4];

let fifthArray = [ 1, 2, 3, 4 ];

let sixthArray = [1, 2, 3, 4];

let seventhArray = ["hey", 2, 3, "ho"];

const removeFromArray = function(arrays, ...arrayToFilter) {

    return arrays.filter(item => !arrayToFilter.includes(item));
        
}

removeFromArray(firstArray, 3);

removeFromArray(secondArrays, 3, 2);

removeFromArray(thirdArray, 2);

removeFromArray(fourthArray, 7, "tacos");

removeFromArray(fifthArray, 7, 2);

removeFromArray(sixthArray, sixthArray);

removeFromArray(seventhArray, "hey", 3);

// Do not edit below this line
module.exports = removeFromArray;
