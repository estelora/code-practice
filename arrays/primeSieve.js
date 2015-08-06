//Composite numbers are NOT 2,3,5,7 and divisible by 2,3,5, 7 & 11. 
// skip 1.
//Filter out composite #'s
//Create array of remaining numbers

//create an array with numbers to a given range.
var allNumbers = [];
var rangeEnd = 100;

for (var i = 1; i <= rangeEnd; i++) {
   allNumbers.push(i);
}
var lengthArray = allNumbers.length;

//prime number filter
function primeFilter(numbers) {
  primes = [];
  for (var i = 2; i < lengthArray; i++) {

    if (i === 2 || i === 3 || i === 5 || i === 7 || i === 11) {
      primes.push(i);
    } else if ((i % 11 !== 0) && (i % 7 !== 0) && (i % 5 !== 0) && (i % 3 !== 0) && (i % 2 !== 0)) {
      primes.push(i);
    }

  }
  console.log(primes);
}


var primeSieve = primeFilter(allNumbers);


//Solution with counting by 2, starting at 3.

var allNumbers = [];
var rangeEnd = 100;

for (var i = 1; i <= rangeEnd; i++) {
   allNumbers.push(i);
}

var lengthArray = allNumbers.length;

function primeFilter(numbers) {
  primes = [];
  for (var i = 3; i < lengthArray; i+= 2) {

    if (i === 3 || i === 5 || i === 7 || i === 11) {
      primes.push(i);
    } else if ((i % 11 !== 0) && (i % 7 !== 0) && (i % 5 !== 0) && (i % 3 !== 0) && (i % 2 !== 0)) {
      primes.push(i);
    }

  }
  console.log(primes);
}

var primeSieve = primeFilter(allNumbers);


