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

    const emptyTitle = [
      {
        title: '',
        author: ''
      }
    ]

    const longTitle = [
      {
        title: 'Angel: How to Invest in Technology Startups—Timeless Advice from an Angel Investor Who Turned $100,000 into $100,000,000',
        author: 'Calacanis, Jason'
      }
    ]

    const titleWithQuoteMark = [
      {
        title: "The Startup Owner's Manual",
        author: 'Blank, Steve'
      }
    ]

    const manyBooks = [
      {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Harari, Yuval Noah'
      },
      {
        title: 'Thinking, Fast and Slow',
        author: 'Kahneman, Daniel'
      },
      {
        title: 'Yertle the Turtle and Other Stories',
        author: 'Seuss, Dr'
      },
      {
        title: 'Principles: Life and Work',
        author: 'Dalio, Ray'
      },
      {
        title: 'The Personal MBA: Master the Art of Business',
        author: 'Kaufman, Josh'
      },
      {
        title: 'High Output Management',
        author: 'Grove, Andrew S'
      },
      {
        title: 'The Mom Test',
        author: 'Fitzpatrick, Rob'
      },
      {
        title: 'How to Win Friends and Influence People',
        author: 'Carnegie, Dale'
      },
      {
        title: 'Never Split the Difference',
        author: 'Voss, Chris'
      },
      {
        title: 'Grit',
        author: 'Duckworth, Angela'
      },
      {
        title: 'Motivational Interviewing: Helping People Change',
        author: 'Rollnick, Stephen'
      },
      {
        title: 'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
        author: 'Nosrat, Samin'
      },
      {
        title: 'Deep Work',
        author: 'Newport, Cal'
      }
    ]

  it('gets titles', function() {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });

  xit('works with empty arrays', function() {
    expect(getTheTitles([])).toEqual([]);
  })

  xit('works with empty titles', function() {
    expect(getTheTitles(emptyTitle)).toEqual(['']);
  })

  xit('works with long titles', function() {
    expect(getTheTitles(longTitle)).toEqual(['Angel: How to Invest in Technology Startups—Timeless Advice from an Angel Investor Who Turned $100,000 into $100,000,000']);
  })

  xit('works with titles containing quote marks', function() {
    expect(getTheTitles(titleWithQuoteMark)).toEqual(["The Startup Owner's Manual"]);
  })

  xit('works with long arrays', function() {
    expect(getTheTitles(manyBooks)).toEqual(
      [
        'Sapiens: A Brief History of Humankind',
        'Thinking, Fast and Slow',
        'Yertle the Turtle and Other Stories',
        'Principles: Life and Work',
        'The Personal MBA: Master the Art of Business',
        'High Output Management',
        'The Mom Test',
        'How to Win Friends and Influence People',
        'Never Split the Difference',
        'Grit',
        'Motivational Interviewing: Helping People Change',
        'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking',
        'Deep Work'
      ]
    )
  })

});
