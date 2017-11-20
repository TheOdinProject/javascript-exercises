var removeFromArray = function(array) {
  elementsToRemove = [...arguments]
  elementsToRemove.splice(0,1)
  elementsToRemove.forEach(element => {
    let index = array.indexOf(element)
    if (index > -1) {
      array.splice(index, 1)
    }
  })
  return array
}

module.exports = removeFromArray
