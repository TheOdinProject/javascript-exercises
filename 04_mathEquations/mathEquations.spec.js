const { a, b, c, d, e, f } = require("./mathEquations");

describe("math", () => {
  test("a is 0", () => {
    expect(a).toEqual(0);
  });
  test("b is 9", () => {
    expect(b).toEqual(9);
  });
  test("c is 66", () => {
    expect(c).toEqual(66);
  });
  test("d is 1", () => {
    expect(d).toEqual(1);
  });
  test("e is -8", () => {
    expect(e).toEqual(-8);
  });
  test("f is 68", () => {
    expect(f).toEqual(68);
  });
});
