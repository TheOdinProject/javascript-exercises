const getTheTitles = function(books) {
    //Solution 1:
    //return books.map((book) => book.title);

    // Solution 3:
    return books.map(myFunction);
    function myFunction(book){
        return book.title;
    }

    // Solution 2:
    // let res = [];
    // let n = books.length;
    // for(let i = 0 ; i< n ;i++){
    //     res[i] = books[i].title;
    // }
    // return res;
};

// Do not edit below this line
module.exports = getTheTitles;
