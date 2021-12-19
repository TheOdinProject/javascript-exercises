const removeFromArray = function(arr, ...restArg) {
    for (let i = 0; i < restArg.length; i++)
    {
        const index = arr.indexOf(restArg[i]);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
