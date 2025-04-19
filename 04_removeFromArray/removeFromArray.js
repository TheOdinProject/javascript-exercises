const removeFromArray = function (arr, ...num) { 
    let result = arr.filter(e => !num.includes(e) );
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
