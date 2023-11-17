const removeFromArray = function (arr, ...args) {
  return arr.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
