//letterCapitalize(str) take the str parameter 
// capitalize the first letter of each word
//Words will be separated by only one space. 
function LetterCapitalize(str) { 
  var words = str.split(' ');
  for(var i = 0; i >= words.length; i++){
    console.log(words[i].toUpperCase());
  }  
  return words;   
};

letterCapitalize('my words');


//Capitalize the first only
function letterCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

letterCapitalize('my words');

//Capitalize each, courtesy regEx
function LetterCapitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

letterCapitalize('my words');