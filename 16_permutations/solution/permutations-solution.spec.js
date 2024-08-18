const permutations = require("./permutations-solution");

describe("permutations", () => {
  test("Works for array of size one", () => {
    expect(permutations([1]).sort()).toEqual([1].sort());
  });
  test("Works for array of size two", () => {
    expect(permutations([1, 2]).sort()).toEqual(
      [
        [1, 2],
        [2, 1],
      ].sort(),
    );
  });
  test("Works for array of size three", () => {
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
  test("Works for array of size four", () => {
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
