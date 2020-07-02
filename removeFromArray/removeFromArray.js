const removeFromArray = function(...parameters) {
  const thisArray = parameters[0];
  const newArray = [];
  
  thisArray.forEach((e) => {
    if (!parameters.includes(e)){
      newArray.push(e);
    }
  });
  return newArray;
};

const removeFromArray = function(...arg){
  const array = arg[0];
  return array.filter(val => !arg.includes(val));
}

module.exports = removeFromArray
