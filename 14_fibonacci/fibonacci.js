const fibonacci = function(param) {

    if(param < 0){
        return "OOPS";
    }

    if (!Number.isInteger(param)){
        param = Number(param);
    }

    if(param === 0){
        return 0;
    }

    if(param === 1){
        return 1;
    }

    let prev = 0;
    let curr = 1;

    for(let i = 2; i <= param; i++ ){
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
    

};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci("0");
fibonacci("1");
fibonacci("2");
fibonacci("8");
// Do not edit below this line
module.exports = fibonacci;
