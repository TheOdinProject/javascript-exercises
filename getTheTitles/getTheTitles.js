const getTheTitles = function(arr) {
    let newArr = [];
    arr.map(x=> {
        newArr.push(x.title)
    });
    return newArr;
}

module.exports = getTheTitles;
