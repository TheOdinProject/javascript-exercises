const removeFromArray = function(arr, remove) {
    if(arr.includes(remove)){
       let removedValue = arr.splice(arr[remove] - 2, 1);
       let clean = arr.filter(( para ) => {
       return para != removedValue;
       });
       return clean;
    }
   };
   
   console.log(removeFromArray([1,2,3,4], 3));
// Do not edit below this line
module.exports = removeFromArray;
