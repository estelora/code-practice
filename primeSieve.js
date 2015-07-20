//create an array with numbers 100.
var allNumbers = [];

for (var i = 1; i <= 100; i++) {
   allNumbers.push(i);
}
console.log(allNumbers);
var lengthArray = allNumbers.length;
console.log(lengthArray);

//prime number filter
function primeFilter(numbers) {

  for (var i = 1; i < lengthArray; i++) {

  // if (i.value == 2 || i.value == 3 || i.value == 5 | i.value == 7) {
  //   return i;
  // }
  // if == 2 || if == 3 || if == 5 || if == 7;
  //   return i;
  // if divisible by 2;
  // if divisible by 3;
  // if divisible by 5;
  // if divisible by 7;
  // else return i;

  }
 
  // var sieved = [];
}

var primeSieve = allNumbers.filter(primeFilter);
console.log(sieved);
