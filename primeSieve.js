//Composite < 100 are NOT 2,3,5,7 and divisible by 2,3,5, & 7. 
// skip 1.
//Filter out composite #'s

//create an array with numbers 100.
var allNumbers = [];

for (var i = 1; i <= 100; i++) {
   allNumbers.push(i);
}
var lengthArray = allNumbers.length;

//prime number filter
function primeFilter(numbers) {
  primes = [];
  for (var i = 2; i < lengthArray; i++) {

    if (i === 2 || i === 3 || i === 5 || i === 7) {
      primes.push(i);
    } else if ((i % 7 !== 0) && (i % 5 !== 0) && (i % 3 !== 0) && (i % 2 !== 0)) {
      primes.push(i);
    }

  }
  console.log(primes);
}

var primeSieve = primeFilter(allNumbers);

