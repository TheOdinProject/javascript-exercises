const expect = require('expect');const reverseString = require('./reverseString')

describe('reverseString', function() {
  it('reverses single word', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });

  xit('reverses multiple words', function() {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  xit('works with numbers and punctuation', function() {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  xit('works with blank strings', function() {
    expect(reverseString('')).toEqual('')
  })
});
