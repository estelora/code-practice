/* take both parameters being passed, divide num1 by num2,
and return the result as a string with properly formatted commas.
If an answer is only 3 digits long, 
return the number with no commas (ie. 2 / 3 should output "1").
eg. if num1 is 123456789 and num2 is 10000 the output should be "12,345"
*/

function divisionStringified(num1, num2) {
 var quotient = (num1 / num2).toString();
 if (quotient.length < 3) {
  return quotient;
 } else {
  //change decimal to comma with regex
  return quotient;
 }
}

divisionStringified(1000, 3);