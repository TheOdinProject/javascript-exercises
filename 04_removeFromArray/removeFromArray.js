const removeFromArray = function(array, ...theArgs) {
  const newArray = [];
  array.forEach(function(item) {
    if (!theArgs.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
