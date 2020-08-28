const removeFromArray = function (...theArgs) {
  let filteredArr = [],
    arr = theArgs[0];

  for (let i = 0; i < arr.length; i++) {
    //   theArgs.map((arg) => {
    //       if (arr[i] != arg) {
    //         filteredArr.push(arr[i]);
    //       }
    //   });
    if (!theArgs.includes(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

module.exports = removeFromArray;
