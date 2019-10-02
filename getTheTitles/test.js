function getTheTitles(books) {
  
  let titleArray = [];

  for (i = 0; i < books.length; i++) {
    // console.log(books[i].title);
    titleArray.push(books[i].title);
  }
  
  console.log(titleArray);
}

//given data
const books = [
  {
    title: "Book",
    author: "Name"
  },
  {
    title: "Book2",
    author: "Name2"
  }
];

getTheTitles(books);

