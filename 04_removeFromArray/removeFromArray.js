const removeFromArray = function(arr, ...elementsToRemove) {
    return arr.filter(item => !elementsToRemove.includes(item));
};

let removeElement = removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
console.log(removeElement); // Output: [1, 3]

// Do not edit below this line
module.exports = removeFromArray;
