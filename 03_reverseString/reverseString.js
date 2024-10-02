const reverseString = function(string) {
    length=string.length
    let array= string.split('')
    let reversedArray=[]
    for (let i=0;i<length;i++)
    {
        reversedArray[i]=array.pop()
    }
    reversedArray=reversedArray.join('')
    return reversedArray
};

// Do not edit below this line
module.exports = reverseString;
