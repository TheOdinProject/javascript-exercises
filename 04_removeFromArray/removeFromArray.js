const removeFromArray = function(startArray, ...toRemove) {
    for (let i=0; i<toRemove.length; i++){
        console.log(toRemove[i])
        
        let index = startArray.indexOf(toRemove[i]);
        console.log(index)

        if (index>=0) {
            startArray.splice(index, 1);
        }
        
    }
    return startArray;
};

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
