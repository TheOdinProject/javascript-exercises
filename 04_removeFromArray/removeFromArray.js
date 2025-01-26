const removeFromArray = function(arr, ...arg) {
    console.log(arr[3]);
    let array=[];
    arr.forEach(element => {
        if(!arg.includes(element)){
            array.push(element);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
