const removeFromArray = function(myArr, ...element) {
    const newArr = [];
    myArr.forEach((item) => {
        if (!element.includes(item)) newArr.push(item)
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
