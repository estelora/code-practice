// Determine if an array of numbers follows a
// geometric (return 'Geometric')
// or arithmetic pattern (return 'Arithmetic')
// both (return 'both')
// or neither (return -1)
// Geometric pattern =  a given number is divisible by the previous number
// Arithmetic pattern = where each number element increases by a constant amount. 

function arithGeo(array) {

  //array cannot be empty
  if(array == null || !Array.isArray(array)){
    return "error";
  }

  var length = array.length;   
    //if length is 0, neither is true
    if(length === 0){
      return "neither";
    }
    // if length 1, both are true
    if(length === 1){
      return "both";
    }

  //arithmetic
  var difference = array[1] - array[0];
  //geometric
  var ratio = array[1] / array[0];
  //count variables
  var countArithmetic = 0;
  var countGeometric = 0;

  //determine if it's a geo or arith pattern by comparing #'s
  for (var i = 1; i < array.length; i++ ) {
    if((array[i] - array[i-1]) === difference){
      countArithmetic++;
    }
    if((array[i] / array[i-1]) === ratio){
      countGeometric++;
    }
  }

  //check counts to compare
  //return 'Arithmetic', 'Geometric', 'both', or -1 (neither)
  if(countArithmetic === length-1) {
    return 'Arithmetic';
  } 
  //geometric
  else if(countGeometric === length-1) {
    return 'Geometric';
  }
  //both
  else if((countArithmetic === length-1) && (countGeometric === length-1)) {
    return 'both';
  //neither
  } else {
    return -1;
  }


}

