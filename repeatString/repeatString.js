const repeatString = function(str,n) {
   let ans = ''; 
   
   if(n<0)
   return 'ERROR';
   else
   {
    for(let i=0;i<n;i++)
    ans+=str;

    return ans;
   }
  
}

module.exports = repeatString
