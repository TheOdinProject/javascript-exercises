const removeFromArray = function(list, ...args) {
    //create an empty array
    let newArray = [];
    //iterate over a for loop to make sure if each item is not passed as the argument to be removed
    for (let i = 0; i < list.length; i++){
        //if the argument is included in the list, ignore it and continue over the next item
        if (args.includes(list[i])){
            continue; 
        }
        // else add it to the new array
        else {
            newArray.push(list[i]);
        }
    }
 return newArray;
}
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
