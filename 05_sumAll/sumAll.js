const sumAll = function(s,e) {
    if(typeof(s)==="number" && typeof(e)=="number" && s>=0 && e>=0)
    {
        let sum=0;
        if(s<=e)
        {
            for(let i=s;i<=e;i++)
              {
                 sum+=i;
            }
        }
        else
        {
            for(let i=s;i>=e;i--)
              {
                 sum+=i;
            }
        }
        return sum;
    }
    else
    return "ERROR"

};

// Do not edit below this line
module.exports = sumAll;
