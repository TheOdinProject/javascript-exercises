// Third iteration:

const removeFromArray = function([a, ...b], c, ...d) { 
  let firstArray = [a, ...b];
  let secondArray = [c, ...d];
  console.table(firstArray);
  console.table(secondArray);

  let combinedArray = [...firstArray, ...secondArray];

let removeDuplicates = [...new Set(combinedArray)]

}

removeFromArray(["a", "b", "c", "d"], "e", "f", "g")

// Need to figure out how to turn second parameter into an array

/*
const removeFromArray = function([arrayOne], arrayTwo) { 

  function f(a, ...arrayTwo) {
    let newArray = [...arrayTwo];
    console.table(newArray)
    return newArray
  }

}
*/ 


// Second iteration that fails test but can remove duplicates from arrays:

const removeFromArray = function([arrayOne], [arrayTwo]) {



  let combinedArray = [...arrayOne, ...arrayTwo];

  let removeDuplicates = [...new Set(combinedArray)]
  
  // console.table(removeDuplicates)

};

removeFromArray(["A", "B"], ["C", "D"])





// First iteration that fails all tests but can create an array:

/* const removeFromArray = function([array], args) {

        function createArray(...args) {
            let newArray = args
      }

        let oldArray = array;

        let combinedArray = [...newArray, ...oldArray];

        let removeDuplicates = [...new Set(combinedArray)]



  };

  */

// NEXT need to find way to compare the two arrays
// i.e. compare "array" and "args"
// and check for duplicates..
// and remove the duplicate from the first array
// and finally return the new version of the first array
// check for methods here: https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o


// const removeFromArray = function() {};


// Do not edit below this line
module.exports = removeFromArray;
