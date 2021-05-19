const snakeCase = require('./snakeCase')

describe('snakeCase', () => {
  test('works with simple lowercased phrases', () => {
    expect(snakeCase('hello world')).toEqual('hello_world');
  });
  test.skip('works with Caps and punctuation', () => {
    expect(snakeCase('Hello, World???')).toEqual('hello_world');
  });
  test.skip('works with longer phrases', () => {
    expect(snakeCase('This is the song that never ends....')).toEqual('this_is_the_song_that_never_ends');
  });
  test.skip('works with camel case', () => {
    expect(snakeCase('snakeCase')).toEqual('snake_case');
  });
  test.skip('works with kebab case', () => {
    expect(snakeCase('snake-case')).toEqual('snake_case');
  });
  test.skip('works with WTF case', () => {
    expect(snakeCase('SnAkE..CaSe..Is..AwEsOmE')).toEqual('snake_case_is_awesome');
  });
});
