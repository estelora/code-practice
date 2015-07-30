function isPalindrome(string) {
  
  var oppose = string.split('').reverse().join('');
  
  //make it work with all cases
  if ( string.toLowerCase() === o.toLowerCase() ) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('hello');
isPalindrome('racecar');
isPalindrome('avid diva');
isPalindrome('is this a palindrome?');
