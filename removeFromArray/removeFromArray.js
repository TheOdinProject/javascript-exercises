function removeFromArray() {
  const argsToArray = Array.from(arguments);
  const unchangedArray = argsToArray.shift();
  const itemsToRemove = argsToArray;

  function removeThese(arrayItem) {
    return !itemsToRemove.includes(arrayItem);
  }
  return newArray = unchangedArray.filter(removeThese);
}

module.exports = removeFromArray
