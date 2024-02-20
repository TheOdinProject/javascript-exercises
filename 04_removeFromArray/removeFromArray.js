const removeFromArray = function(arr, ...val) {
    // const newArr = [];
    // arr.forEach(element => {
    //     if(!val.includes(element)){
    //         newArr.push(element);
    //     }
    // });

    // return newArr;

    const newArr = arr.filter(e => !val.includes(e));
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
