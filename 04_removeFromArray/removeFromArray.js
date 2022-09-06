const removeFromArray = function (array, ...toRemove) {
  let result = [...array];

  for (i = 0; i < toRemove.length; i++) {
    let index = result.indexOf(toRemove[i]);
    if (index >= 0) {
      result.splice(index, 1);
    }
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
