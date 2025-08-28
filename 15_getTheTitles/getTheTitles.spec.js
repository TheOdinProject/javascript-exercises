const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
  const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
  ];

  const largeBooks = Array.from({ length: 1000 }, (_, i) => ({
    title: `Title${i}`,
    author: `Author${i}`,
  }));

  const booksWithNonStringTitles = [
    {
		title: 123,
		author: 'A',
	},
    {
		title: null,
		author: 'B',
	},
    {
		title: 'Valid',
		author: 'C',
	},
  ];

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });
  test.skip('returns empty array for empty input', () => {
    expect(getTheTitles([])).toEqual([]);
  });
  test.skip('handles large array', () => {
    expect(getTheTitles(largeBooks)).toEqual(largeBooks.map((b) => b.title));
  });
  test.skip('handles non-string titles', () => {
    expect(getTheTitles(booksWithNonStringTitles)).toEqual([
      123,
      null,
      'Valid',
    ]);
  });
});