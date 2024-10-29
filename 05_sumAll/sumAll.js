const sumAll = function(nmb1, nmb2) {
    let result=0
    if(nmb1 < 0 || nmb2 < 0 || !Number.isInteger(nmb1) || !Number.isInteger(nmb2))
    {
        return 'ERROR'
    }
    if(nmb1>nmb2)
    {  
        for(let i = nmb2;i<=nmb1;i++)
        {
            result += i
        }
    }
    if(nmb2>nmb1)
    {
        for(let x = nmb1;x<=nmb2;x++)
        {
            result += x
        } 
    }
    return result
};
// Do not edit below this line
module.exports = sumAll;
