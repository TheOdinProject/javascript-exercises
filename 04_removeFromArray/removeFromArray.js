const removeFromArray = function(array, ...args) {
  args.forEach((val) => {
    while (array.indexOf(val) != -1) {
      let index = array.indexOf(val);
      array.splice(index, 1);
    }
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
