const fibonacci = function(amount) {
    if(amount === 0 || amount === '0')
    {
        return 0
    }
    if(amount<0)
    {
        return 'OOPS'
    }
    let array = []
    let length = amount
    let currentNumber = 1
    for(let i = 0;i< length;i++)
    {
        if(i>=2)
        {
            array[i] = array[i-2] + array[i-1]
        }
        else
        {
            array[i] = currentNumber
        }
    }
    return array[length-1]
};

fibonacci("0")
// Do not edit below this line
module.exports = fibonacci;
