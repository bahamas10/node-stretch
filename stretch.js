module.exports = stretch;

function stretch(arr, size) {
  var arrlen = arr.length;
  var ret = [];
  for (var i = 0; i < arrlen; i += arrlen / size) {
    // we have to some stupid bullshit here to deal with the situation where the
    // step is .333; it will end doing something dumb like:
    // 0.33, 0.66, 1, 1.33, 1.66, 1.99, 2.33, etc. so let's get dirty
    if ((i - Math.floor(i)) > 0.999)
      i = Math.ceil(i);
    ret.push(arr[Math.floor(i)]);
  }
  return ret;
}
