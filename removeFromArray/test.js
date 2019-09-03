function removeFromArray(parameters) {
  // success with single arguments
  // let array1 = array;
  // let array2 = [];
  
  // for (i=0; i<array1.length; i++) {
  //     if (array1[i] == optionalParam) {
  //     array1.splice(i, 1);
  //     i--; 
  //   }
  // }
  // console.log(array1);
  // }

  //multiple arguments
  var outerArray = Array.from(arguments);
  console.log(arguments);
  var insideArray = outerArray[0];
  console.log(insideArray);

  for (i=1; i<outerArray.length; i++) {
    // console.log('loop' + i);
    console.log('outerArray :' + outerArray[i]);
    for(j=0; j<insideArray.length; j++) {
      // console.log('insideArray :' + insideArray[j]);
      if (insideArray[j] === outerArray[i]) {
        insideArray.splice(j,1);
        j--;
      }
    }
  }
  
  console.log(insideArray);
}
removeFromArray([10,2,5,6,2,8,4], 10);