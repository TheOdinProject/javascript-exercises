function getTheTitles(book){
    const result = book.map(getTitle => getTitle.title);
    return result;
} 

// Do not edit below this line
module.exports = getTheTitles;
