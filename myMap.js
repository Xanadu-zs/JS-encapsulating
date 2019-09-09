Array.prototypr.myMap = function (fn, context) {
  var arr = Array.prototype.slice.call(this)
  var mappedArr = []
  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(fn.call(context, arr[i], i, this))
  }
  return mappedArr;
}