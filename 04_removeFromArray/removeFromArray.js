const removeFromArray = function(numbers, ...remove) {
    console.log('function start')
    let args = remove
    let newArray = []
    let length=numbers.length
    for(let i =0;i<length;i++)
    {
        if(!(args.includes(numbers[i])))
        {    
            newArray.push(numbers[i])
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
