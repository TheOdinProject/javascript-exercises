function mergeSort(array) {
  if (array.length <= 1) return array;

  const midpoint = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, midpoint);
  const rightHalf = array.slice(midpoint);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right, merged = [], leftIndex = 0, rightIndex = 0) {
  if (leftIndex >= left.length && rightIndex >= right.length) return merged;

  if (
    leftIndex < left.length &&
    (rightIndex >= right.length || left[leftIndex] < right[rightIndex])
  ) {
    merged.push(left[leftIndex]);
    return merge(left, right, merged, leftIndex + 1, rightIndex);
  } else {
    merged.push(right[rightIndex]);
    return merge(left, right, merged, leftIndex, rightIndex + 1);
  }
}

// Do not edit below this line
module.exports = mergeSort;
