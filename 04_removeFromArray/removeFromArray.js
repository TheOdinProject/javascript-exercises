// Almost passes test but doesn't return as array:

const removeFromArray = function([a, ...b], c, ...d) { 

  let firstArray = [a, ...b];
  let secondArray = [c, ...d];

  let combinedArray = [...firstArray, ...secondArray];
  let removeDuplicates = [...new Set(combinedArray)]
  
  console.table(removeDuplicates)
}

removeFromArray(["a", "b", "c", "d"], "d", "e", "f", "g")


// Do not edit below this line
module.exports = removeFromArray;
