const removeFromArray = function(arrayValues, valuesToRemove) {
    const index = arrayValues.indexOf(valuesToRemove);
    arrayValues.splice(index, 1);
      return arrayValues;
  }

// Do not edit below this line
module.exports = removeFromArray;
