const removeFromArray = function(array, ...remove) {

    let newArray = array.filter( element => !remove.includes(element))

    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
