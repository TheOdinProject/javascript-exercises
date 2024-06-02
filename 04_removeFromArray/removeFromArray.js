const removeFromArray = function(arr, element) {
    const index = arr.indexOf(element);

    if(index !== -1){
        arr.splice(index, 1);
    }
    return arr;
   
};

let removeElement = removeFromArray([1, 2, 3, 4], 3);
console.log(removeElement);

// Do not edit below this line
module.exports = removeFromArray;
