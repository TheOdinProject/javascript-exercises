const removeFromArray = function (arr, ...elements) {
  for (const element of elements) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (element === arr[i]) {
        res.push(i);
      }
    }
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(i)) {
        arr1.push(arr[i]);
      }
    }
    arr = arr1;
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
