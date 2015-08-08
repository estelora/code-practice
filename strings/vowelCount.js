//create a function that counts the number of vowels in a string
//do not include 'y' as a vowel
//case-insensitive solution

function vowelCount(string) {
  
  var vowels = 0;
  var compString = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (compString.charAt(i).includes('a')){
      count += 1;
    } else if (compString.charAt(i).includes('e')){
      count += 1;
    } else if (compString.charAt(i).includes('i')) {
      count += 1;
    } else if (compString.charAt(i).includes('o')) {
      count += 1;
    } else if (compString.charAt(i).includes('u')) {
      count += 1;
    }
  }
  return vowels;
}

vowelCount('mine');