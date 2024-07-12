const removeFromArray = function(arr,firstRemove,secondRemove, thirdRemove, fourthRemove) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===firstRemove || arr[i]===secondRemove || arr[i]===thirdRemove || arr[i]===fourthRemove) {
            arr.splice(i,1);
            // console.log(arr);
            removeFromArray(arr,firstRemove,secondRemove, thirdRemove, fourthRemove);
        } 
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
