const removeFromArray = function (array, ...removeElements) {
  /*  removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

  ([1, 2, 3, 4], 3, 2) should return [1,4]
    ``` */

  let newArray = [];

  array.forEach((element) => {
    if (!removeElements.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
