const removeFromArray = function(...args) {


    let myArray = args[0]; //Create an array with the first function argument
    let pos = 0; //Create a variable to store index of element

    // Remove all the remaining elements from the array 
    for (let i = 1; i < args.length; i++) {
        pos = myArray.indexOf(args[i]);
        if (pos >= 0 && myArray[pos] === args[i]) { //Is it a valid argument
            myArray.splice(pos, 1);
        }
    }

    return myArray;

}

module.exports = removeFromArray