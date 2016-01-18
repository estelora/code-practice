// Test variables

var shipMatch = /ship/;
var shipString = 'ship';
var boatString= 'boat';
var storyString = 'Are you coming to the party?';
var countries = 'Canada, Japan, New Zealand, Iran';
var countriesRegEx = /an/
var storyRegEx = /party/;

//Simple test Function

function testInput(regEx, str){
  if (regEx.test(str)) {
    return true;
  } else {
    return false;
  }
}


testInput(shipMatch, shipString);
testInput(shipMatch, boatString);
testInput(storyRegEx, storyString);
testInput(countriesRegEx, countries);

//includes console.log

function testInputLog(regEx, str){
  var message;
  if (regEx.test(str)) {
    message = ' contains ';
  } else {
    message = ' does not contain ';
  }
  console.log(str + message + regEx.source);
}

testInputLog(shipMatch, shipString);
testInputLog(shipMatch, boatString);
testInputLog(storyRegEx, storyString);
testInputLog(countriesRegEx, countries);
