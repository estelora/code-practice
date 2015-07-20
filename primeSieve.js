//Composite < 100 are NOT 2,3,5,7 and divisible by 2,3,5, & 7. 
// 1 is composite
//Filter out composite #'s

//create an array with numbers 100.
var allNumbers = [];

for (var i = 1; i <= 100; i++) {
   allNumbers.push(i);
}
var lengthArray = allNumbers.length;

//prime number filter
function primeFilter(numbers) {
  
  for (var i = 1; i < lengthArray; i++) {
    
    if (i === 1) {
      console.log(i + ' is composite');
    } else if (i % 2 === 0) {
      console.log(i + ' is composite');
    } else if (i % 3 === 0) {
      console.log(i + ' is composite');
    } else if (i % 5 === 0) {
      console.log(i + ' is composite');
    } else if (i % 7 === 0) {
      console.log(i + ' is composite');
    } else if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i + ' is prime');
    } else if ((i % 7 !== 0) && (i % 5 !== 0) && (i % 3 !== 0) && (i % 2 !== 0)) {
      console.log(i + ' is prime');
    }
    //push prime numbers to a new array
    //push composite numbers to a new array (maybe)
  }
}

var primeSieve = primeFilter(allNumbers);

