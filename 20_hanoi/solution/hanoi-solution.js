const hanoi = function (
  n,
  fromTowerIndex = 0,
  storageTowerIndex = 1,
  toTowerIndex = 2,
  towers = [
    Array(n)
      .fill() // Array function creates an array with "empty" slots which map does not iterate over
      .map((_, i) => n - i),
    [],
    [],
  ],
  steps = [towers.map((tower) => [...tower])],
) {
  if (n === 0) return steps;

  hanoi(n - 1, fromTowerIndex, toTowerIndex, storageTowerIndex, towers, steps);

  towers[toTowerIndex].push(towers[fromTowerIndex].pop());

  steps.push(towers.map((tower) => [...tower]));

  hanoi(n - 1, storageTowerIndex, fromTowerIndex, toTowerIndex, towers, steps);

  return steps;
};

// Do not edit below this line
module.exports = hanoi;
