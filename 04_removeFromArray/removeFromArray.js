// PASSED ALL TESTS: 

const removeFromArray = function([a, ...b], c, ...d) { 

  let firstArray = [a, ...b];
  let secondArray = [c, ...d];
  let combinedArray = [...firstArray, ...secondArray];
  let removeDuplicates = [...new Set(combinedArray)]
  
  let filterFirstArray = removeDuplicates.filter(n => !secondArray.includes(n))
  
  return filterFirstArray;

}


// Do not edit below this line
module.exports = removeFromArray;
