var sumAll = function(a, b) {
  if (a > b) {
    let temp = a
    a = b
    b = temp
  }
  if (
    a < 0 || b < 0 ||
    typeof a != 'number' || typeof b != 'number'
  ) {
    return 'ERROR'
  }
  let sum = 0
  for(let i = a; i < b + 1; i++) {
    sum += i
  }
  return sum
}

module.exports = sumAll
