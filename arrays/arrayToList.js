function arrayToList(array) {
 
  //set string variable list to null
  var list = null;
  
  //for loop to create the new list
  //start at end, end at the beginning.
  for (var i = array.length - 1; i >= 0; i--){
    
    //add properties to list, value is the value at the given index
    // rest: rest of list
    list = {value: array[i], rest: list};
  }
    return list;
}

// console.log(arrayToList([10, 20]));
// console.log(arrayToList([10, 20, 30]));

function listToArray(list) {
  //empty array
  var array = [];
  
  //node is the thing in the list
  for (var node = list; node; node = node.rest){
    //push node.list and node.rest to a new list
    array.push(node.value);  
  }
  return array;
}

// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(listToArray(arrayToList([10, 20])));


//prepends value to list
function prepend(value, list) {
  return {value: value, rest: list};
}

// console.log(prepend(10, prepend(20, null)));

//returns element at its given position in the list
function nth(list, n) {
  
  //if it's not list, undefined
  if (!list) {
    return undefined;
  
  //if n = 0, just get list.value
  } else if (n == 0){
    return list.value;

  //else get length from list.rest and subtract one
  } else {
    return nth(list.rest, n - 1);
  }
}
// console.log(nth(arrayToList([10, 20, 30]), 1));
