const removeFromArray = function(myArray, ...args) {
    const myRes = [];
    myArray.forEach(item => {
        if(!args.includes(item)){
            myRes.push(item);
        }
    });
    return myRes;
};

// Do not edit below this line
module.exports = removeFromArray;
