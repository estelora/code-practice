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
  console.log(reverseArray);
}

 var test = [1, 2, 3, 4, 5, 6];
arrayReverse(test);


//modifies without arr.push()
//need a chart for this one
// function reverseArrayInPlace(array) {

//   for (var i = 0; i < Math.floor(array.length / 2); i++) {
//     var old = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = old;
//   }
//   return array;
// }

// var test = [1, 2, 3, 4, 5, 6];
// reverseArrayInPlace(test);

