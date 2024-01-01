const removeFromArray = function(arr, ...val) {
    let returnArr = arr
    for (let i = 0; i < val.length; i++){
        if (!arr.includes(val[i])){
            console.log('not in array')
        } else {
            let index = arr.indexOf(val[i]);
            returnArr.splice(index, 1)
        }
    }
    return returnArr
};

console.log(removeFromArray(['a','b','c','d'],'c','d','hey',0,null,undefined))
// Do not edit below this line
module.exports = removeFromArray;
