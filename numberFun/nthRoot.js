//write a function that finds the nth root of a given number


function nthRoot(number, root) {
  var result = Math.pow(number, 1/root);
  return result;
};

nthRoot(4, 2);
//return 2, square root of 4 is 2

nthRoot(8, 3);
//return 2, cube root of 8 is 2