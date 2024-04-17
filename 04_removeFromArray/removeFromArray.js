const removeFromArray = function(array, ...toRemove) {
    let removedArray = [];
    array.forEach((item) => {
        if (!toRemove.includes(item)) {
            removedArray.push(item)
        }
    })
    return removedArray
}

// Do not edit below this line
module.exports = removeFromArray;
