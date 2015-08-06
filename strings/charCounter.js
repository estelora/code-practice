//counts # of incidences of a char in a given str
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
