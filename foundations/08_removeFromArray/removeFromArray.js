// Advanced way to remove items from an array. The function takes an array as the first argument, followed by one or more additional arguments. The function should return a new array with the items removed.
// const removeFromArray = function (array, ...args) {
//   return array.filter((item) => !args.includes(item));
// };

// Easier way to remove items from an array. The function takes an array as the first argument, followed by one or more additional arguments. The function should return a new array with the items removed.
const removeFromArray = function (array, ...args) {
  const newArray = new Array();

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
