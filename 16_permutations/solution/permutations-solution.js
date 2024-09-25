const permutations = function (
  original,
  partialPermutations = original.map((num) => [num]),
) {
  if (original.length <= 1) return [original];

  const newPartialPermutations = [];
  partialPermutations.forEach((partialPermutation) => {
    const missingNums = original.filter(
      (num) => !partialPermutation.includes(num),
    );
    missingNums.forEach((missingNum) =>
      newPartialPermutations.push([...partialPermutation, missingNum]),
    );
  });

  // We can pick any valid index because all of the elements will be the same length
  const ANY_INDEX = 0;

  if (newPartialPermutations[ANY_INDEX].length === original.length) {
    return newPartialPermutations;
  }

  return permutations(original, newPartialPermutations);
};

// Do not edit below this line
module.exports = permutations;
