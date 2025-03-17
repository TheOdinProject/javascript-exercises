function removeFromArray(array, ...valuesToRemove) {
  return array.filter((item) => !valuesToRemove.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
