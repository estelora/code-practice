function range(start, end) {
  var num = [];
  for (i = start; i <= end; i++) {
    num.push(i);
  }
  console.log(num);
  return num;
}

range(1, 10);

function sumOf(array){
  var sum = 0;
  for( i = 0; i < array.length; i++) {
    //each iteration, add the value at i index to sum
    sum += array[i];
  }
  return sum;
}

console.log(sumOf(range(1, 10)));