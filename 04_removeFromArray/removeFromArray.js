const removeFromArray = function(arr, remove) {

    arr = [1,2,3];
    remove = ["1",3];

    for (let x = 0; x < remove.length; x++) {
        let index = arr.indexOf(remove[x])
        
        if (index > -1){
            arr.splice(index, 1);
        }
    }
    return arr;
};

console.log(removeFromArray());


// // Do not edit below this line
module.exports = removeFromArray;
