const removeFromArray = function (array, ...args) {
  return array.filter((element) => !args.includes(element));
};

// **** MY ORIGINAL SOLUTION *****
// const removeFromArray = function (...args) {
// let array = args[0];
// args.shift();

// let returnedArray = array.filter((element) => {
//   for (let i = 0; i < args.length; i++) {
//     if (!args.includes(element)) return element;
//   }
// });
// }

// TOP SOLUTIONS:

// return returnedArray;
// const removeFromArray = function (array, ...args) {
//   const newArray = [];
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// const removeFromArray = function (array, ...args) {
//   return array.filter((val) => !args.includes(val));
// };

// Do not edit below this line
module.exports = removeFromArray;
