const removeFromArray = function(arr,...args) {
   //[...args]
    let newArr = [];
    arr.forEach(element => {
        if(!args.includes(element))
        newArr.push(element);
    });
    // console.log(newArr);
    return newArr;
}

module.exports = removeFromArray
