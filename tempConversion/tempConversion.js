const ftoc = function(value) {
    let c=(5/9)*(value-32);
    c= Number (c.toFixed(1));
    return c;
}

const ctof = function(value) {
    let f=(9/5)*value + 32;
    f=Number (f.toFixed(1));
    return f;
}

module.exports = {
  ftoc,
  ctof
}
