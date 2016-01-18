function arraySum(array) {
  var sum = array.reduce(function(previous, current) {
    return previous + current;
  });
  var sumValue = Number(sum);
  return sumValue;
}
arraySum([1,2,3,4,5]);