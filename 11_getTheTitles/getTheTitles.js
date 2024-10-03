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
const getTheTitles = function(library) {
    let length = library.length
    let titleArray = []
    for(let i = 0;i< length; i++)
    {
        titleArray.push(library[i].title)
    }
    return titleArray
};
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
