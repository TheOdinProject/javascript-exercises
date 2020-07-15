const removeFromArray = function(...args) {

    let myArray = args[0];
    let pos = 0;

    for (let i = 1; i < args.length; i++) {
        pos = myArray.indexOf(args[i]);
        myArray.splice(pos, 1);
    }

    return myArray;

}

module.exports = removeFromArray