const permutations = require("./permutations");

describe("permutations", () => {
  test("1 possible permutation for a set containing 0 numbers", () => {
    expect(permutations([])).toEqual([[]]);
  });

  test.skip("1 possible permutation for a set containing 1 number", () => {
    expect(permutations([1])).toEqual([[1]]);
  });

  test.skip("2 possible permutations for a set containing 2 numbers", () => {
    expect(permutations([1, 2]).sort()).toEqual(
      [
        [1, 2],
        [2, 1],
      ].sort(),
    );
  });

  test.skip("6 possible permutations for a set containing 3 numbers", () => {
    expect(permutations([1, 2, 3]).sort()).toEqual(
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ].sort(),
    );
  });

  test.skip("24 possible permutations for a set containing 4 numbers", () => {
    expect(permutations([1, 2, 3, 4]).sort()).toEqual(
      [
        [1, 2, 3, 4],
        [1, 2, 4, 3],
        [1, 3, 2, 4],
        [1, 3, 4, 2],
        [1, 4, 2, 3],
        [1, 4, 3, 2],
        [2, 1, 3, 4],
        [2, 1, 4, 3],
        [2, 3, 1, 4],
        [2, 3, 4, 1],
        [2, 4, 1, 3],
        [2, 4, 3, 1],
        [3, 1, 2, 4],
        [3, 1, 4, 2],
        [3, 2, 1, 4],
        [3, 2, 4, 1],
        [3, 4, 1, 2],
        [3, 4, 2, 1],
        [4, 1, 2, 3],
        [4, 1, 3, 2],
        [4, 2, 1, 3],
        [4, 2, 3, 1],
        [4, 3, 1, 2],
        [4, 3, 2, 1],
      ].sort(),
    );
  });
});
