//checks to see if a number is prime
// if true, return the prime number,
// if false, return 'false'

function primeCheck(num) { 
  if ( num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 || num % 11 === 0){
      return false;
    } else {
      return num;
    }     
}
  