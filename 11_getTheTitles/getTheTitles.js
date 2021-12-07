const getTheTitles = function(payload) {
    // const temparray = [];
    // payload.forEach( (item) =>{
    //     temparray.push(item['title']);
    // })
    // return temparray;
    return payload.map(book =>  book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
