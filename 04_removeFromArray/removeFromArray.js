const removeFromArray = function(localArray, ...args) {
    for (let i of args){
        indexRemove = localArray.indexOf(i);
        if(indexRemove != -1){
            localArray.splice(indexRemove,1);
        }
    }
    return localArray;
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
