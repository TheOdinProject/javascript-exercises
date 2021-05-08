const removeFromArray = require("./removeFromArray");

describe("removeFromArray", () => {
  test("removes a single value", () => {
    expect(removeFromArray([1, 2, 3, 4], 3)).toBe([1, 2, 4]);
  });
  xit("removes multiple values", function () {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  xit("ignores non present values", function () {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  xit("ignores non present values, but still works", function () {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  xit("can remove all values", function () {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  xit("works with strings", function () {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  test.skip("only removes same type", () => {
    expect(removeFromArray([1, 2, 3], "1", 3)).toBe([1, 2]);
  });
});
