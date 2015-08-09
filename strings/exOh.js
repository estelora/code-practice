//checks to see if the number of 'x' and 'o' characters in a string are the same

function exOh(string) {
  var splitString = string.split('');
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < splitString.length; i++) {
        if(splitString[i] === 'x') {
          countX++;
        } else if (splitString[i] === 'o') {
          countO++;
        }
  }
  return countX === countO;     
};