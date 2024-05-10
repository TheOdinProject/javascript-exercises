const removeFromArray = function(array, ...args) {  
    //Make blank array object to push new array items to
    const newArray = [];
    //For each item in the array that is not included in the args portion of the function, push to the new Array
    array.forEach( (item) => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    //Return the finished array!
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
