//counts the number of occurences of a given character in a string

function charCounter(string, char) {
  var count = 0;
  
  for (var i = 0; i < string.length; i++){
    if (string.charAt(i) == char)
      count += 1;
  }
  return count;
}

charCounter('my Company', 'c'); //returns 0 because of case sensitivity

charCounter('lydia', 'l');

charCounter('me', 'i');


//case-insensitive version

function charCounter(string, char) {
  
  var count = 0;
  var compString = string.toLowerCase();
  var compChar = char.toLowerCase();

  for (var i = 0; i < string.length; i++){
    if (compString.charAt(i) == compChar)
      count += 1;
  }
  return count;
}

charCounter('my Company', 'c');

charCounter('lydia', 'l');

charCounter('me', 'i');
