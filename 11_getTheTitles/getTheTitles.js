const getTheTitles = function(array) {
    let titles = [];
    for (i=0;i<array.length;i++) {
        titles[i] = array[i].title;
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
