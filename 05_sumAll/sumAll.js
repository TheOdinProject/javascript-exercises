const sumAll = (n1,n2)=>{
    return (typeof(n1 && n2) === 'number'? (n1 < n2 ? firstNumberGreater(n1,n2):lastNumberGreater(n1,n2)) : 'ERROR')
};

const firstNumberGreater = (first_num,last_num)=>{
    let i;
    let new_num;
    Math.sign(first_num) === 1 && Math.sign(last_num) === 1?(i = first_num - 1 , new_num = first_num -1):(i = first_num - 1, new_num = 0);
    while(i < last_num){
        i++;
        new_num += i;
    }
    return new_num;
};
const lastNumberGreater = (first_num,last_num)=>{
    let i;
    let new_num;
    Math.sign(first_num) === 1 && Math.sign(last_num) === 1?(i = last_num - 1 , new_num = last_num -1):(i = last_num - 1, new_num = 0);
    while(i < first_num){
        i++;
        new_num += i;
    }
    return new_num;
};

// Do not edit below this line
module.exports = sumAll;
