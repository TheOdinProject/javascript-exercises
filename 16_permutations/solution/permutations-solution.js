const permutations = function (original, currentPermutations) {
  if (original.length === 1) return original;

  const perms = currentPermutations
    ? currentPermutations
    : original.map((el) => [el]);

  const newPerms = [];
  perms.forEach((el) => {
    const missing = original.filter((item) => !el.includes(item));
    missing.forEach((itemMissing) => newPerms.push([...el, itemMissing]));
  });

  if (newPerms.every((el) => el.length === original.length)) return newPerms;
  return permutations(original, newPerms);
};

// Do not edit below this line
module.exports = permutations;
