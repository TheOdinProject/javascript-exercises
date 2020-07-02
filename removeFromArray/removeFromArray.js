const removeFromArray = function(...arg) {
    const thisArray = arg[0];
    let newArray = []

    thisArray.forEach((e)=> {
        if(!arg.includes(e)){
            newArray.push(e);
        }
    });
    
    return newArray;

};

module.exports = removeFromArray
