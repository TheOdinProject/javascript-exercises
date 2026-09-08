const insertIntoArray = function (array, position, value) {
  return [...array.slice(0, position), value, ...array.slice(position)];
};

const permutations = function (array) {
  if (array.length === 0) {
    // There is only one permutation of an empty array, which is the empty array
    return [[]];
  }

  const firstElement = array[0];
  const rest = array.slice(1);

  // Calculate (recursively) each permutation of all the elements except the first
  const previousPermutations = permutations(rest);
  const newPermutations = [];

  // For each previousPermutations, make new permutations
  // by inserting firstElement into every position
  // E.g. inserting 1 into [2,3] can produce [1,2,3] and [2,1,3] and [2,3,1]
  for (const permutation of previousPermutations) {
    for (let i = 0; i <= permutation.length; i += 1) {
      const newPermutation = insertIntoArray(permutation, i, firstElement);
      newPermutations.push(newPermutation);
    }
  }

  return newPermutations;
};

// Do not edit below this line
module.exports = permutations;
