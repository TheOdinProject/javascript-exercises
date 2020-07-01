const repeatString = function(term , repeat) {
  if( term < 0) return 'ERROR';
  let str = 0
  for( let i = 0 ; i < repeat ; i++){
    str += term
  }
  return str
}

module.exports = repeatString
