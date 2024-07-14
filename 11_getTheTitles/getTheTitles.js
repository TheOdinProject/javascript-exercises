// const getTheTitles = function(arr) {
//     let returnArray =  [] ;
//     for (let i = 0; i < arr.length; i++) {
//         returnArray.push(arr[i].title)
//     }
//     return returnArray;
// };

function getTheTitles(arr) {
    return arr.map( (obj) => obj.title );
}

// Do not edit below this line
module.exports = getTheTitles;
