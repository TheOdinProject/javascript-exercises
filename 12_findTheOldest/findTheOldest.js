const findTheOldest = function (birth, death) {
  let longestLife = 0;
  let oldestIndex = 0;

  for (let i = 0; i < birth.length; i++) {
    let lifespan = death[i] - birth[i];
    if (lifespan > longestLife) {
      longestLife = lifespan;
      oldestIndex = i;
    }
  }
  return { birth: birth[oldestIndex], death: death[oldestIndex] };
};

// Do not edit below this line
module.exports = findTheOldest;
