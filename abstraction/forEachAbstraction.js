//for each element, log to console

var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

//logEach so it's cleaner

function logEach(array) {
  for (i = 0; i < array.logEach; i++) {
    console.log(array[i]);
  }
}

logEach(array);

// now has a value and action parameter with forEach

function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

forEach(array, console.log);

