const hanoi = function (
  n,
  fromTower = 0,
  storageTower = 1,
  toTower = 2,
  steps = [],
) {
  if (n <= 0) {
    return steps;
  }

  hanoi(n - 1, fromTower, toTower, storageTower, steps);

  steps.push(
    `Move disc ${n} from tower ${fromTower + 1} to tower ${toTower + 1}`,
  );

  hanoi(n - 1, storageTower, fromTower, toTower, steps);

  return steps;
};

// Do not edit below this line
module.exports = hanoi;
