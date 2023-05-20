// MY VERSION THAT PASSED ALL TESTS: 

/* const removeFromArray = function([a, ...b], c, ...d) { 

  let firstArray = [a, ...b];
  let secondArray = [c, ...d];
  let combinedArray = [...firstArray, ...secondArray];
  let removeDuplicates = [...new Set(combinedArray)]
  
  let filterFirstArray = removeDuplicates.filter(n => !secondArray.includes(n))
  
  return filterFirstArray;

}

*/

// FROM THE SOLUTION: 

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

var removeFromArray = function(array, ...args) {
return array.filter(val => !args.includes(val))
}


// Do not edit below this line
module.exports = removeFromArray;
