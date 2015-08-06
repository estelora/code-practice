function sumForEach(numbers) {

  var array = [];
  for (var i = 1; i <= numbers; i++) {
   array.push(i);
  }

  sum = null;

  for (var i = 0; i < array.length; i++) {
   sum += array[i];
  }

  return sum;
}