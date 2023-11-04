const removeFromArray = function(arr, ...removeItems) {
     let duplicateArray = arr;
     console.log('arr duplicates', duplicateArray);
    for (let i=0; i < removeItems.length; i++) {
        for (let j=0; j < arr.length; j++) {
          if(removeItems[i] === arr[j]){
            duplicateArray.splice(j, 1);
          }
        }
    }
    return duplicateArray;
};
removeFromArray([1, 2, 3, 4], 1, 2, 4);



removeFromArray([1, 2, 3, 4], 3); 
removeFromArray([1, 2, 3], "1", 3)
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

module.exports = removeFromArray;


