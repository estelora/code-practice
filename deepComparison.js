//deep comparison to see if values of properties within an object are the same

function deepComparsion(value, anotherValue) {
  //if obj are the same. return true
  if (value === anotherValue) return true;
  
  //if there is no value or it's not an object, return false
  if (value == null || typeof value != "object" ||
      anotherValue == null || typeof anotherValue != "object"){

    return false;
  }
  
  //count the number of properties in the values
  var propsInValue = 0; 
  var propsInAnotherValue = 0;

  //count properties in value
  for (var prop in value) {
    propsInValue += 1;
  }

  //count properties in anotherValue
  for (var prop in anotherValue) {
    propsInAnotherValue += 1;

  //compare the number of properties, and then do deep deepEqual for those properties in the values
  //recusion here
    if (!(prop in anotherValue) || !deepEqual(value[prop], anotherValue[prop]))
      return false;
  }

  //reset the property counts to 0 for recursion
  return propsInValue == propsInAnotherValue;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepComparsion(obj, obj));
console.log(deepComparsion(obj, {here: 1, object: 2}));
console.log(deepComparsion(obj, {here: {is: "an"}, object: 2}));


