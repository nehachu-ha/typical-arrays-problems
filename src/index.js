
exports.min = function min (array) {
    return  array && array.length ? array.sort((a, b) => a - b )[0] : 0 ;
}

exports.max = function max (array) {
    return array && array.length ? array.sort((a, b) => b - a )[0] : 0 ;;
}

exports.avg = function avg (array) {
  return array && array.length ? array.reduce((acc, c) => acc + c, 0) / array.length : 0;
}
