/*
const removeFromArray = function(array, number, ...moreNumber) {
    const index = array.indexOf(number);
    const removeArray = array.splice(index, 1);
    return array;

};
*/

const removeFromArray = function(array, ...moreNumber) {
    for (let i = 0; i <= moreNumber.length; i++) {
        const index = array.indexOf(moreNumber);
        newArray = array.splice(index, 1);
    }
    
    return array;

};


// Do not edit below this line
module.exports = removeFromArray;
