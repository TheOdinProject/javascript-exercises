const snakeCase = function (string) {
  // wtf case
  string = string.replace(/\.\./g, " ");

  // this splits up camelcase IF there are no spaces in the word
  if (string.indexOf(" ") < 0) {
    string = string.replace(/([A-Z])/g, " $1");
  }

  return string
    .trim()
    .toLowerCase()
    .replace(/[,\?\.]/g, "")
    .replace(/\-/g, " ")
    .split(" ")
    .join("_");
};

module.exports = snakeCase;
