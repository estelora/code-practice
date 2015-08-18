function arrayReverse(array) {
  
  //start at the end, subtract 1
  var start = array.length - 1;
  var end = 0;

  //initialize empty array
  var reverseArray= [];

  //for loop to push new array
  for (var i = start; i >= end; i--) {
      reverseArray.push(array[i]);
  }

  return reverseArray;
}

// var test = [1, 2, 3, 4, 5, 6];
// arrayReverse(test);

