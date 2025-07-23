const removeFromArray = function(array, removeThing, ...moreThings) {

    let newArray = array.filter( element => element !== removeThing)

    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
