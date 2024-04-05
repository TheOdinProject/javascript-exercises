const removeFromArray = function(myArray,...args) {
    const newArray = []
    myArray.forEach((item) => {
        if (!args.includes(item)){
            newArray.push(item)
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
