const removeFromArray = function (arr, ...args) {
  return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
