/* Function takes string as a parameter
and returns the word with the greatest # of rpt letters.
If there are no words with repeating letters return -1.
Words are separated by spaces
*/

function letterCount1(string) {
  
  //initialize object for holding string
  var stringObject = {};
  //count variable
  var count = 0;
  var finalWord;
  //split by spaces
  string = string.split(' ');

  //create stringObject with for loop
  for(var i = 0; i < string.length; i++) {
    stringObject[string[i]] = stringObject[string[i]] || 0;
  }

  //counting function, call in for loop
  function countLetters(strings) {
    strings = strings.split('');
    //initialize object for counting # of letters
    var countObject = {};
    for(var i = 0; i < strings.length; i++) {
      countObject[strings[i]] = countObject[strings[i]] || 0;
      countObject[strings[i]]++;
    }
    return countObject;
  }

  for(var string in stringObject){
    stringObject[string] = countLetters(string);
    var highestChar = stringObject[string];
    for(var values in highestChar) {
      if(highestChar[values] > count) {
        count = highestChar[values];
        finalWord = string;
      }
    }
  }
  if(count !== 1) {
    return finalWord;
  }
  return -1;
}