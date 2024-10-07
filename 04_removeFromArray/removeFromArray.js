const removeFromArray = function (array, ...args) {
  let result = array.filter((item) => !args.includes(item));
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
