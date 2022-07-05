const removeFromArray = function(array, ...args) {

    /*** cool fancy way ***/
    // return array.filter(x => !args.includes(x))

    /*** simpler way ***/
    const output = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            output.push(item);
        }
    })
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
