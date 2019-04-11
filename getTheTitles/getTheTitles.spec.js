let getTheTitles = require('./getTheTitles')

describe('getTheTitles', function() {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

  it('gets titles', function() {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });

});
