const removeFromArray = function(...args) {
    const initialArgs = args[0];
    const finalArray = [];
    
    initialArgs.forEach( (item) => {
        if (!args.includes(item)) {
            finalArray.push(item);
            console.log('item to push in ' + item);
        }
    })
    return finalArray;
};

// three things to do when solving a problem
// 1.understand the problem
// 2.research and refine the problem
// 3.psudocode the problem
// iterate through the initial array looking at each item.
    // at each item, perform the following logic, 
    //push every element into the new array unless it is included in the function arguments
        // else if there is not a match continue on
// return the initial array with removed items if any


// Do not edit below this line
module.exports = removeFromArray;
