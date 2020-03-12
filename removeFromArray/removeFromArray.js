const removeFromArray = function (arr, ...indx) {
    indx.map(x => {
        if (arr.indexOf(x) == -1){ return x}
        arr.splice(arr.indexOf(x), 1);
    })
    
    return arr;
}

module.exports = removeFromArray
