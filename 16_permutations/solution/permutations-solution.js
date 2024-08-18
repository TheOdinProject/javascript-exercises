const permutations = function (
  original,
  currentPermutations = original.map((num) => [num]),
) {
  if (original.length < 2) return [original];

  const newPerms = [];
  currentPermutations.forEach((el) => {
    const missing = original.filter((item) => !el.includes(item));
    missing.forEach((itemMissing) => newPerms.push([...el, itemMissing]));
  });

  if (newPerms.every((el) => el.length === original.length)) return newPerms;
  return permutations(original, newPerms);
};

// Do not edit below this line
module.exports = permutations;
