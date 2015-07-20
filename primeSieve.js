//create an array with numbers 100.
//Not prime numbers < 100 are NOT 2,3,5,7 and divisible by 2,3,5, & 7. 
// 1 is not prime
var allNumbers = [];
var sieved = [];

for (var i = 1; i <= 100; i++) {
   allNumbers.push(i);
}
var lengthArray = allNumbers.length;

//prime number filter
function primeFilter(numbers) {
  var prime;
  for (var i = 1; i < lengthArray; i++) {
    
    if (i === 1) {
      console.log(i + ' is not prime');
    } else if (i % 2 === 0) {
      console.log(i + ' is not prime');
    } else if (i % 3 === 0) {
      console.log(i + ' is not prime');
    } else if (i % 5 === 0) {
      console.log(i + ' is not prime');
    } else if (i % 7 === 0) {
      console.log(i + ' is not prime');
    } else if (i === 2 || i === 3 || i === 5 || i === 7) {
      console.log(i + ' is prime');
    } else if ((i % 7 !== 0) && (i % 5 !== 0) && (i % 3 !== 0) && (i % 2 !== 0)) {
      console.log(i + ' is prime');
    }
    
  }
}

var primeSieve = primeFilter(allNumbers);

