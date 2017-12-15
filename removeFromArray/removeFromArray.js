var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}

module.exports = removeFromArray
