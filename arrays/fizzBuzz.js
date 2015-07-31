var rangeStart = 1;
var rangeEnd = 100;
var fizzBuzz = [];


for (i = rangeStart; i <= rangeEnd; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    fizzBuzz.push(' ' + '!*FizzBuzz*!');
  } else if (i % 5 == 0) {
    fizzBuzz.push(' ' + 'Buzz');
  } else if (i % 3 == 0) {
    fizzBuzz.push(' ' + 'Fizz');
  } else {
    fizzBuzz.push(' ' + i);
  }
}

console.log('fizzBuzz:' + '[ ' + fizzBuzz + ' ];');
console.log('Test Cases:');
console.log(fizzBuzz[0] + ' = 1 ?');
console.log(fizzBuzz[93] + ' = 94 ?');
console.log(fizzBuzz[97] + '= 98 ?');
console.log(fizzBuzz[2] + ' = Fizz ?');
console.log(fizzBuzz[9] + ' = Buzz ?');
console.log(fizzBuzz[14]+  '= !*FizzBuzz*! ');

function fizzBuzz(rangeStart, rangeEnd) {

  var fizzBuzz = [];

  for (i = rangeStart; i <= rangeEnd; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzz.push(' ' + '!*FizzBuzz*!');
    } else if (i % 5 == 0) {
      fizzBuzz.push(' ' + 'Buzz');
    } else if (i % 3 == 0) {
      fizzBuzz.push(' ' + 'Fizz');
    } else {
      fizzBuzz.push(' ' + i);
    }
  }
  return fizzBuzz;
}

fizzBuzz(1, 100);
console.log(fizzBuzz[rangeEnd] + ' undefined ?');
console.log(fizzBuzz[0] + ' = 1 ?');
console.log(fizzBuzz[93] + ' = 94 ?');
console.log(fizzBuzz[97] + '= 98 ?');
console.log(fizzBuzz[2] + ' = Fizz ?');
console.log(fizzBuzz[9] + ' = Buzz ?');
console.log(fizzBuzz[14]+  '= !*FizzBuzz*! 