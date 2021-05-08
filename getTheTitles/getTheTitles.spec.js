const getTheTitles = require("./getTheTitles");

describe("getTheTitles", function () {
  const books = [
    {
      title: "Book",
      author: "Name",
    },
    {
      title: "Book2",
      author: "Name2",
    },
  ];

  test("gets titles", () => {
    expect(getTheTitles(books)).toBe(["Book", "Book2"]);
  });
});
