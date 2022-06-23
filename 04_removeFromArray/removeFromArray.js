const removeFromArray = function(...args) {
    let origArray = args[0]
    let newArr = []
    origArray.forEach((arg) => {
        if (!args.includes(arg)) {
            newArr.push(arg)
        }
    })

    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;


removeFromArray([1, 2, 3, 4], 3)