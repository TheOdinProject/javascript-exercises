const sumAll = function(j, k) {
    const newArray = [];
    let sum = 0;
    //Ensuring that the function can pass any order of numbers and this will find the greater of the two
    if(j > k)
        {
            startPoint = k
            endPoint = j
        }
    else {
        startPoint = j;
        endPoint = k;
    }
    //Ensuring that values cannot be negative for either portion of array declaration
    if((j > 0 && k > 0) && (typeof(k) != "string"))
        {
            for(i = startPoint; i <= endPoint; i++ )
                {
                    newArray.push(i);

                    for(j = i; j< i+1; j++)
                        {
                            sum += j;
                        }
                }
                return sum;
        }
    else {
        return 'ERROR';
    }
    
        
};

// Do not edit below this line
module.exports = sumAll;
